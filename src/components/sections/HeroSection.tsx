// src/components/sections/HeroSection.tsx

'use client';

import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Download, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-orange-50 -z-10" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium">{t.hero.badge}</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
              {t.hero.title}
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button
                variant="primary"
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
                onClick={() => document.getElementById('project')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t.hero.cta.primary}
              </Button>
              <Button
                variant="outline"
                size="lg"
                icon={Download}
              >
                {t.hero.cta.secondary}
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-primary mb-1">
                  $12,000 USD
                </div>
                <div className="text-gray-600">{t.hero.budget}</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-primary mb-1">
                  12 {t.timeline.weeks}
                </div>
                <div className="text-gray-600">{t.hero.delivery}</div>
              </div>
            </div>
          </motion.div>

          {/* Visual element */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main card */}
              <div className="bg-dark rounded-2xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="bg-primary/20 rounded-lg p-6 mb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-xl">S</span>
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-xl">SEGURAS</h3>
                      <p className="text-gray-400 text-sm">Digital Platform</p>
                    </div>
                  </div>
                </div>
                
                {/* Feature cards */}
                <div className="space-y-3">
                  <div className="bg-dark-lighter rounded-lg p-4">
                    <h4 className="text-white font-medium mb-1">E-Commerce Store</h4>
                    <p className="text-gray-400 text-sm">WooCommerce + Next.js</p>
                  </div>
                  <div className="bg-dark-lighter rounded-lg p-4">
                    <h4 className="text-white font-medium mb-1">Inventory Integration</h4>
                    <p className="text-gray-400 text-sm">QuPOS Sync</p>
                  </div>
                  <div className="bg-dark-lighter rounded-lg p-4">
                    <h4 className="text-white font-medium mb-1">CRM & Analytics</h4>
                    <p className="text-gray-400 text-sm">Data-driven insights</p>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-8 -right-8 bg-white rounded-xl shadow-lg p-4"
              >
                <Calendar className="w-6 h-6 text-primary mb-2" />
                <p className="text-sm font-medium">2 Weeks</p>
                <p className="text-xs text-gray-500">Landing Page</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-lg p-4"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-sm font-medium">Mobile First</span>
                </div>
                <p className="text-xs text-gray-500">Responsive Design</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}