// src/components/ui/Card.tsx

import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  variant?: 'default' | 'dark';
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg' | 'none';
  className?: string;
}

export function Card({
  children,
  variant = 'default',
  hover = true,
  padding = 'md',
  className = '',
}: CardProps) {
  const baseStyles = 'rounded-2xl transition-all duration-300';
  
  const variants = {
    default: 'bg-white shadow-lg',
    dark: 'bg-dark-lighter text-white shadow-xl',
  };

  const hoverStyles = hover ? 'hover:shadow-xl hover:-translate-y-1' : '';

  const paddingStyles = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div
      className={`${baseStyles} ${variants[variant]} ${hoverStyles} ${paddingStyles[padding]} ${className}`}
    >
      {children}
    </div>
  );
}