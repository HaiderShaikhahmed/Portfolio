"use client"
import Link from "next/link"
// import Image from "next/image"
// import { FaBeer } from "react-icons/fa";
// import { IoCloudDownloadOutline } from "react-icons/io5";
import Typewriter from 'typewriter-effect';
import { FaArrowRightLong } from "react-icons/fa6";
import React from "react"
// import { WiDayHail } from "react-icons/wi";
const Services1 = () => {
  return (
    <>
      <div id="services">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-14 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h2 className="text-xl  text-center sm:text-5xl font-bold text-yellow-500 tracking-widest title-font mb-1">
                Haider Shaikh
              </h2>

              <p className="leading-relaxed mb-5 flex text-2xl font-bold  text-gray-600"> </p>

              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                <Typewriter
                  options={{
                    strings: ['Graphic Designer', 'UI/UX Designer'],
                    autoStart: true,
                    loop: true,
                    wrapperClassName: 'ml-2 text-[#007FFF] font-anydore text-2xl font-bold',
                    deleteSpeed: 60,
                    delay: 70,

                  }} />

              </h1>

              <p className=" line-clamp-2 sm:line-clamp-5 lg:w-2/3 mx-auto leading-relaxed text-base">
              <Typewriter
                  options={{
                    strings: ['Haider Designing | Graphics (@haider_designing) is a graphic design service based in Latifabad, Hyderabad, Sindh, Pakistan. With over 1,100 followers on Instagram, Haider showcases a diverse portfolio of design work, including logos, posters, and digital illustrations.The Instagram feed features recent projects, such as a graphic posted on January 1, 2025. While specific details about Haider s services and background are limited, the Instagram page serves as a visual portfolio, highlighting the creative range and style of the designer.For more information or to inquire about services, you can visit the Instagram page: @haider_designing..','Haider Designing | Graphics (@haider_designing) is a graphic design service based in Latifabad, Hyderabad, Sindh, Pakistan. With over 1,100 followers on Instagram, Haider showcases a diverse portfolio of design work, including logos, posters, and digital illustrations.The Instagram feed features recent projects, such as a graphic posted on January 1, 2025. While specific details about Haider s services and background are limited, the Instagram page serves as a visual portfolio, highlighting the creative range and style of the designer.For more information or to inquire about services, you can visit the Instagram page: @haider_designing..'],
                    autoStart: true,
                    loop: true,
                    wrapperClassName: 'hover:text-blue-900 hover:animation-pulse transition ml-5 text-s font-semibold ',
                    // typeSpeed : 0,
                    deleteSpeed: 10,
                    delay: 100,

                  }} />
                    <i>
               
                </i> 
              </p>
            </div>
            <div className="flex flex-wrap gap-y-1 ">
              <div className="border-b hover:drop-shadow-2xl xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <h2 className="text-lg  hover:text-blue-700 sm:text-xl text-gray-900 font-medium title-font mb-2">
                  Pakaging Designs
                </h2>
                <p className="leading-relaxed text-base mb-4">
                  Here we are designing Different Pakaging Designs
                </p>
                <a  href ="https://www.instagram.com/haider_designing/#/" className="text-yellow-500 inline-flex items-center">
                  Learn More
                  <FaArrowRightLong  className="ml-3 mt-1 focus:text-blue-600"/> </a>
              </div>
              <div className="xl:w-1/4 border-b  hover:drop-shadow-2xl lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <h2 className="text-lg  hover:text-blue-700 sm:text-xl text-gray-900 font-medium title-font mb-2">
                  Birthdady Cards
                </h2>
                <p className="leading-relaxed text-base mb-4 line-clamp-2">
                 Birthday card is the main things that build the lovebonds 
                </p>
                <a  href ="https://www.instagram.com/haider_designing/#/" className="text-yellow-500 inline-flex items-center">
                  Learn More
                  <FaArrowRightLong  className="ml-3 mt-1 focus:text-blue-600"/> </a>
              </div>
              <div className="xl:w-1/4 border-b hover:drop-shadow-2xl lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <h2 className="text-lg  hover:text-blue-700 sm:text-xl text-gray-900 font-medium title-font mb-2">
                  LOGO Designing
                </h2>
                <p className="leading-relaxed text-base mb-4">
                 Here we are creating Stunning Logo Designings 
                </p>
                <a  href ="https://www.instagram.com/haider_designing/#/" className="text-yellow-500 inline-flex items-center">
                  Learn More
                  <FaArrowRightLong  className="ml-3 mt-1 focus:text-blue-600"/> </a>
              </div>
              <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <h2 className=" hover:text-blue-700 text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                  Business Card
                </h2>
                <p className="leading-relaxed text-base mb-4 line-clamp-2">
                 Here We are Creating Business cards that incourage and boost Your sales via a good impacts
                </p>
                <a  href ="https://www.instagram.com/haider_designing/#/" className="text-yellow-500 inline-flex items-center">
                  Learn More
                  <FaArrowRightLong  className="ml-3 mt-1 focus:text-blue-600"/> </a>
              </div>
              <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <h2 className=" hover:text-blue-700 text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                  Business Card
                </h2>
                <p className="leading-relaxed text-base mb-4 line-clamp-2">
                 Here We are Creating Business cards that incourage and boost Your sales via a good impacts
                </p>
                <a  href ="https://www.instagram.com/haider_designing/#/" className="text-yellow-500 inline-flex items-center">
                  Learn More
                  <FaArrowRightLong  className="ml-3 mt-1 focus:text-blue-600"/> </a>
              </div>
              <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <h2 className=" hover:text-blue-700 text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                  Business Card
                </h2>
                <p className="leading-relaxed text-base mb-4 line-clamp-2">
                 Here We are Creating Business cards that incourage and boost Your sales via a good impacts
                </p>
                <a  href ="https://www.instagram.com/haider_designing/#/" className="text-yellow-500 inline-flex items-center">
                  Learn More
                  <FaArrowRightLong  className="ml-3 mt-1 focus:text-blue-600"/> </a>
              </div>
              <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <h2 className=" hover:text-blue-700 text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                  Business Card
                </h2>
                <p className="leading-relaxed text-base mb-4 line-clamp-2">
                 Here We are Creating Business cards that incourage and boost Your sales via a good impacts
                </p>
                <a  href ="https://www.instagram.com/haider_designing/#/" className="text-yellow-500 inline-flex items-center">
                  Learn More
                  <FaArrowRightLong  className="ml-3 mt-1 focus:text-blue-600"/> </a>
              </div>
              <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <h2 className=" hover:text-blue-700 text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                  Business Card
                </h2>
                <p className="leading-relaxed text-base mb-4 line-clamp-2">
                 Here We are Creating Business cards that incourage and boost Your sales via a good impacts
                </p>
                <a  href ="https://www.instagram.com/haider_designing/#/" className="text-yellow-500 inline-flex items-center">
                  Learn More
                  <FaArrowRightLong  className="ml-3 mt-1 focus:text-blue-600"/> </a>
              </div>
              <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <h2 className=" hover:text-blue-700 text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                  Business Card
                </h2>
                <p className="leading-relaxed text-base mb-4 line-clamp-2">
                 Here We are Creating Business cards that incourage and boost Your sales via a good impacts
                </p>
                <a  href ="https://www.instagram.com/haider_designing/#/" className="text-yellow-500 inline-flex items-center">
                  Learn More
                  <FaArrowRightLong  className="ml-3 mt-1 focus:text-blue-600"/> </a>
              </div>

            </div>
            <Link target="_blank"
              href={"https://www.instagram.com/haider_designing/#/"}>
              <button className="flex mx-auto mt-16 text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg">
                Viewmore    </button>
            </Link>
          </div>
        </section>

      </div>
    </>

  )
}

export default Services1