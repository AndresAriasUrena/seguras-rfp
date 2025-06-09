'use client';

import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';

const TechnologySection = () => {
  const { t } = useLanguage();
  const techs = t.technology.stack;
  const benefits = t.technology.benefits;

  return (
    <section id="technology" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
            {t.technology.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.technology.subtitle}
          </p>
        </div>

        {/* Technology Stack - Now shows all 3 sections */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {techs.map((tech, index) => (
            <div
              key={index}
              className="relative bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group"
            >
              <div
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-6"
                style={{
                  backgroundColor: `${tech.accentColor}20`,
                  color: tech.accentColor
                }}
              >
                {tech.category}
              </div>

              <h3 className="text-2xl font-bold mb-2 text-gray-900">{tech.title}</h3>
              <p className="text-gray-500 mb-6">{tech.description}</p>

              <ul className="space-y-3">
                {tech.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg
                      className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0"
                      fill={tech.accentColor}
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Strategic Benefits */}
        <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-8 text-center">{t.technology.benefitsTitle}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm leading-relaxed">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;