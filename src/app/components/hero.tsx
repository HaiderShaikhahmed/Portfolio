"use client"
import React from "react"
import Haider from "../../../public/assets/image/HAIDER SHAIKH.png"; 
// import webBackground from "../../../public/assets/image/web background.jpg";
import Image from "next/image"
import Link from "next/link"
// import { FaBeer } from "react-icons/fa";
// import { IoCloudDownloadOutline } from "react-icons/io5";
// import { WiDayHail } from "react-icons/wi";
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
// import Link from "next/link";
const Hero = () => {
     
    return (
        
      
        <div >
      <section  className= "  text-gray-600 body-font  ">

     
      <div className="bg-ge  bg-opacity relative  bg-blur bg-cover bg-center   w-full">
              
        
            
<div className="container mx-auto flex px-5  py-2 md:flex-row flex-col items-center">
<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-8 sm:mb-12 md:mb-0">
 <Image className=" mt-6 hover:scale-125 transition hover:-translate-y-5  h- object-cover object-center rounded mx-auto sm:w-[80%] w-[100%]"
                            alt="Haider"
                            src={Haider}
                            width={1000}
                            height={1000}
                        />
                    </div>
     <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col mt-6 sm:mt-0 md:items-start md:text-left items-center text-center">

           <h1 className="  title-font sm:text-3xl text-2xl mb-4 font-medium text-gray-900">
                            <h1 className=" text-[#007FFF] sm:text-2xl md:text-4xl lg:text-8xl font-bold text-3xl sm:mb-3 mb-2">
                                Haider Designing
               </h1>   <Typewriter
                                options={{
                                    strings: ['GraphicDesigning', 'UI/UX Designing'],
                                    autoStart: true,
                    loop: true,
                                    wrapperClassName: ' animate-pulse  text-pink-500 font-anydore sm:text-3xl text-4xl font-bold',
                                    deleteSpeed: 10,
                                    delay: 70,
                                    
                                }}
                            />
<link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
          rel="stylesheet"
          /> <br className="hidden lg:inline-block font-mono" />
                          <p className="dm-sans-title text-[20px] sm:text-4xl">
                          An Imaginary
                            Skin Care Brand</p>   </h1>
                        <p className="mb-7 leading-relaxed sm:text-4xl text-5xl font-semibold">
                            Skin Lotion
                        </p>
                        <div className="flex justify-center">
                        <Link href={"https://www.instagram.com/haider_designing#/"}>  <button className=" hover:-translate-y-2  transition delay-75  inline-flex text-white hover:bg-[#00308F] border-0 py-2 px-6 focus:outline-none bg-[#007FFF] font-semibold rounded text-lg">
                                Vist page
                            </button>
                            </Link>
                           <Link href={"#contact"}>  <button className="ml-4 inline-flex text-white   font-semibold hover:-translate-y-2  transition delay-75 bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-8   00  rounded text-lg">
                                Contact
                            </button>
                            </Link>
                        </div>
                 
                    </div>
                </div>
        </div>
            </section>
        

        </div>

)
}

export default Hero