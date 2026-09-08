import profileImage from '../assets/profile/hanna-profile.jpg';


export const portfolio = {
  personal: {
    name: 'Hanna Oktaviana Putri',
    shortName: 'Hanna',
    role: 'Informatics Student | Full-Stack & Backend Developer',
    university: 'Universitas Gunadarma',
    degree: 'B.Sc. in Informatics',
    period: '2022 — 2026',
    email: 'hannaoktaviana04@gmail.com',
    phone: '081808494256',
    location: 'Jakarta, Indonesia',
    profileImage,
    cvPath: '/Hanna_Oktaviana_Putri_CV.pdf',
    linkedin: 'https://www.linkedin.com/in/hannaoktaviana/', 
    github: 'https://github.com/hannaoktv04', 
    headline: "Hi, I'm Hanna",
    subheadline: 'I build reliable web systems, backend solutions, and data-driven tools.',
    intro:
      'I am an Informatics student at Gunadarma University with a strong interest in full-stack and backend development. I enjoy working with Laravel, React, SQL databases, Python automation, and data workflows to turn practical problems into useful digital products.',
    about:
      'I enjoy understanding how a system works from end to end: the interface users interact with, the business logic behind it, and the database that keeps everything organized. My projects range from inventory systems and e-commerce applications to data scraping and machine learning, giving me a balanced perspective across web, backend, and data.',
  },

  focus: [
    {
      label: 'Backend-minded',
      value: 'APIs • Databases • Business Logic',
      description: 'I like designing structured flows, reliable data handling, and maintainable backend logic.',
    },
    {
      label: 'Full-Stack Builder',
      value: 'Laravel • React • PERN',
      description: 'I can connect frontend experiences with backend services and relational databases.',
    },
    {
      label: 'Data-aware',
      value: 'Python • SQL • Automation',
      description: 'I also work with scraping, cleaning, analysis, and data preparation workflows.',
    },
  ],

  skillTicker: ['Laravel', 'React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'MySQL', 'SQL', 'Python', 'PHP', 'Pandas', 'Power BI', 'Git'],

  skills: [
    {
      category: 'Backend & Full-Stack',
      icon: 'ServerCog',
      items: ['Laravel', 'PHP', 'React.js', 'JavaScript', 'HTML', 'CSS', 'API', 'Node.js', 'Express.js'],
    },
    {
      category: 'Data & Database',
      icon: 'Database',
      items: ['SQL', 'PostgreSQL', 'MySQL', 'Microsoft Excel', 'Power BI', 'Tableau', 'Pandas', 'Data Cleaning', 'Data Analysis', 'Web Scraping'],
    },
    {
      category: 'Programming & Machine Learning',
      icon: 'BrainCircuit',
      items: ['Python', 'Java', 'C++', 'TensorFlow / Keras', 'CNN', 'Transfer Learning', 'MobileNetV3-Large'],
    },
    {
      category: 'Tools & Workflow',
      icon: 'Wrench',
      items: ['Git', 'GitHub', 'Figma', 'VS Code', 'Google Colab', 'Playwright', 'Selenium'],
    },
  ],

  experience: [
    {
      position: 'Leads Database Intern',
      company: 'PT. Indogal Agro Trading',
      location: 'South Jakarta, Indonesia',
      date: 'Apr 2026 — Jul 2026',
      description: [
        'Developed automated lead-scraping pipelines to collect prospective customer data from Google Maps and online marketplaces.',
        'Built data collection, cleaning, and transformation workflows using Python and Pandas.',
        'Maintained lead database quality through deduplication, normalization, and category classification.',
        'Created pivot tables and cross-tab reports to support lead distribution for Sales and Telemarketing teams.',
      ],
      tools: ['Python', 'Pandas', 'Excel', 'Data Cleaning'],
    },
    {
      position: 'Assistant — DGX Featured Course Practicum',
      company: 'Universitas Gunadarma',
      location: 'Depok, West Java',
      date: 'Mar 2026 — Jul 2026',
      description: [
        'Assisted students in operating the DGX machine during practical sessions and resolving assignment-related technical issues.',
        'Supported students with programming problems, debugging, and code-related errors.',
        'Collaborated with the research team to prepare discussion materials and support research activities for academic papers.',
      ],
      tools: ['DGX', 'Programming Support', 'Research'],
    },
    {
      position: 'Information Systems Intern',
      company: 'Inspectorate General — Ministry of Communication and Digital',
      location: 'Central Jakarta, Indonesia',
      date: 'Jun 2025 — Aug 2025',
      description: [
        'Built a comprehensive inventory management system from scratch using Laravel and PostgreSQL.',
        'Developed backend functionality for asset tracking and data synchronization.',
        'Integrated secure user authentication and automated stock monitoring to improve inventory data accuracy and management efficiency.',
      ],
      tools: ['Laravel', 'PostgreSQL', 'PHP', 'Backend'],
    },
    {
      position: 'Data Administrator — Internship',
      company: 'Aliansi Lintas Teknologi',
      location: 'Indonesia',
      date: 'Feb 2021 — Apr 2021',
      description: [
        'Managed employee attendance data and supported day-to-day data administration.',
        'Wrote SQL queries to filter and sort attendance records for project needs.',
        'Used Oracle Database queries to support structured data management.',
      ],
      tools: ['SQL', 'Oracle Database', 'Data Administration'],
    },
  ],

  projects: [
    {
      id: 'peri-e-persediaan',
      title: 'PERI E-Persediaan',
      eyebrow: 'Featured • Backend / Inventory System',
      tech: ['Laravel', 'PostgreSQL', 'PHP', 'Bootstrap', 'Figma'],
      description:
        'A web-based inventory management system developed during my Information Systems internship to organize assets, stock, item requests, and inventory workflows.',
      highlights: [
        'Secure authentication',
        'Inventory & item management',
        'Stock monitoring',
        'Item request workflow',
        'Admin dashboard',
        'PostgreSQL integration',
      ],
      detail:
        'PERI E-Persediaan focuses on making inventory operations more structured and traceable. I worked on the system from the backend and database side, including data flow, asset tracking, authentication, stock monitoring, and inventory-related processes using Laravel and PostgreSQL.',
      visual: 'peri',
      featured: true,
      github: 'https://github.com/hannaoktv04/e-persediaan',
      demo: '',
    },
    {
      id: 'moonrin',
      title: 'Moonrin Comic Reader',
      eyebrow: 'Featured • Full-Stack / PERN',
      tech: ['PostgreSQL', 'Express.js', 'React.js', 'Node.js'],
      description:
        'A modern and responsive web application for reading comics and manhwa online, built with the PERN Stack and focused on a smooth browsing experience.',
      highlights: [
        'PERN Stack architecture',
        'Dark mode',
        'Real-time search',
        'Genre filtering',
        'Responsive interface',
        'PostgreSQL data layer',
      ],
      detail:
        'Moonrin is a full-stack project that connects a React interface with an Express and Node.js backend backed by PostgreSQL. The experience is designed around responsive reading, quick discovery through real-time search, genre filtering, and a user-friendly dark mode.',
      visual: 'moonrin',
      featured: true,
      github: 'https://github.com/hannaoktv04/moonrin',
      demo: '',
    },
    {
      id: 'oldstore',
      title: 'OldStore E-Commerce',
      eyebrow: 'Featured • Full-Stack / E-Commerce',
      tech: ['Laravel', 'PHP', 'Automated Payment', 'Inventory Management'],
      description:
        'A web-based shoe e-commerce platform built with Laravel, featuring an integrated automated payment flow and a comprehensive inventory management module.',
      highlights: [
        'Product catalog',
        'Shopping workflow',
        'Automated payment flow',
        'Inventory management',
        'Backend business logic',
        'Responsive web interface',
      ],
      detail:
        'OldStore was built as an e-commerce application focused on the complete flow of selling shoes online. The project gave me hands-on experience in organizing backend business logic, handling inventory-related processes, and integrating an automated payment workflow within a Laravel application.',
      visual: 'oldstore',
      featured: true,
      github: 'https://github.com/hannaoktv04/oldstore',
      demo: '',
    },
    {
      id: 'bakery',
      title: 'Bakery Website',
      eyebrow: 'Full-Stack • Laravel',
      tech: ['Laravel', 'PHP', 'MySQL'],
      description:
        'A bakery website developed with Laravel, PHP, and MySQL, created to strengthen my experience in backend development, database management, and website functionality.',
      highlights: [
        'Laravel application flow',
        'PHP backend development',
        'MySQL integration',
        'Database management',
        'Web functionality',
        'Structured MVC development',
      ],
      detail:
        'This project helped me deepen my understanding of Laravel application structure, PHP-based backend development, relational database integration with MySQL, and how to organize website functionality in a maintainable way.',
      visual: 'bakery',
      featured: false,
      github: 'https://github.com/hannaoktv04/bakery',
      demo: '',
    },
    {
      id: 'lead-generation',
      title: 'Data Scraping & Lead Generation',
      eyebrow: 'Automation • Data Engineering',
      tech: ['Python', 'Playwright', 'Selenium', 'Pandas', 'Excel'],
      description:
        'A data collection and processing workflow for building structured lead databases from multiple online sources.',
      highlights: [
        'Web scraping',
        'Data extraction',
        'Data cleaning',
        'Deduplication',
        'Excel processing',
        'Lead database preparation',
      ],
      detail:
        'The workflow covers extraction, validation, cleaning, deduplication, normalization, and preparation of structured lead data. It reflects my interest in backend automation as well as practical data engineering tasks.',
      visual: 'scraping',
      featured: false,
      github: '',
      demo: '',
    },
    {
      id: 'zoogallery',
      title: 'ZooGallery',
      eyebrow: 'CRUD Web App • MVC',
      tech: ['CodeIgniter 3', 'PHP', 'MySQL'],
      description:
        'A web application for managing animal collections with CRUD functionality and image uploads using CodeIgniter 3 and the MVC pattern.',
      highlights: ['CRUD operations', 'Image upload', 'MVC architecture', 'MySQL integration'],
      detail:
        'ZooGallery was built to practice structured MVC development with CodeIgniter 3, relational data handling with MySQL, and image-upload flows for collection records.',
      visual: 'gallery',
      featured: false,
      github: '',
      demo: '',
    },
    {
      id: 'cocoa-classification',
      title: 'Cocoa Bean Quality Classification',
      eyebrow: 'Machine Learning • Computer Vision',
      tech: ['Python', 'TensorFlow / Keras', 'CNN', 'MobileNetV3-Large'],
      description:
        'An image classification project for identifying cocoa bean quality or condition using CNN-based transfer learning.',
      highlights: [
        'MobileNetV3-Large',
        'Data augmentation',
        'Global Average Pooling',
        'Dropout',
        'Dense Softmax',
        'Image classification',
      ],
      architecture:
        'Input → Data Augmentation → MobileNetV3-Large → Global Average Pooling → Dropout → Dense Softmax',
      detail:
        'This project explores transfer learning for computer vision, including image preprocessing, data augmentation, a custom classification head, and model evaluation using MobileNetV3-Large.',
      visual: 'cocoa',
      featured: false,
      github: '',
      demo: '',
    },
  ],

  education: [
    {
      institution: 'Universitas Gunadarma',
      degree: 'Bachelor of Informatics',
      period: '2022 — 2026',
      note: 'Academic and project focus across software development, databases, data analysis, and machine learning.',
    },
    {
      institution: 'SMKN 46 Jakarta',
      degree: 'Software Engineering',
      period: 'Graduated Jun 2022',
      note: 'Vocational foundation in software engineering and application development.',
    },
  ],

  certifications: [
    {
      title: 'Software Engineering — KKNI Level II',
      issuer: 'Badan Nasional Sertifikasi Profesi (BNSP)',
      date: 'Aug 2022',
    },
    {
      title: 'Excel Data Analysis Certificate',
      issuer: 'Microsoft in collaboration with Jobstreet',
      date: 'Apr 2025',
    },
    {
      title: 'Introduction to Data Analytics',
      issuer: 'Simplilearn',
      date: 'Apr 2025',
    },
    {
      title: 'Introduction to Tableau',
      issuer: 'Simplilearn',
      date: 'May 2025',
    },
    {
      title: 'Basic Web Application Design',
      issuer: 'Universitas Gunadarma',
      date: 'Sep 2025',
    },
    {
      title: 'JavaScript Programming Language Fundamental',
      issuer: 'Universitas Gunadarma',
      date: 'Feb 2026',
    },
    {
      title: 'Basic Web Application Development',
      issuer: 'Universitas Gunadarma',
      date: 'May 2026',
    },
  ],

  achievements: [
    {
      title: 'Speaker — Forum Group Discussion: Team Project',
      date: '2026',
      description:
        'Presented a real-time driver drowsiness and distraction detection project using MediaPipe and MobileNetV3, covering CRISP-DM, facial landmark extraction, model evaluation, and hands-on implementation.',
    },
  ],
};
