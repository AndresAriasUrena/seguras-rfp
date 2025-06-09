// src/lib/translations.ts

export const translations = {
  es: {
    nav: {
      home: "Inicio",
      project: "Proyecto",
      technology: "Tecnología",
      pricing: "Precios",
      timeline: "Cronograma",
      contact: "Contacto",
    },
    
    // Hero Section
    hero: {
      badge: "Propuesta Técnica y Económica",
      title: "Desarrollo de Plataforma Digital para Seguras",
      subtitle: "MVP completo en 12 semanas con arquitectura headless de vanguardia",
      budget: "Presupuesto",
      delivery: "Entrega",
      cta: {
        primary: "Ver Propuesta",
        secondary: "Contáctanos",
      },
    },
    
    // Executive Summary
    summary: {
      title: "Resumen Ejecutivo",
      subtitle: "Desarrollo del MVP en dos etapas funcionales",
      stage1: {
        title: "Landing Page Inicial",
        time: "Listo en 2 semanas",
        features: [
          "Logo + Quiénes somos / Valores / Qué ofrecemos",
          "Sección Retail → Link directo al catálogo de WhatsApp Business",
          "Sección Wholesale → Formulario con bifurcación Nacional/Exportación",
          "Links sociales (Instagram, Facebook)",
          "Widget de WhatsApp",
        ],
      },
      stage2: {
        title: "Plataforma Completa",
        time: "Desarrollo en 10 semanas",
        features: [
          "Sitio web corporativo con CMS headless",
          "Tienda e-commerce con WooCommerce",
          "Integración QuPOS para inventario",
          "CRM y marketing digital",
          "Analítica y reportes empresariales",
        ],
      },
    },

    // Technology Section - COMPLETADA
    technology: {
      title: "Ventaja Técnica",
      subtitle: "Arquitectura Headless Moderna",
      benefitsTitle: "Beneficios Estratégicos",
      stack: [
        {
          category: "Frontend",
          title: "Frontend: Next.js 14",
          description: "Performance superior y experiencia fluida",
          features: [
            "Velocidad de carga 3x superior vs WordPress tradicional",
            "SEO optimizado automáticamente",
            "Core Web Vitals mejorados",
            "Mobile-first nativo",
          ],
          accentColor: "#10b981"
        },
        {
          category: "Backend",
          title: "Backend: WordPress Headless",
          description: "CMS robusto y familiar para el equipo",
          features: [
            "Panel de administración familiar y potente",
            "APIs robustas (REST + GraphQL)",
            "Ecosistema maduro de plugins",
            "Sin lock-in propietario",
          ],
          accentColor: "#3b82f6"
        },
        {
          category: "Infraestructura",
          title: "Hosting & Infraestructura",
          description: "Escalabilidad y rendimiento garantizado",
          features: [
            "CDN global para velocidad máxima",
            "SSL y seguridad empresarial",
            "Backups automáticos diarios",
            "Monitoreo 24/7 incluido",
          ],
          accentColor: "#8b5cf6"
        }
      ],
      benefits: [
        "Actualizaciones de diseño sin afectar backend",
        "Escalabilidad preparada para crecimiento internacional",
        "Tecnología moderna a presupuesto competitivo",
        "Experiencia de usuario fluida y profesional",
      ]
    },

    // Timeline Section - COMPLETADA
    timeline: {
      title: "Cronograma del Proyecto",
      subtitle: "Entregables claros en cada etapa",
      label: "Semana",
      milestone: "Hito principal del proyecto",
      weeks: "semanas",
      stats: [
        { value: "2", label: "Semanas Landing" },
        { value: "12", label: "Semanas Totales" },
        { value: "30", label: "Días de soporte" },
        { value: "100%", label: "Compromiso" }
      ],
      steps: [
        {
          weeks: "1-2",
          title: "Landing funcional en producción",
          description: "Diseño, desarrollo, integración WhatsApp, testing y deploy",
          tasks: [
            "Diseño y maquetación responsive",
            "Desarrollo frontend con Next.js",
            "Integración con WhatsApp Business",
            "Testing completo y optimización",
            "Deploy a producción con dominio"
          ],
          milestone: true,
          color: "from-green-500 to-emerald-500"
        },
        {
          weeks: "3",
          title: "Kickoff del desarrollo completo",
          description: "Setup arquitectura headless, definición final de scope",
          tasks: [
            "Configuración entorno de desarrollo local",
            "Setup integración Next.js + WordPress headless",
            "Definición final del alcance y funcionalidades",
            "Preparación de APIs e infraestructura",
            "Configuración de herramientas de desarrollo"
          ],
          milestone: false,
          color: "from-blue-500 to-cyan-500"
        },
        {
          weeks: "4-6",
          title: "Core Development",
          description: "Frontend Next.js, configuración WooCommerce, APIs",
          tasks: [
            "Desarrollo del frontend principal en Next.js",
            "Configuración y personalización de WooCommerce",
            "Desarrollo de APIs personalizadas",
            "Implementación del sistema de autenticación",
            "Integración de base de datos y modelos"
          ],
          milestone: false,
          color: "from-purple-500 to-pink-500"
        },
        {
          weeks: "7-9",
          title: "Integraciones y E-commerce",
          description: "Métodos pago CR, QuPOS sync, CRM, catálogo productos",
          tasks: [
            "Integración métodos de pago de Costa Rica",
            "Desarrollo middleware QuPOS-WooCommerce",
            "Setup CRM y herramientas de marketing",
            "Desarrollo del catálogo de productos completo",
            "Sistema de gestión de inventario"
          ],
          milestone: false,
          color: "from-orange-500 to-red-500"
        },
        {
          weeks: "10-12",
          title: "Go-live final y capacitación",
          description: "Deploy producción, pruebas finales, entrenamiento equipo",
          tasks: [
            "Deploy final a servidor de producción",
            "Pruebas completas de funcionalidad",
            "Capacitación completa del equipo",
            "Configuración de analytics y monitoreo",
            "Entrega de documentación técnica"
          ],
          milestone: true,
          color: "from-green-600 to-blue-600"
        },
        {
          weeks: "13-14",
          title: "30 días de soporte post-lanzamiento",
          description: "Ajustes, optimizaciones y soporte técnico incluido",
          tasks: [
            "Monitoreo de rendimiento y estabilidad",
            "Ajustes basados en feedback del usuario",
            "Optimizaciones de velocidad y SEO",
            "Soporte técnico completo",
            "Reportes de métricas y recomendaciones"
          ],
          milestone: false,
          color: "from-gray-500 to-gray-600"
        }
      ]
    },

    // Pricing Section - COMPLETADA
    pricing: {
      title: "Propuesta Económica",
      subtitle: "Inversión transparente para su crecimiento digital",
      total: "Precio Total del Proyecto (MVP completo)",
      recommended: "Recomendado",
      cta: "Contactar para comenzar",
      optionalTitle: "Opcionales Adicionales",
      bankTitle: "Información Bancaria",
      beneficiary: "Beneficiario",
      taxId: "Cédula Jurídica",
      options: {
        single: {
          title: "Pago Único",
          price: "$12,000 USD",
          description: "Un solo pago al firmar contrato",
          features: [
            "Desarrollo completo del MVP",
            "Landing page en 2 semanas",
            "Plataforma completa en 12 semanas",
            "30 días de soporte post-lanzamiento",
            "Capacitación incluida",
            "Código fuente completo"
          ],
          popular: true
        },
        monthly: {
          title: "Cuotas Mensuales",
          price: "$13,500 USD total",
          description: "3 pagos de $4,500 USD c/u",
          features: [
            "Desarrollo completo del MVP",
            "Landing page en 2 semanas",
            "Plataforma completa en 12 semanas",
            "30 días de soporte post-lanzamiento",
            "Capacitación incluida",
            "Código fuente completo"
          ],
          popular: false
        }
      },
      optionalServices: [
        {
          name: "Middleware QuPOS-WooCommerce",
          price: "$2,400 – $3,000",
          time: "2-3 semanas",
          description: "Automatiza sincronización de inventario y pedidos"
        },
        {
          name: "Integración QuickBooks",
          price: "$1,000 – $1,500",
          time: "1 semana",
          description: "Sincronización automática con contabilidad"
        },
        {
          name: "Sistema bodega-tienda",
          price: "$1,500 – $2,000",
          time: "1-2 semanas",
          description: "Gestión separada de inventarios"
        },
        {
          name: "Videos de capacitación personalizados",
          price: "$600 – $900",
          time: "3-5 días",
          description: "Material de entrenamiento audiovisual"
        }
      ],
      bankAccounts: [
        {
          title: "Cuenta USD",
          details: "Banco Nacional\nIBAN: CR50015116420025083120"
        },
        {
          title: "Cuenta Colones", 
          details: "Banco Nacional\nIBAN: CR04015116420010178346"
        }
      ]
    },

    // CTA Section
    cta: {
      title: "¿Listo para Transformar su Negocio?",
      subtitle: "Construyamos juntos su futuro digital",
      primary: "Agendar una Llamada",
      secondary: "Descargar Propuesta PDF",
      button: "Contáctanos"
    },

    // Footer
    footer: {
      company: "Mainly Digital CR SA",
      taxId: "Cédula Jurídica",
      rights: "Todos los derechos reservados",
      contact: {
        title: "Contacto",
        email: "Correo",
        phone: "Teléfono", 
        web: "Sitio web",
      },
      payment: {
        title: "Métodos de Pago",
        bank: "Transferencia Bancaria (Preferida)",
        usd: "Cuenta USD",
        colones: "Cuenta Colones",
        beneficiary: "Beneficiario",
      },
    }
  },
  
  en: {
    nav: {
      home: "Home",
      project: "Project",
      technology: "Technology",
      pricing: "Pricing",
      timeline: "Timeline",
      contact: "Contact",
    },
    
    // Hero Section
    hero: {
      badge: "Technical & Economic Proposal",
      title: "Digital Platform Development for Seguras",
      subtitle: "Complete MVP in 12 weeks with cutting-edge headless architecture",
      budget: "Budget",
      delivery: "Delivery",
      cta: {
        primary: "View Proposal",
        secondary: "Contact Us",
      },
    },
    
    // Executive Summary
    summary: {
      title: "Executive Summary",
      subtitle: "Two-stage functional MVP development",
      stage1: {
        title: "Initial Landing Page",
        time: "Ready in 2 weeks",
        features: [
          "Logo + About Us / Values / What We Offer",
          "Retail Section → Direct link to WhatsApp Business catalog",
          "Wholesale Section → Form with National/Export bifurcation",
          "Social links (Instagram, Facebook)",
          "WhatsApp widget",
        ],
      },
      stage2: {
        title: "Complete Platform",
        time: "Development in 10 weeks",
        features: [
          "Corporate website with headless CMS",
          "E-commerce store with WooCommerce",
          "QuPOS integration for inventory",
          "CRM and digital marketing",
          "Analytics and business reports",
        ],
      },
    },

    // Technology Section - COMPLETED
    technology: {
      title: "Technical Advantage",
      subtitle: "Modern Headless Architecture",
      benefitsTitle: "Strategic Benefits",
      stack: [
        {
          category: "Frontend",
          title: "Frontend: Next.js 14",
          description: "Superior performance and smooth experience",
          features: [
            "3x faster loading speed vs traditional WordPress",
            "Automatically optimized SEO",
            "Improved Core Web Vitals",
            "Native mobile-first design",
          ],
          accentColor: "#10b981"
        },
        {
          category: "Backend",
          title: "Backend: Headless WordPress",
          description: "Robust and familiar CMS for the team",
          features: [
            "Familiar and powerful admin panel",
            "Robust APIs (REST + GraphQL)",
            "Mature plugin ecosystem",
            "No proprietary lock-in",
          ],
          accentColor: "#3b82f6"
        },
        {
          category: "Infrastructure",
          title: "Hosting & Infrastructure",
          description: "Guaranteed scalability and performance",
          features: [
            "Global CDN for maximum speed",
            "Enterprise SSL and security",
            "Daily automatic backups",
            "24/7 monitoring included",
          ],
          accentColor: "#8b5cf6"
        }
      ],
      benefits: [
        "Design updates without affecting backend",
        "Scalability ready for international growth",
        "Modern technology at competitive budget",
        "Fluid and professional user experience",
      ]
    },

    // Timeline Section - COMPLETED
    timeline: {
      title: "Project Timeline",
      subtitle: "Clear deliverables at each stage",
      label: "Week",
      milestone: "Key project milestone",
      weeks: "weeks",
      stats: [
        { value: "2", label: "Landing Weeks" },
        { value: "12", label: "Total Weeks" },
        { value: "30", label: "Support Days" },
        { value: "100%", label: "Commitment" }
      ],
      steps: [
        {
          weeks: "1-2",
          title: "Functional Landing in Production",
          description: "Design, development, WhatsApp integration, testing and deploy",
          tasks: [
            "Responsive design and layout",
            "Frontend development with Next.js",
            "WhatsApp Business integration",
            "Complete testing and optimization",
            "Production deploy with domain"
          ],
          milestone: true,
          color: "from-green-500 to-emerald-500"
        },
        {
          weeks: "3",
          title: "Complete Development Kickoff",
          description: "Headless architecture setup, final scope definition",
          tasks: [
            "Local development environment setup",
            "Next.js + headless WordPress integration setup",
            "Final scope and features definition",
            "API and infrastructure preparation",
            "Development tools configuration"
          ],
          milestone: false,
          color: "from-blue-500 to-cyan-500"
        },
        {
          weeks: "4-6",
          title: "Core Development",
          description: "Next.js frontend, WooCommerce configuration, APIs",
          tasks: [
            "Main frontend development in Next.js",
            "WooCommerce configuration and customization",
            "Custom APIs development",
            "Authentication system implementation",
            "Database and models integration"
          ],
          milestone: false,
          color: "from-purple-500 to-pink-500"
        },
        {
          weeks: "7-9",
          title: "Integrations and E-commerce",
          description: "CR payment methods, QuPOS sync, CRM, product catalog",
          tasks: [
            "Costa Rica payment methods integration",
            "QuPOS-WooCommerce middleware development",
            "CRM and marketing tools setup",
            "Complete product catalog development",
            "Inventory management system"
          ],
          milestone: false,
          color: "from-orange-500 to-red-500"
        },
        {
          weeks: "10-12",
          title: "Final Go-live and Training",
          description: "Production deploy, final testing, team training",
          tasks: [
            "Final deploy to production server",
            "Complete functionality testing",
            "Complete team training",
            "Analytics and monitoring setup",
            "Technical documentation delivery"
          ],
          milestone: true,
          color: "from-green-600 to-blue-600"
        },
        {
          weeks: "13-14",
          title: "30 Days Post-launch Support",
          description: "Adjustments, optimizations and technical support included",
          tasks: [
            "Performance and stability monitoring",
            "User feedback-based adjustments",
            "Speed and SEO optimizations",
            "Complete technical support",
            "Metrics reports and recommendations"
          ],
          milestone: false,
          color: "from-gray-500 to-gray-600"
        }
      ]
    },

    // Pricing Section - COMPLETED
    pricing: {
      title: "Economic Proposal",
      subtitle: "Transparent investment for your digital growth",
      total: "Total Project (Complete MVP)",
      recommended: "Recommended",
      cta: "Get in Touch",
      optionalTitle: "Optional Add-ons",
      bankTitle: "Bank Information",
      beneficiary: "Beneficiary",
      taxId: "Tax ID",
      options: {
        single: {
          title: "Single Payment",
          price: "$12,000 USD",
          description: "One payment upon contract signing",
          features: [
            "Full MVP development",
            "Landing page in 2 weeks",
            "Complete platform in 12 weeks",
            "30-day post-launch support",
            "Training included",
            "Full source code"
          ],
          popular: true
        },
        monthly: {
          title: "Monthly Installments",
          price: "$13,500 USD total",
          description: "3 payments of $4,500 USD each",
          features: [
            "Full MVP development",
            "Landing page in 2 weeks",
            "Complete platform in 12 weeks",
            "30-day post-launch support",
            "Training included",
            "Full source code"
          ],
          popular: false
        }
      },
      optionalServices: [
        {
          name: "QuPOS-WooCommerce Middleware",
          price: "$2,400 – $3,000",
          time: "2-3 weeks",
          description: "Automates inventory and order synchronization"
        },
        {
          name: "QuickBooks Integration",
          price: "$1,000 – $1,500",
          time: "1 week",
          description: "Automatic synchronization with accounting"
        },
        {
          name: "Warehouse-Store System",
          price: "$1,500 – $2,000",
          time: "1-2 weeks",
          description: "Separate inventory management"
        },
        {
          name: "Personalized Training Videos",
          price: "$600 – $900",
          time: "3-5 days",
          description: "Audiovisual training material"
        }
      ],
      bankAccounts: [
        {
          title: "USD Account",
          details: "Banco Nacional\nIBAN: CR50015116420025083120"
        },
        {
          title: "Colones Account",
          details: "Banco Nacional\nIBAN: CR04015116420010178346"
        }
      ]
    },

    // CTA Section
    cta: {
      title: "Ready to Transform Your Business?",
      subtitle: "Let's build your digital future together",
      primary: "Schedule a Call",
      secondary: "Download Proposal PDF",
      button: "Get in Touch"
    },

    // Footer
    footer: {
      company: "Mainly Digital CR SA",
      taxId: "Tax ID",
      rights: "All rights reserved",
      contact: {
        title: "Contact",
        email: "Email",
        phone: "Phone",
        web: "Website",
      },
      payment: {
        title: "Payment Methods",
        bank: "Bank Transfer (Preferred)",
        usd: "USD Account",
        colones: "Colones Account",
        beneficiary: "Beneficiary",
      },
    }
  }
};