"use client"
import React from "react"
import natureImage from "../../../public/assets/image/nature.jpg"; 
import Image from "next/image"
// import Link from "next/link"
// import { FaBeer } from "react-icons/fa";
// import { IoCloudDownloadOutline } from "react-icons/io5";
// import { WiDayHail } from "react-icons/wi";
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
const Hero = () => {
    return (
        <>
            <section className="  text-gray-600 body-font  bg-gray-100">
                
            
<div className="container mx-auto flex px-5 py-8 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <Image
                            className=" hover:scale-125 transition hover:-translate-y-5  object-cover object-center rounded mx-auto w-[80%]"
                            alt="hero"
                            src={natureImage}
                            width={800}
                            height={800}
                        />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">

                        <h1 className="title-font sm:text-4xl text-5xl mb-4 font-medium text-gray-900">
                            <h1 className="   text-blue-500 sm:text-5xl  text-4xl sm:mb-4 mb-2">
                                Haider Designing
                            </h1>   <Typewriter
                                options={{
                                    strings: ['CROSSWORLD', 'Skin Care Brand'],
                                    autoStart: true,
                                    loop: true,
                                    wrapperClassName: ' animate-pulse  text-pink-500 font-anydore text-2xl font-bold',
                                    deleteSpeed: 10,
                                    delay: 70,

                                }}
                            />

                            <br className="hidden lg:inline-block font-mono" />
                            An Imaginary
                            Skin Care Brand
                        </h1>

                        <p className="mb-8 leading-relaxed text-3xl font-bold">
                            Skin Lotion
                        </p>
                        <div className="flex justify-center">
                            <button className=" hover:-translate-y-2  transition delay-75  inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                Vist page
                            </button>
                            <button className="ml-4 inline-flex text-white  font-bold hover:-translate-y-2  transition delay-75 bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-8   00  rounded text-lg">
                                Contact
                            </button>
                        </div>
                 
                    </div>
                </div>
            </section>

        </>

    )
}

export default Hero