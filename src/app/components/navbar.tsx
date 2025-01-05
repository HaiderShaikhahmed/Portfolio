"useclient"
import logo from "../../../public/assets/image/logo.jpeg";
import Link from "next/link"
import Image from "next/image"
// import { FaBeer } from "react-icons/fa";
import { IoCloudDownloadOutline } from "react-icons/io5";
import React from "react"
const Navbar = () => {
    return (
        <div className="sticky top-0 z-50 bg-white"><header className="text-gray-600 body-font">
            <div className="container mx-auto  flex flex-wrap p-2  flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <Image 
  src={logo}  width={100} height={100} alt="logo"
                     className="w-10 rounded-full"/>
                    <span className="ml-3 text-xl">Haider_desiging</span>
                </a>
                <nav className="md:ml-auto md:mr-auto space-x-5 gap-6 flex flex-wrap items-center text-base justify-center">
                    <Link href={"/"}className="mr-5 hover:text-blue-600">Home</Link>
                    <Link href="#project"className="mr-5 hover:text-blue-600">Projects</Link>
                    <Link href="#"className="mr-5 hover:text-blue-600">Services</Link>
                    <Link href={"#contact"}className="mr-5 hover:text-blue-600">Contact us </Link>
                </nav>
               <a href="/assets/cv/Exploring-the-Universe.pdf">
                 <button className="inline-flex items-center bg-gray-100 border-0 py-1 w-auto   px-4 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">click Here to Download
                < IoCloudDownloadOutline  className="p-1 text-2xl ml-1 "/>
                </button>
                </a>
            </div>
        </header></div>
    )
}

export default Navbar