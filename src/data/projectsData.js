// src/data/projectsData.js

export const PROJECTS_DATA = {
    "finanzas-api": {
        id: "finanzas-api",
        title: "Finanzas API",
        tagline: "API RESTful de Análisis Financiero y Procesamiento de Transacciones",
        projectType: "Proyecto Personal",
        role: "Desarrollador Backend (Creador & Diseñador único)",
        period: "2024",
        status: "Desplegado en Producción",
        github: "https://github.com/Yago-Rueda-24/Finanzas",
        prod: "https://finanzas-lv2n.onrender.com",
        summary: "API RESTful desarrollada para la ingesta, clasificación y agregación analítica de datos de transacciones financieras. Diseñada como un prototipo técnico robusto enfocado en la aplicación de patrones de arquitectura limpia, validación rigurosa de datos y optimización de consultas de métricas temporales.",
        
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

        methodologies: [
            "Desarrollo Iterativo de Proyecto Personal",
            "Control de Versiones Git con convención de commits",
            "Diseño de APIs Contract-First (OpenAPI / Swagger specs)",
            "Testing Unitario con JUnit y Mockito para lógica de negocio"
        ],

        techStack: {
            backend: ["Java 17", "Spring Boot 3", "Spring Data JPA", "Hibernate", "REST APIs"],
            database: ["MySQL", "H2 (Testing)"],
            tools: ["Maven", "Postman", "Git", "Render Cloud"]
        },

        cvHighlights: [
            "Diseñada e implementada una API RESTful modular para el análisis agregativo de transacciones financieras personales en Java y Spring Boot.",
            "Implementado patrón Repository con Spring Data JPA para optimizar consultas analíticas por rangos de fecha y categorías.",
            "Configurado un controlador global de excepciones con `@ControllerAdvice` reduciendo fallos no controlados y estandarizando errores en formato JSON RFC 7807.",
            "Construida suite de pruebas unitarias cubriendo casos límite en cálculos analíticos (totales, promedios móviles, agrupaciones mensuales).",
            "Desplegado el servicio backend en la plataforma Render conectada con base de datos administrada."
        ],

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
        role: "Desarrollador Fullstack (Arquitectura End-to-End)",
        period: "2024–2025",
        status: "Desplegado en Producción",
        github: "https://github.com/Yago-Rueda-24/AppTareas",
        prod: "https://apptareas-front.onrender.com",
        summary: "Plataforma web fullstack diseñada para la gestión integral de proyectos bajo metodologías ágiles (Scrum/Kanban). Permite la creación de sprints, organización de backlogs, seguimiento del estado de tareas y métricas de productividad de equipos.",

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

        methodologies: [
            "Aplicación práctica de principios Scrum (Backlogs, Sprints, Kanban)",
            "Desarrollo Fullstack orientado a componentes reutilizables",
            "Integración Continua y Despliegue Continuo (CI/CD) con GitHub Actions",
            "Estrategia de Branching por features en Git"
        ],

        techStack: {
            backend: ["TypeScript", "NestJS", "Node.js", "TypeORM", "JWT", "REST APIs"],
            frontend: ["React", "TypeScript", "Tailwind CSS", "Vite", "React Router"],
            database: ["PostgreSQL"],
            tools: ["Docker", "GitHub Actions", "NPM", "Render Cloud"]
        },

        cvHighlights: [
            "Arquitectura y desarrollo end-to-end de una plataforma de gestión Scrum con frontend React en TypeScript y backend en NestJS.",
            "Diseñado e implementado esquema relacional PostgreSQL gestionando relaciones complejas entre usuarios, equipos, proyectos, sprints y épicas mediante TypeORM.",
            "Implementado sistema seguro de autenticación y autorización mediante Tokens JWT y Guardias de NestJS para control de acceso granular.",
            "Desarrollada interfaz de usuario SPA reactiva con actualización dinámica del tablero Kanban y filtrado de tareas en tiempo real.",
            "Automatizado pipeline de CI/CD utilizando GitHub Actions para testing y despliegue automático del frontend y backend en Render."
        ],

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

    "workstation": {
        id: "workstation",
        title: "WorkStation",
        tagline: "Aplicación de Escritorio Modular para Automatización de Entornos de Trabajo",
        projectType: "Proyecto Personal",
        role: "Ingeniero de Software de Escritorio",
        period: "2024",
        status: "Código Abierto / GitHub",
        github: "https://github.com/Yago-Rueda-24/WorkStation",
        summary: "Aplicación de escritorio construida sobre Electron para resolver las fricciones de configuración manual de entornos de desarrollo. Permite automatizar flujos de trabajo, lanzar herramientas integradas y gestionar perfiles de trabajo minimizando el setup inicial.",

        architecture: {
            pattern: "Arquitectura Multi-Proceso Electron (Main & Renderer Process) con Puente IPC Seguro",
            description: "Estructura basada en la separación estricta del proceso Principal de Node.js (Main Process) y los procesos de Renderizado de UI (Renderer Process). La comunicación entre ambos se realiza exclusivamente mediante un puente de IPC (Inter-Process Communication) asíncrono con aislamiento de contexto.",
            highlights: [
                "Aislamiento de contexto habilitado (`contextIsolation: true`) para máxima seguridad",
                "Puente IPC seguro definido en `preload.js` exponiendo únicamente métodos estrictamente tipados",
                "Arquitectura modular para la incorporación rápida de nuevos módulos de automatización",
                "Persistencia de datos local ultra-rápida mediante motor de base de datos embebido SQLite"
            ]
        },

        infrastructure: {
            platform: "Empaquetado Nativo Local, Pipeline Electron Builder & Node.js Native Runtime",
            description: "Infraestructura de empaquetado y distribución multiplataforma que gestiona dependencias nativas compiladas C/C++ (SQLite), generación de instaladores auto-contenidos y empaquetado optimizado de assets sin depender de servidores externos.",
            highlights: [
                "Pipeline de empaquetado y compilación multiplataforma mediante Electron Builder",
                "Integración y gestión de bindings nativos de Node.js (Better-SQLite3 / C++ Node-gyp)",
                "Empaquetado optimizado de assets estáticos y bundle de JavaScript vía Vite/Webpack",
                "Generación de instaladores ejecutables distribuidos sin dependencias externas requeridas"
            ]
        },

        methodologies: [
            "Arquitectura Modular de Software",
            "Principio de Menor Privilegio en Aplicaciones de Escritorio",
            "Local-First Architecture (Datos almacenados localmente sin dependencia de red)",
            "Control de Versiones y Empaquetado multiplataforma (Electron Builder)"
        ],

        techStack: {
            core: ["Electron", "TypeScript", "Node.js (IPC, FS, Process)"],
            frontend: ["React", "HTML5", "CSS3"],
            storage: ["SQLite", "Better-SQLite3"],
            tools: ["Electron Builder", "Vite / Webpack", "NPM"]
        },

        cvHighlights: [
            "Diseñada e implementada una aplicación de escritorio modular en Electron y TypeScript para reducir tiempos de configuración de entorno.",
            "Implementada arquitectura multi-proceso segura con aislamiento de contexto (`contextIsolation`), impidiendo el acceso directo de la interfaz web a APIs del sistema operativo.",
            "Desarrollado módulo de comunicación IPC asíncrona bidireccional entre Node.js y la vista web para ejecución controlada de scripts del sistema.",
            "Integrada base de datos relacional embebida SQLite para la persistencia local instantánea de perfiles y ajustes de usuario.",
            "Configurado pipeline de empaquetado con Electron Builder produciendo ejecutables optimizados para entornos de escritorio."
        ],

        engineeringChallenges: [
            {
                challenge: "Evitar vulnerabilidades de seguridad comunes en Electron por exposición indiscriminate de APIs de Node en la UI.",
                solution: "Creación de una API segura estricta en el script `preload` mediante `contextBridge.exposeInMainWorld` sin exponer el objeto `ipcRenderer` completo.",
                impact: "Protección total contra inyecciones de código arbitrario desde vistas renderizadas."
            },
            {
                challenge: "Consumo eficiente de memoria RAM en el proceso de renderizado durante la carga de múltiples módulos.",
                solution: "Implementación de carga perezosa (lazy loading) de módulos de herramientas y destrucción de eventos IPC inactivos.",
                impact: "Reducción significativa de la huella de memoria en reposo de la aplicación."
            }
        ]
    },

    "pf-evolution": {
        id: "pf-evolution",
        title: "PF-Evolution",
        tagline: "Gestor de Contraseñas Multiplataforma con Cifrado en Cliente y Sincronización Cloud",
        projectType: "Proyecto Personal",
        role: "Ingeniero de Software & Seguridad",
        period: "2024",
        status: "Código Abierto / GitHub",
        github: "https://github.com/Yago-Rueda-24/PF-Evolution",
        summary: "Aplicación de escritorio para la gestión y almacenamiento ultra-seguro de credenciales personales. Implementa un modelo de seguridad Zero-Knowledge donde los datos son cifrados localmente antes de ser sincronizados con la nube.",

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

        methodologies: [
            "Diseño Orientado a la Seguridad (Security-First Design)",
            "Modelo Zero-Knowledge (La clave maestra jamás sale del dispositivo del usuario)",
            "Prácticas de UX para Ciberseguridad (Generador de contraseñas, auto-lock por inactividad)",
            "Desarrollo Ágil de Software de Escritorio"
        ],

        techStack: {
            core: ["Electron", "TypeScript", "Node.js Crypto API (AES-256-GCM, PBKDF2)"],
            cloudBaaS: ["Supabase", "PostgreSQL Cloud", "Row Level Security (RLS)"],
            frontend: ["React", "CSS Glassmorphism", "TypeScript"],
            tools: ["Git", "Electron Builder", "NPM"]
        },

        cvHighlights: [
            "Concebida y desarrollada una solución de escritorio para gestión criptográfica de credenciales en Electron y Supabase.",
            "Implementado motor criptográfico nativo en cliente usando AES-256-GCM para garantizar privacidad absoluta (Zero-Knowledge Architecture).",
            "Diseñado protocolo de derivación de claves maestras con PBKDF2 y salado único por usuario para resistir ataques de fuerza bruta.",
            "Integrada base de datos Supabase PostgreSQL configurando políticas de Row Level Security (RLS) para aislamiento total de cuentas.",
            "Implementadas funciones de protección en cliente como bloqueo automático tras periodos de inactividad y limpieza automática de secretos en el portapapeles."
        ],

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
