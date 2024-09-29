import React, { useEffect } from "react";
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

const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      name="skills"
      className="w-full min-h-screen text-gray-300 bg-[#0a192f] font-sans pt-24 sm:pt-32 pb-16"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#C23B22]">
            Skills
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center py-8 my-4">
          {[
            { src: HTML, alt: "html icon", name: "HTML" },
            { src: CSS, alt: "css icon", name: "CSS" },
            { src: JavaScript, alt: "javascript icon", name: "JavaScript" },
            { src: ReactLogo, alt: "react icon", name: "ReactJs" },
            { src: GithubLogo, alt: "github icon", name: "Github" },
            { src: TailwindLogo, alt: "tailwind icon", name: "Tailwind CSS" },
            { src: NodeJsLogo, alt: "nodejs icon", name: "Node.js" },
            { src: PythonLogo, alt: "python icon", name: "Python" },
            {
              src: DjangoLogo,
              alt: "django icon",
              name: "Django REST Framework",
            },
            { src: LaravelLogo, alt: "laravel icon", name: "Laravel" },
            { src: MySQLLogo, alt: "mysql icon", name: "MySQL" },
            { src: PhpLogo, alt: "php icon", name: "PHP" },
          ].map((skill, index) => (
            <div
              key={index}
              className="shadow-2xl shadow-[#040c16] hover:scale-110 duration-300 rounded-md p-2"
            >
              <div data-aos="zoom-in-up" data-aos-duration={1000 + index * 500}>
                <img
                  src={skill.src}
                  className="w-16 h-16 mx-auto object-contain"
                  alt={skill.alt}
                />
                <p className="my-2">{skill.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
