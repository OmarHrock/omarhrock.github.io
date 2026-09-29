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
  },
];
