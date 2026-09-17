import { Injectable, signal } from '@angular/core';

export type WindowId = 'finder' | 'project' | 'resume' | 'availability';

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  accentFrom: string;
  accentTo: string;
  liveUrl?: string;
  repoUrl?: string;
}

export interface SkillItem {
  id: string;
  name: string;
  icon: string;
  color: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  current: boolean;
}

export interface EducationItem {
  id: string;
  school: string;
  degree: string;
  period: string;
  description: string;
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
  email: 'gadisamenu99@gmail.com',
  phone: '+251 988 622 329',
  phoneHref: 'tel:+251988622329',
  location: 'Ethiopia',
  github: 'https://github.com/gadisamenu',
  linkedin: 'https://www.linkedin.com/in/gadisa-amenu-10b235211',
  leetcode: 'https://leetcode.com/gadisamenu',
  resumeUrl: '/GadisaAmenuCV.pdf',
  resumeFileName: 'GadisaAmenuCV.pdf',
  subtitle:
    'Full stack developer and Software Engineering graduate specializing in AI from Addis Ababa Institute of Technology.',
  aboutHeading: 'I turn complex problems into working products.',
  aboutBody:
    'I am passionate about competitive programming, software development, and data science, with a strong interest in applying AI to real products. When I am not coding, I am usually watching football, cycling, or catching a movie.',
  availability:
    'Open to full-time roles and freelance projects. Happy to collaborate across time zones.',
};

export const PROJECTS: Project[] = [
  {
    id: 'solid-lift-ecommerce',
    title: 'Multi-store eCommerce',
    description: 'Large-scale parts catalog and storefronts serving thousands of users daily.',
    longDescription:
      'At Solid Lift Parts I worked on a multi-store eCommerce platform used by thousands of people each day. The work covered migrating stores, building React storefront components, implementing Express APIs, running large data migrations, and launching new sites.',
    tags: ['React', 'Express', 'MariaDB', 'Elasticsearch'],
    image: 'ecommerce',
    accentFrom: '#1a1a1a',
    accentTo: '#3a2b1a',
  },
  {
    id: 'adot',
    title: 'Adot',
    description: 'Backend for a pregnancy-support product helping mothers through care journeys.',
    longDescription:
      'At Africa to Silicon Valley I was a backend engineer on Adot, a product focused on supporting mothers during pregnancy. I implemented API endpoints, improved test performance, wrote comprehensive tests, and built a notification system with Pub/Sub, Cloud Tasks, and Firebase, then deployed on GCP Cloud Run.',
    tags: ['Express', 'MongoDB', 'GCP', 'Firebase'],
    image: 'travel',
    accentFrom: '#2b3a55',
    accentTo: '#4d6a8f',
  },
  {
    id: 'oridms',
    title: 'ORIDMS',
    description: 'Government admin system for planning, statistics, documents, and letters.',
    longDescription:
      'ORIDMS automates state administrative work — planning, statistics, document management, and letters — across a hierarchical government structure. I built REST APIs, handled data aggregations, and implemented Angular pages from wireframes with state management on ASP.NET Core and PostgreSQL.',
    tags: ['ASP.NET', 'Angular', 'PostgreSQL'],
    image: 'analytics',
    accentFrom: '#e9ecf6',
    accentTo: '#c9d0ec',
  },
  {
    id: 'nft-marketplace',
    title: 'NFT Marketplace',
    description: 'Blockchain marketplace for minting and selling digital assets.',
    longDescription:
      'Graduation project: a blockchain marketplace where users monetize digital assets through several selling methods, with NFTs used to guarantee authenticity. Backend in ASP.NET Core with React (Next.js) on the frontend, plus PostgreSQL, RabbitMQ, and blockchain integrations.',
    tags: ['Next.js', 'ASP.NET', 'PostgreSQL', 'RabbitMQ'],
    image: 'tasks',
    accentFrom: '#20293f',
    accentTo: '#3a4c72',
  },
  {
    id: 'rate-eat',
    title: 'Rate Eat',
    description: 'Item-level restaurant reviews that highlight where businesses can grow.',
    longDescription:
      'Rate Eat lets people give and read item-specific reviews, and shows businesses where they can improve. Built during an A2SV internship with Express, MongoDB, React, and Flutter.',
    tags: ['Express', 'MongoDB', 'React', 'Flutter'],
    image: 'fitness',
    accentFrom: '#1f2d24',
    accentTo: '#2f6b4a',
  },
];

export const SKILLS: SkillItem[] = [
  { id: 'react', name: 'React', icon: 'lucideAtom', color: '#61dafb' },
  { id: 'angular', name: 'Angular', icon: 'lucideHexagon', color: '#dd0031' },
  { id: 'typescript', name: 'TypeScript', icon: 'lucideFileCode2', color: '#3178c6' },
  { id: 'express', name: 'Express', icon: 'lucideServer', color: '#68a063' },
  { id: 'aspnet', name: 'ASP.NET', icon: 'lucideLayers', color: '#512bd4' },
  { id: 'python', name: 'Python', icon: 'lucideBrainCircuit', color: '#3776ab' },
  { id: 'flutter', name: 'Flutter', icon: 'lucideSmartphone', color: '#02569b' },
  { id: 'postgres', name: 'PostgreSQL', icon: 'lucideDatabase', color: '#336791' },
  { id: 'mongodb', name: 'MongoDB', icon: 'lucideLeaf', color: '#47a248' },
  { id: 'docker', name: 'Docker', icon: 'lucideContainer', color: '#2496ed' },
  { id: 'gcp', name: 'GCP', icon: 'lucideCloud', color: '#4285f4' },
  { id: 'git', name: 'Git', icon: 'lucideGitBranch', color: '#f05033' },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 'solid-lift',
    role: 'Software Engineer',
    company: 'Solid Lift Parts Inc',
    period: 'Feb 2025 — Dec 2025',
    description:
      'Worked on large-scale multi-store eCommerce serving thousands of users daily — store migrations, React components, APIs, and data migrations.',
    current: false,
  },
  {
    id: 'a2sv-backend',
    role: 'Backend Software Engineer',
    company: 'Africa to Silicon Valley',
    period: 'Aug 2024 — Mar 2025',
    description:
      'Backend engineer on Adot, a pregnancy-support product. Built APIs, tests, and a Pub/Sub notification system, then deployed on GCP Cloud Run.',
    current: false,
  },
  {
    id: 'aait-oridms',
    role: 'Full-stack Developer',
    company: 'Addis Ababa Institute of Technology',
    period: 'Jun 2023 — Mar 2024',
    description:
      'Full-stack on ORIDMS, automating government admin work with ASP.NET Core, Angular, and PostgreSQL — APIs, aggregations, and UI from wireframes.',
    current: false,
  },
  {
    id: 'a2sv-intern',
    role: 'Backend Engineer Intern',
    company: 'Africa to Silicon Valley',
    period: 'Jul 2022 — Jun 2023',
    description:
      'Built Rate Eat (item-level reviews) and Community (student onboarding) using Express, MongoDB, ASP.NET, React, and Flutter. Also mentored competitive programming students.',
    current: false,
  },
];

export const EDUCATION: EducationItem[] = [
  {
    id: 'aait',
    school: 'Addis Ababa University, AAiT',
    degree: 'BSc in Software Engineering · AI',
    period: 'Sep 2019 — Jul 2024',
    description:
      'Graduated from Addis Ababa Institute of Technology specializing in artificial intelligence and machine learning. CGPA: 3.73/4.0.',
  },
  {
    id: 'a2sv-dsa',
    school: 'Africa to Silicon Valley',
    degree: 'Data Structures and Algorithms',
    period: 'Nov 2021 — Oct 2022',
    description:
      'Solved around 600 problems on LeetCode and 200 on Codeforces, with a focus on interviews and algorithmic problem-solving.',
  },
];

export const STATS: StatItem[] = [
  { id: 'experience', icon: 'lucideBriefcase', label: 'Experience', value: '3+ Years' },
  { id: 'education', icon: 'lucideGraduationCap', label: 'Education', value: 'BSc · 3.73 GPA' },
  { id: 'algorithms', icon: 'lucideBinary', label: 'Algorithms', value: '800+ solved' },
  { id: 'availability', icon: 'lucideCircleDot', label: 'Availability', value: 'Open for work' },
];

export const RESUME_SKILLS =
  'JavaScript/TypeScript · Python · C# · Go · Dart · Java · React · Angular · Flutter · Express · ASP.NET · Django · Spring Boot · Fiber · PostgreSQL · MongoDB · Docker · GCP · AWS · GraphQL · Git';

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
