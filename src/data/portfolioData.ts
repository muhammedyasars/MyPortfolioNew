import {
  SiDotnet,
  SiReact,
  SiTypescript,
  SiRedux,
  SiHtml5,
  SiCss3,
  SiPostgresql,
  SiJavascript,
  SiGit,
  SiGithub,
  SiSwagger,
  SiDocker } from
'react-icons/si';
import { FaServer, FaDatabase, FaCode, FaTools } from 'react-icons/fa';

export const portfolioData = {
  personal: {
    name: 'Muhammed Yasar',
    role: 'Full Stack .NET Developer',
    experience: '1+ year',
    about:
    'Muhammed Yasar is a Full Stack Developer specializing in ASP.NET Core and modern frontend frameworks. He has experience building scalable APIs, implementing secure authentication systems, and developing responsive web applications using React.js and Next.js. He is passionate about building efficient backend systems and modern UI experiences.',
    location: 'Malappuram, Kerala',
    email: 'muhammedyasars810@gmail.com',
    phone: '+91 9605803697'
  },
  navLinks: [
  { name: 'Home', href: 'home' },
  { name: 'About', href: 'about' },
  { name: 'Skills', href: 'skills' },
  { name: 'Experience', href: 'experience' },
  { name: 'Projects', href: 'projects' },
  { name: 'Contact', href: 'contact' }],

  stats: [
  { label: 'Years Experience', value: 1 },
  { label: 'Projects Completed', value: 5 },
  { label: 'Technologies', value: 5 }],

  skills: [
  {
    category: 'Backend',
    icon: FaServer,
    items: [
    { name: 'ASP.NET Core', icon: SiDotnet },
    { name: 'Entity Framework Core', icon: SiDotnet },
    { name: 'ADO.NET', icon: SiDotnet },
    { name: 'Dapper', icon: FaServer },
    { name: 'REST APIs', icon: FaServer },
    { name: 'SignalR', icon: FaServer },
    { name: 'gRPC', icon: FaServer }]

  },
  {
    category: 'Frontend',
    icon: SiReact,
    items: [
    { name: 'React.js', icon: SiReact },
    { name: 'Next.js', icon: SiReact },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'Redux', icon: SiRedux },
    { name: 'Zustand', icon: SiReact },
    { name: 'HTML', icon: SiHtml5 },
    { name: 'CSS', icon: SiCss3 }]

  },
  {
    category: 'Databases',
    icon: FaDatabase,
    items: [
    { name: 'SQL Server', icon: FaDatabase },
    { name: 'PostgreSQL', icon: SiPostgresql }]

  },
  {
    category: 'Languages',
    icon: FaCode,
    items: [
    { name: 'C#', icon: FaCode },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'SQL', icon: FaDatabase }]

  },
  {
    category: 'Tools',
    icon: FaTools,
    items: [
    { name: 'Git', icon: SiGit },
    { name: 'GitHub', icon: SiGithub },
    { name: 'Swagger', icon: SiSwagger },
    { name: 'Docker', icon: SiDocker }]

  }],

  experience: [
  {
    company: 'Bridgeon',
    role: 'Full Stack Developer',
    period: 'January 2025 – January 2026',
    responsibilities: [
    'Developed ASP.NET Core Web APIs',
    'Implemented JWT authentication',
    'Built frontend using React.js and Next.js',
    'Managed application state using Redux and Zustand',
    'Designed responsive UI using HTML and CSS',
    'Optimized SQL queries and database relationships',
    'Used Swagger for API documentation']

  }],

  projects: [
  {
    name: 'Locafy – Hyper Local Service Marketplace',
    techStack: ['ASP.NET Core', 'React.js', 'JWT Authentication', 'Docker'],
    features: [
    'Peer to peer service booking platform',
    'User management',
    'Service listings',
    'Booking system',
    'Secure authentication']

  },
  {
    name: 'Safa Al-Tamayyez',
    techStack: ['ASP.NET Core', 'PostgreSQL'],
    features: [
    'Medical product management system',
    'Client and supplier management',
    'Order and certification management',
    'Role based authentication',
    'Clean architecture backend']

  }],

  socials: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    email: 'mailto:muhammedyasars810@gmail.com'
  }
};