import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link, animateScroll as scroll } from "react-scroll";
import ProfilePicture from "../asset/profile.jpg";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div name="home" className="w-full min-h-screen bg-[#0a192f] font-sans">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col md:flex-row justify-center items-center min-h-screen">
        <div className="flex-1 flex justify-center items-center mt-8 md:mt-0 md:order-1">
          <img
            src={ProfilePicture}
            alt="Profile"
            className="w-64 h-64 md:w-80 md:h-80 object-cover bg-[#1a293b] p-4 rounded-full shadow-lg"
            data-aos="fade-left"
            data-aos-duration="1500"
          />
        </div>

        <div className="flex-1 md:ml-8">
          <h1
            className="text-5xl sm:text-6xl font-bold text-[#e1e6f5] mb-4 mt-20"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            Larbi Mohammmed Achraf
          </h1>
          <h2
            className="text-4xl sm:text-5xl font-bold text-[#8892b0]"
            data-aos="fade-up"
            data-aos-duration="2500"
          >
            I am a FullStack Web Developer,
          </h2>
          <p className="py-5 max-w-[700px] text-[#8892b0] font-sans">
            I am a passionate Frontend Developer with expertise in HTML, CSS,
            JavaScript, and React. I am dedicated to crafting exceptional user
            experiences. With a strong focus on building mobile-responsive web
            applications, I combine my design sensibility with technical skills
            to create seamless interfaces. In addition to my frontend
            capabilities, I have a solid foundation in backend development using
            Python and PHP, allowing me to contribute to full-stack projects. My
            commitment to continuous learning and improvement drives me to stay
            updated with the latest technologies and best practices in web
            development.
          </p>
          <div>
            <Link activeClass="active" to="work" smooth={true} duration={1000}>
              <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#C23B22] hover:border-[#C23B22] duration-300 font-sans">
                View My Work
                <span className="group-hover:ml-6 duration-300">
                  <HiArrowNarrowRight className="ml-3" />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
