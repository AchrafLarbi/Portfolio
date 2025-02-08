"use client";

import { useState } from "react";

const About = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const cardData = [
    {
      title: "Frontend Developer",
      description:
        "As a Frontend Developer, I specialize in creating engaging user interfaces using HTML, CSS, and JavaScript. My passion for design and attention to detail allows me to craft seamless user experiences.",
    },
    {
      title: "Backend Developer",
      description:
        "With expertise in Django REST Framework and PHP Laravel, I build robust and scalable server-side applications. I focus on creating efficient APIs and ensuring data security for all backend processes.",
    },
    {
      title: "AI Developer",
      description:
        "I am dedicated to integrating AI technologies into web applications. My work involves leveraging machine learning algorithms to enhance user experiences and drive data-driven decisions.",
    },
  ];

  return (
    <section
      id="about"
      className="w-full py-20 bg-[#0a192f] text-gray-300 font-sans"
    >
      <div className="max-w-[1000px] mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 pb-2 inline-block border-b-4 border-[#C23B22]">
          About
        </h2>

        <div className="space-y-8">
          <div
            className="text-left text-xl md:text-2xl font-bold cursor-pointer"
            onClick={() => handleExpand(0)}
          >
            <p>
              Hi, I am <span className="text-[#C23B22]">Achraf</span>, Nice to
              meet you. Please take a look at my Projects,{" "}
              <span className="text-[#C23B22]">Thank You</span>.
            </p>
            {expandedIndex === 0 && (
              <p className="mt-4 text-base font-normal">
                Unlock the full potential of your web presence with a seasoned
                FullStack Web Developer deeply passionate about crafting
                captivating digital experiences.
              </p>
            )}
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {cardData.map((card, index) => (
              <div
                key={index}
                onClick={() => handleExpand(index + 1)}
                className={`bg-[#0f172a] rounded-lg overflow-hidden cursor-pointer transition-all transform hover:scale-105 hover:shadow-xl duration-300 ${
                  expandedIndex === index + 1 ? "md:col-span-3" : ""
                }`}
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
                  <p
                    className={
                      expandedIndex === index + 1 ? "text-base" : "text-sm"
                    }
                  >
                    {expandedIndex === index + 1
                      ? card.description
                      : `${card.description.substring(0, 60)}...`}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
