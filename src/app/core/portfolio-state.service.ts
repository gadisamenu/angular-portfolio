import { Injectable, signal } from '@angular/core';

export type WindowId = 'finder' | 'project' | 'resume' | 'availability' | 'preview';

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  role: string;
  company: string;
  period: string;
  badge?: string;
  metrics?: string[];
  highlights?: string[];
  tags: string[];
  images?: string[];
  accentFrom: string;
  accentTo: string;
  liveUrl?: string;
  repoUrl?: string;
}

export type SkillCategory = 'frontend' | 'backend' | 'cloud-db' | 'core';

export interface SkillCategoryInfo {
  id: SkillCategory;
  name: string;
  icon: string;
  summary: string;
}

export interface SkillItem {
  id: string;
  name: string;
  category: SkillCategory;
  icon: string;
  color: string;
  badge?: 'Core' | 'Advanced' | 'Proficient';
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string;
  highlights: string[];
  technologies: string[];
  current: boolean;
}

export interface EducationItem {
  id: string;
  school: string;
  degree: string;
  period: string;
  badge?: string;
  description: string;
  highlights: string[];
}

export interface StatItem {
  id: string;
  icon: string;
  label: string;
  value: string;
}

export const PROFILE = {
  name: 'Gadisa Amenu',
  firstName: 'Gadisa',
  title: 'Full Stack Developer',
  initials: 'GA',
  email: 'amegadbay@gmail.com',
  phone: '+251 988 622 329',
  phoneHref: 'tel:+251988622329',
  location: 'Ethiopia',
  github: 'https://github.com/gadisamenu',
  linkedin: 'https://www.linkedin.com/in/gadisa-amenu-10b235211',
  leetcode: 'https://leetcode.com/gadisamenu',
  resumeUrl: '/GadisaAmenuCV.pdf',
  resumeFileName: 'GadisaAmenuCV.pdf',
  avatarUrl: '/images/avatar.jpg',
  avatarFileName: 'avatar.jpg',
  subtitle:
    'Full stack developer and Software Engineering graduate specializing in AI from Addis Ababa Institute of Technology.',
  aboutHeading: 'I turn complex problems into working products.',
  aboutBody:
    'I am passionate about competitive programming, software development, and data science, with a strong interest in applying AI to real products. When I am not coding, I am usually cycling, playing football, or catching a movie.',
  availability:
    'Open to full-time roles and freelance projects. Happy to collaborate across time zones.',
};

export const PROJECTS: Project[] = [
  {
    id: 'solid-lift-ecommerce',
    title: 'Multi-store eCommerce',
    category: 'Full-Stack & eCommerce',
    role: 'Software Engineer',
    company: 'Solid Lift Parts Inc',
    period: '2025',
    badge: 'Production Scale',
    description: 'Large-scale parts catalog and storefronts serving thousands of users daily.',
    longDescription:
      'At Solid Lift Parts I engineered a high-volume multi-store eCommerce platform serving thousands of daily active customers across North America. The initiative encompassed complete storefront migrations, high-throughput backend APIs, optimized full-text catalog queries, and executing large data migrations with zero customer downtime.',
    metrics: ['Thousands of Daily Users', 'Zero-Downtime Migration', 'Sub-second Catalog Search'],
    highlights: [
      'Migrated legacy multi-store storefronts to modular React architecture with reusable design systems.',
      'Designed and tuned Node/Express REST endpoints backed by MariaDB and Elasticsearch for low-latency product indexing.',
      'Executed large-scale data migrations across active production catalogs with zero service disruption.',
    ],
    tags: ['React', 'Express', 'MariaDB', 'Elasticsearch', 'TypeScript'],
    images: ['/images/projects/slp/s1.png'],
    accentFrom: '#1a1a1a',
    accentTo: '#3a2b1a',
    liveUrl: 'https://www.liftpartswarehouse.com',
    repoUrl: 'https://github.com/gadisamenu',
  },
  {
    id: 'adot',
    title: 'Adot Pregnancy Support',
    category: 'Healthcare & Cloud',
    role: 'Backend Software Engineer',
    company: 'Africa to Silicon Valley',
    period: '2024 — 2025',
    badge: 'GCP Cloud Run',
    description: 'Backend for a pregnancy-support product helping mothers through care journeys.',
    longDescription:
      'At Africa to Silicon Valley I was a backend engineer on Adot, a mission-critical digital health platform guiding mothers through pregnancy and postpartum recovery. I designed event-driven notification systems, engineered scalable microservices, and established automated cloud deployment pipelines.',
    metrics: ['Event-Driven Pub/Sub', 'Doubled Test Coverage', 'Automated Cloud Run CI/CD'],
    highlights: [
      'Architected reliable asynchronous notification flows using Google Cloud Pub/Sub, Cloud Tasks, and Firebase.',
      'Developed and optimized backend microservice endpoints with Express.js and MongoDB, doubling integration test coverage.',
      'Containerized applications and established automated CI/CD deployments targeting GCP Cloud Run.',
    ],
    tags: ['Express', 'MongoDB', 'GCP', 'Firebase', 'Docker', 'Pub/Sub'],
    images: ['/images/projects/adot/s1.png', '/images/projects/adot/s2.png','/images/projects/adot/s3.png', '/images/projects/adot/s4.png', '/images/projects/adot/s5.png', '/images/projects/adot/s6.png'],
    accentFrom: '#2b3a55',
    accentTo: '#4d6a8f',
    repoUrl: 'https://github.com/gadisamenu',
  },
  {
    id: 'oridms',
    title: 'ORIDMS State Admin Portal',
    category: 'Enterprise & GovTech',
    role: 'Full-stack Developer',
    company: 'Addis Ababa Institute of Technology',
    period: '2023 — 2024',
    badge: 'Enterprise Solution',
    description: 'Government admin system for planning, statistics, documents, and letters.',
    longDescription:
      'ORIDMS automates bureaucratic administrative workflows — institutional planning, demographic statistics, official document dispatch, and ministerial records — across regional government tiers. Built with an Angular frontend and an ASP.NET Core / PostgreSQL foundation.',
    metrics: ['Hierarchical RBAC', 'Multi-tier Ministry Flow', 'Complex Aggregations'],
    highlights: [
      'Constructed responsive state management and dynamic data entry forms in Angular based on institutional wireframes.',
      'Engineered ASP.NET Core Web APIs and complex PostgreSQL aggregation queries for official reporting metrics.',
      'Implemented granular role-based security ensuring strict partitioned data access across departments.',
    ],
    tags: ['ASP.NET Core', 'Angular', 'PostgreSQL', 'C#', 'SCSS'],
    images: ['/images/projects/oridms/s1.png', '/images/projects/oridms/s2.png','/images/projects/oridms/s3.png', '/images/projects/oridms/s4.png', '/images/projects/oridms/s5.png', '/images/projects/oridms/s6.png'],
    accentFrom: '#e9ecf6',
    accentTo: '#c9d0ec',
    repoUrl: 'https://github.com/gadisamenu',
  },
   {
    id: 'rate-eat',
    title: 'Rate Eat & Community',
    category: 'Consumer App & Mobile',
    role: 'Backend & Mobile Engineer',
    company: 'Africa to Silicon Valley',
    period: '2022 — 2023',
    badge: 'A2SV Product',
    description: 'Item-level restaurant reviews that highlight where businesses can grow.',
    longDescription:
      'Rate Eat is a specialized restaurant discovery application that moves beyond blanket establishment reviews by letting diners rate individual menu items, providing eateries with granular data on customer preferences.',
    metrics: ['Item-level Reviews', 'Cross-platform Mobile', 'Real-time Feed'],
    highlights: [
      'Engineered dish-specific review APIs and MongoDB schemas capturing nuanced diner feedback.',
      'Developed cross-platform mobile views using Flutter alongside Express.js backend services.',
      'Collaborated closely with Silicon Valley mentors following modern engineering and testing workflows.',
    ],
    tags: ['Express', 'MongoDB', 'React', 'Flutter', 'Node.js'],
    images: ['/images/projects/rate-eat/s1.png', '/images/projects/rate-eat/s2.png','/images/projects/rate-eat/s3.png', '/images/projects/rate-eat/s4.png', '/images/projects/rate-eat/s5.png', '/images/projects/rate-eat/s6.png'],
    accentFrom: '#1f2d24',
    accentTo: '#2f6b4a',
    repoUrl: 'https://github.com/gadisamenu',
  },
  {
    id: 'nft-marketplace',
    title: 'Decentralized NFT Marketplace',
    category: 'Web3 & Distributed Systems',
    role: 'Lead Architect & Engineer',
    company: 'AAiT Capstone Project',
    period: '2024',
    badge: 'Graduation Capstone',
    description: 'Blockchain marketplace for minting and selling digital assets.',
    longDescription:
      'Graduation capstone: a full-featured decentralized digital asset exchange where creators monetize work through multiple selling mechanisms (fixed price, declining auctions, bidding) with smart contracts guaranteeing cryptographic authenticity.',
    metrics: ['Smart Contract Minting', 'RabbitMQ Event Queue', 'Distributed Sync'],
    highlights: [
      'Built interactive web application with Next.js (React) connecting to Ethereum smart contracts and ASP.NET Core backend.',
      'Leveraged RabbitMQ message broker to handle asynchronous blockchain event processing and off-chain sync.',
      'Designed performant relational database schemas in PostgreSQL for asset history and wallet interactions.',
    ],
    tags: ['Next.js', 'ASP.NET Core', 'PostgreSQL', 'RabbitMQ', 'Blockchain'],
    images: ['/images/projects/nft/s1.png', '/images/projects/nft/s2.png','/images/projects/nft/s3.png', '/images/projects/nft/s4.png', '/images/projects/nft/s5.png', '/images/projects/nft/s6.png', '/images/projects/nft/s7.png', '/images/projects/nft/s8.png'],
    accentFrom: '#20293f',
    accentTo: '#3a4c72',
    repoUrl: 'https://github.com/gadisamenu',
  },
];

export const SKILL_CATEGORIES: SkillCategoryInfo[] = [
  {
    id: 'frontend',
    name: 'Frontend & Mobile',
    icon: 'lucideLayout',
    summary: 'Crafting responsive user interfaces, accessible web apps, and cross-platform clients.',
  },
  {
    id: 'backend',
    name: 'Backend & Systems',
    icon: 'lucideServer',
    summary: 'Developing scalable microservices, RESTful & GraphQL APIs, and robust architectures.',
  },
  {
    id: 'cloud-db',
    name: 'Databases & Cloud',
    icon: 'lucideDatabase',
    summary: 'Managing SQL/NoSQL databases, containerization, and modern serverless cloud infrastructure.',
  },
  {
    id: 'core',
    name: 'Core & Architecture',
    icon: 'lucideCpu',
    summary: 'Algorithmic problem-solving, event-driven messaging, system design, and CI/CD pipelines.',
  },
];

export const SKILLS: SkillItem[] = [
  // Frontend & Mobile
  { id: 'react', name: 'React', category: 'frontend', icon: 'lucideAtom', color: '#61dafb', badge: 'Core' },
  { id: 'angular', name: 'Angular', category: 'frontend', icon: 'lucideHexagon', color: '#dd0031', badge: 'Core' },
  { id: 'nextjs', name: 'Next.js', category: 'frontend', icon: 'lucideLayers', color: '#888888', badge: 'Advanced' },
  { id: 'typescript', name: 'TypeScript', category: 'frontend', icon: 'lucideFileCode2', color: '#3178c6', badge: 'Core' },
  { id: 'flutter', name: 'Flutter', category: 'frontend', icon: 'lucideSmartphone', color: '#02569b', badge: 'Proficient' },

  // Backend & Systems
  { id: 'express', name: 'Express / Node.js', category: 'backend', icon: 'lucideServer', color: '#68a063', badge: 'Core' },
  { id: 'aspnet', name: 'ASP.NET Core', category: 'backend', icon: 'lucideLayers', color: '#512bd4', badge: 'Core' },
  { id: 'python', name: 'Python', category: 'backend', icon: 'lucideBrainCircuit', color: '#3776ab', badge: 'Advanced' },
  { id: 'golang', name: 'Go', category: 'backend', icon: 'lucideFileCode2', color: '#00add8', badge: 'Proficient' },
  { id: 'csharp', name: 'C#', category: 'backend', icon: 'lucideCode', color: '#9b4993', badge: 'Core' },

  // Databases & Cloud
  { id: 'postgres', name: 'PostgreSQL', category: 'cloud-db', icon: 'lucideDatabase', color: '#336791', badge: 'Core' },
  { id: 'mongodb', name: 'MongoDB', category: 'cloud-db', icon: 'lucideLeaf', color: '#47a248', badge: 'Core' },
  { id: 'docker', name: 'Docker', category: 'cloud-db', icon: 'lucideContainer', color: '#2496ed', badge: 'Advanced' },
  { id: 'gcp', name: 'Google Cloud (GCP)', category: 'cloud-db', icon: 'lucideCloud', color: '#4285f4', badge: 'Advanced' },
  { id: 'elasticsearch', name: 'Elasticsearch', category: 'cloud-db', icon: 'lucideDatabase', color: '#005571', badge: 'Proficient' },

  // Core & Architecture
  { id: 'dsa', name: 'Algorithms & DSA', category: 'core', icon: 'lucideBrainCircuit', color: '#f59e0b', badge: 'Core' },
  { id: 'git', name: 'Git & GitHub', category: 'core', icon: 'lucideGitBranch', color: '#f05033', badge: 'Core' },
  { id: 'rabbitmq', name: 'RabbitMQ / PubSub', category: 'core', icon: 'lucideLayers', color: '#ff6600', badge: 'Advanced' },
  { id: 'systemdesign', name: 'System Design', category: 'core', icon: 'lucideCpu', color: '#10b981', badge: 'Advanced' },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 'solid-lift',
    role: 'Software Engineer',
    company: 'Solid Lift Parts Inc',
    period: 'Feb 2025 — Dec 2025',
    location: 'Remote',
    type: 'Full-time',
    description:
      'Engineered and scaled multi-tenant eCommerce storefronts and catalog services serving thousands of active users daily.',
    highlights: [
      'Migrated legacy multi-store storefronts to modern React architecture with reusable component libraries.',
      'Designed performant RESTful APIs with Node/Express, MariaDB, and Elasticsearch for low-latency search.',
      'Orchestrated large-scale zero-downtime data migrations across production product catalogs.',
    ],
    technologies: ['React', 'TypeScript', 'Express', 'MariaDB', 'Elasticsearch', 'REST APIs'],
    current: true,
  },
  {
    id: 'a2sv-backend',
    role: 'Backend Software Engineer',
    company: 'Africa to Silicon Valley',
    period: 'Aug 2024 — Mar 2025',
    location: 'Addis Ababa, Ethiopia',
    type: 'Full-time',
    description:
      'Backend engineer on Adot, a healthcare product supporting mothers through pregnancy and postnatal care journeys.',
    highlights: [
      'Architected reliable asynchronous notification flows using Google Cloud Pub/Sub, Cloud Tasks, and Firebase.',
      'Developed and optimized backend microservice endpoints with Express.js and MongoDB, doubling test coverage.',
      'Containerized applications and established automated CI/CD deployments targeting GCP Cloud Run.',
    ],
    technologies: ['Node.js', 'Express', 'MongoDB', 'GCP Cloud Run', 'Pub/Sub', 'Cloud Tasks', 'Firebase'],
    current: false,
  },
  {
    id: 'aait-oridms',
    role: 'Full-stack Developer',
    company: 'Addis Ababa Institute of Technology',
    period: 'Jun 2023 — Mar 2024',
    location: 'Addis Ababa, Ethiopia',
    type: 'Contract',
    description:
      'Delivered ORIDMS, an enterprise administrative management system for state planning, statistics, and official documentation.',
    highlights: [
      'Built modular, responsive front-end workflows in Angular with fine-grained state management.',
      'Engineered scalable ASP.NET Core web APIs and structured PostgreSQL schemas for complex bureaucratic data.',
      'Implemented role-based security permissions ensuring data privacy across governmental tiers.',
    ],
    technologies: ['Angular', 'TypeScript', 'ASP.NET Core', 'C#', 'PostgreSQL', 'SCSS'],
    current: false,
  },
  {
    id: 'a2sv-intern',
    role: 'Backend Engineer Intern & Mentor',
    company: 'Africa to Silicon Valley',
    period: 'Jul 2022 — Jun 2023',
    location: 'Addis Ababa, Ethiopia',
    type: 'Internship',
    description:
      'Developed full-stack web and mobile features across internal products while mentoring student cohorts in competitive programming.',
    highlights: [
      'Implemented core APIs and interfaces for Rate Eat (restaurant & item-level review platform) with Express and Flutter.',
      'Co-developed Community onboarding modules using Express, MongoDB, and React.',
      'Mentored 30+ engineering fellows in advanced algorithms, dynamic programming, and graph theory.',
    ],
    technologies: ['Express', 'MongoDB', 'React', 'Flutter', 'Algorithms', 'Mentorship'],
    current: false,
  },
];

export const EDUCATION: EducationItem[] = [
  {
    id: 'aait',
    school: 'Addis Ababa University, AAiT',
    degree: 'BSc in Software Engineering · AI Specialization',
    period: 'Sep 2019 — Jul 2024',
    badge: '3.73 / 4.0 CGPA',
    description:
      'Graduated with distinction from Addis Ababa Institute of Technology with an academic focus on Artificial Intelligence and Machine Learning.',
    highlights: [
      'Top-tier academic standing with 3.73 / 4.0 Cumulative GPA.',
      'Graduation Capstone: Blockchain-based NFT marketplace for authentic digital asset monetization.',
      'Deep coursework in Distributed Systems, Machine Learning, Database Architecture, and Software Design.',
    ],
  },
  {
    id: 'a2sv-dsa',
    school: 'Africa to Silicon Valley (A2SV)',
    degree: 'Algorithms, Data Structures & System Architecture',
    period: 'Nov 2021 — Oct 2022',
    badge: '800+ Problems Solved',
    description:
      'Rigorous algorithmic problem solving and interview preparation under Google and Silicon Valley senior engineering mentors.',
    highlights: [
      'Solved over 600+ problems on LeetCode and 200+ on Codeforces across greedy algorithms, trees, and graphs.',
      'Selected into top 5% of applicants from nationwide university software talent pool.',
      'Promoted to mentor future cohorts in technical problem-solving and mock interviews.',
    ],
  },
];

export const STATS: StatItem[] = [
  { id: 'experience', icon: 'lucideBriefcase', label: 'Experience', value: '5+ Years' },
  { id: 'education', icon: 'lucideGraduationCap', label: 'Education', value: 'BSc · 3.73 GPA' },
  { id: 'algorithms', icon: 'lucideBinary', label: 'Competitive Programming', value: '800+ solved' },
  { id: 'availability', icon: 'lucideCircleDot', label: 'Availability', value: 'Open for work' },
];

export const RESUME_SKILLS =
  'JavaScript/TypeScript · Python · C# · Go · Dart · Java · React · Angular · Next.js · Flutter · Express · ASP.NET · PostgreSQL · MongoDB · Docker · GCP · AWS · GraphQL · RabbitMQ · Git';

@Injectable({ providedIn: 'root' })
export class PortfolioStateService {
  /** Which macOS-style window is currently open, if any. */
  readonly activeWindow = signal<WindowId | null>(null);

  /** The project shown inside the project-window, when open. */
  readonly activeProject = signal<Project | null>(null);

  /** Section id currently highlighted in the nav (scroll spy). */
  readonly activeSection = signal<string>('about');

  readonly profile = PROFILE;
  readonly projects = PROJECTS;
  readonly skillCategories = SKILL_CATEGORIES;
  readonly skills = SKILLS;
  readonly experience = EXPERIENCE;
  readonly education = EDUCATION;
  readonly stats = STATS;
  readonly resumeSkills = RESUME_SKILLS;

  openWindow(id: WindowId): void {
    this.activeWindow.set(id);
  }

  closeWindow(): void {
    this.activeWindow.set(null);
    this.activeProject.set(null);
  }

  openProject(project: Project): void {
    this.activeProject.set(project);
    this.activeWindow.set('project');
  }

  setActiveSection(id: string): void {
    this.activeSection.set(id);
  }
}
