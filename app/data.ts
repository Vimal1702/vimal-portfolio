type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

type Education = {
  school: string
  degree: string
  start: string
  end: string
  gpa: string
  id: string
}

type SkillCategory = {
  name: string
  skills: string[]
}

type Achievement = {
  title: string
  description: string
  link?: string
  id: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Jiveesha - AI-Powered Neuro-Screening Platform',
    description:
      'National SLD screening platform deployed in govt. schools, reducing evaluation time from 60 to 5 minutes. Built with Next.js, Node.js, Express, and multilingual AI support.',
    link: 'https://jiveesha.com',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  },
  {
    name: 'INTERV - Multi-Agent Automation Platform',
    description: 'AI workflow engine that converts natural language prompts into n8n automations, integrating with 20+ third-party services using RAG pipelines and fine-tuned LLMs.',
    link: '#',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
  },
  {
    name: 'UPSC National Preparation Platform',
    description: 'Comprehensive AI-powered platform with OCR and RAG system for UPSC exam preparation. Built with Python, React, and Node.js.',
    link: '#',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project3',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Daira Edtech Pvt Ltd',
    title: 'Founding Engineer (Software)',
    start: 'Mar 2025',
    end: 'Present',
    link: 'https://daira.com',
    id: 'work1',
  },
  {
    company: 'Nexev Solutions Pvt Ltd',
    title: 'Software Engineer (Contract)',
    start: 'Feb 2025',
    end: 'Present',
    link: 'https://nexev.com',
    id: 'work2',
  },
  {
    company: 'Infosys',
    title: 'Software Developer Intern',
    start: 'Sep 2025',
    end: 'Present',
    link: 'https://infosys.com',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Building Scalable AI-Powered Platforms',
    description: 'Lessons learned from architecting Jiveesha for 20,000+ users',
    link: '/blog/building-scalable-ai-platforms',
    uid: 'blog-1',
  },
  {
    title: 'Multi-Agent Automation with RAG Pipelines',
    description:
      'How we built INTERV to convert natural language to executable workflows',
    link: '/blog/multi-agent-automation',
    uid: 'blog-2',
  },
  {
    title: 'Real-time Systems with WebSockets and OCPP',
    description:
      'Architecture patterns for building IoT-based EV charging platforms',
    link: '/blog/realtime-iot-systems',
    uid: 'blog-3',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/vimalraj',
  },
  {
    label: 'LinkedIn',
    link: 'https://linkedin.com/in/vimalraj',
  },
]

export const EMAIL = 'vimal.m.raj19@gmail.com'

export const EDUCATION: Education[] = [
  {
    school: 'Vellore Institute of Technology',
    degree: 'Bachelor of Technology',
    start: '2022',
    end: '2026',
    gpa: '8.7/10.0',
    id: 'edu1',
  },
]

export const SKILLS: SkillCategory[] = [
  {
    name: 'Languages',
    skills: ['JavaScript (ES6+)', 'Python', 'Java', 'C++', 'English', 'Tamil', 'Hindi'],
  },
  {
    name: 'Tech Stack',
    skills: [
      'Node.js',
      'React',
      'Next.js',
      'Express.js',
      'PostgreSQL',
      'MongoDB',
      'Supabase',
      'Redis',
    ],
  },
  {
    name: 'AI/ML & DevOps',
    skills: ['LLM Integration', 'RAG', 'LangChain', 'AWS', 'Docker', 'Vercel', 'n8n'],
  },
]

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: 'Top 5 Startup Mahakumbh',
    description: 'Ranked among the Top 5 nationally and secured ₹1 Crore in funding for Jiveesha at IndiaAI Challenges.',
    id: 'ach1',
  },
  {
    title: 'National AI Conference Representitive',
    description: 'Represented Daira at the National AI Conference hosted by the Dept. of Empowerment of Persons with Disabilities.',
    id: 'ach2',
  },
]
