import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  figma,
  docker,
  gcp,
  c_sharp,
  xd,
  after_effects,
  premiere_pro,
  photoshop,
  donet_core,
  mysql,
  angular,
  azure,
  laravel_portfolio,
  vendron_cloud,
  vendron_go,
  threejs,
  flutter,
  silkron,
  alliance_healthcare_group,
  vendron_op,
  laravel,
  swift,
  icare_portal,
  icare_mobile,
  threeD_portfolio
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Web",
    icon: web,
    stack: [
      {
        name: "Angular",
        icon: angular,
      },
      {
        name: "Laravel",
        icon: laravel,
      },
      {
        name: "TypeScript",
        icon: typescript,
      },
      {
        name: ".NET Core",
        icon: donet_core,
      },
    ]
  },
  {
    title: "Mobile Applications",
    icon: flutter,
    stack: [
      {
        name: "Flutter",
        icon: flutter,
      },
      {
        name: "TypeScript",
        icon: typescript,
      },
    ]
  },
  {
    title: "APIs & Delivery",
    icon: backend,
    stack: [
      {
        name: "C#",
        icon: c_sharp,
      },
      {
        name: ".NET Core",
        icon: donet_core,
      },
      {
        name: "Docker",
        icon: docker,
      },
      {
        name: "Git",
        icon: git,
      },

    ]
  },
];

const technologies = [
  {
    name: "C#",
    icon: c_sharp,
  },
  {
    name: ".NET Core",
    icon: donet_core,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "PHP / Laravel",
    icon: laravel,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Adobe XD",
    icon: xd,
  },
  {
    name: "Adobe After Effects",
    icon: after_effects,
  },
  {
    name: "Adobe Premiere Pro",
    icon: premiere_pro,
  },
  {
    name: "Adobe Photoshop",
    icon: photoshop,
  },
  {
    name: "Azure",
    icon: azure,
  },
  {
    name: "Google Cloud Platform",
    icon: gcp,
  },
];

const additionalSkills = [
  "RESTful API Design",
  "CI/CD & GitHub Actions",
  "Application Security / VAPT",
  "OpenAPI / Swagger",
  "App Store & Google Play Releases",
  "YOLOv5",
  "PaddleSeg",
  "Claude",
  "OpenAI Codex",
  "Self-hosted LLMs",
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Silkron Technologies Sdn Bhd",
    icon: silkron,
    iconBg: "#383E56",
    date: "June 2021 - Jan 2023 (1 year 7 months)",
    points: [
      "Designed, implemented and maintained web applications using Yii2 and JavaScript.",
      "Developed and deployed WeChat Mini Programs and mobile applications to Google Play and the Apple App Store.",
      "Built and integrated RESTful APIs for mobile and WeChat application workflows.",
      "Trained computer-vision models using YOLOv5 and supported image labeling and segmentation with PaddleSeg.",
    ],
  },
  {
    title: "Lead Software Engineer",
    company_name: "Silkron Technologies Sdn Bhd",
    icon: silkron,
    iconBg: "#383E56",
    date: "Jan 2023 - Jan 2024 (1 year)",
    points: [
      "Led a development team by providing mentorship, technical guidance and delivery support.",
      "Developed and maintained a cross-platform Flutter application and RESTful APIs using PHP Yii2.",
      "Established CI/CD workflows with GitHub Actions and documented APIs using OpenAPI / Swagger.",
      "Published and maintained mobile applications while monitoring and optimizing app and API performance.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company_name: "Alliance Healthcare Group",
    icon: alliance_healthcare_group,
    iconBg: "#ffffff",
    date: "Jan 2024 - Present",
    points: [
      "Build and enhance Angular and TypeScript member portals and Flutter mobile applications supporting 200,000+ users across Android and iOS.",
      "Develop multiple white-label Flutter apps from a shared codebase with configurable branding and client-specific features.",
      "Design and maintain RESTful APIs using C# and .NET Core, with CI/CD workflows across environments.",
      "Partner with clients and internal stakeholders to clarify requirements, manage expectations, support UAT and coordinate production releases.",
      "Perform VAPT remediation across web, mobile and API components, improve performance and usability, and manage App Store and Google Play releases.",
    ],
  },
];

const education = [
  {
    period: "2019 - 2021",
    qualification: "BSc (Hons) Computing",
    institution: "University of Greenwich",
    highlights: ["First Class Honours", "Best Student Award"],
  },
  {
    period: "2016 - 2018",
    qualification: "Diploma in Information Technology",
    institution: "SEGi College Penang",
    highlights: [
      "Vice President, Multi-Tech Society",
      "Champion, SEGi Video Competition",
    ],
  },
];

const languages = ["English", "Malay", "Chinese"];

const projects = [
  {
    name: "Laravel Portfolio",
    description:
      "Personal portfolio built with Laravel and Tailwind, containerized with Docker, and hosted on GCP.",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "Docker",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "GCP",
        color: "pink-text-gradient",
      },
    ],
    image: laravel_portfolio,
    source_code_link: "https://github.com/chihong33/port-folio-laravel",
    app_store_link: "",
    play_store_link: "",
    website_link: "",
  },
  {
    name: "Smart Vending Cloud - Vendron Cloud",
    description:
      "Vendron Cloud is a cloud-based smart vending management service that can be accessed from anywhere on any compatible device including PC, smartphones, tablets, and so on to remotely manage and monitor your clusters of smart vending machines, smart lockers, smart coffee vending machines, smart vending fridges and self-service food ordering payment kiosks in disperse locations.",
    tags: [
      {
        name: "Yii2",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: vendron_cloud,
    source_code_link: "",
    app_store_link: "",
    play_store_link: "",
    website_link: "https://vendron.com/v2/site/login",
  },
  {
    name: "Vendron Go",
    description:
      "Vendron GO is a mobile application that allows users to remotely view products inside vending machines, make purchases, and reserve products in vending machines. It also supports multiple payment methods to satisfy various end users from different country.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
    ],
    image: vendron_go,
    source_code_link: "",
    app_store_link: "https://apps.apple.com/us/app/vendron-go/id1220755182",
    play_store_link: "https://play.google.com/store/apps/details?id=com.silkron.vendrongo&pcampaignid=web_share",
    website_link: "",
  },
  {
    name: "Vendron OP",
    description:
      "Vendron OP is a mobile application designed for operators to efficiently manage their machines remotely anywhere, anytime. Its core features include viewing sales reports, monitoring machine status, remote machine management, and restocking capabilities.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
    ],
    image: vendron_op,
    source_code_link: "",
    app_store_link: "https://apps.apple.com/us/app/vendron-operator/id1463470727",
    play_store_link: "https://play.google.com/store/apps/details?id=com.silkron.vendronoperator&pcampaignid=web_share",
    website_link: "",
  },
  {
    name: "ICare Member Portal",
    description:
      "iCare member portal gives you quick access to enjoy your health benefits. Core features including locate nearest panel clinics through Clinic Locator, retrieve your e-Card, submit Claims , fix a Specialist Appointment, request for Letter of Guarantee.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: ".NET Core",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
    ],
    image: icare_portal,
    source_code_link: "",
    app_store_link: "",
    play_store_link: "",
    website_link: "https://member.alliancehealthcare.com.sg/",
  },
  {
    name: "ICare Mobile App",
    description:
      "iCare Mobile app gives you quick access to enjoy your health benefits. Core features including locate nearest panel clinics through Clinic Locator, retrieve your e-Card, submit Claims , fix a Specialist Appointment, request for Letter of Guarantee, video-consult a doctor through HeyAlly. ",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: ".NET Core",
        color: "blue-text-gradient",
      },
    ],
    image: icare_mobile,
    source_code_link: "",
    app_store_link: "https://apps.apple.com/sg/app/icare-2-0/id6670236051",
    play_store_link: "https://play.google.com/store/apps/details?id=com.ahg.heyally.main&pcampaignid=web_share",
    website_link: "",
  },
  {
    name: "3D Portfolio",
    description:
      "Personal portfolio built with ThreeJs, ReactJs and Tailwind. Hosted on Github Pages",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "ThreeJs",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "Github",
        color: "pink-text-gradient",
      },
    ],
    image: threeD_portfolio,
    source_code_link: "https://github.com/JsphMk/joseph-portfolio",
    app_store_link: "",
    play_store_link: "",
    website_link: "https://jsphmk.github.io/joseph-portfolio/",
  },
];

export {
  services,
  technologies,
  additionalSkills,
  experiences,
  education,
  languages,
  projects,
};
