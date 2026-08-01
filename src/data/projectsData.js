// src/data/projectsData.js

export const PROJECTS_DATA = {
    "finzen": {
        id: "finzen",
        title: "FinZen",
        tagline: "Suite Multiplataforma de Gestión Financiera Personal, Portafolio de Inversiones y Flujo de Caja",
        projectType: "Proyecto Personal",
        github: "https://github.com/Yago-Rueda-24/FinZen",
        prod: "https://finzen.ruedayago.dev/",
        summary: "Plataforma integral de gestión financiera personal estructurada como un monorepositorio con backend API modular en NestJS, aplicación de escritorio en Electron + React y aplicación móvil universal en Expo. Permite la consolidación multicuenta, automatización de valor de mercado para inversiones mediante la API de Finnhub, análisis de flujo de caja y protección mediante autenticación biométrica.",

        cvHighlights: [
            "Diseñada e implementada una arquitectura monorepo multiplataforma (Backend API NestJS, Desktop Electron/React y Mobile Expo/React Native) para la consolidación financiera centralizada.",
            "Desarrollada API RESTful en NestJS v11 y TypeORM sobre PostgreSQL, implementando autenticación stateless mediante Passport JWT y control de acceso por usuario.",
            "Integrada la API de Finnhub para la sincronización automática de cotizaciones de mercado en tiempo real (acciones, ETFs, cripto) y recalculado dinámico del patrimonio neto.",
            "Diseñada app móvil universal en Expo v54 aplicando Clean Architecture (capas de Dominio, Aplicación e Infraestructura) con React Query y seguridad biométrica nativa (FaceID/TouchID).",
            "Desplegado en MV linux(Ubuntu) mediante entorno  contenedorizado con Docker/Docker Compose y automatización del despliegue mediante Github Actions"
        ],

        techStack: {
            backend: ["TypeScript", "NestJS", "TypeORM", "REST APIs", "PostgreSQL"],
            desktop: ["Electron", "React", "TypeScript", "Tailwind CSS"],
            mobile: ["React Native", "Expo Router", "Biometrics"],
            tools: ["Docker", "Docker Compose", "Git", "GitHub Actions", "NPM"]
        },

        architecture: {
            pattern: "Arquitectura Centralizada Cliente-Servidor Multiplataforma (Monorepo Backend NestJS + Clients Electron/Expo)",
            description: "Estructura monorepositorio desacoplada donde el servidor backend NestJS actúa como la única fuente de verdad para las reglas de negocio, cálculos de valor de mercado de inversiones y persistencia en PostgreSQL. Los clientes de escritorio (Electron + React) y móvil (Expo React Native) consumen la API REST compartiendo modelos DTO.",
            highlights: [
                "Arquitectura modular NestJS desacoplada por dominios (Account, Investment, Transaction, Budget, Statistics)",
                "Capa de cliente móvil estructurada bajo Clean Architecture (Domain, Application, Infrastructure HTTP Repositories, Presentation)",
                "Autenticación stateless basada en JWT compartida entre clientes de escritorio y móviles",
                "Visualización gráfica interactiva de patrimonio neto y flujo de caja con Chart.js y gestión de caché con React Query"
            ]
        },

        infrastructure: {
            platform: "MV Linux (Ubuntu) + Docker Compose, Proxy Inverso, Firewall & GitHub Actions",
            description: "Despliegue y configuración de seguridad en la Máquina Virtual Linux (Ubuntu). Incluye la implementación de un proxy inverso y firewall para el filtrado y acceso seguro a los servicios, la orquestación de contenedores con Docker Compose y la automatización del despliegue continuo vía GitHub Actions.",
            highlights: [
                "Orquestación de servicios en la MV Linux mediante Docker y Docker Compose para el entorno de producción (Backend NestJS + PostgreSQL)",
                "Configuración de Proxy Inverso para el enrutamiento seguro de peticiones SSL/TLS hacia el backend NestJS",
                "Implementación de reglas de Firewall para restringir el acceso expuesto únicamente a los puertos seguros necesarios",
                "Pipeline de Integración y Despliegue Continuo (CI/CD) automatizado mediante GitHub Actions ejecutado en cada entrega a la rama principal"
            ]
        },

        engineeringChallenges: [
            {
                challenge: "Actualizar en tiempo real el valor de las inversiones y el patrimonio total según las variaciones del mercado.",
                solution: "Diseño de un servicio de integración con la API de Finnhub que obtiene precios en tiempo real y recalcula mediante agregaciones en TypeORM el valor actualizado de los portafolios y su P&L.",
                impact: "Cálculo preciso del patrimonio neto global en tiempo real sin descuadres entre activos de inversión e ingresos/gastos."
            },
            {
                challenge: "Garantizar una experiencia móvil fluida con soporte biométrico sin duplicar lógica de red ni comprometer la seguridad de las credenciales.",
                solution: "Adopción de Clean Architecture en el cliente móvil separando adaptadores HTTP con interceptores `fetch`, persistencia cifrada en `expo-secure-store` y desbloqueo nativo mediante `expo-local-authentication`.",
                impact: "Protección de datos financieros sensibles en el móvil con respuesta instantánea de la UI gracias al caching inteligente de React Query."
            }
        ]
    },
    "finanzas-api": {
        id: "finanzas-api",
        title: "Finanzas API",
        tagline: "API RESTful de Análisis Financiero y Procesamiento de Transacciones",
        projectType: "Proyecto Personal",
        github: "https://github.com/Yago-Rueda-24/Finanzas",
        prod: "https://finanzas-lv2n.onrender.com",
        summary: "API RESTful desarrollada para la ingesta, clasificación y agregación analítica de datos de transacciones financieras. Diseñada como un prototipo técnico robusto enfocado en la aplicación de patrones de arquitectura limpia, validación rigurosa de datos y optimización de consultas de métricas temporales.",

        cvHighlights: [
            "Diseñada e implementada una API RESTful modular para el análisis agregativo de transacciones financieras personales en Java y Spring Boot.",
            "Implementado patrón Repository con Spring Data JPA para optimizar consultas analíticas por rangos de fecha y categorías.",
            "Configurado un controlador global de excepciones con `@ControllerAdvice` reduciendo fallos no controlados y estandarizando errores en formato JSON RFC 7807.",
            "Construida suite de pruebas unitarias cubriendo casos límite en cálculos analíticos (totales, promedios móviles, agrupaciones mensuales).",
            "Desplegado el servicio backend en la plataforma Render conectada con base de datos administrada."
        ],

        techStack: {
            backend: ["Java 17", "Spring Boot 3", "Spring Data JPA", "Hibernate", "REST APIs"],
            database: ["MySQL", "H2 (Testing)"],
            tools: ["Maven", "Postman", "Git", "Render Cloud"]
        },

        architecture: {
            pattern: "Arquitectura en Capas (Layered Architecture - Controller / Service / Repository)",
            description: "Estructura desacoplada en 3 capas estándar donde los controladores gestionan exclusivamente las peticiones HTTP/DTOs, la capa de servicio encapsula la lógica analítica de agregación y el repositorio gestiona el acceso a datos mediante Spring Data JPA.",
            highlights: [
                "Separación de responsabilidades mediante DTOs (Data Transfer Objects) y Mappers",
                "Manejo centralizado de excepciones con @ControllerAdvice para respuestas HTTP uniformes",
                "Persistencia relacional optimizada con ORM Hibernate y Spring Data JPA",
                "Interfaz REST orientada a recursos siguiendo principios de madurez Richardson Nivel 2"
            ]
        },

        infrastructure: {
            platform: "Despliegue Cloud en Render (PaaS) + Base de Datos Administrada MySQL",
            description: "Infraestructura cloud automatizada en Render conectada al repositorio de GitHub para despliegue continuo en cada commit a la rama principal, con gestión de variables de entorno seguras para credenciales de base de datos.",
            highlights: [
                "Pipeline de Despliegue Continuo (CD) automatizado desde GitHub en Render PaaS",
                "Gestión segura de secretos y variables de entorno para conexión a la base de datos",
                "Estrategia de compilación de artefacto JAR con Maven en entorno aislado",
                "Monitoreo de disponibilidad mediante health-checks HTTP y trazabilidad de logs"
            ]
        },

        engineeringChallenges: [
            {
                challenge: "Agregación y cálculo rápido de métricas financieras sobre volúmenes de transacciones por periodos dinámicos.",
                solution: "Diseño de consultas personalizadas en JPQL con agregaciones a nivel de base de datos (`SUM`, `AVG`, `GROUP BY`) e índices en columnas de fecha y categoría.",
                impact: "Procesamiento inmediato de agregaciones sin recargar la memoria de la aplicación Java."
            },
            {
                challenge: "Validación de entradas de datos arbitrarios evitando registros vacíos o tipos numéricos inválidos.",
                solution: "Uso de validaciones declarativas con Bean Validation (`@NotNull`, `@Positive`, `@PastOrPresent`) en los DTOs de entrada.",
                impact: "Garantía total de integridad de datos previo a la ejecución de la lógica financiera."
            }
        ]
    },

    "taskflow": {
        id: "taskflow",
        title: "Taskflow",
        tagline: "Plataforma Fullstack de Gestión Agil de Proyectos y Sprints estilo Scrum",
        projectType: "Proyecto Personal",
        github: "https://github.com/Yago-Rueda-24/AppTareas",
        prod: "https://apptareas-front.onrender.com",
        summary: "Plataforma web fullstack diseñada para la gestión integral de proyectos bajo metodologías ágiles (Scrum/Kanban). Permite la creación de sprints, organización de backlogs, seguimiento del estado de tareas y métricas de productividad de equipos.",

        cvHighlights: [
            "Arquitectura y desarrollo end-to-end de una plataforma de gestión Scrum con frontend React en TypeScript y backend en NestJS.",
            "Diseñado e implementado esquema relacional PostgreSQL gestionando relaciones complejas entre usuarios, equipos, proyectos, sprints y épicas mediante TypeORM.",
            "Implementado sistema seguro de autenticación y autorización mediante Tokens JWT y Guardias de NestJS para control de acceso granular.",
            "Desarrollada interfaz de usuario SPA reactiva con actualización dinámica del tablero Kanban y filtrado de tareas en tiempo real.",
            "Automatizado pipeline de CI/CD utilizando GitHub Actions para testing y despliegue automático del frontend y backend en Render."
        ],

        techStack: {
            backend: ["TypeScript", "NestJS", "Node.js", "TypeORM", "JWT", "REST APIs"],
            frontend: ["React", "TypeScript", "Tailwind CSS", "Vite", "React Router"],
            database: ["PostgreSQL"],
            tools: ["Docker", "GitHub Actions", "NPM", "Render Cloud"]
        },

        architecture: {
            pattern: "Arquitectura Cliente-Servidor Desacoplada (Backend Modular NestJS + SPA React)",
            description: "El backend está implementado en NestJS utilizando una arquitectura modular basada en módulos, controladores y servicios desacoplados con inyección de dependencias. El frontend funciona como una Single Page Application (SPA) reactiva que consume la API REST.",
            highlights: [
                "Arquitectura modular NestJS (Auth, Projects, Sprints, Tasks)",
                "Autenticación stateless basada en JWT con guardias de seguridad y middleware",
                "Mapeo Objeto-Relacional eficiente con TypeORM sobre PostgreSQL",
                "Diseño UI reactivo enfocado en experiencia de usuario ágil con React y Tailwind CSS"
            ]
        },

        infrastructure: {
            platform: "Docker, CI/CD con GitHub Actions & Render Cloud (Frontend Static + Backend Service)",
            description: "Infraestructura desacoplada y automatizada con pipeline CI/CD en GitHub Actions para compilar la SPA de React, verificar linters, ejecutar tests y desplegar tanto el servicio backend en NestJS como la instancia de PostgreSQL.",
            highlights: [
                "Pipeline de CI/CD integral automatizado mediante GitHub Actions",
                "Contenedorización con Docker para consistencia de entornos entre desarrollo y producción",
                "Despliegue desacoplado: Frontend SPA servido en CDN/Static y API Backend en Web Service",
                "Base de datos PostgreSQL en la nube con gestión de migraciones con TypeORM"
            ]
        },

        engineeringChallenges: [
            {
                challenge: "Sincronización del estado de tareas entre sprints y tableros sin provocar re-renders pesados en el cliente React.",
                solution: "Modularización del estado local con optimizaciones React (callbacks memoizados) y actualización optimista en la interfaz gráfica.",
                impact: "Sensación de fluidez inmediata en la manipulación del tablero Kanban sin retardos percebibles."
            },
            {
                challenge: "Mantenimiento de la integridad referencial al eliminar o mover tareas asociadas a sprints cerrados.",
                solution: "Definición de cascadas controladas y transacciones a nivel de base de datos mediante TypeORM Entity Managers.",
                impact: "Cero corrupción de datos en operaciones concurrentes de proyectos."
            }
        ]
    },

    "pf-evolution": {
        id: "pf-evolution",
        title: "PF-Evolution",
        tagline: "Gestor de Contraseñas Multiplataforma con Cifrado en Cliente y Sincronización Cloud",
        projectType: "Proyecto Personal",
        github: "https://github.com/Yago-Rueda-24/PF-Evolution",
        summary: "Aplicación de escritorio para la gestión y almacenamiento ultra-seguro de credenciales personales. Implementa un modelo de seguridad Zero-Knowledge donde los datos son cifrados localmente antes de ser sincronizados con la nube.",

        cvHighlights: [
            "Concebida y desarrollada una solución de escritorio para gestión criptográfica de credenciales en Electron y Supabase.",
            "Implementado motor criptográfico nativo en cliente usando AES-256-GCM para garantizar privacidad absoluta (Zero-Knowledge Architecture).",
            "Diseñado protocolo de derivación de claves maestras con PBKDF2 y salado único por usuario para resistir ataques de fuerza bruta.",
            "Integrada base de datos Supabase PostgreSQL configurando políticas de Row Level Security (RLS) para aislamiento total de cuentas.",
            "Implementadas funciones de protección en cliente como bloqueo automático tras periodos de inactividad y limpieza automática de secretos en el portapapeles."
        ],

        techStack: {
            core: ["Electron", "TypeScript", "Node.js Crypto API (AES-256-GCM, PBKDF2)"],
            cloudBaaS: ["Supabase", "PostgreSQL Cloud", "Row Level Security (RLS)"],
            frontend: ["React", "CSS Glassmorphism", "TypeScript"],
            tools: ["Git", "Electron Builder", "NPM"]
        },

        architecture: {
            pattern: "Arquitectura Zero-Knowledge con Bóveda Criptográfica en Cliente y BaaS Cloud",
            description: "Los datos sensibles nunca se envían en texto plano. Las claves maestras se derivan en la máquina local usando algoritmos criptográficos robustos. La base de datos cloud únicamente almacena blobs de datos cifrados imposibles de descifrar en el servidor.",
            highlights: [
                "Cifrado simétrico AES-256-GCM para la bóveda de claves",
                "Derivación de clave maestra mediante PBKDF2 con sal aleatoria",
                "Backend como Servicio (BaaS) Supabase con políticas Row Level Security (RLS)",
                "Autenticación segura de usuarios y sincronización cloud en tiempo real"
            ]
        },

        infrastructure: {
            platform: "Infraestructura Serverless Cloud (Supabase PostgreSQL BaaS) & Distribución Cliente",
            description: "Infraestructura cloud serverless respaldada por Supabase (PostgreSQL en la nube), donde la seguridad se aplica a nivel de infraestructura de base de datos mediante políticas de Row Level Security (RLS) y aislamiento multitenant por usuario.",
            highlights: [
                "Infraestructura cloud serverless sobre Supabase BaaS (PostgreSQL administrado)",
                "Políticas de seguridad RLS (Row Level Security) ejecutadas en el motor de base de datos cloud",
                "Comunicaciones seguras mediante peticiones HTTPS/TLS 1.3 con Supabase REST Client",
                "Arquitectura distribuida resiliente con sincronización local-cloud ante pérdida de conectividad"
            ]
        },

        engineeringChallenges: [
            {
                challenge: "Garantizar que un compromiso de la base de datos cloud no exponga las credenciales de los usuarios.",
                solution: "Cifrado estricto antes de cualquier llamada a la API de Supabase; la nube sólo almacena datos encriptados y el IV (Vector de Inicialización).",
                impact: "Garantía de confidencialidad absoluta de las contraseñas guardadas."
            },
            {
                challenge: "Evitar la fuga de credenciales a través del portapapeles del sistema operativo tras copiar una contraseña.",
                solution: "Implementación de un temporizador en el proceso principal que borra el buffer del portapapeles transcurridos 15 segundos.",
                impact: "Mitigación de riesgos de malware de escucha de portapapeles."
            }
        ]
    }
};
