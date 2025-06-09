// src/components/sections/TimelineSection.tsx
import React, { useState } from 'react';

const TimelineSection = () => {
  const [activeWeek, setActiveWeek] = useState(0);

  const timelineData = [
    {
      weeks: "1-2",
      title: "Landing Page Inicial",
      description: "Landing funcional en producción",
      tasks: [
        "Diseño y maquetación responsive",
        "Desarrollo frontend",
        "Integración WhatsApp Business",
        "Testing y optimización",
        "Deploy a producción"
      ],
      milestone: true,
      color: "from-green-500 to-emerald-500"
    },
    {
      weeks: "3",
      title: "Kickoff Desarrollo Completo",
      description: "Setup arquitectura headless",
      tasks: [
        "Configuración entorno desarrollo",
        "Setup Next.js + WordPress headless",
        "Definición final de scope",
        "Preparación APIs"
      ],
      milestone: false,
      color: "from-blue-500 to-cyan-500"
    },
    {
      weeks: "4-6",
      title: "Core Development",
      description: "Desarrollo principal",
      tasks: [
        "Frontend Next.js completo",
        "Configuración WooCommerce",
        "Desarrollo APIs custom",
        "Sistema de autenticación",
        "Páginas corporativas"
      ],
      milestone: false,
      color: "from-purple-500 to-pink-500"
    },
    {
      weeks: "7-9",
      title: "Integraciones y E-commerce",
      description: "Funcionalidades avanzadas",
      tasks: [
        "Métodos de pago CR (SINPE, tarjetas)",
        "Integración QuPOS sync",
        "Setup CRM (Mailchimp/HubSpot)",
        "Catálogo de productos",
        "Sistema de inventario"
      ],
      milestone: false,
      color: "from-orange-500 to-red-500"
    },
    {
      weeks: "10-12",
      title: "Go-live y Capacitación",
      description: "Lanzamiento final",
      tasks: [
        "Deploy a producción",
        "Pruebas finales completas",
        "Capacitación equipo Seguras",
        "Documentación y manuales",
        "Optimización performance"
      ],
      milestone: true,
      color: "from-green-500 to-teal-500"
    },
    {
      weeks: "13-14",
      title: "Soporte Post-lanzamiento",
      description: "30 días de soporte incluido",
      tasks: [
        "Ajustes y optimizaciones",
        "Resolución de bugs",
        "Soporte técnico completo",
        "Capacitación adicional",
        "Monitoreo de performance"
      ],
      milestone: false,
      color: "from-indigo-500 to-blue-500"
    }
  ];

  return (
    <section className="py-20 px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Cronograma del Proyecto</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            14 semanas de desarrollo ágil y entregas incrementales
          </p>
        </div>

        {/* Timeline Progress Bar */}
        <div className="mb-12">
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700 transform -translate-y-1/2"></div>
            <div className="relative flex justify-between">
              {timelineData.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setActiveWeek(index)}
                  className={`relative z-10 w-12 h-12 rounded-full border-4 transition-all duration-300 ${
                    activeWeek === index
                      ? 'bg-gradient-to-r ' + item.color + ' border-white scale-125 shadow-lg'
                      : item.milestone
                      ? 'bg-green-500 border-green-200 hover:scale-110'
                      : 'bg-gray-300 border-gray-100 hover:scale-110'
                  }`}
                >
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-semibold whitespace-nowrap">
                    Sem {item.weeks}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Active Week Details */}
        <div className="mt-20">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500">
            <div className={`h-2 bg-gradient-to-r ${timelineData[activeWeek].color}`}></div>
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{timelineData[activeWeek].title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{timelineData[activeWeek].description}</p>
                </div>
                <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${timelineData[activeWeek].color} text-white font-semibold`}>
                  Semana {timelineData[activeWeek].weeks}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {timelineData[activeWeek].tasks.map((task, index) => (
                  <div key={index} className="flex items-start">
                    <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${timelineData[activeWeek].color} mr-3 mt-0.5 flex items-center justify-center`}>
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-200">{task}</span>
                  </div>
                ))}
              </div>
              
              {timelineData[activeWeek].milestone && (
                <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-600 dark:text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-green-700 dark:text-green-300 font-semibold">Hito Principal del Proyecto</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">2</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Semanas Landing</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">12</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Semanas Total</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">30</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Días Soporte</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">100%</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Compromiso</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;