// src/components/sections/PricingSection.tsx
import React, { useState } from 'react';

const PricingSection = () => {
  const [selectedOption, setSelectedOption] = useState<'single' | 'monthly'>('single');

  const pricingOptions = {
    single: {
      title: "Pago Único",
      price: "$12,000",
      description: "Un solo pago al firmar contrato",
      features: [
        "Desarrollo completo del MVP",
        "Landing page en 2 semanas",
        "Plataforma completa en 12 semanas",
        "30 días de soporte post-lanzamiento",
        "Capacitación incluida",
        "Código fuente completo"
      ],
      popular: true
    },
    monthly: {
      title: "Cuotas Mensuales",
      price: "$13,500",
      description: "3 pagos de $4,500 USD c/u",
      features: [
        "Desarrollo completo del MVP",
        "Landing page en 2 semanas", 
        "Plataforma completa en 12 semanas",
        "30 días de soporte post-lanzamiento",
        "Capacitación incluida",
        "Código fuente completo"
      ],
      popular: false
    }
  };

  const optionalServices = [
    {
      name: "Middleware/API QuPOS-WooCommerce",
      price: "$2,400 – $3,000",
      time: "2–3 semanas",
      description: "Automatiza sincronización de inventario"
    },
    {
      name: "Integración Zapier/QuickBooks",
      price: "$1,000 – $1,500",
      time: "1 semana",
      description: "Automatizar flujo contable y reporting"
    },
    {
      name: "Sistema solicitud bodega–tienda",
      price: "$1,500 – $2,000",
      time: "1–2 semanas",
      description: "Panel admin + historial de solicitudes"
    },
    {
      name: "Videos de capacitación",
      price: "$600 – $900",
      time: "3–5 días",
      description: "Grabaciones editadas con voice-over"
    },
    {
      name: "Setup avanzado Bitcoin Jungle",
      price: "$400 – $600",
      time: "3–5 días",
      description: "Configuración para ecosistema Uvita"
    }
  ];

  return (
    <section className="py-20 px-8 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Propuesta Económica</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Inversión transparente para tu transformación digital
          </p>
        </div>

        {/* Pricing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-full p-1 flex">
            <button
              onClick={() => setSelectedOption('single')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedOption === 'single'
                  ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-lg'
                  : 'text-gray-600 dark:text-gray-300'
              }`}
            >
              Pago Único
            </button>
            <button
              onClick={() => setSelectedOption('monthly')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedOption === 'monthly'
                  ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-lg'
                  : 'text-gray-600 dark:text-gray-300'
              }`}
            >
              Cuotas Mensuales
            </button>
          </div>
        </div>

        {/* Main Pricing Card */}
        <div className="max-w-lg mx-auto mb-16">
          <div className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 ${
            pricingOptions[selectedOption].popular ? 'ring-4 ring-green-500 ring-opacity-50' : ''
          }`}>
            {pricingOptions[selectedOption].popular && (
              <div className="absolute top-0 right-0 bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-1 rounded-bl-lg text-sm font-semibold">
                Recomendado
              </div>
            )}
            
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-2">{pricingOptions[selectedOption].title}</h3>
              <div className="text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
                {pricingOptions[selectedOption].price}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                {pricingOptions[selectedOption].description}
              </p>
              
              <ul className="space-y-4 mb-8">
                {pricingOptions[selectedOption].features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-200">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold py-4 rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                Contactar para Comenzar
              </button>
            </div>
          </div>
        </div>

        {/* Optional Services */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-12">Servicios Opcionales</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {optionalServices.map((service, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <h4 className="font-semibold text-lg mb-2">{service.name}</h4>
                <div className="text-2xl font-bold text-green-600 mb-1">{service.price}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-3">{service.time}</div>
                <p className="text-sm text-gray-600 dark:text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-16 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
          <h3 className="text-xl font-bold mb-6">Información Bancaria</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-3">Cuenta USD</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Banco Nacional<br />
                IBAN: CR50015116420025083120
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Cuenta Colones</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Banco Nacional<br />
                IBAN: CR04015116420010178346
              </p>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-600">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              <strong>Beneficiario:</strong> Mainly Digital CR SA<br />
              <strong>Cédula Jurídica:</strong> 3-101-899269
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;