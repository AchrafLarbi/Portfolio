"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HTML from "../asset/html.png";
import CSS from "../asset/css.png";
import TailwindLogo from "../asset/tailwind.png";
import JavaScript from "../asset/javascript.png";
import ReactLogo from "../asset/react.png";
import GithubLogo from "../asset/github.png";
import NodeJsLogo from "../asset/node.png";
import PythonLogo from "../asset/python.png";
import DjangoLogo from "../asset/djangorest.png";
import PhpLogo from "../asset/php.png";
import MySQLLogo from "../asset/mysql.png";
import LaravelLogo from "../asset/laravel.png";
import TensorFlowLogo from "../asset/tensorflow.png";
import Kaggle from "../asset/Kaggle.png";
import ScikitLearnLogo from "../asset/Scikit_Learn.png";
import OpenCVLogo from "../asset/OpenCv.png";

const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const skills = [
    { src: HTML, alt: "html icon", name: "HTML" },
    { src: CSS, alt: "css icon", name: "CSS" },
    { src: JavaScript, alt: "javascript icon", name: "JavaScript" },
    { src: ReactLogo, alt: "react icon", name: "ReactJs" },
    { src: GithubLogo, alt: "github icon", name: "Github" },
    { src: TailwindLogo, alt: "tailwind icon", name: "Tailwind CSS" },
    { src: NodeJsLogo, alt: "nodejs icon", name: "Node.js" },
    { src: PythonLogo, alt: "python icon", name: "Python" },
    { src: DjangoLogo, alt: "django icon", name: "Django REST Framework" },
    { src: LaravelLogo, alt: "laravel icon", name: "Laravel" },
    { src: MySQLLogo, alt: "mysql icon", name: "MySQL" },
    { src: PhpLogo, alt: "php icon", name: "PHP" },
    { src: TensorFlowLogo, alt: "tensorflow icon", name: "TensorFlow" },
    { src: Kaggle, alt: "Kaggle icon", name: "Kaggle" },
    { src: ScikitLearnLogo, alt: "scikit-learn icon", name: "Scikit-Learn" },
    { src: OpenCVLogo, alt: "opencv icon", name: "OpenCV" },
  ];

  return (
    <section
      id="skills"
      className="w-full py-20 bg-[#0a192f] text-gray-300 font-sans"
    >
      <div className="max-w-[1000px] mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 pb-2 inline-block border-b-4 border-[#C23B22]">
          Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="shadow-2xl shadow-[#040c16] hover:scale-110 duration-300 rounded-md p-4"
              data-aos="zoom-in-up"
              data-aos-duration={1000 + index * 100}
            >
              <img
                src={skill.src || "/placeholder.svg"}
                className="w-16 h-16 mx-auto object-contain mb-4"
                alt={skill.alt}
              />
              <p className="text-center">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
