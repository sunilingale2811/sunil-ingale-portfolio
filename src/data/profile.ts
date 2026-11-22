// All portfolio content lives here. Edit this file to update the site.

export const profile = {
  name: 'Sunil Ingale',
  title: 'Senior Frontend Developer',
  company: 'Simplify Healthcare',
  location: 'Pune, Maharashtra, India',
  openTo: 'Pune · Mumbai · Hyderabad · Remote',
  email: 'sunilingale2811@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sunil-ingale-727726451',
  summary:
    'I build frontends for complex enterprise products, mostly in healthcare SaaS. Right now I work on a multi-tenant data and AI platform built as React micro-frontends on Azure: data modelling and ingestion screens, AI tool gateway features, and the micro-frontend platform underneath.',
  focus: ['React 19 + TypeScript', 'Micro-frontends (Nx, Module Federation)', 'AI tool integrations (MCP, Azure OpenAI)'],
};

export type Role = {
  company: string;
  title: string;
  start: string; // YYYY-MM
  end: string | null; // null = present
  location: string;
  type: string;
  points: string[];
  stack: string[];
};

export const experience: Role[] = [
  {
    company: 'Simplify Healthcare',
    title: 'Senior Frontend Developer',
    start: '2024-10',
    end: null,
    location: 'Pune · On-site',
    type: 'Full-time',
    points: [
      'Built data modelling and mapping screens (domains, entities, attributes, relationships mapped to source tables) with draft, validate and publish workflows and CASL role-based permissions.',
      'Built data ingestion configuration screens (schema mapping, transformation and formatting rules, event tracking) with the matching .NET Core API changes.',
      'Delivered data exploration, entity matching and approval-workflow screens.',
      'Built MCP gateway features (OpenAPI bulk tool import, tool search, safety guardrails) so AI agents can call tools safely.',
      'Migrated the IntegrateX workflow automation UI into a micro-frontend platform (Nx, Webpack Module Federation) with 10+ modules; one Docker image serves every environment.',
      'Extended the .NET 8 API with 13 ETL connectors and hybrid payload encryption; traced and fixed an out-of-memory failure in workflow loops using Kibana/OTLP logs.',
      'Extended CI/CD with Azure Pipelines and Helm, and wrote SQL release scripts for QA, UAT and demo.',
    ],
    stack: ['React 19', 'TypeScript', 'Nx', 'Module Federation', 'TanStack Query', 'CASL', 'ASP.NET Core 8', 'AKS'],
  },
  {
    company: 'Harbinger Group',
    title: 'Software Engineer',
    start: '2023-02',
    end: '2024-05',
    location: 'Pune · On-site',
    type: 'Full-time',
    points: [
      'Developed enterprise frontend applications with React.js, TypeScript and Next.js, focused on reusable components and cross-browser compatibility.',
      'Implemented state management with Redux Toolkit and Context API across multi-step workflows, reducing state-related bugs across 5+ features.',
      'Improved application performance by ~35% using lazy loading, code splitting and memoization.',
      'Built CRUD APIs with Node.js and integrated REST APIs; worked in Agile sprints with code reviews and unit testing.',
    ],
    stack: ['React.js', 'Next.js', 'TypeScript', 'Redux Toolkit', 'Node.js'],
  },
  {
    company: 'Netxco Techno Services',
    title: 'Frontend Developer',
    start: '2021-11',
    end: '2022-12',
    location: 'Hyderabad · On-site',
    type: 'Full-time',
    points: [
      'Delivered two full client projects with React.js, JavaScript ES6+ and REST API integration.',
      'Completed a 6-month intensive programme in React.js, JavaScript, REST APIs and Git, applied directly to client work.',
      'Integrated backend APIs for reliable data flow between frontend and server-side services.',
    ],
    stack: ['React.js', 'JavaScript', 'REST APIs', 'Git'],
  },
];

export type Project = {
  name: string;
  summary: string;
  points: string[];
  stack: string[];
  status: 'Production' | 'Delivered';
  period: string;
};

export const projects: Project[] = [
  {
    name: 'Healthcare Data & AI Platform',
    summary: 'Multi-tenant platform built as independently deployed React micro-frontends behind one sign-in.',
    points: [
      'Data modelling, mapping and ingestion screens with draft → validate → publish and role-based review.',
      'MCP tool gateway features so AI agents can call tools safely.',
      'Shared dependencies, CSS isolation between hosts, runtime config: one image for every environment.',
    ],
    stack: ['React 19', 'TypeScript', 'Nx', 'Module Federation', 'Tailwind', 'shadcn/ui', 'TanStack Query', 'Zod', 'CASL', 'Azure OpenAI', 'Docker', 'Helm'],
    status: 'Production',
    period: '2024 – now',
  },
  {
    name: 'IntegrateX · Workflow Automation',
    summary: 'Visual, low-code platform to design, configure and run integration and data workflows.',
    points: [
      'Workflow builder on React Flow: node and transformer panels, run logs, multi-file Monaco editor.',
      'ETL source/target config for Cosmos DB, Neo4j, Azure AI Search, Weaviate, Qdrant, Databricks.',
      'Schema-driven dynamic forms (JSON schema → Zod), AI Assistant chat, webhooks, scheduler.',
    ],
    stack: ['React 19', 'TypeScript', 'Vite', 'React Flow', 'Monaco', 'Zustand', 'React Hook Form', 'Zod', 'MSAL'],
    status: 'Production',
    period: '2024 – now',
  },
  {
    name: 'Headless LMS · Adobe Integration',
    summary: 'Custom headless learning platform with e-commerce for free and paid courses.',
    points: [
      'Enrolment and purchase flows; self-paced, live and project-based learning.',
      'Automated certificates and project assignment from learner performance.',
    ],
    stack: ['React.js', 'Node.js', 'Express.js', 'Bootstrap', 'REST APIs'],
    status: 'Delivered',
    period: 'Client project',
  },
  {
    name: 'College Contact · Mentorship',
    summary: 'Platform connecting students and faculty across academic, athletic and extracurricular areas.',
    points: ['Calendly scheduling and Stripe payments.', 'Lazy loading and code splitting for fast page loads.'],
    stack: ['React.js', 'Calendly API', 'Stripe', 'REST APIs'],
    status: 'Delivered',
    period: 'Client project',
  },
];

export type SkillGroup = { group: string; level: 'Expert' | 'Advanced' | 'Working'; items: string[] };

export const skills: SkillGroup[] = [
  { group: 'Frontend', level: 'Expert', items: ['React.js (19)', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'React Hooks', 'Responsive Web Design'] },
  { group: 'Architecture & build', level: 'Advanced', items: ['Micro-frontends', 'Webpack Module Federation', 'Nx Monorepo', 'Webpack', 'Vite', 'Runtime Configuration', 'Shared Component Libraries'] },
  { group: 'UI & styling', level: 'Expert', items: ['Tailwind CSS', 'shadcn/ui', 'Material UI', 'Bootstrap', 'Design Tokens', 'React Flow', 'Monaco Editor'] },
  { group: 'State & data', level: 'Expert', items: ['Redux', 'Redux Toolkit', 'Zustand', 'TanStack Query', 'TanStack Router', 'Context API', 'React Hook Form', 'Axios'] },
  { group: 'API, validation & security', level: 'Advanced', items: ['REST APIs', 'OpenAPI typed clients', 'Zod', 'JWT', 'XML', 'API Security', 'Azure AD B2C (MSAL)', 'CASL (RBAC)', 'Web Crypto API'] },
  { group: 'AI & LLM', level: 'Advanced', items: ['Azure OpenAI', 'Model Context Protocol (MCP)', 'AI Agent Guardrails'] },
  { group: 'Backend & runtime', level: 'Working', items: ['Node.js', 'Express.js', 'NestJS', 'CRUD APIs', 'ASP.NET Core 8', 'EF Core', 'PostgreSQL', 'SQL'] },
  { group: 'Cloud & DevOps', level: 'Advanced', items: ['Azure AKS', 'Azure App Service', 'Azure Functions', 'Azure DevOps', 'Azure Pipelines', 'Azure Key Vault', 'App Configuration', 'Docker', 'Helm', 'nginx'] },
  { group: 'Testing & observability', level: 'Working', items: ['Jest', 'Playwright', 'OpenTelemetry', 'Elastic / Kibana', 'Application Insights'] },
  { group: 'Tools & practices', level: 'Advanced', items: ['Git', 'GitHub', 'GitLab', 'JIRA', 'Agile/Scrum', 'SDLC', 'Code Reviews', 'Performance Optimisation', 'LMS Platforms', 'Claude Code'] },
];

export const education = {
  degree: 'Bachelor of Science (B.Sc.)',
  school: 'Swami Ramanand Teerth Marathwada University, Nanded',
  period: 'Jun 2014 – Mar 2017',
};

export const achievements = [
  'Certificate of Appreciation for Outstanding Dedication, Harbinger Group',
  '2 years of service with the National Service Scheme (NSS)',
];

export const languages = [
  { name: 'English', level: 'Professional' },
  { name: 'Hindi', level: 'Native' },
  { name: 'Marathi', level: 'Native' },
];
