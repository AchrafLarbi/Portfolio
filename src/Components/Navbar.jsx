import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import {
  FaBars,
  FaTimes,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFillFileEarmarkPersonFill } from "react-icons/bs";
import { Link, animateScroll as scroll } from "react-scroll";
import resume from "../asset/resume.pdf";

const Navbar = () => {
  const [navView, setNavView] = useState(false);

  const handleNav = () => {
    setNavView(!navView);
  };

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-10 font-sans">
      <div>
        <TypeAnimation
          sequence={[
            "Data Analyst & AI Student",
            1000,
            "Back-End Developer",
            1000,
            "Front-End Developer",
            1000,
          ]}
          speed={50}
          repeat={Infinity}
          // style={{ fontSize: '1em' }}
        />
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        <li>
          <Link activeClass="active" to="home" smooth={true} duration={1000}>
            Home
          </Link>
        </li>
        <li>
          <Link activeClass="active" to="about" smooth={true} duration={1000}>
            About
          </Link>
        </li>
        <li>
          <Link activeClass="active" to="skills" smooth={true} duration={1000}>
            Skills
          </Link>
        </li>
        <li>
          <Link activeClass="active" to="work" smooth={true} duration={1000}>
            Work
          </Link>
        </li>

        <li>
          <Link activeClass="active" to="contact" smooth={true} duration={1000}>
            Contact
          </Link>
        </li>
      </ul>

      {/* absolute top-0 left-0 w-full h-screen  bg-[#0a192f] backdrop-filter backdrop-blur-lg bg-opacity-30 flex flex-col justify-center items-center */}
      {/* Humberger Menu */}
      <div className="md:hidden z-20 text-xl" onClick={handleNav}>
        {!navView ? <FaBars /> : <FaTimes />}
      </div>

      <ul
        className={
          !navView
            ? "absolute top-0 right-0 left-0 flex flex-col items-center justify-center transition-all duration-700 -translate-y-[100vh]"
            : "md:hidden absolute w-full h-screen top-0 right-0 left-0 flex flex-col justify-center items-center bg-[#0a192f] backdrop-filter backdrop-blur-lg bg-opacity-30 z-10 transition-all duration-700 translate-y-0"
        }
      >
        <li className="py-4 text-3xl font-semibold">
          <Link
            onClick={handleNav}
            activeClass="active"
            to="home"
            smooth={true}
            duration={1000}
          >
            Home
          </Link>
        </li>
        <li className="py-4 text-3xl font-semibold">
          <Link
            onClick={handleNav}
            activeClass="active"
            to="about"
            smooth={true}
            duration={1000}
          >
            About
          </Link>
        </li>
        <li className="py-4 text-3xl font-semibold">
          <Link
            onClick={handleNav}
            activeClass="active"
            to="skills"
            smooth={true}
            duration={1000}
          >
            Skills
          </Link>
        </li>
        <li className="py-4 text-3xl font-semibold">
          <Link
            onClick={handleNav}
            activeClass="active"
            to="work"
            smooth={true}
            duration={1000}
          >
            Work
          </Link>
        </li>
        <li className="py-4 text-3xl font-semibold">
          <Link
            onClick={handleNav}
            activeClass="active"
            to="contact"
            smooth={true}
            duration={1000}
          >
            Contact
          </Link>
        </li>
      </ul>

      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#171515]">
            <a
              href="https://github.com/AchrafLarbi"
              rel="noreferrer"
              target="_blank"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#0A66C2]">
            <a
              href="https://www.linkedin.com/in/larbi-achraf-01902a283/"
              rel="noreferrer"
              target="_blank"
              className="flex justify-between items-center w-full text-gray-300"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#e1306c]">
            <a
              href="https://www.instagram.com/mohamedachraf123/"
              rel="noreferrer"
              target="_blank"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Instagram <FaInstagram size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#565f69]">
            <a
              href={resume} // Replace with the actual path to your CV
              className="flex justify-between items-center w-full text-gray-300"
              download="Your-CV.pdf" // The name that the file will have when downloaded
            >
              Resume <BsFillFileEarmarkPersonFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
