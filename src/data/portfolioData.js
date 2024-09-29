import portfolioWork01 from "../asset/test/esicheck.png";
import portfolioWork02 from "../asset/test/stock.png";
import portfolioWork03 from "../asset/test/pizza3.PNG";
import portfolioWork04 from "../asset/test/studenty.png";

const portfolioData = [
  {
    id: "01",
    imgUrl: portfolioWork01,
    title: "ESI-Check",
    description:
      " Esi-Check features a dashboard for professors and teachers, along with a mobile app for students. It integrates real-time assessment tools and personalized learning experiences to enhance student engagement and academic success.I contributed as a Full-Stack web developer using Nodejs, Express JS, MongoDB, and GraphQL for APIs as backend and React, Tailwind Css for frontend",
    tech: [
      "React",
      "Tailwind css",
      "Node.js",
      "MongoDB",
      "Express.js",
      "GraphQL",
    ],
    BackendCodeSource: "https://github.com/AchrafLarbi/Projet-2cp",
    FrontendCodeSource: "https://github.com/AchrafLarbi/Front_Project_2cp",
  },
  {
    id: "02",
    imgUrl: portfolioWork02,
    title: "Stockkeep",
    description:
      "User-friendly web and mobile application, 'Stockkeep,' It includes an Admin Panel for managing users and settings, a Consumer App for handling orders and profiles, and a Purchasing Service Agent App for procurement tasks. The app also features tools for Structure Managers to oversee orders and Storekeepers to manage inventory. As a backend/frontend developer , I used Django, Python, SQLite, and RESTful APIs , React, Tailwind Css, Vite to ensure smooth functionality and integration, ",
    tech: [
      "React",
      "Tailwind css",
      "Django",
      "Python",
      "SQLite",
      "RESTful APIs",
    ],
    CodeSource: "https://github.com/AchrafLarbi/Stockkeep",
  },

  {
    id: "03",
    imgUrl: portfolioWork03,
    title: " Pizza Shop",
    description:
      "responsive pizza ordering website implemented with HTML, CSS, and JavaScript. The website is designed to provide a seamless user experience across various devices, ensuring optimal usability and visual appeal.",
    tech: ["HTML", "CSS", "JavaScript"],
    CodeSource: "https://github.com/AchrafLarbi/pizza",
  },
  {
    id: "04",
    imgUrl: portfolioWork04,
    title: "Stundenty",
    description:
      "A modern student management system built with React, Tailwind CSS, Material UI, and Laravel. This application allows you to manage students, teachers, classrooms, subjects, and timetables effectively.",
    tech: ["React", "Tailwind css", "Laravel"],
    CodeSource: "https://github.com/AchrafLarbi/Studenty",
  },
];

export default portfolioData;
