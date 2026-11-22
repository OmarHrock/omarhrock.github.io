import type { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 'salesflow-platform',
    title: 'SalesFlow Integration Platform',
    shortDescription:
      'Plataforma de orquestación asíncrona de ventas con procesamiento desacoplado, trazabilidad, seguridad RBAC y ejecución contenerizada.',
    context:
      'Proyecto técnico desarrollado para demostrar integración de servicios empresariales y procesamiento asíncrono de transacciones.',
    problem:
      'Coordinar el procesamiento de ventas entre varios servicios manteniendo persistencia, trazabilidad, control de errores y seguridad.',
    solution:
      'Arquitectura con FastAPI, PostgreSQL, RabbitMQ y worker asíncrono, complementada con frontend Angular, autenticación JWT/RBAC y Docker.',
    role:
      'Diseño de arquitectura, backend, frontend, integración, seguridad, pruebas, Docker y validación funcional.',
    technologies: [
      'Angular',
      'TypeScript',
      'FastAPI',
      'Python',
      'PostgreSQL',
      'RabbitMQ',
      'Docker',
      'JWT',
      'RBAC',
    ],
    results: [
      '123 pruebas backend superadas',
      '157 pruebas frontend superadas',
      'Pipeline asíncrono con estados de procesamiento y manejo de errores',
      'Modo DEMO seguro con rol VISOR',
      'Comprobantes demostrativos descargables',
      'Orchestrator validado como healthy',
      'Worker conectado correctamente a RabbitMQ',
      'Health check HTTP 200',
    ],
    repositoryUrl: 'https://github.com/OmarHrock/salesflow-platform',
    status: 'completed',
    images: [
      '/projects/salesflow/dashboard.webp',
    ],
  },
  {
    id: 'webmap',
    title: 'WebMap — Sistema Web GIS de Gestión Predial',
    shortDescription:
      'Aplicación web geoespacial para digitalizar, visualizar y administrar predios mediante mapas interactivos, validación topológica y cálculo geodésico de superficies.',
    context:
      'Desarrollo full-stack geoespacial con Angular, Leaflet, FastAPI y PostgreSQL/PostGIS.',
    problem:
      'Desarrollar una plataforma para registrar y consultar geometrías prediales, garantizar su integridad espacial y organizar la información por usuario.',
    solution:
      'Integración de Angular y Leaflet con una API FastAPI y PostgreSQL/PostGIS para procesar geometrías GeoJSON, validar polígonos y calcular superficies geodésicas.',
    role:
      'Desarrollo full-stack, integración de herramientas cartográficas, construcción de API REST, modelado espacial y autenticación JWT.',
    technologies: [
      'Angular 20',
      'TypeScript',
      'Leaflet',
      'Leaflet.Draw',
      'Python',
      'FastAPI',
      'PostgreSQL',
      'PostGIS',
      'GeoAlchemy2',
      'JWT',
    ],
    results: [
      'Digitalización interactiva de polígonos con Leaflet.Draw.',
      'Validación topológica de geometrías con PostGIS ST_IsValid.',
      'Cálculo geodésico de superficies en hectáreas mediante ST_Area(Geography).',
      'Registro y consulta de predios con aislamiento por usuario.',
      'Tres mapas base: OpenStreetMap, Esri World Imagery y Esri World Topo.',
      'Selección sincronizada mapa-lista y controles cartográficos personalizados.',
      'Interfaz responsive con temas claro y oscuro.',
    ],
    repositoryUrl: 'https://github.com/OmarHrock/webmap',
    isRepositoryPrivate: true,
    status: 'completed',
    images: [
      '/projects/webmap/webmap-dashboard.webp',
      '/projects/webmap/webmap-login.webp',
    ],
  },
  {
    id: 'dataflow-analytics',
    title: 'DataFlow Analytics',
    shortDescription:
      'Plataforma de preparación, validación y análisis de datos empresariales que permite importar Excel y CSV, detectar incidencias, aplicar recetas de limpieza reutilizables, generar métricas y gráficos y exportar informes ejecutivos en Excel.',
    context:
      'Desarrollo full-stack de procesamiento, calidad y analítica de datos con Angular, FastAPI, Pandas, OpenPyXL y Apache ECharts.',
    problem:
      'Estandarizar la importación, diagnóstico y limpieza de archivos Excel y CSV manteniendo trazabilidad por fila antes de su análisis y generación de reportes.',
    solution:
      'Integración de Angular 20 y Apache ECharts con una API FastAPI, Pandas, OpenPyXL y SQLite para diagnosticar calidad, aplicar recetas de limpieza reutilizables y exportar informes en Excel.',
    role:
      'Desarrollo full-stack, motor de diagnóstico y limpieza de datos, visualización analítica interactiva y exportación automatizada de reportes.',
    technologies: [
      'Angular 20',
      'TypeScript',
      'FastAPI',
      'Python',
      'Pandas',
      'OpenPyXL',
      'Apache ECharts',
      'SQLite',
    ],
    results: [
      'Importación y previsualización de Excel y CSV.',
      'Diagnóstico de calidad y trazabilidad por fila.',
      'Limpieza controlada con recetas reutilizables.',
      'Analíticas empresariales con filtros y agrupaciones.',
      'Informes Excel con resumen, datos procesados, incidencias y auditoría.',
    ],
    repositoryUrl: 'https://github.com/OmarHrock/dataflow-analytics',
    isRepositoryPrivate: true,
    status: 'completed',
    images: [
      '/projects/dataflow/02-analiticas.png',
      '/projects/dataflow/03-limpieza-recetas.png',
      '/projects/dataflow/04-calidad-datos.png',
      '/projects/dataflow/05-exportar-reportes.png',
      '/projects/dataflow/01-vision-general.png',
    ],
  },
];
