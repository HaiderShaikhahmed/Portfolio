"use client"
import React from 'react'
// import pacdoraVideo from "../../../public/assets/image/pacdora.mp4"
 

// import PSD from "../../../public/assets/image/hair oil.jpg"

import Lotion from "../../../public/assets/image/skin lotion.png"
// import Link from "next/link"
import Image from "next/image"
// import { FaBeer } from "react-icons/fa";
// import { IoCloudDownloadOutline } from "react-icons/io5";
// import { WiDayHail } from "react-icons/wi";
// import Typewriter from 'typewriter-effect';
import { IoStarSharp } from "react-icons/io5";
function Project1() {
  return (
    <div id="project_main">
  <div>
  <h1 className="font-bold text-2xl mt-1 justify-center text-center flex" >InstaProfile</h1>
  

  </div>
  <section className="text-gray-600 body-font">
    <div>
      <h1 className="font-bold text-2xl mt-1 justify-center text-center flex" >PORTFOLIO</h1>
    </div>
    <div className="container px-5 py-4 mx-auto">
     <div className="flex flex-col">
             <div className="h-1  rounded overflow-hidden">
               
               <div className="w-60 h-full bg-blue-500" />
             </div>
             <div className="flex flex-wrap sm:flex-row flex-col mt-5 bg-white sm:drop-shadow-md mb-12">
               <h1 className="sm:w-2/5 text-center item-center sm:mt-5 justify-center flex-col sm:flex-row text-gray-900 sm:font-medium title-font  font-bold text-3xl mb-2 sm:mb-0">
                 Near to Achievement
                 <p className=" text-[#FFD700]  text-center flex justify-center gap-4">
                 <IoStarSharp className="transition hover:text-[#ffb342]   hover:-translate-y-1" />
                 <IoStarSharp className="transition hover:text-[#ffb342]   hover:-translate-y-1" />
                 <IoStarSharp className=" transition hover:text-[#ffb342]  hover:-translate-y-1"/>
                 <IoStarSharp className="transition hover:text-[#ffb342] hover:animate hover:-translate-y-1" />
     </p>
               </h1>
               <p className=" text-center sm:text-left justify-center  flex flex-col sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
               <h1 className=" text-1xl sm:text-3xl text-black font-bold">Haider_Designing</h1>
     Haider Designing | Graphics
     Art
     Birthday Card Designer ©
     <p>
     <p className="font-bold text-red-600">[•ᴅᴍ ᴛᴏ ɢᴇᴛ ʏᴏᴜʀ "ᴏʀᴅᴇʀꜱ"•]</p>
     ᴘᴀɪᴅ ᴡᴏʀᴋ
     -ᴀʀᴛɪꜱᴛ 🔻 | ᴇᴅɪᴛᴏʀ🔻 | ɢʀᴀᴘʜɪᴄ ᴅᴇꜱɪɢɴᴇʀ
     -ɴᴀᴛɪᴏɴᴀʟɪᴛʏ 🇵🇰
     </p>
     <p>Latifabad Hyderabd, Hyderabad, Sindh 17000
     wa.me/c/923184855775
     </p>
           
               </p>
             </div>
           </div>
           <div>
           </div>
      <div className="flex  flex-wrap justify-center w-max-full  sm:grd-col-4 grid-cols-1 gap-x-5 gap-y-2 sm:-m-4 -mx-4 -mb-4  -mt-4">
        <div className=" border-1  bg-white  drop-shadow-md p-2 md:w-1/4 sm:w-1/5 sm:mb-0 mb-6">
          <div className="rounded-lg h-64 overflow-hidden transition  hover:scale-105 active:scale-1 ">
          <div className="object-contain ">
            <video 
  src="/assets/image/pacdora.mp4" 
  className='h-[300px] rouneded-md'
  autoPlay 
  muted 
  loop 
  
  width="100%" 
/>

           </div>


            {/* <Image src={"product"} width={100} height={100} alt="pic"/> */}
          </div>
          <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
            Birthday Cards
          </h2>
          <p className="text-base leading-relaxed mt-2">
            A Birthday is a Day to show much you love somone by your heart. It is the Best day to give someone the best wishes via Birthday Card.
          </p>
          <a className="text-blue-500 inline-flex items-center mt-3">
            Learn More
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        <div className=" border-1 bg-white  drop-shadow-md p-2  sm:w-1/5 sm:mb-0 mb-6">
          <div className="rounded-lg h-64 overflow-hidden transition  hover:scale-105 active:scale-1 ">
            <Image
            
              className="object-contain rounded-md  hover:translate-x-1  transition h-full w-full"
              alt="Skin"
              src={Lotion}
              width={500}
              height={500}
            />


            {/* <Image src={"product"} width={100} height={100} alt="pic"/> */}
          </div>
          <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
            Birthday Cards
          </h2>
          <p className="text-base leading-relaxed mt-2">
            A Birthday is a Day to show much you love somone by your heart. It is the Best day to give someone the best wishes via Birthday Card.
          </p>
          <a className="text-blue-500 inline-flex items-center mt-3">
            Learn More
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        <div className=" border-1 bg-white  drop-shadow-md p-2  sm:w-1/5 sm:mb-0 mb-6">
          <div className="rounded-lg h-64 overflow-hidden transition  hover:scale-105 active:scale-1 ">
            <Image
            
              className="object-contain rounded-md  hover:translate-x-1  transition h-full w-full"
              alt="Skin"
              src={Lotion}
              width={500}
              height={500}
            />


            {/* <Image src={"product"} width={100} height={100} alt="pic"/> */}
          </div>
          <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
            Birthday Cards
          </h2>
          <p className="text-base leading-relaxed mt-2">
            A Birthday is a Day to show much you love somone by your heart. It is the Best day to give someone the best wishes via Birthday Card.
          </p>
          <a className="text-blue-500 inline-flex items-center mt-3">
            Learn More
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        <div className=" border-1 bg-white  drop-shadow-md p-2  sm:w-1/5 sm:mb-0 mb-6">
          <div className="rounded-lg h-64 overflow-hidden transition  hover:scale-105 active:scale-1 ">
            <Image
            
              className="object-contain rounded-md  hover:translate-x-1  transition h-full w-full"
              alt="Skin"
              src={Lotion}
              width={500}
              height={500}
            />


            {/* <Image src={"product"} width={100} height={100} alt="pic"/> */}
          </div>
          <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
            Birthday Cards
          </h2>
          <p className="text-base leading-relaxed mt-2">
            A Birthday is a Day to show much you love somone by your heart. It is the Best day to give someone the best wishes via Birthday Card.
          </p>
          <a className="text-blue-500 inline-flex items-center mt-3">
            Learn More
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        <div className=" border-1 bg-white  drop-shadow-md p-2  sm:w-1/5 sm:mb-0 mb-6">
          <div className="rounded-lg h-64 overflow-hidden transition  hover:scale-105 active:scale-1 ">
            <Image
            
              className="object-contain rounded-md  hover:translate-x-1  transition h-full w-full"
              alt="Skin"
              src={Lotion}
              width={500}
              height={500}
            />


            {/* <Image src={"product"} width={100} height={100} alt="pic"/> */}
          </div>
          <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
            Birthday Cards
          </h2>
          <p className="text-base leading-relaxed mt-2">
            A Birthday is a Day to show much you love somone by your heart. It is the Best day to give someone the best wishes via Birthday Card.
          </p>
          <a className="text-blue-500 inline-flex items-center mt-3">
            Learn More
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        <div className=" border-1 bg-white  drop-shadow-md p-2 sm:w-1/5  sm:mb-0 mb-6">
          <div className="rounded-lg h-64 overflow-hidden transition  hover:scale-105 active:scale-1 ">
            <Image
            
              className="object-contain rounded-md  hover:translate-x-1  transition h-full w-full"
              alt="Skin"
              src={Lotion}
              width={500}
              height={500}
            />


            {/* <Image src={"product"} width={100} height={100} alt="pic"/> */}
          </div>
          <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
            Birthday Cards
          </h2>
          <p className="text-base leading-relaxed mt-2">
            A Birthday is a Day to show much you love somone by your heart. It is the Best day to give someone the best wishes via Birthday Card.
          </p>
          <a className="text-blue-500 inline-flex items-center mt-3">
            Learn More
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        <div className=" border-1 bg-white  drop-shadow-md p-2  sm:w-1/5 sm:mb-0 mb-6">
          <div className="rounded-lg h-64 overflow-hidden transition  hover:scale-105 active:scale-1 ">
            <Image
            
              className="object-contain rounded-md  hover:translate-x-1  transition h-full w-full"
              alt="Skin"
              src={Lotion}
              width={500}
              height={500}
            />


            {/* <Image src={"product"} width={100} height={100} alt="pic"/> */}
          </div>
          <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
            Birthday Cards
          </h2>
          <p className="text-base leading-relaxed mt-2">
            A Birthday is a Day to show much you love somone by your heart. It is the Best day to give someone the best wishes via Birthday Card.
          </p>
          <a className="text-blue-500 inline-flex items-center mt-3">
            Learn More
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        
      </div>
    </div>
  </section>

</div>
        
  )
}

export default Project1