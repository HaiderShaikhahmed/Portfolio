import { IoLogoInstagram } from "react-icons/io";
import Image from "next/image"

import React from "react"
import Link from "next/link";
const Footer = () => {
    return (
        <div className="drop-shadow-xl bg-white border-t-2 "> <footer className="text-gray-600 body-font">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                    <Image src={require(".././../../public/assets/image/logo.jpeg")} width={100} height={100} alt="logo"
                        className="w-10" />
                    <span className="ml-3 text-xl">Haider_designing</span>
                </a>
                <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2025 Haider_Designing

                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">

                    <a
                    target="_blank"
                    
                     href={"https://www.instagram.com/haider_designing"} className="text-gray-500">
                        <IoLogoInstagram className="text-3xl hover:text-[#405DE6]" />
                         </a>


                </span>
            </div>
        </footer></div>
    )
}

export default Footer