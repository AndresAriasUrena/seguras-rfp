// src/components/sections/TechnologySection.tsx
'use client';

import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';

const TechnologySection = () => {
  const { t } = useLanguage();
  
  const technologies = [
    {
      category: "Frontend",
      title: "Next.js 14 (React)",
      description: "Performance Superior",
      features: [
        "Velocidad de carga 3x superior vs WordPress tradicional",
        "SEO optimizado automáticamente (mejor ranking Google)",
        "Core Web Vitals mejorados",
        "Mobile-first nativo (perfecto para mercado CR)"
      ],
      icon: "⚡",
      accentColor: "#10b981"
    },
    {
      category: "Backend",
      title: "WordPress + WooCommerce",
      description: "Headless CMS",
      features: [
        "Panel de administración familiar y potente",
        "APIs robustas (REST + GraphQL)",
        "Ecosistema maduro de plugins",
        "Sin lock-in propietario"
      ],
      icon: "🛠️",
      accentColor: "#8b5cf6"
    },
    {
      category: "Infraestructura",
      title: "Arquitectura Moderna",
      description: "Escalable y Segura",
      features: [
        "Vercel hosting con CDN global",
        "SSL automático y seguridad",
        "Backups automáticos diarios",
        "Escalamiento automático"
      ],
      icon: "🏗️",
      accentColor: "#06b6d4"
    }
  ];

  return (
    <section className="py-24 px-6 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
            Arquitectura Headless de Vanguardia
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Tecnología moderna que garantiza velocidad, escalabilidad y una experiencia de usuario excepcional
          </p>
        </div>

        {/* Technology Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="relative bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all duration-300 group"
            >
              {/* Category Badge */}
              <div 
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-6"
                style={{ 
                  backgroundColor: `${tech.accentColor}20`,
                  color: tech.accentColor 
                }}
              >
                {tech.category}
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold mb-2 text-white">
                {tech.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-400 mb-6">
                {tech.description}
              </p>
              
              {/* Features List */}
              <ul className="space-y-3">
                {tech.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg 
                      className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0" 
                      fill={tech.accentColor} 
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-8 text-center">Beneficios Estratégicos</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Actualizaciones de diseño sin afectar backend",
              "Escalabilidad preparada para crecimiento internacional",
              "Tecnología moderna a presupuesto competitivo",
              "Experiencia de usuario fluida y profesional"
            ].map((benefit, index) => (
              <div key={index} className="flex items-start">
                <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
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