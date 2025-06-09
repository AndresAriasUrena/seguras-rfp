// src/components/ui/Section.tsx

import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'dark' | 'gradient';
  id?: string;
}

export function Section({
  children,
  className = '',
  background = 'white',
  id,
}: SectionProps) {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    dark: 'bg-dark text-white',
    gradient: 'bg-gradient-to-br from-gray-50 to-white',
  };

  return (
    <section
      id={id}
      className={`section-padding ${backgrounds[background]} ${className}`}
    >
      <div className="container-custom">
        {children}
      </div>
    </section>
  );
}