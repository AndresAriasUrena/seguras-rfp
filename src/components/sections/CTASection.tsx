// src/components/sections/CTASection.tsx

'use client';

import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/Button';
import { Phone, Download } from 'lucide-react';
import { motion } from 'framer-motion';

export function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-primary to-primary-dark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          {t.cta.title}
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-white/90 mb-10 max-w-2xl mx-auto"
        >
          {t.cta.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            variant="secondary"
            size="lg"
            icon={Phone}
            onClick={() => window.open('tel:+50688888169', '_self')}
            className="bg-white text-primary hover:bg-gray-100 min-w-[200px]"
          >
            {t.cta.primary}
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            icon={Download}
            className="border-white text-white hover:bg-white hover:text-primary min-w-[200px]"
          >
            {t.cta.secondary}
          </Button>
        </motion.div>

        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center text-white/80"
        >
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>+506 8888-8169</span>
          </div>
          <div className="hidden sm:block w-1 h-1 bg-white/50 rounded-full" />
          <div className="flex items-center gap-2">
            <span>hola@aurigital.com</span>
          </div>
          <div className="hidden sm:block w-1 h-1 bg-white/50 rounded-full" />
          <div className="flex items-center gap-2">
            <span>www.aurigital.com</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}