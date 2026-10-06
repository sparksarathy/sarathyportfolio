import {
  ProjectItem,
  ExperienceItem,
  EducationItem,
  CertificationItem,
  SkillCategory,
  CareerMilestone,
} from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'SARATHY P.',
  title: 'WordPress & Frontend Developer',
  tagline: 'Building Digital Experiences That Look Good. Work Fast. Feel Right.',
  heroBio:
    "I'm Sarathy P, a WordPress & Frontend Developer focused on building responsive, user-friendly and visually engaging digital experiences.",
  aboutBio:
    'Motivated and dedicated Computer Science graduate with professional experience in WordPress development, responsive web design and UI/UX-focused website development. I enjoy transforming business requirements into clean, functional and engaging digital experiences while continuously improving my technical skills.',
  email: 'premsarathy42@gmail.com',
  phone: '8124583274',
  formattedPhone: '+91 81245 83274',
  location: 'Pullambadi, Tamil Nadu, India',
  status: 'Open to Opportunities',
  links: {
    github: 'https://github.com/premsarathy42',
    linkedin: 'https://linkedin.com/in/sarathy-p',
    email: 'mailto:premsarathy42@gmail.com',
    phone: 'tel:+918124583274',
  },
  stats: [
    { value: '1+ Year', label: 'Professional Experience' },
    { value: '7.82', label: 'Engineering CGPA' },
    { value: 'WordPress', label: 'Primary Expertise' },
    { value: 'SEO', label: 'Digital Marketing' },
  ],
};

export const PROJECTS: ProjectItem[] = [
  {
    id: 'frigate-manufacturing',
    number: '01',
    title: 'Frigate Manufacturing',
    category: 'WordPress · UI/UX · Responsive Web Development',
    description:
      'Developed and maintained responsive WordPress pages aligned with business requirements and user needs. Designed intuitive UI/UX layouts and customized themes and plugins to improve functionality and overall user experience.',
    projectUrl: 'https://frigate.ai',
    image: '/images/frigate-manufacturing.svg',
    tags: ['WordPress', 'UI/UX Design', 'Theme Customization', 'Responsive Layouts', 'Plugin Integration'],
    role: 'WordPress Developer',
    highlights: [
      'Engineered cross-device responsive page architectures for manufacturing & engineering solutions',
      'Optimized asset loading and layout hierarchies for high readability and fast page response',
      'Customized plugins and custom page templates to meet specific enterprise business workflows',
    ],
  },
  {
    id: 'personal-portfolio',
    number: '02',
    title: 'Personal Portfolio in WordPress',
    category: 'WordPress · Elementor · Responsive Design',
    description:
      'Fully responsive personal portfolio website built on WordPress using Elementor, featuring clean UI/UX design, custom layouts, floating skill modules, and live project demonstrations.',
    projectUrl: 'https://sarathy.hstn.me/',
    image: '/images/sarathy-portfolio.svg',
    tags: ['WordPress', 'Elementor', 'Responsive Design', 'UI/UX', 'Custom CSS'],
    role: 'WordPress Developer & Designer',
    highlights: [
      'Architected responsive page layouts using Elementor and modern WordPress theme styling',
      'Integrated dynamic floating skill modules (CMS, Frontend, UI/UX) and clean typography',
      'Engineered cross-device mobile navigation and high-performance interactive layouts',
    ],
  },
];

export const EXPERIENCE: ExperienceItem = {
  company: 'Frigate Manufacturing',
  role: 'WordPress Developer',
  duration: 'October 2025 – Present',
  current: true,
  location: 'Tamil Nadu, India',
  responsibilities: [
    'Built responsive WordPress pages based on business requirements.',
    'Designed intuitive layouts with focus on UX, navigation and readability.',
    'Customized WordPress themes and plugins.',
    'Collaborated with stakeholders and cross-functional teams.',
    'Ensured accurate content delivery and a seamless user experience.',
  ],
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'WordPress',
    description: 'Core CMS Architecture & Customization',
    skills: [
      { name: 'WordPress', level: 'Advanced' },
    ],
  },
  {
    category: 'Programming',
    description: 'Logic, Scripting & Backend Fundamentals',
    skills: [
      { name: 'Python', level: 'Proficient' },
      { name: 'JavaScript', level: 'Intermediate' },
      { name: 'Java', level: 'Intermediate' },
    ],
  },
  {
    category: 'Frontend',
    description: 'Interface Structure & Semantic Styling',
    skills: [
      { name: 'HTML', level: 'Advanced' },
      { name: 'CSS', level: 'Advanced' },
    ],
  },
  {
    category: 'Design',
    description: 'Visual Assets & Wireframing',
    skills: [
      { name: 'Canva', level: 'Proficient' },
      { name: 'Adobe Photoshop', level: 'Proficient' },
    ],
  },
  {
    category: 'Deployment',
    description: 'Version Control & Production Hosting',
    skills: [
      { name: 'GitHub', level: 'Proficient' },
      { name: 'Vercel', level: 'Proficient' },
      { name: 'Netlify', level: 'Proficient' },
    ],
  },
  {
    category: 'Additional',
    description: 'Search Optimization & Growth Strategy',
    skills: [
      { name: 'SEO', level: 'Skilled' },
      { name: 'Digital Marketing', level: 'Skilled' },
    ],
  },
];

export const CAREER_JOURNEY: CareerMilestone[] = [
  {
    year: '2021',
    title: 'B.E. Computer Science & Engineering',
    subtitle: 'Commenced Technical Journey',
    description: 'Started formal engineering degree at K. Ramakrishnan College of Technology, building core foundations in software, computing algorithms, and web technologies.',
  },
  {
    year: '2025',
    title: 'Graduated – CGPA 7.82',
    subtitle: 'Engineering Degree Conferred',
    description: 'Successfully graduated with a strong cumulative grade point average of 7.82, specializing in web development, Python, and frontend systems.',
  },
  {
    year: '2025 – Present',
    title: 'WordPress Developer – Frigate Manufacturing',
    subtitle: 'Professional Engineering Role',
    description: 'Joined Frigate Manufacturing to design, develop, and maintain enterprise WordPress web experiences, intuitive UI/UX layouts, and custom theme/plugin adaptations.',
    current: true,
  },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: 'B.E. Computer Science & Engineering',
    institution: 'K. Ramakrishnan College of Technology, Samayapuram',
    duration: '2021 – 2025',
    scoreLabel: 'CGPA',
    scoreValue: '7.82',
    details: 'Graduated with strong technical grounding in computer science disciplines, algorithms, responsive web development, and database architecture.',
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Dalmia Higher Secondary School, Dalamaipuram',
    duration: 'Completed',
    scoreLabel: 'HSC Score',
    scoreValue: '76.54%',
    details: 'Completed higher secondary education focusing on mathematics, physics, chemistry, and computer applications.',
  },
  {
    degree: 'Secondary School Leaving Certificate (SSLC)',
    institution: 'Dalmia Higher Secondary School, Dalamaipuram',
    duration: 'Completed',
    scoreLabel: 'SSLC Score',
    scoreValue: '72.6%',
    details: 'Completed secondary school education with solid foundational performance across core academic curricula.',
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: 'Digital Marketing (SEO)',
    issuer: 'Industry Recognized Credential',
    focus: 'Search Engine Optimization, Keyword Strategy & Web Analytics',
    status: 'Verified Certification',
  },
  {
    title: 'WordPress',
    issuer: 'Simplilearn',
    focus: 'WordPress Architecture, Theme Development & Plugin Customization',
    status: 'Verified Certification',
  },
  {
    title: 'Python',
    issuer: 'GUVI',
    focus: 'Python Programming, Scripting & Backend Logic Development',
    status: 'Verified Certification',
  },
];

export const STRENGTHS = [
  {
    title: 'User-Focused',
    description: 'Designing interfaces with usability and clarity in mind.',
    metric: 'Usability First',
  },
  {
    title: 'Responsive',
    description: 'Building experiences that work smoothly across devices.',
    metric: 'Adaptive Multi-Device',
  },
  {
    title: 'Problem Solving',
    description: 'Turning business requirements into practical digital solutions.',
    metric: 'Business-Aligned',
  },
  {
    title: 'Continuous Learning',
    description: 'Continuously improving technical and creative skills.',
    metric: 'Skill Growth',
  },
];
