'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';

const PricingSection = () => {
  const { t } = useLanguage();
  const [selectedOption, setSelectedOption] = useState<'single' | 'monthly'>('single');

  const pricing = t.pricing;
  const option = pricing.options[selectedOption];

  return (
    <section id="pricing" className="py-20 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">{pricing.title}</h2>
          <p className="text-xl text-gray-600">{pricing.subtitle}</p>
          <div className="mt-4 inline-block bg-primary/10 text-primary px-4 py-2 rounded-full">
            <span className="font-semibold">{pricing.total}</span>
          </div>
        </div>

        {/* Payment Options Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 rounded-full p-1 flex">
            {(['single', 'monthly'] as const).map((type) => (
              <button
                key={type}
                onClick={() => setSelectedOption(type)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedOption === type
                    ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {pricing.options[type].title}
              </button>
            ))}
          </div>
        </div>

        {/* Main Pricing Card */}
        <div className="max-w-lg mx-auto mb-16">
          <div className={`relative bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 ${
            option.popular ? 'ring-4 ring-green-500 ring-opacity-50' : ''
          }`}>
            {option.popular && (
              <div className="absolute top-0 right-0 bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-1 rounded-bl-lg text-sm font-semibold">
                {pricing.recommended}
              </div>
            )}

            <div className="p-8">
              <h3 className="text-2xl font-bold mb-2 text-gray-900">{option.title}</h3>
              <div className="text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
                {option.price}
              </div>
              <p className="text-gray-600 mb-8">{option.description}</p>

              <ul className="space-y-4 mb-8">
                {option.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-4 mb-8">
                <a href="mailto:hola@aurigital.com" className="block">
                  <button className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold py-4 rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                    {pricing.cta}
                  </button>
                </a>
                
                {/* Credit Card Payment Option */}
                {selectedOption === 'monthly' && (
                  <div className="space-y-3">
                    <div className="text-center">
                      <p className="text-sm text-gray-500 mb-3">o paga con tarjeta de crédito:</p>
                    </div>
                    <a 
                      href="https://tilo.co/link/TXpFMk5BPT18MQ==" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"/>
                          <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"/>
                        </svg>
                        Pagar con Tarjeta de Crédito
                      </button>
                    </a>
                    <p className="text-xs text-center text-gray-500">Procesamiento seguro con Tilopay</p>
                  </div>
                )}

                {/* WhatsApp Contact Option */}
                <a 
                  href="https://wa.me/50688888169?text=Hola! Me interesa la propuesta para Seguras. Me gustaría recibir información para facturación y proceder con el proyecto." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <button className="w-full bg-green-600 text-white font-semibold py-4 rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.63"/>
                    </svg>
                    Contactar por WhatsApp
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Optional Services - Now shows all 4 services */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-12 text-gray-900">{pricing.optionalTitle}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricing.optionalServices.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-200">
                <h4 className="font-semibold text-lg mb-2 text-gray-900">{service.name}</h4>
                <div className="text-2xl font-bold text-green-600 mb-1">{service.price}</div>
                <div className="text-sm text-gray-500 mb-3 font-medium">{service.time}</div>
                <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bank Information */}
        <div className="mt-16 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200">
          <h3 className="text-xl font-bold mb-6 text-gray-900">{pricing.bankTitle}</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {pricing.bankAccounts.map((account, index) => (
              <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                <h4 className="font-semibold mb-3 text-gray-900">{account.title}</h4>
                <p className="text-sm text-gray-600 whitespace-pre-line font-mono">{account.details}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              <strong>{pricing.beneficiary}:</strong> Mainly Digital CR SA<br />
              <strong>{pricing.taxId}:</strong> 3-101-899269
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;