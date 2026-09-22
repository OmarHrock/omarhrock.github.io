# Portafolio profesional — Omar Arias

Portafolio web profesional orientado a presentar experiencia laboral, competencias técnicas, proceso de trabajo y proyectos en desarrollo de software.

## Sobre el proyecto

Este proyecto constituye el portafolio digital de Omar Arias, Software Developer. Ha sido diseñado e implementado con un enfoque centrado en rendimiento, accesibilidad semántica, claridad comunicativa y arquitectura modular. Su propósito es exponer de forma transparente y estructurada la trayectoria profesional, las metodologías de trabajo y las capacidades técnicas desarrolladas.

## Stack del portafolio

El sitio ha sido desarrollado utilizando las siguientes tecnologías web modernas:

- **Astro (v7)**: Framework web utilizado como motor generador de sitios estáticos (SSG), permitiendo entregar HTML puro con cero sobrecarga de JavaScript en el cliente para el contenido informativo. *(Nota: Astro es la herramienta seleccionada para la arquitectura y compilación de este portafolio; no constituye parte de la experiencia previa en sistemas empresariales de Omar).*
- **TypeScript**: Tipado estático estricto aplicado en todos los modelos de datos, contratos de componentes y utilidades del proyecto.
- **CSS nativo**: Sistema de diseño con variables CSS (`custom properties`), componentes desacoplados, diseño adaptable (*responsive*) y soporte de tema visual oscuro sin librerías externas.

## Características

- **Generación estática (SSG)**: Tiempos de carga mínimos y alta disponibilidad al compilarse como páginas estáticas optimizadas.
- **Diseño responsive**: Adaptabilidad fluida para dispositivos móviles, tabletas y pantallas de escritorio.
- **Arquitectura basada en componentes**: Modularización en componentes reutilizables con responsabilidades semánticas bien delimitadas.
- **Datos profesionales centralizados**: Separación estricta entre la estructura de presentación y los datos profesionales tipados.
- **Navegación y accesibilidad**: Prácticas de accesibilidad alineadas con WCAG 2.1 AA, incluyendo contraste, navegación por teclado, estados de foco visibles, jerarquía semántica y soporte para movimiento reducido (`prefers-reduced-motion`).
- **Modo oscuro nativo**: Paleta de colores sobria y profesional diseñada para lectura prolongada y confort visual.
- **Desarrollo asistido por IA (AI-Assisted Development)**: Sección profesional que documenta el uso de inteligencia artificial como práctica complementaria dentro del flujo de análisis, investigación y desarrollo de software bajo estricto control humano.

## Estructura del proyecto

La arquitectura interna del código fuente se organiza de la siguiente manera:

```text
src/
├── components/          # Componentes Astro organizados por secciones y elementos UI
│   ├── layout/          # Encabezado (Header), pie de página (Footer), navegación
│   ├── sections/        # Secciones principales del portafolio
│   └── ui/              # Componentes de interfaz reutilizables
├── data/                # Fuentes de datos profesionales tipadas (perfil, experiencia, etc.)
├── layouts/             # Plantilla base HTML con metadatos y estructura global
├── pages/               # Rutas estáticas de la aplicación (index.astro)
├── styles/              # Variables CSS globales, tipografía y estilos base
└── types/               # Definiciones e interfaces TypeScript
```

## Secciones del portafolio

1. **Inicio**: Presentación de identidad profesional, resumen técnico, stack principal y accesos rápidos de navegación.
2. **Perfil profesional**: Enfoque de desarrollo, áreas de competencia y valores de ingeniería.
3. **Tecnologías**: Competencias técnicas agrupadas por categorías (Backend, Frontend, Bases de datos, Herramientas).
4. **Experiencia**: Trayectoria laboral documentada con responsabilidades, impacto técnico y tecnologías utilizadas.
5. **Proyectos**: Estructura modular preparada a nivel arquitectónico para incorporar casos de estudio documentados. *(Actualmente no cuenta con proyectos publicados; se integrarán progresivamente)*.
6. **Cómo trabajo**: Principios metodológicos y prácticas aplicadas durante el ciclo de vida del software.
7. **AI-Assisted Development**: Enfoque profesional sobre la incorporación de herramientas de IA como apoyo analítico y técnico en el desarrollo, preservando el rol principal de Software Developer.
8. **Formación**: Trayectoria académica formal y nivel de competencia en idioma inglés.
9. **Contacto**: Canales de comunicación profesional habilitados (correo electrónico y perfil de LinkedIn).

## Instalación y ejecución local

### Requisitos previos

- Node.js versión `>= 22.12.0`
- npm

### Pasos

1. Clonar el repositorio una vez publicado en la plataforma de control de versiones.
2. Acceder al directorio raíz del proyecto:
   ```bash
   cd PORTAFOLIO
   ```
3. Instalar las dependencias del proyecto de forma reproducible mediante el archivo de bloqueo:
   ```bash
   npm ci
   ```
   *(Nota: Se puede utilizar `npm install` si se requiere incorporar o actualizar paquetes en un entorno de desarrollo).*
4. Iniciar el servidor local de desarrollo:
   ```bash
   npm run dev
   ```
   El sitio estará disponible localmente en `http://localhost:4321`.

## Comandos disponibles

Los scripts definidos en el entorno de trabajo son:

| Comando | Descripción |
| :--- | :--- |
| `npm ci` | Realiza una instalación limpia y determinista de dependencias según `package-lock.json`. |
| `npm install` | Instala dependencias del proyecto y actualiza el árbol de paquetes si aplica. |
| `npm run dev` | Inicia el servidor de desarrollo local de Astro con recarga en caliente (*HMR*). |
| `npm run check` | Ejecuta el diagnóstico de tipos TypeScript y la validación de sintaxis con `@astrojs/check`. |
| `npm run build` | Compila y genera el sitio estático optimizado para producción en la carpeta `dist/`. |
| `npm run preview` | Levanta un servidor local para previsualizar la compilación generada en `dist/`. |
