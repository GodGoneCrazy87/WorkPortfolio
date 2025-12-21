export const caseStudies = [
  {
    slug: 'solo-leveling-journal',
    title: 'Solo Leveling Journal',
    subtitle: 'Gamified Productivity System',
    heroImage: '/solo.png',

    services: 'UI/UX · Frontend Engineering',
    tools: [
      'Next.js',
      'React',
      'Tailwind CSS',
      'Framer Motion',
      'MongoDB',
      'Figma',
    ],
    deliverables: 'Progressive Web App',
    year: '2024',

    about:
      'Solo Leveling Journal is a self-driven productivity system inspired by RPG progression mechanics. Instead of reminders, streak pressure, or guilt-based nudges, it focuses on intrinsic motivation through XP, levels, and visual feedback loops that make progress feel tangible and rewarding.',

    challenge:
      'Most habit trackers fail to sustain long-term engagement. Rigid workflows, repetitive checklists, and shallow reward systems cause users to abandon tools once novelty fades. Existing solutions optimize for tracking, not behavior reinforcement.',

    solution:
      'I designed a modular, gamified system where habits translate into XP, levels, and progression visuals. The interface prioritizes clarity and low cognitive load, while motion and feedback loops reinforce consistency through reward psychology rather than external pressure. The system is local-first, responsive, and designed to evolve over time.',

    sections: [
      {
        title: 'Gamified Progress Dashboard',
        description:
          'Habits are represented as XP-driven cards with clear visual progression, allowing users to understand growth at a glance without feeling overwhelmed.',
      },
      {
        title: 'Local-First Architecture',
        description:
          'Data persists instantly in the browser, enabling zero-latency interactions, offline usability, and a smoother daily workflow.',
      },
      {
        title: 'Feedback-Driven Interactions',
        description:
          'Micro-interactions, animations, and level-up moments provide immediate feedback for every action, reinforcing habit completion.',
      },
    ],

    result:
      'The system encouraged more consistent user interaction compared to checklist-based trackers. Its architecture supports future expansion into analytics, cloud sync, and adaptive difficulty without redesigning the core UX.',
  },

  {
    slug: 'mudra-analytics',
    title: 'Mudra Analytics',
    subtitle: 'Wellness & Stress Analytics Platform',
    heroImage: '/mudra.png',

    services: 'Frontend Engineering · Data Visualization',
    tools: [
      'Next.js',
      'React',
      'Tailwind CSS',
      'Framer Motion',
      'MongoDB',
      'Python',
      'Figma',
    ],
    deliverables: 'Analytics Dashboard',
    year: '2025',

    about:
      'Mudra Analytics is a wellness analytics platform focused on making stress and health data interpretable for non-technical users. It bridges the gap between raw biometric signals and meaningful insight through clarity-first interface design.',

    challenge:
      'Biometric and wellness datasets are dense, multi-dimensional, and difficult to interpret. Existing dashboards often prioritize data density over comprehension, leaving users unsure how to act on the information presented.',

    solution:
      'I designed dashboards around progressive disclosure and visual hierarchy, surfacing insights only when relevant. Metrics are grouped logically, and ML-derived outputs are presented contextually, allowing users to understand patterns without being overwhelmed by raw data.',

    sections: [
      {
        title: 'Clarity-First Dashboard Design',
        description:
          'Metrics are structured with strong hierarchy, spacing, and labeling to reduce cognitive load and improve interpretability.',
      },
      {
        title: 'Reusable Visualization System',
        description:
          'Charts and metric cards were built as reusable components, enabling rapid experimentation and consistent data presentation.',
      },
      {
        title: 'ML Insight Integration',
        description:
          'Python-based models process wellness data and expose insights via APIs, which are translated into human-readable UI states.',
      },
    ],

    result:
      'The platform improved interpretability of stress metrics and was deployed as a live research analytics system, supporting real-world evaluation and experimentation.',
  },

  {
    slug: 'web3onwards',
    title: 'Web3Onwards',
    subtitle: 'Production Web3 Review Platform',
    heroImage: '/deflix.png',

    services: 'Frontend Engineering · Product UI',
    tools: [
      'Next.js',
      'React',
      'Tailwind CSS',
      'Web3',
      'MongoDB',
      'Figma',
    ],
    deliverables: 'Production Web Platform',
    year: '2024',

    about:
      'Web3Onwards is a decentralized movie review platform with NFT-backed credibility, built to serve real users at production scale. The platform focuses on trust, performance, and usability in a traditionally complex Web3 environment.',

    challenge:
      'Most Web3 products introduce significant UX friction by exposing blockchain complexity directly to users. This creates steep learning curves and limits adoption among non-crypto-native audiences.',

    solution:
      'I abstracted blockchain interactions behind familiar UI patterns, optimized rendering performance for production traffic, and designed contributor-focused interfaces to reinforce credibility and trust without exposing unnecessary complexity.',

    sections: [
      {
        title: 'Contributor-Centric Interface',
        description:
          'Profiles and contribution visibility were designed to establish trust and highlight credibility across the platform.',
      },
      {
        title: 'Performance Optimization',
        description:
          'API calls and rendering pipelines were optimized to ensure smooth performance under real-world traffic conditions.',
      },
      {
        title: 'Web3 UX Abstraction',
        description:
          'Blockchain complexity is hidden behind intuitive interactions, allowing users to engage without technical friction.',
      },
    ],

    result:
      'The platform successfully scaled to over 5,000 users, improving engagement and usability while maintaining production-level performance.',
  },
]
