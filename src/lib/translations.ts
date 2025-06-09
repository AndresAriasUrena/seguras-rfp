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
    timeline: {
      title: "Cronograma del Proyecto",
      subtitle: "14 semanas de desarrollo ágil y entregas incrementales",
      label: "Semana",
      milestone: "Hito principal del proyecto",
      weeks:"semanas",
      stats: [
        { value: "2", label: "Semanas Landing" },
        { value: "12", label: "Semanas Totales" },
        { value: "30", label: "Días de soporte" },
        { value: "100%", label: "Compromiso" }
      ],
      steps: [
        {
          weeks: "1-2",
          title: "Landing Page Inicial",
          description: "Landing funcional en producción",
          tasks: [
            "Diseño y maquetación responsive",
            "Desarrollo frontend",
            "Integración con WhatsApp Business",
            "Testing y optimización",
            "Deploy a producción"
          ],
          milestone: true,
          color: "from-green-500 to-emerald-500"
        },
        {
          weeks: "3",
          title: "Inicio de desarrollo completo",
          description: "Setup de arquitectura headless",
          tasks: [
            "Configuración entorno local",
            "Integración Next.js + WordPress",
            "Definición final del alcance",
            "Preparación de APIs e infraestructura"
          ],
          milestone: false,
          color: "from-blue-500 to-cyan-500"
        }
      ]
    },
    pricing: {
      title: "Propuesta Económica",
      subtitle: "Inversión transparente para tu transformación digital",
      recommended: "Recomendado",
      cta: "Contactar para comenzar",
      optionalTitle: "Servicios Opcionales",
      bankTitle: "Información Bancaria",
      beneficiary: "Beneficiario",
      taxId: "Cédula Jurídica",
      options: {
        single: {
          title: "Pago Único",
          price: "$12,000",
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
          price: "$13,500",
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
          name: "Integración QuPOS-WooCommerce",
          price: "$2,400 – $3,000",
          time: "2–3 semanas",
          description: "Automatiza sincronización de inventario y pedidos"
        }
      ],
      bankAccounts: [
        {
          title: "Cuenta USD",
          details: "Banco Nacional\\nIBAN: CR50015116420025083120"
        },
        {
          title: "Cuenta Colones",
          details: "Banco Nacional\\nIBAN: CR04015116420010178346"
        }
      ]
    },
    technology: {
      title: "Arquitectura Headless de Vanguardia",
      subtitle: "Tecnología moderna que garantiza velocidad, escalabilidad y una experiencia de usuario excepcional",
      benefitsTitle: "Beneficios Estratégicos",
      stack: [
        {
          category: "Frontend",
          title: "Next.js 14 (React)",
          description: "Performance superior y experiencia fluida",
          features: [
            "Velocidad 3x superior frente a WordPress tradicional",
            "SEO optimizado automáticamente",
            "Core Web Vitals mejorados",
            "Diseño mobile-first nativo"
          ],
          accentColor: "#10b981"
        }
      ],
      benefits: [
        "Actualizaciones sin afectar el backend",
        "Escalabilidad para crecimiento internacional",
        "Tecnología moderna a precio competitivo",
        "UX profesional y veloz"
      ]
    },
    cta: {
      title: "¿Listo para transformar tu carnicería premium?",
      subtitle: "Contáctanos hoy mismo y demos el primer paso juntos.",
      button: "Contáctanos"
    },
    footer: {
      company: "Soluciones digitales de alto nivel para empresas con visión",
      taxId: "Cédula Jurídica",
      contact: {
        title: "Contacto"
      },
      payment: {
        title: "Métodos de Pago",
        bank: "Banco Nacional de Costa Rica",
        usd: "Cuenta USD",
        colones: "Cuenta Colones",
        beneficiary: "Beneficiario"
      },
      rights: "Todos los derechos reservados"
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
    timeline: {
      title: "Project Timeline",
      subtitle: "14 weeks of agile development and incremental deliveries",
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
          title: "Initial Landing Page",
          description: "Functional landing in production",
          tasks: [
            "Responsive design and layout",
            "Frontend development",
            "WhatsApp Business integration",
            "Testing and optimization",
            "Production deployment"
          ],
          milestone: true,
          color: "from-green-500 to-emerald-500"
        },
        {
          weeks: "3",
          title: "Full Development Kickoff",
          description: "Setup of headless architecture",
          tasks: [
            "Local environment configuration",
            "Next.js + WordPress integration",
            "Final scope definition",
            "API and infrastructure preparation"
          ],
          milestone: false,
          color: "from-blue-500 to-cyan-500"
        }
      ]
    },
    pricing: {
      title: "Pricing Proposal",
      subtitle: "Transparent investment for your digital transformation",
      recommended: "Recommended",
      cta: "Get in Touch",
      optionalTitle: "Optional Services",
      bankTitle: "Bank Information",
      beneficiary: "Beneficiary",
      taxId: "Corporate ID",
      options: {
        single: {
          title: "One-Time Payment",
          price: "$12,000",
          description: "Single payment upon contract signing",
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
          price: "$13,500",
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
          name: "QuPOS-WooCommerce Integration",
          price: "$2,400 – $3,000",
          time: "2–3 weeks",
          description: "Automates inventory and order sync"
        }
      ],
      bankAccounts: [
        {
          title: "USD Account",
          details: "Banco Nacional\\nIBAN: CR50015116420025083120"
        },
        {
          title: "Colones Account",
          details: "Banco Nacional\\nIBAN: CR04015116420010178346"
        }
      ]
    },
    technology: {
      title: "Cutting-edge Headless Architecture",
      subtitle: "Modern tech that guarantees speed, scalability and great user experience",
      benefitsTitle: "Strategic Benefits",
      stack: [
        {
          category: "Frontend",
          title: "Next.js 14 (React)",
          description: "Superior performance and smooth UX",
          features: [
            "3x faster vs traditional WordPress",
            "Auto-optimized SEO",
            "Improved Core Web Vitals",
            "Mobile-first design"
          ],
          accentColor: "#10b981"
        }
      ],
      benefits: [
        "Design updates without backend impact",
        "Scalable for international growth",
        "Modern tech with competitive pricing",
        "Fast and professional UX"
      ]
    },
    cta: {
      title: "Ready to transform your premium butcher shop?",
      subtitle: "Contact us today and take the first step together.",
      button: "Get in Touch"
    },
    footer: {
      company: "High-level digital solutions for visionary businesses",
      taxId: "Corporate ID",
      contact: {
        title: "Contact"
      },
      payment: {
        title: "Payment Methods",
        bank: "Banco Nacional de Costa Rica",
        usd: "USD Account",
        colones: "Colones Account",
        beneficiary: "Beneficiary"
      },
      rights: "All rights reserved"
    }
    
  }
};
