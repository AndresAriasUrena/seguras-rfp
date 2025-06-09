'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';

const TimelineSection = () => {
  const { t } = useLanguage();
  const [activeWeek, setActiveWeek] = useState(0);

  const timelineData = t.timeline.steps;
  const stats = t.timeline.stats;

  return (
    <section className="py-20 px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">{t.timeline.title}</h2>
          <p className="text-xl text-gray-600">{t.timeline.subtitle}</p>
        </div>

        <div className="mb-12">
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 transform -translate-y-1/2"></div>
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
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-semibold whitespace-nowrap text-gray-700">
                    {item.weeks}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500">
            <div className={`h-2 bg-gradient-to-r ${timelineData[activeWeek].color}`} />
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">{timelineData[activeWeek].title}</h3>
                  <p className="text-gray-600">{timelineData[activeWeek].description}</p>
                </div>
                <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${timelineData[activeWeek].color} text-white font-semibold`}>
                  {t.timeline.label} {timelineData[activeWeek].weeks}
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
                    <span className="text-gray-700">{task}</span>
                  </div>
                ))}
              </div>

              {timelineData[activeWeek].milestone && (
                <div className="mt-6 p-4 bg-green-100 rounded-lg border border-green-300">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-green-700 font-semibold">{t.timeline.milestone}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
