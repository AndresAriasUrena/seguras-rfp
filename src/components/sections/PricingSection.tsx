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
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 rounded-full p-1 flex">
            {(['single', 'monthly'] as const).map((type) => (
              <button
                key={type}
                onClick={() => setSelectedOption(type)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedOption === type
                    ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-lg'
                    : 'text-gray-600'
                }`}
              >
                {pricing.options[type].title}
              </button>
            ))}
          </div>
        </div>

        {/* Main Card */}
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
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold py-4 rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                {pricing.cta}
              </button>
            </div>
          </div>
        </div>

        {/* Optional Services */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-12 text-gray-900">{pricing.optionalTitle}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pricing.optionalServices.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <h4 className="font-semibold text-lg mb-2 text-gray-900">{service.name}</h4>
                <div className="text-2xl font-bold text-green-600 mb-1">{service.price}</div>
                <div className="text-sm text-gray-500 mb-3">{service.time}</div>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bank Info */}
        <div className="mt-16 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8">
          <h3 className="text-xl font-bold mb-6 text-gray-900">{pricing.bankTitle}</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {pricing.bankAccounts.map((account, index) => (
              <div key={index}>
                <h4 className="font-semibold mb-3 text-gray-900">{account.title}</h4>
                <p className="text-sm text-gray-600 whitespace-pre-line">{account.details}</p>
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
