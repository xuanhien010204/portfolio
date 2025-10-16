// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import { link } from "framer-motion/m";
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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  user1,
  user2,
  user3,
  youtube,
  linkedin,
  twitter,
  github,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "source-code",
    title: "Source Code",
    link: "https://github.com/xuanhien010204/",
  },
];

// Services
export const SERVICES = [
  {
    title: "Backend Developer (.NET & Java)",
    icon: backend,
  },
  {
    title: "Web Developer (React + TypeScript)",
    icon: web,
  },
  {
    title: "Database Designer (SQL Server, PostgreSQL)",
    icon: mongodb,
  },
  {
    title: "Cloud & DevOps (Azure, Deployment)",
    icon: docker,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "Backend Developer (Academic Projects)",
    company_name: "FPT University",
    icon: starbucks,
    iconBg: "#383E56",
    date: "2022 - 2024",
    points: [
      "Studied and applied core programming principles including Object-Oriented Programming (OOP) and software architecture design.",
      "Built multiple academic projects using ASP.NET Core, C#, Java Spring Boot, and SQL Server.",
      "Designed and implemented relational databases, applied Entity Framework Core and JPA/Hibernate for ORM.",
      "Collaborated with team members using Git and GitHub to manage branches, pull requests, and code reviews.",
      "Developed RESTful APIs with proper authentication, validation, and pagination following Clean Architecture principles.",
    ],
  },
  {
    title: "Full Stack Developer (Capstone Project)",
    company_name: "FPT University",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "2024 - 2025",
    points: [
      "Developed a full-stack management system combining ASP.NET Core Web API and React + TypeScript + Tailwind CSS.",
      "Implemented authentication and authorization using JWT and role-based access control.",
      "Worked on real-world scenarios like restaurant and library management systems.",
      "Integrated AI-powered APIs and Excel automation for task management using Azure Functions.",
      "Practiced Agile development process and teamwork through sprint-based collaboration.",
    ],
  },
  {
    title: "Java & .NET Developer Intern",
    company_name: "FPT Software Quy Nhon",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2025 - Apr 2025",
    points: [
      "Developed and maintained backend APIs using ASP.NET Core and Spring Boot following Clean Architecture principles.",
      "Implemented authentication and authorization using JWT and OAuth2.",
      "Designed and optimized databases using SQL Server and PostgreSQL.",
      "Deployed cloud applications on Microsoft Azure using App Service and CosmosDB.",
      "Collaborated with other interns in team projects using GitHub and Agile methodology.",
    ],
  },
  {
    title: ".NET Developer",
    company_name: "An Moc Thanh Co., Ltd.",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "May 2025 - Present",
    points: [
      "Developing backend APIs for a management software system with ASP.NET Core Web API and Entity Framework Core.",
      "Implemented user authentication, data management, and reporting modules.",
      "Integrated AI-powered APIs with Azure Functions to automate data workflows.",
      "Worked on Excel file automation including complex formula handling and data processing.",
      "Collaborated with frontend developers using RESTful APIs and Swagger documentation.",
    ],
  },
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    testimonial:
      "Hiển là một lập trình viên backend có tư duy logic rất tốt. Trong quá trình thực tập tại FPT Software Quy Nhơn, bạn ấy luôn chủ động học hỏi và đảm nhận những task khó, đặc biệt là phần API và xử lý dữ liệu trên Azure.",
    name: "Nguyễn Lộc",
    designation: "Project Manager",
    company: "FPT Software - FHM.Q9",
    image: user1,
  },
  {
    testimonial:
      "Tôi rất ấn tượng với cách Hiển viết code rõ ràng, clean, và có khả năng debug nhanh. Bạn ấy hiểu khá sâu về .NET Core, SQL Server và biết cách triển khai hệ thống lên Azure một cách chuyên nghiệp.",
    name: "Trần Minh Khang",
    designation: "Senior Software Engineer",
    company: "FPT Software",
    image: user2,
  },
  {
    testimonial:
      "Là teammate trong dự án Capstone, tôi nhận thấy Hiển luôn làm việc có trách nhiệm, biết cân bằng giữa backend và frontend. Bạn ấy hỗ trợ nhóm rất nhiều trong việc thiết kế API và tối ưu cơ sở dữ liệu.",
    name: "Lê Thảo Vy",
    designation: "Teammate - Capstone Project",
    company: "FPT University",
    image: user3,
  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "Center Management System",
    description:
      "Developed a management system for an English center to manage students, classes, and schedules. Designed and implemented backend APIs, handled authentication, and optimized database queries for performance and scalability.",
    tags: [
      { name: "aspnetcore", color: "blue-text-gradient" },
      { name: "sqlserver", color: "green-text-gradient" },
      { name: "react", color: "pink-text-gradient" },
    ],
    image: project1,
    source_code_link: "https://github.com/xuanhien010204/CenterManagementSystem",
    live_site_link: "",
  },
  {
    name: "Restaurant Management System",
    description:
      "A full-stack application for managing restaurant operations including table reservations, employee management, and menu handling. Built using .NET Core / Java Spring Boot for backend and React + Tailwind CSS for frontend.",
    tags: [
      { name: "dotnetcore", color: "blue-text-gradient" },
      { name: "springboot", color: "green-text-gradient" },
      { name: "postgresql", color: "pink-text-gradient" },
      { name: "react", color: "blue-text-gradient" },
    ],
    image: project2,
    source_code_link: "https://github.com/xuanhien010204/RestaurantManagementSystem",
    live_site_link: "",
  },
  {
    name: "AI Task Automation Tool",
    description:
      "Developed during an internship at FPT Software. The system automatically generates project tasks using AI and allows exporting them to Excel with complex formulas. Built with Azure Functions, Cosmos DB, and integrated with OpenAI API.",
    tags: [
      { name: "azurefunctions", color: "blue-text-gradient" },
      { name: "cosmosdb", color: "green-text-gradient" },
      { name: "openaiapi", color: "pink-text-gradient" },
      { name: "excelautomation", color: "blue-text-gradient" },
    ],
    image: project3,
    source_code_link: "https://github.com/xuanhien010204/AITaskAutomationTool",
    live_site_link: "",
  },
  {
    name: "FPTU AI & Robotics Challenge 2025",
    description:
      "Certificate of participation as an organizer at FPTU AI & Robotics Challenge 2025. Developed a line-following autonomous vehicle and an environmental monitoring device equipped with sensors for temperature, humidity, and air quality.",
    tags: [
      { name: "iot", color: "green-text-gradient" },
      { name: "arduino", color: "pink-text-gradient" },
      { name: "ai-robotics", color: "blue-text-gradient" },
    ],
    image: project4,
    source_code_link: "",
    live_site_link: "",
  }
] as const;


export const SOCIALS = [
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/feed/",
  },
  
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/xuanhien010204",
  },
] as const;
