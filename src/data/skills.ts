import type { Skill } from '../types/skill';

export const skills: Skill[] = [
  // Desarrollo
  { name: 'Python', category: 'development', featured: true },
  { name: 'Angular', category: 'development', featured: true },
  { name: 'HTML5', category: 'development' },
  { name: 'CSS3', category: 'development' },
  { name: 'JavaScript', category: 'development' },

  // Datos
  { name: 'SQL', category: 'data', featured: true },
  { name: 'PostgreSQL', category: 'data' },
  { name: 'MySQL', category: 'data' },
  { name: 'SQLite', category: 'data' },

  // APIs y testing
  { name: 'REST APIs', category: 'apis-testing', featured: true },
  { name: 'Postman', category: 'apis-testing' },
  { name: 'Testing funcional', category: 'apis-testing' },
  { name: 'Validación JSON', category: 'apis-testing' },

  // Herramientas y seguridad
  { name: 'Git', category: 'tools-security' },
  { name: 'Gitea', category: 'tools-security' },
  { name: 'OWASP ZAP', category: 'tools-security' },

  // Sistemas e infraestructura (Complementario)
  { name: 'Linux', category: 'systems-infrastructure' },
  { name: 'Windows Server', category: 'systems-infrastructure' },
  { name: 'Active Directory', category: 'systems-infrastructure' },
  { name: 'Redes LAN/WAN', category: 'systems-infrastructure' },
  { name: 'Routers y Switches', category: 'systems-infrastructure' },
];
