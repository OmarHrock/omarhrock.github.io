import type { WorkProcessStep } from '../types/workProcess';

export const workProcess: WorkProcessStep[] = [
  {
    id: 'analisis-diseno',
    title: 'Analizar y diseñar',
    description:
      'Comprensión del problema, requerimientos y restricciones técnicas para definir la arquitectura, componentes y enfoque de solución.',
  },
  {
    id: 'desarrollo-integracion',
    title: 'Desarrollar e integrar',
    description:
      'Implementación modular de funcionalidades y lógica de negocio, conectando componentes, APIs REST, bases de datos y servicios.',
  },
  {
    id: 'pruebas-validacion',
    title: 'Probar y validar',
    description:
      'Ejecución de pruebas funcionales, aseguramiento de calidad (QA), verificación de flujos y validación del comportamiento esperado.',
  },
  {
    id: 'documentacion-mejora',
    title: 'Documentar y mejorar',
    description:
      'Registro de decisiones técnicas, control de versiones, documentación de arquitectura y soporte continuo para mantenibilidad.',
  },
];
