
import type { Project } from '@/lib/types';

export const mockProjects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with admin panel and payment integration.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'Firebase'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'online store',
    liveDemoUrl: '#',
    sourceCodeUrl: '#',
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A collaborative task management tool with real-time updates.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.IO'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'productivity app',
    liveDemoUrl: '#',
  },
  {
    id: '3',
    title: 'Portfolio Website V1',
    description: 'My previous personal portfolio website built with vanilla HTML, CSS, and JS.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'developer portfolio',
    sourceCodeUrl: '#',
  },
  {
    id: '4',
    title: 'Weather Dashboard',
    description: 'A dashboard displaying real-time weather information using a third-party API.',
    techStack: ['Vue.js', 'OpenWeatherMap API', 'Chart.js'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'weather forecast',
    liveDemoUrl: '#',
    sourceCodeUrl: '#',
  },
  {
    id: '5',
    title: 'Blog Platform',
    description: 'A simple blogging platform with markdown support and user authentication.',
    techStack: ['Ruby on Rails', 'PostgreSQL', 'Devise'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'writing content',
    liveDemoUrl: '#',
  },
  {
    id: '6',
    title: 'AI Chatbot Interface',
    description: 'A sleek user interface for interacting with a custom AI model.',
    techStack: ['Svelte', 'Tailwind CSS', 'Genkit'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'artificial intelligence',
    sourceCodeUrl: '#',
  },
];

export const allTechnologies = Array.from(new Set(mockProjects.flatMap(p => p.techStack))).sort();
