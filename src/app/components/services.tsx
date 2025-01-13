"use client";

import Link from "next/link";
import Typewriter from "typewriter-effect";
import { FaArrowRightLong } from "react-icons/fa6";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500, // Animation duration in milliseconds
      once: false, // Whether animation should happen only once
    });
  }, []);

  return (
    <>
      <div id="services">
        <section className="text-gray-600 body-font">
          <div className="container px-5 pt-8 mx-auto">
            <div
              className="flex flex-col text-center w-full mb-20"
              data-aos="fade-up" // Add AOS animation attribute
            >
              <h2 className="text-[25px] text-center sm:text-5xl font-bold text-yellow-500 tracking-widest title-font mb-1">
                Haider Shaikh
              </h2>
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                <Typewriter
                  options={{
                    strings: ["Graphic Designer", "UI/UX Designer"],
                    autoStart: true,
                    loop: true,
                    wrapperClassName:
                      "ml-2 text-[#007FFF] font-anydore text-2xl font-bold",
                    deleteSpeed: 60,
                    delay: 70,
                  }}
                />
              </h1>
            </div>

            <div className="flex flex-wrap gap-y-2 ">
              {/* Card 1 */}
              <div
                className="border-b hover:drop-shadow-2xl xl:w-1/4 lg:w-1/2 md:w-full px-7 py-2 sm:py-6 border-l-2 border-gray-200 border-opacity-60"
                data-aos="fade-right" // Add animation for this card
              >
                <h2 className="text-lg hover:text-blue-700 sm:text-xl text-gray-900 font-medium title-font mb-2">
                  Packaging Designs
                </h2>
                <p className="leading-relaxed text-base mb-4">
                  Here we are designing different packaging designs.
                </p>
                <a
                  href="https://www.instagram.com/haider_designing/#/"
                  className="text-yellow-500 inline-flex items-center"
                >
                  Learn More
                  <FaArrowRightLong className="ml-3 mt-1 focus:text-blue-600" />
                </a>
              </div>

              {/* Card 2 */}
              <div
                className="xl:w-1/4 border-b hover:drop-shadow-2xl lg:w-1/2 md:w-full px-7 py-6 border-l-2 border-gray-200 border-opacity-60"
                data-aos="fade-up" // Add animation for this card
              >
                <h2 className="text-lg hover:text-blue-700 sm:text-xl text-gray-900 font-medium title-font mb-2">
                  Birthday Cards
                </h2>
                <p className="leading-relaxed text-base mb-4 line-clamp-2">
                  Birthday cards are the main things that build love bonds.
                </p>
                <a
                  href="https://www.instagram.com/haider_designing/#/"
                  className="text-yellow-500 inline-flex items-center"
                >
                  Learn More
                  <FaArrowRightLong className="ml-3 mt-1 focus:text-blue-600" />
                </a>
              </div>

              {/* Additional Cards... */}
               {/* Card 3 */}
               <div className="xl:w-1/4 border-b hover:drop-shadow-2xl lg:w-1/2 md:w-full px-7 py-6 border-l-2 border-gray-200 border-opacity-60" data-aos="fade-up" >
                <h2 className="text-lg hover:text-blue-700 sm:text-xl text-gray-900 font-medium title-font mb-2">
                  Logo Designing
                </h2>
                <p className="leading-relaxed text-base mb-4">
                  Here we are creating stunning logo designs.
                </p>
                <a
                  href="https://www.instagram.com/haider_designing/#/"
                  className="text-yellow-500 inline-flex items-center"
                >
                  Learn More
                  <FaArrowRightLong className="ml-3 mt-1 focus:text-blue-600" />
                </a>
              </div>

              {/* Card 4 */}
              <div className="xl:w-1/4 lg:w-1/2 md:w-full px-7 py-2 sm:py-6 border-l-2 border-gray-200 border-opacity-60" data-aos="fade-left" >
                <h2 className="hover:text-blue-700 text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                  Business Cards
                </h2>
                <p className="leading-relaxed text-base mb-4 line-clamp-2">
                  Here we are creating business cards that encourage and boost
                  your sales via good impact.
                </p>
                <a
                  href="https://www.instagram.com/haider_designing/#/"
                  className="text-yellow-500 inline-flex items-center"
                >
                  Learn More
                  <FaArrowRightLong className="ml-3 mt-1 focus:text-blue-600" />
                </a>
              </div>
            </div>

            {/* View More Button */}
            <Link href="serv">
              <button className="flex mx-auto mt-4 text-white bg-yellow-500 border-0 py-1 px-7 focus:outline-none hover:bg-yellow-600 rounded text-lg" data-aos="fade-up" >
                View More 
              </button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
