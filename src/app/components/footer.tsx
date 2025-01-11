import { IoLogoInstagram } from "react-icons/io";
import logo from "../../../public/assets/image/logo.jpeg";
import Image from "next/image"
import Link from "next/link";
import React from "react"
// import Link from "next/link";
const Footer = () => {
    return (
        <div className="drop-shadow-xl bg-white border-t-2 "> <footer className="text-gray-600 body-font">
            <div className="container px-5 py-1 sm:py-5 mx-auto flex items-center sm:flex-row flex-col">
                <a className="flex title-font font-medium items-center md:justify-start  justify-center text-gray-900">
                <Image 
  src={logo} 
  width={100} 
  height={100} 
  alt="logo"
  className="w-10 rounded-5xl mt-[3px] "
/>
                    <Link href="https://www.google.com/search?q=haider+designing&rlz=1C1CHBF_en-GBPK1108PK1108&oq=haider&gs_lcrp=EgZjaHJvbWUqCAgCEEUYJxg7MgYIABBFGDkyCggBEC4YsQMYgAQyCAgCEEUYJxg7Mg0IAxAuGIMBGLEDGIAEMgwIBBAAGBQYhwIYgAQyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQgxNjg3ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8" className="ml-3 text-xl">Haider_Designing</Link>
                </a>
                <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 mt-0 sm:mt-2 ">© 2025 Haider_Designing
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    <Link
                    target="_blank"
                     href={"https://www.instagram.com/haider_designing"} className="text-gray-500">
                        <IoLogoInstagram className="text-4xl -mt-0.5 hover:text-[#405DE6] " />
                         </Link>
                </span>
            </div>
        </footer></div>
    )
}

export default Footer