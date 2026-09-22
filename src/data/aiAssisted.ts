import type { AIAssistedContent } from '../types/aiAssisted';

export const aiAssistedData: AIAssistedContent = {
  introduction:
    'Utilizo herramientas de inteligencia artificial como apoyo durante distintas actividades de desarrollo de software, principalmente para investigación, análisis, debugging, refactorización, testing, documentación y automatización.',
  practices: [
    {
      id: 'investigacion-tecnica',
      title: 'Investigación técnica',
      description:
        'Apoyo para explorar documentación, conceptos técnicos y alternativas de implementación antes de tomar decisiones.',
    },
    {
      id: 'analisis',
      title: 'Análisis',
      description:
        'Apoyo en la revisión de requerimientos, código, errores y posibles enfoques para comprender mejor un problema.',
    },
    {
      id: 'desarrollo-debugging',
      title: 'Desarrollo y debugging',
      description:
        'Apoyo durante la implementación de funcionalidades, identificación de errores y evaluación de posibles correcciones.',
    },
    {
      id: 'refactorizacion',
      title: 'Refactorización',
      description:
        'Apoyo para revisar código existente y proponer mejoras de legibilidad, estructura y mantenibilidad.',
    },
    {
      id: 'testing',
      title: 'Testing',
      description:
        'Apoyo en la identificación de casos de prueba, revisión de escenarios y análisis de comportamientos inesperados.',
    },
    {
      id: 'documentacion',
      title: 'Documentación',
      description:
        'Apoyo para estructurar documentación técnica, explicar cambios y registrar información relevante de una solución.',
    },
    {
      id: 'automatizacion',
      title: 'Automatización',
      description:
        'Apoyo para analizar tareas repetitivas y desarrollar soluciones que reduzcan trabajo manual cuando resulta técnicamente conveniente.',
    },
  ],
  toolsHeading: 'Herramientas de apoyo',
  toolCategories: [
    { id: 'ai-assistants', label: 'Asistentes de IA' },
    { id: 'research-documentation', label: 'Investigación y documentación' },
    { id: 'assisted-development', label: 'Desarrollo asistido' },
    { id: 'visual-communication', label: 'Presentaciones y comunicación visual' },
    { id: 'learning-exploration', label: 'Exploración / aprendizaje' },
  ],
  tools: [
    {
      id: 'chatgpt',
      name: 'ChatGPT',
      category: 'ai-assistants',
      usage:
        'Apoyo en investigación, análisis, debugging, documentación y revisión técnica.',
      status: 'used',
    },
    {
      id: 'claude',
      name: 'Claude',
      category: 'ai-assistants',
      status: 'used',
    },
    {
      id: 'gemini',
      name: 'Gemini',
      category: 'ai-assistants',
      usage:
        'Herramienta complementaria para investigación, análisis, contraste de enfoques y apoyo técnico.',
      status: 'used',
    },
    {
      id: 'deepseek',
      name: 'DeepSeek',
      category: 'ai-assistants',
      status: 'used',
    },
    {
      id: 'kimi',
      name: 'Kimi',
      category: 'ai-assistants',
      status: 'used',
    },
    {
      id: 'grok',
      name: 'Grok',
      category: 'ai-assistants',
      status: 'used',
    },
    {
      id: 'notebooklm',
      name: 'NotebookLM',
      category: 'research-documentation',
      status: 'used',
    },
    {
      id: 'antigravity',
      name: 'Antigravity',
      category: 'assisted-development',
      usage:
        'Apoyo dentro del flujo de desarrollo para análisis de código, implementación asistida, refactorización y trabajo incremental.',
      status: 'used',
    },
    {
      id: 'cursor',
      name: 'Cursor',
      category: 'assisted-development',
      status: 'used',
    },
    {
      id: 'gamma',
      name: 'Gamma',
      category: 'visual-communication',
      status: 'used',
    },
    {
      id: 'ollama',
      name: 'Ollama',
      category: 'learning-exploration',
      status: 'learning',
    },
  ],
  humanControlStatement:
    'Las respuestas y sugerencias generadas con IA se revisan antes de incorporarse a una solución. El análisis técnico, las pruebas y la validación final permanecen bajo control humano.',
};
