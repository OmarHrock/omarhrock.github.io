import type { Experience } from '../types/experience';

export const experience: Experience[] = [
  {
    id: 'agp-geospatial',
    company: 'AGP Geospatial Company',
    role: 'Especialista en Redes y Sistemas',
    startDate: '2023',
    current: true,
    description: [
      'Administración y soporte de infraestructura tecnológica corporativa, incluyendo redes LAN y servicios internos.',
      'Desarrollo de aplicaciones internas con Python para automatización y optimización de procesos.',
      'Desarrollo de interfaces web con Angular para visualización y gestión de información.',
      'Diseño, desarrollo, mantenimiento, consumo e integración de APIs REST en aplicaciones empresariales.',
      'Ejecución de pruebas funcionales, validación de APIs mediante Postman y apoyo en actividades de aseguramiento de calidad (QA).',
      'Análisis básico de vulnerabilidades en aplicaciones web con OWASP ZAP y aplicación de buenas prácticas de seguridad.',
      'Administración básica de sistemas Linux y documentación técnica de sistemas, incidencias, pruebas y mejoras implementadas.',
    ],
    technologies: [
      'Python',
      'Angular',
      'REST APIs',
      'Postman',
      'OWASP ZAP',
      'Linux',
    ],
  },
  {
    id: 'femac',
    company: 'FEMAC',
    role: 'Asesor comercial de productos tecnológicos',
    startDate: '2021',
    endDate: '2023',
    current: false,
    description: [
      'Atención al cliente y soporte técnico de productos tecnológicos.',
      'Asesoría en implementación y gestión de pedidos.',
      'Coordinación de entregas y soporte logístico.',
    ],
  },
  {
    id: 'mardis',
    company: 'MARDIS',
    role: 'Digitador',
    startDate: '2019',
    endDate: '2019',
    current: false,
    description: [
      'Digitalización y registro de documentos en sistemas electrónicos.',
      'Organización y categorización de bases de datos.',
    ],
  },
];
