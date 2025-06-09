'use client';

import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/Button';
import { Phone, Download } from 'lucide-react';

const CTASection = () => {
  const { t } = useLanguage();
  const cta = t.cta;

  return (
    <section id="cta" className="py-24 bg-gradient-to-br from-primary/10 via-white to-primary/5">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {cta.title}
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            {cta.subtitle}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a href="mailto:hola@aurigital.com">
            <Button 
              variant="primary" 
              size="lg"
              icon={Phone}
            >
              {cta.primary}
            </Button>
          </a>
          <Button 
            variant="outline" 
            size="lg"
            icon={Download}
          >
            {cta.secondary}
          </Button>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-bold text-lg mb-2">Llamada Directa</h3>
            <p className="text-gray-600 mb-4">Hablemos sobre tu proyecto</p>
            <a href="tel:+50688888169" className="text-primary font-semibold hover:underline">
              +506 8888-8169
            </a>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4">
              <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2">Email</h3>
            <p className="text-gray-600 mb-4">Escríbenos tus dudas</p>
            <a href="mailto:hola@aurigital.com" className="text-primary font-semibold hover:underline">
              hola@aurigital.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;