import {
  mobile,
  backend,
  tutor,
  web,

  java,
  python,
  javascript,
  spring,
  mongodb,
  reactjs,
  git,
  docker,
  kafka,
  aws,
  jenkins,
  kubernetes,
  datastructure,

  infosys,
  axelor,

  faultsafeguard,
  freelancelot,
  rainsenseai,
  postgresql,

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
    id: "project",
    title: "Project",
  },
];

const services = [
  
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Database Developer",
    icon: mobile,
  },
  {
    title: "Computer Science Tutor",
    icon: tutor,
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Spring",
    icon: spring,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Kafak",
    icon: kafka,
  },
  {
    name: "Amazon Web Service",
    icon: aws,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Jenkins",
    icon: jenkins,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Kubernetes",
    icon: kubernetes,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Data structure & Algorithms",
    icon: datastructure,
  },
];

const experiences = [
  {
    title: "Java Developer",
    company_name: "Axelor",
    icon: axelor,
    iconBg: "#E6DEDD",
    date: "November 2023 - Present",
    points: [
      "Enhanced and extended functionalities in the 5+ key modules, including base, contact, invoicing, and sales, within an open-source CRM application using Java, Groovy, Spring boot, React, and PostgreSQL technologies",
      "Enhanced CRM app with dynamic charts, customizable dashboards, interactive dashlets, language customization for a tailored user experience, optimizing data visualization and accessibility.",
      "Improved website performance and speed through optimization techniques by 20%",
      "Employed the aspect-oriented programming (AOP) design pattern to eliminate cross-cutting concerns, reducing code clutter and duplication by 35%"
    ],
  },
  {
    title: "Systems Engineer",
    company_name: "Infosys Ltd.",
    icon: infosys,
    iconBg: "#E6DEDD",
    date: "Aug 2019 - Dec 2021",
    points: [
      "Developed new back-end micro-services in Java, Spring Boot, and Hibernate/Spring Data JPA while creating front-end components in React.",
      "Successfully integrated and deployed a generic micro-service for file upload with seamless integration capabilities in over 5 production projects, demonstrating its generic nature and adaptability.",
      "Implemented data streaming solutions for recommendation using Kafka, enabling the processing of 50K+ events daily, and decision-making for stakeholders and product managers.",
      "Collaborated to code reviews, design discussions, debugging, ensuring codebase quality and adherence to standards, resulting in a significant improvement in continuous delivery.",
      "Developed comprehensive unit tests to verify the accurate routing of messages to the new topic, achieving a test coverage of 100% and enhancing the reliability of message delivery"
    ],
  }
];

const projects = [
  {
    name: "FaultSafeguard - Distributed System",
    description:
      "FaultSafeguard is a robust distributed system designed for efficient appointment management, ensuring fault tolerance and reliability in scheduling processes.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "distributedsystems",
        color: "green-text-gradient",
      },
      {
        name: "client-server-communication",
        color: "pink-text-gradient",
      },
    ],
    image: faultsafeguard,
    source_code_link: "https://github.com/darshak-k/DAMS-Project",
  },
  {
    name: "FreelanceLot",
    description:
      "A comprehensive full-stack web application meticulously crafted with Java Spring Boot and React, seamlessly integrating the Feign client and RestTemplate to empower users in analyzing freelancer APIs.",
    tags: [
      {
        name: "java",
        color: "pink-text-gradient",
      },
      {
        name: "springboot",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
    ],
    image: freelancelot,
    source_code_link: "https://github.com/darshak-k/SOEN6441-FreeLancelot-DAMN",
  },
  {
    name: "RainsenseAI",
    description:
      "RainSenseAI is a machine learning project that focuses on rain prediction using Decision Trees and DNNs. The project aims to address the challenge of accurate rain prediction, for applications such as agriculture, water resource management, and transportation.",
    tags: [
      {
        name: "machinelearning",
        color: "blue-text-gradient",
      },
      {
        name: "rnn",
        color: "green-text-gradient",
      },
      {
        name: "cnn",
        color: "pink-text-gradient",
      },
    ],
    image: rainsenseai,
    source_code_link: "https://github.com/darshak-k/RainSenseAI-Project",
  },
];

export { services, technologies, experiences, projects };
