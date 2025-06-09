// // src/components/sections/ProjectScopeSection.tsx
// 'use client';

// import React, { useState } from 'react';
// import { useLanguage } from '@/hooks/useLanguage';

// const ProjectScopeSection = () => {
//   const { t } = useLanguage();
//   const [activeTab, setActiveTab] = useState('stage1');

//   const scopeData = {
//     stage1: {
//       title: "Etapa 1: Landing Page Inicial",
//       duration: "2 semanas",
//       items: [
//         {
//           icon: "🎨",
//           title: "Logo y Marca",
//           description: "Quiénes somos / Valores / Qué ofrecemos con contenido visual atractivo"
//         },
//         {
//           icon: "🛍️",
//           title: "Sección Retail",
//           description: "Link directo al catálogo de WhatsApp Business para compras rápidas"
//         },
//         {
//           icon: "🏢",
//           title: "Sección Wholesale",
//           description: "Formulario inteligente con bifurcación Nacional / Exportación"
//         },
//         {
//           icon: "📱",
//           title: "Integración Social",
//           description: "Links a Instagram, Facebook y widget de WhatsApp flotante"
//         },
//         {
//           icon: "📱",
//           title: "Diseño Responsive",
//           description: "Optimizado para móviles y todos los dispositivos"
//         }
//       ]
//     },
//     stage2: {
//       title: "Etapa 2: Plataforma E-Commerce Completa",
//       duration: "10 semanas",
//       items: [
//         {
//           icon: "🌐",
//           title: "Sitio Web Corporativo",
//           description: "Next.js frontend + WordPress CMS headless con páginas About Us, Valores, Testimonios"
//         },
//         {
//           icon: "🛒",
//           title: "Tienda E-Commerce",
//           description: "WooCommerce headless con catálogo completo y cálculo por peso variable"
//         },
//         {
//           icon: "💳",
//           title: "Métodos de Pago CR",
//           description: "Tarjetas, PayPal, SINPE Móvil y Bitcoin Jungle integrados"
//         },
//         {
//           icon: "📦",
//           title: "Gestión de Inventario",
//           description: "Integración con QuPOS y sincronización de productos"
//         },
//         {
//           icon: "📧",
//           title: "CRM y Marketing",
//           description: "Mailchimp/HubSpot con campañas automatizadas"
//         },
//         {
//           icon: "📊",
//           title: "Analytics y Reportes",
//           description: "Google Analytics 4 con reportes empresariales completos"
//         }
//       ]
//     }
//   };

//   const features = [
//     {
//       category: "E-Commerce",
//       items: [
//         "Catálogo con imágenes HD y descripciones",
//         "Precios por peso variable (carnicería)",
//         "Sistema de cuentas de cliente",
//         "Historial de pedidos y reordenar",
//         "Reviews y calificaciones",
//         "Búsqueda y filtros avanzados"
//       ]
//     },
//     {
//       category: "Checkout y Pagos",
//       items: [
//         "Proceso de checkout optimizado",
//         "Múltiples métodos de pago",
//         "Selección entrega/pickup",
//         "Programación fecha y hora",
//         "Confirmación por email/SMS",
//         "Facturación electrónica ready"
//       ]
//     },
//     {
//       category: "Administración",
//       items: [
//         "Panel admin intuitivo",
//         "Gestión de productos fácil",
//         "Control de inventario",
//         "Gestión de pedidos",
//         "Reportes de ventas",
//         "Usuarios y permisos"
//       ]
//     },
//     {
//       category: "Marketing",
//       items: [
//         "Newsletter integrado",
//         "Segmentación de clientes",
//         "Cupones y descuentos",
//         "Productos recomendados",
//         "Abandoned cart recovery",
//         "Social media integration"
//       ]
//     }
//   ];

//   return (
//     <section className="py-24 px-6 bg-gray-950">
//       <div className="max-w-7xl mx-auto">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
//             Alcance del Proyecto
//           </h2>
//           <p className="text-xl text-gray-400 max-w-3xl mx-auto">
//             Desarrollo completo en dos etapas estratégicas para maximizar el impacto y minimizar el time-to-market
//           </p>
//         </div>

//         {/* Stage Tabs */}
//         <div className="flex justify-center mb-12">
//           <div className="bg-gray-900 rounded-lg p-1 flex gap-2 border border-gray-800">
//             <button
//               onClick={() => setActiveTab('stage1')}
//               className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
//                 activeTab === 'stage1'
//                   ? 'bg-gray-800 text-white'
//                   : 'text-gray-400 hover:text-white'
//               }`}
//             >
//               Etapa 1: Landing Page
//             </button>
//             <button
//               onClick={() => setActiveTab('stage2')}
//               className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
//                 activeTab === 'stage2'
//                   ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white'
//                   : 'text-gray-400 hover:text-white'
//               }`}
//             >
//               Etapa 2: Plataforma Completa
//             </button>
//           </div>
//         </div>

//         {/* Active Stage Content */}
//         <div className="mb-16">
//           <div className="text-center mb-12">
//             <h3 className="text-2xl font-bold text-white mb-2">{scopeData[activeTab].title}</h3>
//             <p className="text-emerald-400 font-medium">Entrega en {scopeData[activeTab].duration}</p>
//           </div>
          
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {scopeData[activeTab].items.map((item, index) => (
//               <div key={index} className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all duration-300">
//                 <div className="text-3xl mb-4">{item.icon}</div>
//                 <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
//                 <p className="text-gray-400 text-sm">{item.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Detailed Features Grid */}
//         <div className="mt-20">
//           <h3 className="text-2xl font-bold text-center mb-12 text-white">
//             Funcionalidades Detalladas de la Plataforma
//           </h3>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {features.map((feature, index) => (
//               <div key={index} className="bg-gray-900 border border-gray-800 rounded-xl p-6">
//                 <h4 className="font-semibold text-lg mb-4 text-emerald-400">{feature.category}</h4>
//                 <ul className="space-y-2">
//                   {feature.items.map((item, idx) => (
//                     <li key={idx} className="flex items-start">
//                       <svg className="w-4 h-4 text-cyan-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
//                         <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                       </svg>
//                       <span className="text-sm text-gray-300">{item}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Key Deliverables */}
//         <div className="mt-16 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl p-8 border border-emerald-500/20">
//           <h3 className="text-xl font-bold mb-6 text-white text-center">Entregables Clave</h3>
//           <div className="grid md:grid-cols-3 gap-6 text-center">
//             <div>
//               <div className="text-3xl mb-3">📱</div>
//               <h4 className="font-semibold text-white mb-2">Mobile First</h4>
//               <p className="text-sm text-gray-400">Diseño responsive optimizado para el mercado móvil de CR</p>
//             </div>
//             <div>
//               <div className="text-3xl mb-3">🔒</div>
//               <h4 className="font-semibold text-white mb-2">Seguridad SSL</h4>
//               <p className="text-sm text-gray-400">Certificados y hardening de seguridad incluidos</p>
//             </div>
//             <div>
//               <div className="text-3xl mb-3">📚</div>
//               <h4 className="font-semibold text-white mb-2">Capacitación</h4>
//               <p className="text-sm text-gray-400">Manual PDF y entrenamiento completo del equipo</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProjectScopeSection;