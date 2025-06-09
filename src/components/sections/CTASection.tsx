'use client';

import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/Button';

const CTASection = () => {
  const { t } = useLanguage();
  const cta = t.cta;

  return (
    <section id="cta" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          {cta.title}
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          {cta.subtitle}
        </p>
        <a href="mailto:hola@aurigital.com">
            <Button variant="primary">{cta.button}</Button>
        </a>
      </div>
    </section>
  );
};

export default CTASection;
