import portfolioWork01 from "../asset/test/esicheck.png";
import portfolioWork02 from "../asset/test/stock.png";
import portfolioWork03 from "../asset/test/pizza3.PNG";
import portfolioWork04 from "../asset/test/studenty.png";
import portfolioWork05 from "../asset/test/ibtikar.jpg";
import portfolioWork06 from "../asset/test/innovpost.jpeg";
import portfolioWork07 from "../asset/test/Studio_houari.png";
import portfolioWork08 from "../asset/test/gamesooq.jpg";
import portfolioWork09 from "../asset/test/SmartCity.png";
import portfolioWork10 from "../asset/test/Book.png";
import portfolioWork11 from "../asset/test/RAG.png";
import portfolioWork12 from "../asset/test/harfan.png";
import portfolioWork13 from "../asset/test/syra.png";

const portfolioData = [
  {
    id: "13",
    imgUrl: portfolioWork12,
    title: "Harfan",
    description:
      "Harfan is an interactive educational platform that combines Arabic language learning and Quran memorization in a simple, engaging, and progressive manner. The platform is built with Django and uses SQLite for data storage. It also includes an admin section to manage content, users, and progress tracking efficiently.",
    tech: ["Django", "Python", "SQLite", "React"],
    Link: "https://harfan-pi.vercel.app/",
    category: "Freelance",
  },
  {
    id: "12",
    imgUrl: portfolioWork13,
    title: "Maison SYRA",
    description:
      "Full-stack e-commerce platform built with Django REST Framework and React. This project showcases a luxury artisan marketplace with features like secure authentication, PayPal integration, admin management, and responsive design.",
    tech: [
      "React",
      "Tailwind css",
      "Django",
      "Python",
      "Django REST Framework",
      "PayPal",
    ],
    Link: "https://maisonsyra.vercel.app/",
    category: "Freelance",
  },
  {
    id: "11",
    imgUrl: portfolioWork11,
    title: "RAG-chatbot",
    description:
      " Retrieval Augmented Generation (RAG) chatbot that allows you to ask questions about your documents. The application uses Google's Flan-T5 language model and the LangChain framework to provide accurate, document-grounded answers.",
    tech: [
      "Python",
      "Transformers",
      "LangChain",
      "Gradio",
      "LLMs",
      "RAG",
      "ChromaDB",
      "T5",
    ],
    Link: "https://huggingface.co/spaces/achraf2203/RAG-Chatbot",
    category: "AI",
  },
  {
    id: "10",
    imgUrl: portfolioWork10,
    title: "Book-Recommender",
    description:
      "A comprehensive semantic book recommendation system built with LLMs, featuring natural language search, emotion-based filtering, and an interactive web interface. Includes complete ML pipeline from data cleaning to deployment using Python, Transformers, LangChain, and Gradio. ",
    tech: [
      "Python",
      "Transformers",
      "LangChain",
      "Gradio",
      "LLMs",
      "semantic search",
      "sentiment analysis",
    ],
    Link: "https://huggingface.co/spaces/achraf2203/Book-recommonder",
    category: "AI",
  },
  {
    id: "09",
    imgUrl: portfolioWork09,
    title: "Smart City",
    description:
      "AI-powered web platform with real time vehicle detection and speed violation monitoring using YOLO , integrated with a React dashboard to visualize traffic incidents, track license plates, and display smart city statistics for efficient traffic law enforcement.",
    tech: [
      "React",
      "Yolov11",
      "OpenCv",
      "Tensorflow",
      "DQN",
      "Reforcment Learning",
      "FastAPI",
    ],
    CodeSource: "https://github.com/AchrafLarbi/Project_2sc",
    category: "AI",
  },
  {
    id: "08",
    imgUrl: portfolioWork08,
    title: "Gamesooq",
    description:
      "Mobile app with landing page and admin dashboard that allows users to exchange video games securely, featuring real time chat, exchange tracking. All managed through a modern dashboard for monitoring user activity and app statistics.",
    tech: ["React", "Tailwind css", "Javascript", "firebase"],
    Link: "https://www.gamesooq.com/",
    category: "Freelance",
  },
  {
    id: "07",
    imgUrl: portfolioWork07,
    title: "Studio Houari Wahrani",
    description:
      "I developed a professional photography portfolio for a client from Oran, Algeria, as part of a freelance project. The website features a clean, modern, and fully responsive design to showcase the client's work effectively. Built with a frontend-focused approach, it uses Supabase for database and authentication, ensuring a smooth and dynamic user experience. Additionally, I optimized the site for search engines to enhance visibility on Google. ",
    tech: ["React", "Tailwind css", "Javascript", "Supabase"],
    Link: "https://studiohouariwahrani.store/",
    category: "Freelance",
  },
  {
    id: "06",
    imgUrl: portfolioWork06,
    title: "Innovpost Hackathon",
    description:
      "Our Innovpost Hackathon solution enhances customer engagement for Algérie Poste with a mobile app, an AI-powered dashboard, and social media monitoring. It enables real-time feedback via QR codes, AI-driven sentiment analysis, and trend monitoring from Facebook and Twitter to improve service quality.",
    tech: [
      "React",
      "Tailwind css",
      "Django",
      "Python",
      "SQLite",
      "Web Scraping",
    ],
    BackendCodeSource: "https://github.com/AchrafLarbi/InnvoPost",
    FrontendCodeSource: "https://github.com/AchrafLarbi/InnovPost_Front",
    category: "AI",
  },
  {
    id: "05",
    imgUrl: portfolioWork05,
    title: "SafeRoad",
    description:
      "SafeRoad is an AI-powered traffic management solution that enhances urban mobility with smart infrastructure, a mobile app, and an admin dashboard. It features dynamic speed limits, intelligent traffic lights, real-time alerts, and interactive maps, ensuring safer and more efficient transportation.",
    tech: [
      "React",
      "Tailwind css",
      "Django",
      "Python",
      "SQLite",
      "Deep Learning",
      "Yoloo",
      "MQTT Protocol",
      "Tensorflow",
      "OpenCV",
    ],
    CodeSource: "https://github.com/AchrafLarbi/SafeRoad",
    category: "AI",
  },
  {
    id: "04",
    imgUrl: portfolioWork04,
    title: "Stundenty",
    description:
      "A modern student management system built with React, Tailwind CSS, Material UI, and Laravel. This application allows you to manage students, teachers, classrooms, subjects, and timetables effectively.",
    tech: ["React", "Tailwind css", "Laravel"],
    CodeSource: "https://github.com/AchrafLarbi/Studenty",
    category: "Freelance",
  },
  {
    id: "03",
    imgUrl: portfolioWork03,
    title: " Pizza Shop",
    description:
      "responsive pizza ordering website implemented with HTML, CSS, and JavaScript. The website is designed to provide a seamless user experience across various devices, ensuring optimal usability and visual appeal.",
    tech: ["HTML", "CSS", "JavaScript"],
    CodeSource: "https://github.com/AchrafLarbi/pizza",
    category: "Freelance",
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
    category: "Freelance",
  },
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
    category: "Freelance",
  },
];

export default portfolioData;
