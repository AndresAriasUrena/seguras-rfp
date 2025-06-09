// src/components/ui/LanguageSwitch.tsx

'use client';

import { useLanguage } from '@/hooks/useLanguage';
import { Globe } from 'lucide-react';

export function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <Globe className="w-4 h-4 text-gray-600" />
      <div className="flex items-center bg-gray-100 rounded-full p-0.5">
        <button
          onClick={() => setLanguage('en')}
          className={`px-3 py-1 text-sm font-medium rounded-full transition-all duration-200 ${
            language === 'en'
              ? 'bg-white text-gray-900 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          EN
        </button>
        <button
          onClick={() => setLanguage('es')}
          className={`px-3 py-1 text-sm font-medium rounded-full transition-all duration-200 ${
            language === 'es'
              ? 'bg-white text-gray-900 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          ES
        </button>
      </div>
    </div>
  );
}