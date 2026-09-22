import type { WorkProcessStep } from '../types/workProcess';

export const workProcess: WorkProcessStep[] = [
  {
    id: 'analisis',
    title: 'Análisis',
    description: 'Comprensión del problema, requerimientos y restricciones antes de iniciar la implementación.',
    aiAssisted: true,
  },
  {
    id: 'diseno-solucion',
    title: 'Diseño de solución',
    description: 'Definición del enfoque técnico, estructura y componentes necesarios para resolver el problema.',
    aiAssisted: true,
  },
  {
    id: 'desarrollo',
    title: 'Desarrollo',
    description: 'Implementación de funcionalidades y lógica de la solución utilizando las tecnologías definidas para el proyecto.',
    aiAssisted: true,
  },
  {
    id: 'integracion',
    title: 'Integración',
    description: 'Conexión de componentes, servicios, APIs y fuentes de información necesarias para el funcionamiento de la solución.',
    aiAssisted: false,
  },
  {
    id: 'testing',
    title: 'Testing',
    description: 'Ejecución de pruebas funcionales y técnicas para detectar errores y verificar el comportamiento esperado.',
    aiAssisted: true,
  },
  {
    id: 'validacion',
    title: 'Validación',
    description: 'Revisión de resultados y funcionalidades para confirmar que la solución cumple el comportamiento esperado.',
    aiAssisted: false,
  },
  {
    id: 'documentacion',
    title: 'Documentación',
    description: 'Registro de funcionamiento, decisiones técnicas, incidencias y cambios relevantes para facilitar mantenimiento y seguimiento.',
    aiAssisted: true,
  },
];
