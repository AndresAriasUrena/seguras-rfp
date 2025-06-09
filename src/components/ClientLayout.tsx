// src/components/ClientLayout.tsx
'use client';

import { LanguageProvider } from '@/hooks/useLanguage';

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return <LanguageProvider>{children}</LanguageProvider>;
}