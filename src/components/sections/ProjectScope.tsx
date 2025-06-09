'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Card } from '@/components/ui/Card';
import { CheckCircle2 } from 'lucide-react';

const ProjectScopeSection = () => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'stage1' | 'stage2'>('stage1');

  // Tipos para mejor TypeScript
  interface ScopeItem {
    icon: string;
    title: string;
    description: string;
  }

  interface ScopeStage {
    title: string;
    duration: string;
    items: ScopeItem[];
  }

  // Datos específicos del alcance del proyecto
  const scopeData: Record<'stage1' | 'stage2', ScopeStage> = {
    stage1: {
      title: language === 'es' ? "Etapa 1: Landing Page Inicial" : "Stage 1: Initial Landing Page",
      duration: language === 'es' ? "2 semanas" : "2 weeks",
      items: [
        {
          icon: "🎨",
          title: language === 'es' ? "Logo y Marca" : "Logo & Branding",
          description: language === 'es' 
            ? "Quiénes somos / Valores / Qué ofrecemos con contenido visual atractivo"
            : "About Us / Values / What We Offer with attractive visual content"
        },
        {
          icon: "🛍️",
          title: language === 'es' ? "Sección Retail" : "Retail Section",
          description: language === 'es'
            ? "Link directo al catálogo de WhatsApp Business para compras rápidas"
            : "Direct link to WhatsApp Business catalog for quick purchases"
        },
        {
          icon: "🏢",
          title: language === 'es' ? "Sección Wholesale" : "Wholesale Section",
          description: language === 'es'
            ? "Formulario inteligente con bifurcación Nacional / Exportación"
            : "Smart form with National/Export bifurcation"
        },
        {
          icon: "📱",
          title: language === 'es' ? "Integración Social" : "Social Integration",
          description: language === 'es'
            ? "Links a Instagram, Facebook y widget de WhatsApp flotante"
            : "Instagram, Facebook links and floating WhatsApp widget"
        },
        {
          icon: "📱",
          title: language === 'es' ? "Diseño Responsive" : "Responsive Design",
          description: language === 'es'
            ? "Optimizado para móviles y todos los dispositivos"
            : "Optimized for mobile and all devices"
        }
      ]
    },
    stage2: {
      title: language === 'es' ? "Etapa 2: Plataforma E-Commerce Completa" : "Stage 2: Complete E-Commerce Platform",
      duration: language === 'es' ? "10 semanas" : "10 weeks",
      items: [
        {
          icon: "🌐",
          title: language === 'es' ? "Sitio Web Corporativo" : "Corporate Website",
          description: language === 'es'
            ? "Next.js frontend + WordPress CMS headless con páginas About Us, Valores, Testimonios"
            : "Next.js frontend + headless WordPress CMS with About Us, Values, Testimonials pages"
        },
        {
          icon: "🛒",
          title: language === 'es' ? "Tienda E-Commerce" : "E-Commerce Store",
          description: language === 'es'
            ? "WooCommerce headless con catálogo completo y cálculo por peso variable"
            : "Headless WooCommerce with complete catalog and variable weight calculation"
        },
        {
          icon: "💳",
          title: language === 'es' ? "Métodos de Pago CR" : "CR Payment Methods",
          description: language === 'es'
            ? "Tarjetas, PayPal, SINPE Móvil y Bitcoin Jungle integrados"
            : "Cards, PayPal, SINPE Mobile and Bitcoin Jungle integrated"
        },
        {
          icon: "📦",
          title: language === 'es' ? "Gestión de Inventario" : "Inventory Management",
          description: language === 'es'
            ? "Integración con QuPOS y sincronización de productos"
            : "QuPOS integration and product synchronization"
        },
        {
          icon: "📧",
          title: language === 'es' ? "CRM y Marketing" : "CRM & Marketing",
          description: language === 'es'
            ? "Mailchimp/HubSpot con campañas automatizadas"
            : "Mailchimp/HubSpot with automated campaigns"
        },
        {
          icon: "📊",
          title: language === 'es' ? "Analytics y Reportes" : "Analytics & Reports",
          description: language === 'es'
            ? "Google Analytics 4 con reportes empresariales completos"
            : "Google Analytics 4 with complete business reports"
        }
      ]
    }
  };

  const features = [
    {
      category: language === 'es' ? "E-Commerce" : "E-Commerce",
      items: language === 'es' ? [
        "Catálogo con imágenes HD y descripciones",
        "Precios por peso variable (carnicería)",
        "Sistema de cuentas de cliente",
        "Historial de pedidos y reordenar",
        "Reviews y calificaciones",
        "Búsqueda y filtros avanzados"
      ] : [
        "HD image catalog with descriptions",
        "Variable weight pricing (butcher shop)",
        "Customer account system",
        "Order history and reorder",
        "Reviews and ratings",
        "Advanced search and filters"
      ]
    },
    {
      category: language === 'es' ? "Checkout y Pagos" : "Checkout & Payments",
      items: language === 'es' ? [
        "Proceso de checkout optimizado",
        "Múltiples métodos de pago",
        "Selección entrega/pickup",
        "Programación fecha y hora",
        "Confirmación por email/SMS",
        "Facturación electrónica ready"
      ] : [
        "Optimized checkout process",
        "Multiple payment methods",
        "Delivery/pickup selection",
        "Date and time scheduling",
        "Email/SMS confirmation",
        "Electronic invoicing ready"
      ]
    },
    {
      category: language === 'es' ? "Administración" : "Administration",
      items: language === 'es' ? [
        "Panel admin intuitivo",
        "Gestión de productos fácil",
        "Control de inventario",
        "Gestión de pedidos",
        "Reportes de ventas",
        "Usuarios y permisos"
      ] : [
        "Intuitive admin panel",
        "Easy product management",
        "Inventory control",
        "Order management",
        "Sales reports",
        "Users and permissions"
      ]
    },
    {
      category: language === 'es' ? "Marketing" : "Marketing",
      items: language === 'es' ? [
        "Newsletter integrado",
        "Segmentación de clientes",
        "Cupones y descuentos",
        "Productos recomendados",
        "Abandoned cart recovery",
        "Social media integration"
      ] : [
        "Integrated newsletter",
        "Customer segmentation",
        "Coupons and discounts",
        "Recommended products",
        "Abandoned cart recovery",
        "Social media integration"
      ]
    }
  ];

  return (
    <section className="py-24 px-6 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            {language === 'es' ? 'Alcance del Proyecto' : 'Project Scope'}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {language === 'es' 
              ? 'Desarrollo completo en dos etapas estratégicas para maximizar el impacto y minimizar el time-to-market'
              : 'Complete development in two strategic stages to maximize impact and minimize time-to-market'
            }
          </p>
        </div>

        {/* Stage Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800 rounded-lg p-1 flex gap-2 border border-gray-700">
            <button
              onClick={() => setActiveTab('stage1')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                activeTab === 'stage1'
                  ? 'bg-gray-700 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {language === 'es' ? 'Etapa 1: Landing Page' : 'Stage 1: Landing Page'}
            </button>
            <button
              onClick={() => setActiveTab('stage2')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                activeTab === 'stage2'
                  ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {language === 'es' ? 'Etapa 2: Plataforma Completa' : 'Stage 2: Complete Platform'}
            </button>
          </div>
        </div>

        {/* Active Stage Content */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-2">{scopeData[activeTab].title}</h3>
            <p className="text-emerald-400 font-medium">
              {language === 'es' ? 'Entrega en' : 'Delivery in'} {scopeData[activeTab].duration}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scopeData[activeTab].items.map((item: ScopeItem, index: number) => (
              <div key={index} className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-gray-600 transition-all duration-300">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Features Grid */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-12 text-white">
            {language === 'es' 
              ? 'Funcionalidades Detalladas de la Plataforma'
              : 'Detailed Platform Features'
            }
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                <h4 className="font-semibold text-lg mb-4 text-emerald-400">{feature.category}</h4>
                <ul className="space-y-2">
                  {feature.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-cyan-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Key Deliverables */}
        <div className="mt-16 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl p-8 border border-emerald-500/20">
          <h3 className="text-xl font-bold mb-6 text-white text-center">
            {language === 'es' ? 'Entregables Clave' : 'Key Deliverables'}
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl mb-3">📱</div>
              <h4 className="font-semibold text-white mb-2">Mobile First</h4>
              <p className="text-sm text-gray-400">
                {language === 'es' 
                  ? 'Diseño responsive optimizado para el mercado móvil de CR'
                  : 'Responsive design optimized for CR mobile market'
                }
              </p>
            </div>
            <div>
              <div className="text-3xl mb-3">🔒</div>
              <h4 className="font-semibold text-white mb-2">
                {language === 'es' ? 'Seguridad SSL' : 'SSL Security'}
              </h4>
              <p className="text-sm text-gray-400">
                {language === 'es'
                  ? 'Certificados y hardening de seguridad incluidos'
                  : 'Certificates and security hardening included'
                }
              </p>
            </div>
            <div>
              <div className="text-3xl mb-3">📚</div>
              <h4 className="font-semibold text-white mb-2">
                {language === 'es' ? 'Capacitación' : 'Training'}
              </h4>
              <p className="text-sm text-gray-400">
                {language === 'es'
                  ? 'Manual PDF y entrenamiento completo del equipo'
                  : 'PDF manual and complete team training'
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectScopeSection;