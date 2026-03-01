// Mock data for portfolio

export const personalInfo = {
  name: "Abner Pallichan",
  role: "Security Systems Estimator & Project Engineer",
  location: "London, United Kingdom",
  email: "abnerpallichan@gmail.com",
  phone: "+44 07386 804046",
  bio: "Security Systems Estimator and Project Engineer with over 3 years of experience specializing in delivering cost plans, take-offs, and technical documentation for access control, nurse call, and electrical systems across healthcare and commercial projects.",
  experience: "3+ Years",
  projectsCompleted: "25+",
  specialization: "Healthcare & Security Systems"
};

export const experience = [
  {
    id: 1,
    role: "Project Manager / Estimator",
    company: "Hills Health Solutions",
    location: "Melbourne, Australia",
    period: "Sept 2024 – May 2025",
    description: "Prepared detailed cost estimates and proposals for nurse call and healthcare security systems across hospital and aged care facilities. Conducted site surveys, reviewed technical drawings, and produced accurate take-offs, BOQs, and procurement schedules.",
    achievements: [
      "Integrated CAD outputs into commercial submissions",
      "Maintained profitability and commercial control",
      "Liaised with clients, suppliers, and installation teams"
    ],
    image: "https://images.unsplash.com/photo-1626315869436-d6781ba69d6e?crop=entropy&cs=srgb&fm=jpg&q=85"
  },
  {
    id: 2,
    role: "Project Coordinator / Estimator",
    company: "Austco",
    location: "Melbourne, Australia",
    period: "Jul 2023 – Sept 2024",
    description: "Produced high-volume material take-offs and cost plans from AutoCAD and Bluebeam for access control and electrical systems. Estimated security infrastructure including card readers, cabling routes, control panels, and door hardware.",
    achievements: [
      "Developed standardized CAD templates and workflows",
      "Prepared tender documentation and pricing schedules",
      "Acted as technical interface between stakeholders"
    ],
    image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?crop=entropy&cs=srgb&fm=jpg&q=85"
  },
  {
    id: 3,
    role: "Project Engineer",
    company: "Teknocorp",
    location: "Melbourne, Australia",
    period: "Aug 2022 – Jul 2023",
    description: "Produced technical drawings and installation schematics for security and access control packages using AutoCAD and Revit. Updated as-built documentation to reflect site conditions and system changes.",
    achievements: [
      "Supported commercial teams with design revisions",
      "Assisted with project handovers and compliance documentation",
      "Created system layouts and pricing inputs"
    ],
    image: "https://images.unsplash.com/photo-1587351021355-a479a299d2f9?crop=entropy&cs=srgb&fm=jpg&q=85"
  }
];

export const skills = {
  estimating: [
    "Take-offs & BOQs",
    "Tender Submissions",
    "Cost Plans",
    "Subcontractor Pricing",
    "Risk Identification",
    "Proposal Writing"
  ],
  systems: [
    "Access Control Systems",
    "Nurse Call Systems",
    "Healthcare Systems",
    "Electrical Infrastructure",
    "Low-Voltage Systems",
    "Security Systems"
  ],
  software: [
    "AutoCAD",
    "Revit",
    "Civil 3D",
    "Bluebeam",
    "Planswift",
    "SimPro",
    "Microsoft Office",
    "Adobe Creative Suite"
  ],
  professional: [
    "Client Communication",
    "Stakeholder Management",
    "Technical Documentation",
    "Project Coordination",
    "Time Management",
    "Multi-project Management"
  ]
};

export const projects = [
  {
    id: 1,
    title: "Northern Hospital Upgrade",
    company: "Teknocorp",
    location: "Epping, Victoria",
    type: "Healthcare",
    category: ["Healthcare", "Security"],
    description: "Comprehensive nurse call and security system upgrade for Northern Hospital. Delivered complete technical drawings, installation schematics, and as-built documentation for modern healthcare communication infrastructure.",
    scope: "Nurse Call & Security Systems",
    year: "2023",
    image: "https://images.unsplash.com/photo-1519494140681-8b17d830a3e9",
    gallery: [
      "https://images.unsplash.com/photo-1519494140681-8b17d830a3e9",
      "https://images.unsplash.com/photo-1766299892693-2370a8d47e23",
      "https://images.unsplash.com/photo-1648224394449-d10dbff84b8e"
    ]
  },
  {
    id: 2,
    title: "Mt Eliza Aged Facility",
    company: "Teknocorp",
    location: "Mt Eliza, Victoria",
    type: "Aged Care",
    category: ["Aged Care", "Security"],
    description: "Complete nurse call and security fitout for aged care facility. Designed integrated systems for resident safety, staff communication, and facility security with focus on accessibility and reliability.",
    scope: "Nurse Call & Security Fitouts",
    year: "2023",
    image: "https://images.unsplash.com/photo-1685449856292-3016672f0db0",
    gallery: [
      "https://images.unsplash.com/photo-1685449856292-3016672f0db0",
      "https://images.unsplash.com/photo-1584515933487-779824d29309",
      "https://images.unsplash.com/photo-1766299892693-2370a8d47e23"
    ]
  },
  {
    id: 3,
    title: "FRV Fire Stations",
    company: "Teknocorp",
    location: "Victoria-wide",
    type: "Commercial",
    category: ["Security"],
    description: "Security system fitouts across multiple Fire Rescue Victoria stations throughout the state. Standardized security infrastructure design and implementation for critical emergency service facilities.",
    scope: "Security Fitouts",
    year: "2022-2023",
    image: "https://images.unsplash.com/photo-1521386455230-4ceaa25b72be",
    gallery: [
      "https://images.unsplash.com/photo-1521386455230-4ceaa25b72be",
      "https://images.unsplash.com/photo-1697382608786-bcf4c113b86e",
      "https://images.unsplash.com/photo-1648224394449-d10dbff84b8e"
    ]
  },
  {
    id: 4,
    title: "Geelong Stadium",
    company: "Teknocorp",
    location: "Geelong, Victoria",
    type: "Commercial",
    category: ["Security"],
    description: "Large-scale security fitout for major sporting venue. Comprehensive access control, CCTV integration, and perimeter security systems designed for high-capacity public facility.",
    scope: "Security Fitout",
    year: "2023",
    image: "https://images.unsplash.com/photo-1543333995-a78aea2eee50",
    gallery: [
      "https://images.unsplash.com/photo-1543333995-a78aea2eee50",
      "https://images.unsplash.com/photo-1697382608786-bcf4c113b86e",
      "https://images.unsplash.com/photo-1648224394467-651071f36385"
    ]
  },
  {
    id: 5,
    title: "Summerset Aged Care",
    company: "Teknocorp",
    location: "Victoria",
    type: "Aged Care",
    category: ["Aged Care", "Security"],
    description: "Security system design and implementation for aged care residential facility. Focus on resident safety, emergency response systems, and secure access management.",
    scope: "Security Systems",
    year: "2023",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309",
    gallery: [
      "https://images.unsplash.com/photo-1584515933487-779824d29309",
      "https://images.unsplash.com/photo-1685449856292-3016672f0db0",
      "https://images.unsplash.com/photo-1766299892693-2370a8d47e23"
    ]
  },
  {
    id: 6,
    title: "Footscray Hospital",
    company: "Hills Health Solutions",
    location: "Footscray, Victoria",
    type: "Healthcare",
    category: ["Healthcare"],
    description: "Comprehensive nurse call system fitout for major metropolitan hospital. Prepared detailed cost estimates, conducted site surveys, and delivered complete procurement schedules for healthcare communication infrastructure.",
    scope: "Nurse Call Fitout",
    year: "2024-2025",
    image: "https://images.unsplash.com/photo-1654762930571-dcf2ebc11542",
    gallery: [
      "https://images.unsplash.com/photo-1654762930571-dcf2ebc11542",
      "https://images.unsplash.com/photo-1766299892693-2370a8d47e23",
      "https://images.unsplash.com/photo-1648224394449-d10dbff84b8e"
    ]
  },
  {
    id: 7,
    title: "Epworth Private Hospital",
    company: "Hills Health Solutions",
    location: "Melbourne, Victoria",
    type: "Healthcare",
    category: ["Healthcare"],
    description: "Nurse call system upgrade for premium private hospital. Integrated CAD outputs into commercial submissions, ensuring compliance with healthcare standards and patient care requirements.",
    scope: "Nurse Call Fitout",
    year: "2024-2025",
    image: "https://images.unsplash.com/photo-1742436599018-27a118d635ac",
    gallery: [
      "https://images.unsplash.com/photo-1742436599018-27a118d635ac",
      "https://images.unsplash.com/photo-1648224394449-d10dbff84b8e",
      "https://images.unsplash.com/photo-1766299892693-2370a8d47e23"
    ]
  },
  {
    id: 8,
    title: "Alfred Hospital",
    company: "Hills Health Solutions",
    location: "Melbourne, Victoria",
    type: "Healthcare",
    category: ["Healthcare"],
    description: "Major nurse call system implementation for one of Victoria's leading hospitals. Managed complete estimating workflow from take-offs to tender submission for critical healthcare infrastructure.",
    scope: "Nurse Call Fitout",
    year: "2024-2025",
    image: "https://images.unsplash.com/photo-1519494140681-8b17d830a3e9",
    gallery: [
      "https://images.unsplash.com/photo-1519494140681-8b17d830a3e9",
      "https://images.unsplash.com/photo-1648224394467-651071f36385",
      "https://images.unsplash.com/photo-1766299892693-2370a8d47e23"
    ]
  },
  {
    id: 9,
    title: "Ballarat Base Hospital",
    company: "Hills Health Solutions",
    location: "Ballarat, Victoria",
    type: "Healthcare",
    category: ["Healthcare"],
    description: "Regional hospital healthcare systems project. Delivered comprehensive cost plans and technical documentation for nurse call infrastructure serving regional healthcare community.",
    scope: "Healthcare Systems",
    year: "2024-2025",
    image: "https://images.unsplash.com/photo-1600622269746-258d4124170a",
    gallery: [
      "https://images.unsplash.com/photo-1600622269746-258d4124170a",
      "https://images.unsplash.com/photo-1766299892693-2370a8d47e23",
      "https://images.unsplash.com/photo-1654762930571-dcf2ebc11542"
    ]
  },
  {
    id: 10,
    title: "Wodonga Private Hospital",
    company: "Hills Health Solutions",
    location: "Wodonga, Victoria",
    type: "Healthcare",
    category: ["Healthcare"],
    description: "Private hospital nurse call and communication systems. Conducted site surveys, liaised with suppliers, and validated system specifications for quality patient care infrastructure.",
    scope: "Healthcare Systems",
    year: "2024-2025",
    image: "https://images.unsplash.com/photo-1587556930799-8dca6fad6d41",
    gallery: [
      "https://images.unsplash.com/photo-1587556930799-8dca6fad6d41",
      "https://images.unsplash.com/photo-1648224394449-d10dbff84b8e",
      "https://images.unsplash.com/photo-1742436599018-27a118d635ac"
    ]
  }
];

export const education = [
  {
    degree: "Bachelor of Civil Engineering",
    institution: "RMIT University",
    location: "Melbourne",
    year: "2022"
  },
  {
    degree: "Associate Degree in Engineering Technology (Civil)",
    institution: "RMIT University",
    location: "Melbourne",
    year: "2020"
  }
];

export const interests = [
  "Music Production",
  "Language Learning",
  "Bouldering",
  "Hiking",
  "Camping"
];