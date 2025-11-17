"use client";

import { useEffect, useState } from "react";
import data from "../data/portfolioData";
import AOS from "aos";
import "aos/dist/aos.css";
import ShowCard from "./ShowCard";

const Work2 = () => {
  const [nextItems, setNextItems] = useState(6);
  const [portfolios, setPortfolios] = useState(data);
  const [showCard, setShowCard] = useState(false);
  const [activeId, setActiveId] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    if (activeFilter === "all") {
      setPortfolios(data);
    } else {
      setPortfolios(
        data.filter((portfolio) => portfolio.category === activeFilter)
      );
    }
    setNextItems(6);
  }, [activeFilter]);

  const handleLoadMore = () => {
    setNextItems((prev) => prev + 3);
  };

  const handleShowCard = (id) => {
    setShowCard(true);
    setActiveId(id);
  };

  return (
    <section
      id="work"
      className="w-full py-20 bg-[#0a192f] text-gray-300 font-sans"
    >
      <div className="max-w-[1000px] mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 pb-2 inline-block border-b-4 border-[#C23B22]">
          Work
        </h2>
        <p className="mb-8">Check out My Work</p>

        <div className="mb-8 flex gap-3 flex-wrap">
          <button
            onClick={() => setActiveFilter("all")}
            className={`py-2 px-4 rounded-lg transition-colors duration-300 ${
              activeFilter === "all"
                ? "bg-[#C23B22] text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveFilter("Freelance")}
            className={`py-2 px-4 rounded-lg transition-colors duration-300 ${
              activeFilter === "Freelance"
                ? "bg-[#C23B22] text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            Freelance
          </button>
          <button
            onClick={() => setActiveFilter("AI")}
            className={`py-2 px-4 rounded-lg transition-colors duration-300 ${
              activeFilter === "AI"
                ? "bg-[#C23B22] text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            AI
          </button>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {portfolios.slice(0, nextItems).map((portfolio, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg"
              data-aos="fade-zoom-in"
              data-aos-delay="50"
              data-aos-duration="1000"
            >
              <img
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                src={portfolio.imgUrl || "/placeholder.svg"}
                alt={portfolio.title}
              />
              <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={() => handleShowCard(portfolio.id)}
                  className="bg-[#C23B22] text-white py-2 px-4 rounded-lg hover:bg-[#9c2f1b] transition-colors duration-300"
                >
                  See details
                </button>
              </div>
            </div>
          ))}
        </div>

        {nextItems < portfolios.length && portfolios.length > 6 && (
          <div className="text-center mt-8">
            <button
              onClick={handleLoadMore}
              className="bg-[#C23B22] text-white py-2 px-6 rounded-lg hover:bg-[#9c2f1b] transition-colors duration-300"
            >
              Load More
            </button>
          </div>
        )}
      </div>

      {showCard && <ShowCard setShowCard={setShowCard} activeId={activeId} />}
    </section>
  );
};

export default Work2;
