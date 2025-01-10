"useclient"
import React from "react"
import Project from "../1Project/page"

import PSD from "../../../public/assets/image/hair oil.jpg"

import Lotion from "../../../public/assets/image/skin lotion.png"
import Link from "next/link"
import Image from "next/image"
// import { FaBeer } from "react-icons/fa";
// import { IoCloudDownloadOutline } from "react-icons/io5";
// import { WiDayHail } from "react-icons/wi";
// import Typewriter from 'typewriter-effect';
import { IoStarSharp } from "react-icons/io5";
const Project = () => {
    return (
        <>
    <div id="project"><>
  <section className="text-gray-600 body-font">
    <div className="container px-5 py-4 mx-auto">
      <div className="flex flex-col">
        <div className="h-1 bg-gray-200 rounded overflow-hidden">
          
          <div className="w-60 h-full bg-blue-500" />
        </div>
        <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
          <h1 className="sm:w-2/5 text-gray-900 sm:font-medium title-font  font-bold text-5xl mb-2 sm:mb-0">
            Near to Achievement
            <p className=" text-[#FFD700]  flex gap-4">
            <IoStarSharp className="transition hover:text-[#ffb342]   hover:-translate-y-1" />
            <IoStarSharp className="transition hover:text-[#ffb342]   hover:-translate-y-1" />
            <IoStarSharp className=" transition hover:text-[#ffb342]  hover:-translate-y-1"/>
            <IoStarSharp className="transition hover:text-[#ffb342] hover:animate hover:-translate-y-1" />
</p>
          </h1>
          <p className=" flex flex-col sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
          <h1 className="text-xl text-black font-bold">Haider_Designing</h1>
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
      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
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
        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
          <div className="rounded-lg h-64 overflow-hidden">
          <Image
            
            className="object-contain h-full w-full"
            alt="Skin"
            src={PSD}
            width={500}
            height={500}
          />

          </div>
          <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
            The Catalyzer
          </h2>
          <p className="text-base leading-relaxed mt-2">
            Swag shoivdigoitch literally meditation subway tile tumblr
            cold-pressed. Gastropub street art beard dreamcatcher neutra,
            ethical XOXO lumbersexual.
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
        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
          <div className="rounded-lg h-64 overflow-hidden">
            <img
              alt="content"
              className="object-cover object-center h-full w-full"
              src="https://dummyimage.com/1205x505"
            />
          </div>
          <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
            The 400 Blows
          </h2>
          <p className="text-base leading-relaxed mt-2">
            Swag shoivdigoitch literally meditation subway tile tumblr
            cold-pressed. Gastropub street art beard dreamcatcher neutra,
            ethical XOXO lumbersexual.
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
</>
<button 

className="px-2 justify-center flex mx-auto  text-blue-900 rounded-sm active:bg-[#a87927] bg-[#FFD700]">View More

<Link href="Project" > </Link>
 </button>
</div>
        </>

    )
}

export default Project