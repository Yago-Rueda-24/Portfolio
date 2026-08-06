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

    "vps-infrastructure": {
        id: "vps-infrastructure",
        title: "Gestión & Despliegue en VPS Linux",
        tagline: "Infraestructura de Servidor Linux para Alojamiento Público, Orquestación Contenedorizada y Seguridad en Red",
        projectType: "Infraestructura & DevOps",
        summary: "Proyecto de administración de sistemas y DevOps enfocado en la configuración, securización y mantenimiento de un servidor VPS Linux (Ubuntu Server). Permite el despliegue público y orquestación de aplicaciones mediante Docker y Docker Compose, la gestión de tráfico HTTP/HTTPS a través de un Proxy Inverso con certificados SSL/TLS automatizados, y la protección de la infraestructura mediante hardening de seguridad y cortafuegos (UFW).",

        cvHighlights: [
            "Desplegado y configurado un servidor VPS en producción sobre Linux (Ubuntu Server) para alojar y servir aplicaciones web de forma pública y continua.",
            "Implementada arquitectura contenedorizada con Docker y Docker Compose, aislando servicios y garantizando despliegues repetibles sin conflictos de entorno.",
            "Configurado Proxy Inverso (Caddy) para enrutamiento de nombres de dominio, terminación SSL/TLS automatizada (Let's Encrypt) y gestión eficiente de cabeceras HTTP.",
            "Aplicadas políticas de Hardening de seguridad en Linux: configuración estricta de Firewall (UFW), restricción de puertos expuestos y autenticación SSH por clave pública.",
            "Diseñado e integrado flujo de despliegue continuo (CI/CD) conectado con GitHub Actions para la actualización automatizada de contenedores en producción."
        ],

        techStack: {
            sysadmin: ["Linux (Ubuntu Server)", "Bash / Shell Scripting", "Systemd", "SSH Hardening"],
            devops: ["Docker", "Docker Compose", "GitHub Actions", "CI/CD Pipelines"],
            security: ["UFW Firewall", "Caddy Reverse Proxy", "SSL/TLS (Let's Encrypt)", "DNS Routing"],
            tools: ["Git", "Certbot", "Cron / Timers", "Logs & Monitoring"]
        },

        architecture: {
            pattern: "Arquitectura de Servidor Linux Contenedorizado con Proxy Inverso & Aislamiento de Red",
            description: "Infraestructura centralizada en un servidor Linux VPS donde el punto de entrada es un Proxy Inverso que recibe todo el tráfico entrante en los puertos 80/443. El proxy valida y termina los certificados SSL/TLS antes de redirigir internamente las peticiones hacia redes virtuales aisladas de Docker donde se ejecutan los distintos contenedores de aplicación.",
            highlights: [
                "Punto de entrada único mediante Proxy Inverso con certificados SSL/TLS automáticos",
                "Redes internas virtuales de Docker (Bridge Networks) para aislar bases de datos de la red pública",
                "Gestión de ciclo de vida de aplicaciones mediante Docker Compose y variables de entorno seguras",
                "Monitoreo de procesos y reinicios automáticos ante fallos mediante políticas de restart en contenedores"
            ]
        },

        infrastructure: {
            platform: "VPS Linux (Ubuntu Server) + Docker Engine + Nginx + UFW Firewall",
            description: "Entorno de servidor virtual privado configurado desde cero en Linux, con medidas activas de seguridad perimetral, gestión de zonas DNS, renovación automática de certificados SSL y despliegue continuo impulsado por GitHub Actions.",
            highlights: [
                "Hardening de servidor: cierre de puertos innecesarios con UFW, desactivación de login root e inspección de logs de acceso",
                "Certificados de seguridad SSL/TLS gratuitos y autorenovables",
                "Despliegue automatizado con GitHub Actions ejecutando despliegues en producción",
                "Políticas de respaldo y persistencia de datos usando Volúmenes de Docker montados en almacenamiento host"
            ]
        },

        engineeringChallenges: [
            {
                challenge: "Exponer múltiples proyectos web en el mismo servidor VPS compartiendo el único puerto 443 sin colisiones de nombres de dominio o certificados.",
                solution: "Configuración de Nginx como Proxy Inverso centralizado utilizando Server Blocks (Virtual Hosts) y asignación automática de certificados SSL de Let's Encrypt para cada subdominio.",
                impact: "Capacidad de albergar múltiples aplicaciones e APIs independientes en un único servidor con cifrado HTTPS completo y enrutamiento transparente."
            },
            {
                challenge: "Prevenir accesos no autorizados y escaneos de puertos maliciosos a la infraestructura de base de datos y puertos internos de aplicaciones.",
                solution: "Configuración de reglas estrictas en el cortafuegos UFW para bloquear todo el tráfico entrante salvo los puertos 80, 443 y SSH seguro, dejando las bases de datos accesibles únicamente a través de la red interna privada de Docker.",
                impact: "Superficie de ataque drásticamente reducida al no exponer ningún servicio interno directamente a internet."
            }
        ]
    }
};

