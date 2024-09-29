import React, { useState } from "react";

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
    <div
      name="about"
      className="w-full min-h-screen bg-[#0a192f] text-gray-300 font-sans pb-32"
    >
      <div className="flex flex-col justify-center items-start w-full h-full max-w-[1000px] mx-auto px-4">
        <div className="w-full pb-8">
          <p className="text-3xl md:text-4xl font-bold inline border-b-4 border-[#C23B22]">
            About
          </p>
        </div>

        <div className="w-full grid grid-cols-1 gap-8 mt-8 ">
          <div
            className="text-left text-2xl md:text-3xl font-bold cursor-pointer"
            onClick={() => handleExpand(0)}
          >
            <p>
              Hi, I am <span className="text-[#C23B22]">Achraf</span>, Nice to
              meet you. Please take a look at my Projects,{" "}
              <span className="text-[#C23B22]">Thank You</span>.
            </p>
            {expandedIndex === 0 && (
              <p className="mt-4 text-lg font-normal">
                Unlock the full potential of your web presence with a seasoned
                FullStack Web Developer deeply passionate about crafting
                captivating digital experiences.
              </p>
            )}
          </div>

          <div className="w-full grid sm:grid-cols-1 md:grid-cols-3 gap-8 ">
            {cardData.map((card, index) => (
              <div
                key={index}
                onClick={() => handleExpand(index + 1)}
                className={`relative bg-[#0f172a]  text-white rounded-lg overflow-hidden cursor-pointer 
                            ${
                              expandedIndex === index + 1 ? "md:col-span-3" : ""
                            } transition-all transform hover:scale-105 hover:shadow-xl duration-300`}
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
    </div>
  );
};

export default About;
