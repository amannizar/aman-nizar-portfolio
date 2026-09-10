// ─────────────────────────────────────────────────────────────────────────────
//  Portfolio content — the single source of truth.
//  Edit this file to update copy, links, projects and sections.
// ─────────────────────────────────────────────────────────────────────────────

export const profile = {
  name: 'Aman Nizar M P',
  shortName: 'Aman Nizar',
  initials: 'AN',
  role: 'Java Full Stack Developer',
  location: 'Bengaluru, India',
  email: 'amannisarmp@gmail.com',
  status: 'Open to Opportunities',
  github: 'https://github.com/amannizar',
  linkedin: 'https://www.linkedin.com/in/amannizar/',
  portfolio: 'https://amannizar.github.io/aman-nizar-portfolio/',
  resume: './resume/Aman-Nizar-Resume.pdf',
  photo: './images/profile/aman-nizar.jpg',
}

// Full-screen architecture — one major section per screen.
export const sections = [
  { id: 'hero', num: '01', label: 'Start', navLabel: 'Home' },
  { id: 'about', num: '02', label: 'About', navLabel: 'About' },
  { id: 'toolkit', num: '03', label: 'Toolkit', navLabel: 'Skills' },
  { id: 'work', num: '04', label: 'Selected Work', navLabel: 'Work' },
  { id: 'project-expense', num: '05', label: 'Expense Tracker', navLabel: 'Project 01' },
  { id: 'project-gym', num: '06', label: 'Gym Management', navLabel: 'Project 02' },
  { id: 'journey', num: '07', label: 'Journey', navLabel: 'Journey' },
  { id: 'education', num: '08', label: 'Education', navLabel: 'Education' },
  { id: 'certifications', num: '09', label: 'Certifications', navLabel: 'Certificates' },
  { id: 'next-step', num: '07', label: 'Resume', navLabel: 'Resume' },
  { id: 'contact', num: '11', label: 'Contact', navLabel: 'Contact' },
]

export const hero = {
  eyebrow: '01 / JAVA FULL STACK DEVELOPER',
  description:
    'Java Full Stack Developer focused on building practical web applications with Java, Spring Boot, databases and modern web technologies.',
  annotations: ['01 / JAVA', '02 / SPRING BOOT', '03 / MYSQL'],
}

export const about = {
  statement: 'I enjoy turning ideas into practical software.',
  paragraphs: [
    "I'm Aman Nizar M P, a Java Full Stack Developer based in Bengaluru. My foundation is a Bachelor of Computer Applications, and I'm currently deepening my full stack practice at QSpiders — working with Java, Spring Boot and MySQL every day.",
    'I care about software that actually works — clean architecture, secure authentication, real data models and interfaces people find easy to use. Building real projects, from expense analytics to a complete gym management platform, is how I learn best, and I keep working toward the next skill that makes me a stronger developer.',
  ],
  info: [
    { n: '01', label: 'Location', value: 'Bengaluru, India' },
    { n: '02', label: 'Education', value: 'BCA' },
    { n: '03', label: 'Focus', value: 'Java Full Stack' },
    { n: '04', label: 'Status', value: 'Open to Opportunities' },
  ],
}

export const skills = [
  { n: '01', name: 'Java', desc: 'Core programming / backend development' },
  { n: '02', name: 'Spring Boot', desc: 'Backend applications / REST APIs' },
  { n: '03', name: 'Spring Security', desc: 'Authentication / authorization' },
  { n: '04', name: 'MySQL', desc: 'Relational database development' },
  { n: '05', name: 'Thymeleaf', desc: 'Server-side web interfaces' },
  { n: '06', name: 'JavaScript', desc: 'Interactive web experiences' },
  { n: '07', name: 'Git / GitHub', desc: 'Version control / collaboration' },
  { n: '08', name: 'Maven', desc: 'Java project management' },
]

export const ecosystem = {
  center: 'Java',
  nodes: [
    'Spring Boot',
    'Spring Security',
    'MySQL',
    'REST APIs',
    'Thymeleaf',
    'Git',
    'Maven',
    'JavaScript',
  ],
}

export const work = {
  label: '02 PROJECTS / REAL APPLICATIONS',
  heading: "Things I've Built",
  intro:
    'A focused selection — not a long list. Two complete applications built end-to-end with Java, Spring Boot and MySQL, documented on GitHub with real screenshots from the running products.',
}

export const projects = [
  {
    key: 'expense',
    num: '01',
    title: 'Expense Tracker',
    tag: 'Full Stack Application',
    short:
      'A production-grade expense management application built with Java and Spring Boot — secure authentication, full CRUD for expenses, budgets and subscriptions, and an interactive Chart.js analytics dashboard.',
    tech: ['Java', 'Spring Boot', 'Spring Security', 'Thymeleaf', 'MySQL', 'Chart.js', 'Maven'],
    features: [
      'Expense CRUD',
      'Category management',
      'Dashboard analytics',
      'Interactive charts',
      'Authentication',
      'Automated reminders',
      'Responsive UI',
    ],
    github: 'https://github.com/amannizar/expense-tracker',
    demo: 'https://expense-tracker-jm5n.onrender.com',
    demoLabel: 'expense-tracker-jm5n.onrender.com',
    shot: './images/projects/expense-tracker/dashboard.webp',
    shotAlt: 'Expense Tracker — analytics dashboard with summary cards and charts',
    caseStudy: {
      overview:
        'A full stack expense management application for tracking spending, budgets and subscriptions in one secure place — built end-to-end with Java, Spring Boot and MySQL following a layered MVC architecture.',
      problem:
        'Everyday spending gets scattered across notes, spreadsheets and bank apps, which makes it hard to see where money actually goes or when subscriptions renew. I wanted one secure application that records expenses, enforces budgets and turns raw data into clear visuals.',
      solution:
        'A Spring Boot backend with Spring Security authentication — BCrypt encryption, password reset and role-based access — a MySQL data layer, and server-rendered Thymeleaf views. An interactive Chart.js dashboard summarises spending by month and category, scheduled jobs send automated reminders, and reports export to PDF, Excel and CSV.',
      features: [
        'Secure authentication & role-based authorization',
        'Expense CRUD with search and filtering',
        'Category & budget management',
        'Subscription tracking with renewal reminders',
        'Analytics dashboard — summary cards & Chart.js visualisations',
        'Automated email notifications & scheduled jobs',
        'PDF / Excel / CSV report generation',
        'Responsive interface',
      ],
      gallery: [
        { src: './images/projects/expense-tracker/dashboard.webp', alt: 'Expense Tracker — dashboard' },
        { src: './images/projects/expense-tracker/expense-list.webp', alt: 'Expense Tracker — expense list' },
        { src: './images/projects/expense-tracker/categories.webp', alt: 'Expense Tracker — categories' },
        { src: './images/projects/expense-tracker/reports.webp', alt: 'Expense Tracker — reports' },
      ],
    },
  },
  {
    key: 'gym',
    num: '02',
    title: 'Gym Management System',
    tag: 'Management Platform',
    short:
      'A complete gym management platform with a dual interface — an admin panel for running the gym and a member portal for fitness tracking, workout logs, diet plans and an AI Coach.',
    tech: ['Java', 'Spring Boot', 'Thymeleaf', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    features: [
      'Member management',
      'Trainer management',
      'Equipment management',
      'Attendance',
      'Workout logs',
      'Diet plans',
      'Health metrics',
      'Membership management',
      'Admin dashboard',
      'Revenue analytics',
      'AI Coach',
    ],
    github: 'https://github.com/amannizar/gym-management-system',
    demo: null,
    shot: './images/projects/gym-management/admin-dashboard.webp',
    shotAlt: 'Gym Management System — admin dashboard',
    caseStudy: {
      overview:
        'A complete gym management platform with a dual interface — an admin panel for running the gym and a member portal for fitness tracking. Built with Java, Spring Boot, Thymeleaf and MySQL.',
      problem:
        'Running a gym means juggling members, trainers, equipment, attendance, payments and announcements — usually across separate registers and spreadsheets. Members also need structured workout, diet and health tracking. I built one platform that serves both sides.',
      solution:
        'A layered Spring Boot application with role-based access for admins and members. The admin side manages members, trainers, equipment, memberships, announcements and revenue analytics. The member portal adds personal dashboards, workout and diet logs, health metrics, attendance and an AI Coach for personalised guidance.',
      features: [
        'Admin dashboard with revenue analytics',
        'Member, trainer & equipment management',
        'Attendance & workout logs',
        'Diet plans & health metrics',
        'Membership management',
        'AI Coach for personalised fitness guidance',
      ],
      gallery: [
        { src: './images/projects/gym-management/admin-dashboard.webp', alt: 'Gym Management — admin dashboard' },
        { src: './images/projects/gym-management/member-dashboard.webp', alt: 'Gym Management — member dashboard' },
        { src: './images/projects/gym-management/ai-coach.webp', alt: 'Gym Management — AI Coach' },
        { src: './images/projects/gym-management/admin-members.webp', alt: 'Gym Management — member management' },
      ],
    },
  },
]

export const journey = [
  {
    n: '01',
    title: 'BCA',
    desc: 'Bachelor of Computer Applications — Presidency College, Bangalore University. Foundations in databases, web technologies and software engineering.',
    status: 'done',
  },
  {
    n: '02',
    title: 'Java',
    desc: 'Core Java, OOP and Collections — the foundation of my backend practice.',
    status: 'done',
  },
  {
    n: '03',
    title: 'Full Stack Development',
    desc: 'Currently pursuing Java Full Stack Development at QSpiders — Hebbal, Bengaluru.',
    status: 'done',
  },
  {
    n: '04',
    title: 'Spring Boot',
    desc: 'Backend applications, REST APIs and Spring Security.',
    status: 'done',
  },
  {
    n: '05',
    title: 'Real Projects',
    desc: 'Expense Tracker and Gym Management System — designed, built and deployed end-to-end.',
    status: 'current',
  },
  {
    n: '06',
    title: 'Industry Ready',
    desc: 'Open to software developer opportunities — ready to contribute, learn and grow.',
    status: 'next',
  },
]

export const qspiders = {
  eyebrow: 'Currently Learning',
  heading: 'Java Full Stack Development',
  place: 'QSpiders — Hebbal, Bengaluru',
  status: 'Currently pursuing',
  areas: ['Core Java', 'OOP', 'Collections', 'SQL', 'JDBC', 'Spring', 'Spring Boot', 'Web Development'],
}

export const education = {
  degree: 'BCA',
  full: 'Bachelor of Computer Applications',
  college: 'Presidency College',
  university: 'Bangalore University',
  year: '2026',
}

export const certifications = [
  { name: 'Cybersecurity Assessment', issuer: 'LearnTube', image: './images/certificate/learntube.jpg' },
  { name: 'Simplilearn Certification', issuer: 'Simplilearn', image: './images/certificate/simplilearn.jpeg' },
  { name: 'AI Tools & ChatGPT Workshop', issuer: 'be10X', image: './images/certificate/be10x.jpeg' },
  { name: 'Career Opportunities in IT & ITES', issuer: 'ICT Academy', image: './images/certificate/ict.jpeg' },
]

export const nextStep = {
  heading: "Let's take the next step.",
  description:
    'Explore my resume to learn more about my technical background, projects, education and certifications.',
  highlights: ['Java & Spring Boot', 'Full Stack Development', 'Real Projects', 'Education & Certifications'],
}

export const contact = {
  heading: "Let's Talk.",
  message: 'Open to opportunities, collaborations and conversations about software development.',
  rows: [
    { label: 'Email', value: 'amannisarmp@gmail.com', href: 'mailto:amannisarmp@gmail.com' },
    { label: 'GitHub', value: 'github.com/amannizar', href: 'https://github.com/amannizar' },
    { label: 'LinkedIn', value: 'linkedin.com/in/amannizar', href: 'https://www.linkedin.com/in/amannizar/' },
    { label: 'Location', value: 'Bengaluru, India' },
  ],
}

export const formspreeEndpoint = 'https://formspree.io/f/mnpqqgwd'
