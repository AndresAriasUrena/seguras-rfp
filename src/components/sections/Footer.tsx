// src/components/sections/Footer.tsx

'use client';

import { useLanguage } from '@/hooks/useLanguage';
import Link from 'next/link';
import { Instagram, Mail, Phone, Globe } from 'lucide-react';

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="font-display font-bold text-xl text-white">Aurigital</span>
            </div>
            <p className="mb-4 text-sm">
              {t.footer.company}
            </p>
            <p className="text-sm">
              {t.footer.taxId}: 3-101-899269
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-4">{t.footer.contact.title}</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:hola@aurigital.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">hola@aurigital.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+50688888169" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+506 8888-8169</span>
                </a>
              </li>
              <li>
                <a href="https://www.aurigital.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Globe className="w-4 h-4" />
                  <span className="text-sm">www.aurigital.com</span>
                </a>
              </li>
              <li>
                <a href="https://instagram.com/aurigital" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Instagram className="w-4 h-4" />
                  <span className="text-sm">@aurigital</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Payment Methods */}
          <div>
            <h3 className="font-semibold text-white mb-4">{t.footer.payment.title}</h3>
            <p className="text-sm mb-3">{t.footer.payment.bank}</p>
            <div className="space-y-2">
              <div>
                <p className="text-xs font-medium text-gray-400">{t.footer.payment.usd}</p>
                <p className="text-sm font-mono">CR50015116420025083120</p>
              </div>
              <div>
                <p className="text-xs font-medium text-gray-400">{t.footer.payment.colones}</p>
                <p className="text-sm font-mono">CR04015116420010178346</p>
              </div>
              <div className="pt-2">
                <p className="text-xs">
                  <span className="font-medium text-gray-400">{t.footer.payment.beneficiary}:</span> Mainly Digital CR SA
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-400">
            © {currentYear} Aurigital. {t.footer.rights}.
          </p>
        </div>
      </div>
    </footer>
  );
}