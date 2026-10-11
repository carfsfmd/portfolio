// All portfolio content lives here. Edit this file to update the site -
// no need to touch component code for text changes.

// Prefixes public/ asset paths with the Vite base so they work on GitHub
// Pages (served under /Portfolio/) as well as locally.
const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

export const profile = {
  name: 'Carlos Diogo',
  role: 'Software Engineer',
  focus: 'Critical Systems',
  location: 'Porto, Portugal',
  email: 'carlos.f.diogo@gmail.com',
  github: 'https://github.com/carfsfmd',
  linkedin: 'https://www.linkedin.com/in/carlos-diogo-92b060269/',
    intro:
    "I started programming at 14, driven by curiosity and a desire to understand how technology works. That interest led me to Computer Engineering at FEUP, where I focus on building dependable software for situations where reliability matters.",
  bio: "I am particularly interested in healthcare, aerospace and automotive technology because they share a commitment to careful design, rigorous testing and safety. I bring those principles to projects such as FisioFinder, a rehabilitation platform, and INFOCUIDA, a service for informal caregivers. I have also developed low-code business applications with Microsoft Power Platform and received two CodeSpring hackathon awards with my teams. Outside software, I play guitar, practise taekwondo and teach, all of which continue to shape how I learn and work.",
}

// Short, casual "what I'm up to" bullets for the homepage.
// Edit freely - this is meant to read like a quick personal update, not a CV line.
export const currently = [
  'Studying Computer Engineering at FEUP, with a focus on critical systems',
  'Writing a book on mathematical optimisation and its applications in engineering',
]

export const qa = [
  {
    label: 'What I build',
    body: 'I develop software for healthcare and caregiving, including FisioFinder and INFOCUIDA. My work is guided by a focus on dependable systems and practical user needs.',
  },
  {
    label: 'Where I am',
    body: 'Based in Porto, Portugal, and studying Informatics and Computing Engineering at FEUP, with graduation planned for 2027.',
  },
  {
    label: 'What drives me',
    body: 'I enjoy building software that people can trust. Healthcare, aerospace and automotive all demand disciplined design, testing and safety, and those are the principles I want to carry throughout my engineering career.',
  },
]

export const quote = {
  line: 'Software should earn trust.',
  body: 'Teaching helps me understand ideas deeply, so I continue to do both: build software thoughtfully and make complex subjects easier to understand, from tutoring Calculus at FEUP to sharing what I learn.',
}

export const projects = [
  {
    id: 'infocuida',
    title: 'INFOCUIDA',
    period: 'Feb 2026 - Jun 2026',
    org: 'Software Engineering course, FEUP',
    summary:
      'A mobile platform that gives informal caregivers access to learning resources, community support and professional opportunities.',
    detail:
      'An academic platform designed to help informal caregivers learn, connect and find opportunities in the care sector. Learn includes practical tutorials, educational videos, legal guidance, FAQs, community contributions and PDF exports. Share provides moderated forums for advice and peer support. Work includes professional profiles, job listings, CV uploads and applications. Guided onboarding, simplified navigation and customisable settings support accessibility throughout the experience.',
    stack: ['Flutter', 'Dart', 'Firebase Auth', 'Cloud Firestore', 'Firebase Storage', 'Firebase Cloud Messaging'],
    link: null,
  },
  {
    id: 'fisiofinder',
    title: 'FisioFinder',
    period: 'Nov 2023 - Jun 2024',
    org: 'Professional Aptitude Project, Colégio de Gaia',
    summary:
      'A healthcare management platform for physical medicine and rehabilitation, combining a mobile app, website and administration portal.',
    detail:
      'Created as my Professional Aptitude Project. Users can schedule appointments and treatments, manage medication with personalised reminders and coordinate health information through a dedicated caregiver view. An interactive map helps users find rehabilitation clinics with detailed profiles, opening hours, services and reviews. Accessibility features include voice-based forms and text-to-speech. The project also includes an information website, user manual and administration portal for data, forms and statistics.',
    stack: ['Flutter', 'Dart', 'Supabase', 'PostgreSQL', 'PHP', 'Google Maps API'],
    link: null,
  },
    {
    id: 'natureal',
    title: 'NatuReal',
    period: 'Apr 2024',
    org: 'CodeSpring Hackathon, ISEP (1st place)',
    summary:
      'A bird-watching web application with daily challenges, social features, rankings and a publication feed, created during a three-day hackathon.',
    detail:
      'Created with my team during the CodeSpring hackathon organised by NEI at ISEP from 12 to 14 April 2024, where it won first place. Users can complete daily bird-watching challenges, connect with friends, follow rankings and share sightings with photos. The backend uses PHP and MySQL/MariaDB with JWT authentication and PHPMailer, while the frontend uses Tailwind CSS, DaisyUI and jQuery.',
    stack: ['PHP', 'MySQL', 'JavaScript', 'jQuery', 'Tailwind CSS', 'DaisyUI'],
    link: 'https://github.com/hugo2006alm/natureal',
  },
  {
    id: 'ark',
    title: 'Ark',
    period: 'May 2026',
    org: 'CodeSpring Hackathon, ISEP (3rd place)',
    summary:
      'An offline-first survival companion for iOS and Android, combining maps, emergency knowledge, notes and on-device AI for use without internet access.',
    detail:
      "Ark combines downloadable offline maps, a searchable knowledge library, protected notes and documents with encrypted backups, and an on-device AI assistant that searches the user's own sources. It also includes field tools such as a compass, barometer, level, weather cache and GPX recording. The application is built with Expo and React Native, using SQLite full-text search and native modules for routing, OCR and ZIM reading.",
    stack: ['React Native', 'Expo', 'TypeScript', 'SQLite', 'MapLibre', 'Local AI / RAG'],
    link: 'https://github.com/rodrgds/ark',
  },
]

// CV page content. Categories follow the same shape as rgo.pt/cv?view=list:
// Experience / Projects / University Projects / Education.
export const experience = [
  {
    id: 'feup-tutor',
    role: 'Academic Tutor',
    org: 'Faculty of Engineering, University of Porto',
    type: 'seasonal',
    period: 'Oct 2025 - Jul 2026',
    location: 'Porto, Portugal',
    points: [
      'Created clear learning materials and support resources for Calculus I and II.',
    ],
  },
  {
    id: 'apr',
    role: 'Power Platform Software Developer Intern',
    org: 'APR - Technology Solutions',
    type: 'internship',
    period: 'Dec 2023 - May 2024',
    location: 'Ermesinde, Porto, Portugal (Remote)',
    points: [
      'Built a Microsoft Power Apps solution that simplified how users record, organise and monitor expenses.',
      'Improved the user experience and streamlined financial workflows through practical low-code development.',
    ],
  },
  {
    id: 'bwd',
    role: 'Power Platform Software Developer Intern',
    org: 'bwd Digital Transformation',
    type: 'internship',
    period: 'Jun 2023 - Nov 2023',
    location: 'Porto, Portugal (Hybrid)',
    points: [
      'Helped develop a Microsoft Power Apps solution for an international company, improving business workflows and operational efficiency.',
      'Designed automated processes with Microsoft Power Automate to reduce manual work and improve process consistency.',
    ],
  },
]

// Shared coursework from the FEUP degree - same entries as rgo.pt/cv.
export const universityProjects = [
  {
    id: 'compiler-register-allocation',
    title: 'Compiler Register Allocation',
    logo: asset('/media/cv/compiler-register-allocation/registerallocationlogo.webp'),
    team: '3-person team',
    course: 'Algorithm Design',
    period: 'May 2026 - May 2026',
    repo: 'https://github.com/AlexDTT/CompilerRegisterAllocationProject',
    points: [
      'Developed a global register allocator that merges live ranges into webs, builds an interference graph and assigns registers under a fixed limit',
      'Implemented baseline colouring, controlled spilling, live-range splitting, DSatur ordering, graph-class shortcuts and guarded branch-and-bound refinement',
      'Added free-split recovery, marker-preserving output, DOT graph exports, deterministic integration tests and clear visualisations',
    ],
    detail: [
      'This C++ compiler back-end tool combines compatible variable live ranges into webs, builds an interference graph and assigns them to a limited set of physical registers.',
      'The allocator extends a greedy baseline with graph-class shortcuts, DSatur ordering and a bounded branch-and-bound pass for smaller graphs. When registers are insufficient, it supports explicit spilling and marker-preserving live-range splitting through a recovery strategy that keeps only measurable improvements.',
    ],
    galleries: [
      {
        heading: 'Interference graph studies',
        columns: 2,
        ratio: '4 / 3',
        images: [
          { src: asset('/media/cv/compiler-register-allocation/basic.webp'), alt: 'Basic coloured interference graph demonstrating register reuse' },
          { src: asset('/media/cv/compiler-register-allocation/spilling.webp'), alt: 'Three-clique interference graph with one web moved to memory' },
          { src: asset('/media/cv/compiler-register-allocation/splitting.webp'), alt: 'Interference graph before and after live-range splitting' },
          { src: asset('/media/cv/compiler-register-allocation/noninterference-chain.webp'), alt: 'Non-interference chain demonstrating register reuse' },
          { src: asset('/media/cv/compiler-register-allocation/web-fusion.webp'), alt: 'Interference graph demonstrating transitive web fusion' },
        ],
      },
    ],
  },
  {
    id: 'arc-gym',
    title: 'ARC Gym',
    logo: asset('/media/cv/arc-gym/arclogo.webp'),
    team: '3-person team',
    course: 'Web Languages and Technologies',
    period: 'Mar 2026 - Jun 2026',
    repo: null,
    points: [
      'Co-developed a framework-free gym management platform with strict PHP, SQLite, semantic HTML, layered CSS and vanilla JavaScript/AJAX',
      'Implemented class registration and waitlists, trainer, member and administrator workflows, personal training, equipment reservations, memberships, notifications and analytics',
      'Added QR check-in, physical membership cards, a Bearer-authenticated JSON/XML REST API, migrations, audit logs, backups, session controls and security hardening',
    ],
    detail: [
      'ARC Gym is a complete gym management platform built without application or CSS frameworks, using strict PHP, SQLite through PDO, semantic HTML, layered CSS and vanilla JavaScript/AJAX.',
      'Members can manage memberships, join classes, use waitlists, reserve equipment, book personal training, review sessions, receive notifications and present a QR gym pass. Trainers manage availability, rosters, profiles and analytics, while administrators manage the catalogue, users, equipment, promotions, landing content, audit logs, backups, API clients and check-ins.',
      'The security layer includes prepared statements, output escaping, CSRF protection, password hashing, session rotation, role guards, upload validation, hashed API tokens and rate limiting. A public REST API supports JSON and XML, while numbered SQL/PHP migrations keep the schema and seed data reproducible.',
    ],
    galleries: [
      {
        heading: 'Public and member interfaces',
        columns: 2,
        ratio: '1400 / 861',
        images: [
          { src: asset('/media/cv/arc-gym/landing.webp'), alt: 'ARC Gym public landing interface' },
          { src: asset('/media/cv/arc-gym/login.webp'), alt: 'ARC Gym login and account creation interface' },
          { src: asset('/media/cv/arc-gym/dashboard.webp'), alt: 'ARC Gym member dashboard with weekly class schedule' },
          { src: asset('/media/cv/arc-gym/profile.webp'), alt: 'ARC Gym member profile and account settings' },
          { src: asset('/media/cv/arc-gym/public-trainer-page.webp'), alt: 'ARC Gym public trainer profile' },
          { src: asset('/media/cv/arc-gym/pass-page.webp'), alt: 'ARC Gym digital QR membership pass' },
        ],
      },
      {
        heading: 'Trainer and administration tools',
        columns: 2,
        ratio: '1400 / 861',
        images: [
          { src: asset('/media/cv/arc-gym/trainer-dashboard-1.webp'), alt: 'ARC Gym trainer schedule dashboard' },
          { src: asset('/media/cv/arc-gym/trainer-dashboard-2.webp'), alt: 'ARC Gym trainer analytics dashboard' },
          { src: asset('/media/cv/arc-gym/admin-dashboard.webp'), alt: 'ARC Gym landing-page administration interface' },
          { src: asset('/media/cv/arc-gym/admin-equipment.webp'), alt: 'ARC Gym equipment administration interface' },
          { src: asset('/media/cv/arc-gym/admin-plans.webp'), alt: 'ARC Gym membership plan administration interface' },
        ],
      },
    ],
  },
  {
    id: 'scientific-review-assignment',
    title: 'Scientific Review Assignment',
    logo: asset('/media/cv/scientific-review-assignment/scientificreviewlogo.webp'),
    team: '3-person team',
    course: 'Algorithm Design',
    period: 'Mar 2026 - May 2026',
    repo: 'https://github.com/AlexDTT/MaxflowProject',
    points: [
      'Modelled reviewer-to-paper assignment as a capacitated bipartite flow network with expertise, workload and reviewer-capacity constraints',
      'Implemented Ford-Fulkerson and Edmonds-Karp in C++, with batch and interactive workflows, CSV parsing, assignment exports and reviewer-absence analysis',
      'Documented graph construction, complexity and algorithm trade-offs with Doxygen and Graphviz visualisations',
    ],
    detail: [
      'This C++ tool represents scientific-paper review assignment as a maximum-flow problem. Submissions and reviewers form the two sides of a bipartite network, while capacities express review requirements, workload limits and expertise rules.',
      'Ford-Fulkerson and Edmonds-Karp can be compared on the same datasets. The application provides an interactive terminal interface and deterministic batch mode, exports assignments to CSV and measures the effect of removing a reviewer.',
    ],
    galleries: [
      {
        heading: 'Flow-network model',
        columns: 2,
        ratio: '6 / 5',
        images: [
          { src: asset('/media/cv/scientific-review-assignment/architecture.webp'), alt: 'Architecture of the maximum-flow review assignment pipeline' },
          { src: asset('/media/cv/scientific-review-assignment/example-graph.webp'), alt: 'Example maximum-flow assignment linking submissions and reviewers' },
        ],
      },
    ],
  },
  {
    id: 'ninjix',
    title: 'Ninjix',
    logo: asset('/media/cv/ninjix/ninjixlogo.webp'),
    team: '4-person team',
    course: 'LCOM',
    period: 'Feb 2026 - Jun 2026',
    repo: null,
    points: [
      'Co-developed a pixel-art tower-defence game and lightweight C game engine for MINIX, driven by timer, keyboard, mouse, graphics and serial-port interrupts',
      'Implemented a 60 Hz simulation and rendering loop with levels, waves, tower upgrades, enemy abilities, projectile pools, menus, profiling and PNG-to-XPM tooling',
      'Added two-player UART multiplayer with attacker and defender roles, binary synchronisation, handshakes, retransmission and shared game-state events',
    ],
    detail: [
      'Ninjix was our final Computer Laboratory project: a complete tower-defence game written in C for MINIX 3 without a game framework. The codebase functions as a small event-driven engine built on the course hardware layer.',
      'The game converts hardware interrupts into application events, runs at 60 Hz, renders through a back buffer and manages towers, eight enemy types, projectiles, waves, upgrades, targeting modes, menus, overlays and reusable sprites. We also built tooling for PNG-to-XPM conversion, Doxygen/Graphviz documentation and section-level profiling with FlameGraph output.',
      'The multiplayer mode connects two machines over COM1 at 115200 bps. One player attacks by spending elixir to spawn enemies while the other defends by placing and upgrading towers. A custom binary protocol manages discovery, role negotiation, gameplay events, pause synchronisation and restart decisions.',
    ],
    video: { id: 'v18kjteAinA', title: 'Ninjix project walkthrough' },
  },
  {
    id: 'tanktussle',
    title: 'TankTussle',
    logo: asset('/media/cv/tanktussle/tanktusslelogo.webp'),
    team: '3-person team',
    course: 'Software Design and Testing',
    period: 'Sep 2025 - Jan 2026',
    repo: 'https://github.com/FEUP-LDTS-2025/project-t08-g05',
    points: [
      'Co-developed a TankTrouble-inspired 2D tank combat game in Java with Lanterna, supporting local 1v1 multiplayer and single-player AI',
      'Implemented bouncing projectile physics, ricochets, destructible and indestructible walls, multiple maps, a map editor, menus, settings, sound, music and particles',
      'Structured the game around MVC, state and event-driven architecture, design patterns, Gradle automation and a comprehensive testing toolchain',
    ],
    detail: [
      'TankTussle is a TankTrouble-inspired local tank combat game built with Java and Lanterna for LDTS 2025/26.',
      'The game supports local 1v1 multiplayer and matches against AI opponents across three difficulty levels. Gameplay includes bouncing projectiles, ricochets, destructible and indestructible walls, multiple arenas, particle effects, sound, music, pause and victory flows, custom controls and a built-in map editor.',
      'The project uses MVC, explicit game states, an event-driven loop and patterns including factory method, observer, singleton, facade, state and template method. The Gradle toolchain includes JUnit, jqwik, Mockito, JaCoCo, Pitest and Spotless for testing, mutation analysis, coverage and formatting.',
    ],
    galleries: [
      {
        heading: 'Game interface',
        columns: 2,
        ratio: '17 / 9',
        images: [
          { src: asset('/media/cv/tanktussle/splashscreen.webp'), alt: 'TankTussle opening screen with ASCII tank logo' },
          { src: asset('/media/cv/tanktussle/player-wins-round.webp'), alt: 'TankTussle multiplayer round ending in player victory' },
          { src: asset('/media/cv/tanktussle/ai-wins-round.webp'), alt: 'TankTussle single-player match against AI' },
          { src: asset('/media/cv/tanktussle/pause-menu.webp'), alt: 'TankTussle pause menu' },
        ],
      },
    ],
  },
]

export const education = [
  {
    id: 'colgaia',
    institution: 'Colégio de Gaia',
    highlight: 'GPA: 19.7/20',
    degree: 'High School Diploma | Informática e Tecnologias Multimédia',
    location: 'Vila Nova de Gaia',
    period: 'Sep 2021 - Jun 2024',
  },
  {
    id: 'feup',
    institution: 'Faculty of Engineering, University of Porto',
    degree: 'B.S. | Informatics and Computing Engineering',
    location: 'Porto, Portugal',
    period: 'Sep 2024 - Jun 2027',
  },
]
