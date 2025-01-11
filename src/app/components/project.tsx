"useclient"
import React from "react"
import Project1 from "../1Project/page"

import Businesscard from "../../../public/assets/image/Business card.jpg"
import cofee from "../../../public/assets/image/coffee.jpg"

import Bcard from "../../../public/assets/image/birrthday card.png"
import Link from "next/link"
import Image from "next/image"
// import { FaBeer } from "react-icons/fa";
// import { IoCloudDownloadOutline } from "react-icons/io5";
// import { WiDayHail } from "react-icons/wi";
// import Typewriter from 'typewriter-effect';
import { IoStarSharp } from "react-icons/io5";
const Project = () => {
    return (

    <div id="project">
  <section className="text-gray-600 body-font">
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
      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
          <div className="rounded-lg h-64 overflow-hidden transition  hover:scale-105 active:scale-1 ">
            <Image
            
              className="object-contain bg-white drop-shadow-xl rounded-md  hover:translate-x-1 hover:-translate-y-1 transition h-full w-full"
              alt="Skin"
              src={Bcard}
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
          <Link href="https://www.instagram.com/reel/DD_h5fFqH2q/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" className="text-blue-500 inline-flex items-center mt-3">
            Learn More
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-2 hover:translate-x-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <div className=" drop-shadow-xl bg-white p-4 md:w-1/3   delay-100 sm:mb-0 mb-6">
          <div className="hover:scale-110 hover:drop-shadow-lg  transition rounded-lg h-64 overflow-hidden">
          <Image
            
            className="hover:rounded-xl object-contain h-full w-full"
            alt="Businesscard"
            src={Businesscard}
            width={500}
            height={500}
          />

          </div>
          <div className=" transition-all ">
            <h2 className="text-xl  font-medium title-font text-gray-900 mt-5">
            Business Card
          </h2>
          <p className="text-base leading-relaxed mt-2">
<i>            Business card is the best thing to show your business in a Hand size. It is so usefull for a person as it gives you the best point of the business and their Biography 
</i>       </p>
          <a className="text-blue-500 inline-flex items-center mt-3">
            View More
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
          </a></div>
        </div>
        <div className=" drop-shadow-xl p-4 md:w-1/3 sm:mb-0 mb-6">
          <div className="rounded-lg hover:rounded-xl hover:scale-110 transition h-64 overflow-hidden">
            <Image
                width={500}
                height={500}
                 alt="cofee"
              className="object-contain bg-[#550202] object-center h-full w-full"
              src={cofee}
            />
          </div>
          <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
            Label Designing
          </h2>
          <p className="text-base leading-relaxed mt-2">
          Label Designing is the things that shows the impact on your audience.It is the best thing to bring the attension of the large audience. 
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

 <Link
 href ="1Project"
> <button className="flex mx-auto mt-16 text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg">
Viewmore  </button>
</Link>
</div>
    )
}

export default Project