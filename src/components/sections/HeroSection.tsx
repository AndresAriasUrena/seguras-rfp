// src/components/sections/HeroSection.tsx

'use client';

import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Download, Calendar, Zap, Globe } from 'lucide-react';
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
              <a 
                href="https://wa.me/50688888169?text=Hola! Me interesa recibir la propuesta completa en PDF para el proyecto de Seguras. ¿Podrían envíarmela?" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  icon={Download}
                >
                  {t.hero.cta.secondary}
                </Button>
              </a>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="text-3xl font-bold text-primary mb-1">
                  $12,000 USD
                </div>
                <div className="text-gray-600">{t.hero.budget}</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="text-3xl font-bold text-primary mb-1">
                  12 {t.timeline.weeks}
                </div>
                <div className="text-gray-600">{t.hero.delivery}</div>
              </div>
            </div>
          </motion.div>

          {/* Improved Visual element with better styling and alignment */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Main card - Dark theme like the PDF */}
              <motion.div 
                className="bg-gray-900 rounded-2xl p-8 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500 relative z-10"
                whileHover={{ scale: 1.02 }}
              >
                {/* Header section */}
                <div className="bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl p-6 mb-6 border border-primary/20">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-2xl">S</span>
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-2xl tracking-wide">SEGURAS</h3>
                      <p className="text-gray-400 text-sm font-medium">Digital Platform</p>
                    </div>
                  </div>
                  
                  {/* Status indicator */}
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-sm font-medium">MVP Ready</span>
                  </div>
                </div>
                
                {/* Feature cards */}
                <div className="space-y-4">
                  <div className="bg-gray-800 rounded-xl p-4 border border-gray-700 hover:border-primary/30 transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                        <Globe className="w-4 h-4 text-primary" />
                      </div>
                      <h4 className="text-white font-semibold">E-Commerce Store</h4>
                    </div>
                    <p className="text-gray-400 text-sm">WooCommerce + Next.js</p>
                  </div>
                  
                  <div className="bg-gray-800 rounded-xl p-4 border border-gray-700 hover:border-primary/30 transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                        <Zap className="w-4 h-4 text-primary" />
                      </div>
                      <h4 className="text-white font-semibold">Inventory Integration</h4>
                    </div>
                    <p className="text-gray-400 text-sm">QuPOS Sync</p>
                  </div>
                  
                  <div className="bg-gray-800 rounded-xl p-4 border border-gray-700 hover:border-primary/30 transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                      </div>
                      <h4 className="text-white font-semibold">CRM & Analytics</h4>
                    </div>
                    <p className="text-gray-400 text-sm">Data-driven insights</p>
                  </div>
                </div>

                {/* Bottom accent */}
                <div className="mt-6 pt-4 border-t border-gray-700">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Headless Architecture</span>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <div className="w-2 h-2 bg-primary/60 rounded-full"></div>
                      <div className="w-2 h-2 bg-primary/30 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating elements - Better positioned and styled */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-4 border border-gray-100 z-20"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="text-sm font-bold text-gray-900">2 Weeks</span>
                </div>
                <p className="text-xs text-gray-500 font-medium">Landing Page</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-4 border border-gray-100 z-20"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-bold text-gray-900">Mobile First</span>
                </div>
                <p className="text-xs text-gray-500 font-medium">Responsive Design</p>
              </motion.div>

              {/* Additional floating element */}
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                className="absolute top-1/2 -left-8 bg-primary rounded-full p-3 shadow-lg z-20"
              >
                <Zap className="w-4 h-4 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}