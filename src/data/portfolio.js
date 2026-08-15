export const profile = {
  name: 'Thiruharikaran R',
  role: 'Full Stack Software Developer',
  location: 'Chennai, India',
  email: 'thiruharikaran.dev@gmail.com',
  phone: '+91 80565 98002',
  github: 'https://github.com/thiruharikaran',
  linkedin: 'https://linkedin.com/in/thiruharikaran-r',
  photo: '/images/profile.jpg',
  tagline: 'Building full-stack web applications with React, Node.js, Express.js, MongoDB, and modern web technologies.',
  summary:
    'I’m a developer who enjoys building full-stack web applications using React.js, Node.js, Express.js, MongoDB, and MySQL. I focus on creating secure APIs, responsive user interfaces, and scalable web applications. My recent work includes a blockchain-based certificate verification platform and full-stack dashboard applications, and I enjoy continuously improving my skills through hands-on projects.',
}

export const quickFacts = [
  { label: '3+ Major Projects', value: 'Shipped' },
  { label: 'Full Stack Developer', value: 'Focus' },
  { label: 'React & Node.js', value: 'Core Stack' },
  { label: 'Open to Relocation', value: 'Bengaluru' },
]

export const skills = [
  {
    category: 'Programming Languages',
    items: ['Java', 'JavaScript'],
  },
  {
    category: 'Frontend',
    items: ['React.js', 'React Router', 'HTML5', 'CSS3'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express.js', 'REST APIs'],
  },
  {
    category: 'Database',
    items: ['MongoDB', 'MySQL'],
  },
  {
    category: 'Blockchain',
    items: ['Solidity', 'Ethereum Sepolia', 'Web3.js', 'MetaMask'],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'Visual Studio Code', 'Postman', 'Vercel', 'Render'],
  },
]

export const projects = [
  {
    title: 'VeriQore',
    subtitle: 'Blockchain Certificate Verification System',
    tags: ['BLOCKCHAIN • FULL STACK'],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB Atlas', 'Solidity', 'Ethereum Sepolia', 'Web3.js', 'MetaMask', 'Cloudinary', 'JWT'],
    description:
      'A full-stack certificate verification platform that combines SHA-256 hashing, Ethereum Sepolia, and smart contracts to create tamper-resistant academic certificates. It includes role-based dashboards, secure authentication, Cloudinary storage, and blockchain-backed verification.',
    github: 'https://github.com/thiruharikaran/blockchain-certificate-verification-system',
    demo: 'https://veriqore.vercel.app',
    image: '/images/projects/veriqore.png',
    imageAlt: 'VeriQore master admin dashboard showing students, colleges, and verification stats',
  },
  {
    title: 'Parking Lot Management System',
    subtitle: 'Full-stack operations dashboard',
    tags: ['FULL STACK • WEB'],
    tech: ['React.js', 'React Router', 'Node.js', 'Express.js', 'MySQL', 'JWT', 'Bootstrap', 'Axios'],
    description:
      'A full-stack parking management application for vehicle entry, exit, automatic slot allocation, and parking history. It features JWT authentication, role-based access, real-time parking statistics, and a responsive dashboard backed by MySQL.',
    github: 'https://github.com/thiruharikaran/parking-lot-management-system',
    demo: 'https://parking-lot-management-demo.netlify.app',
    image: '/images/projects/parking-lot.png',
    imageAlt: 'Parking Lot Management System dashboard showing slot availability',
  },
  {
    title: 'THR Technologies — Company Website',
    subtitle: 'Responsive Software Company Website',
    tags: ['Web'],
    tech: ['React.js', 'EmailJS', 'React Reveal', 'React Slick'],
    description:
      'A responsive company website built with React.js, featuring reusable UI components, animated sections, service and technology showcases, client testimonials, and an integrated contact form powered by EmailJS.',
    github: 'https://github.com/thiruharikaran/react-portfolio-website',
    demo: 'https://thr-technologies.netlify.app',
    image: '/images/projects/thr-portfolio.png',
    imageAlt: 'THR Technologies company portfolio home page hero section',
  },
]

export const internships = [
  {
    role: 'Web Development Intern',
    org: 'Verzeo (with IBM)',
    period: 'Feb 2022 – Mar 2022 · Remote',
    points: [
      'Developed a Parking Lot Management System',
      'Built responsive frontend and backend features',
      'Improved application usability and functionality',
    ],
  },
  {
    role: 'Software Development Virtual Experience',
    org: 'Datacom (Forage)',
    period: 'Apr 2023 – May 2023 · Virtual',
    points: [
      'Reviewed and debugged application code',
      'Identified and investigated software issues',
      'Completed practical software development tasks',
    ],
  },
]

export const education = [
  {
    degree: 'B.Tech — Information Technology',
    school: 'SRM Easwari Engineering College',
    detail: 'CGPA: 7.84 / 10',
    period: '2024',
  },
  {
    degree: 'Diploma — Electrical & Electronics Engineering',
    school: 'Panimalar Polytechnic College',
    detail: 'Percentage: 90%',
    period: '2020',
  },
]

export const certifications = [
  {
    title: 'Developer & Technology Job Simulation',
    org: 'Accenture UK (via Forage)',
    detail:
      'SDLC, Agile, Python debugging, algorithm design, and DevOps concepts.',
    certificate: '/certificates/accenture-certificate.pdf',
  },
]

export const nav = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'internships', label: 'Internships' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]
