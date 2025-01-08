"useclient"
import logo from "../../../public/assets/image/logo.jpeg";
import Link from "next/link"
import Image from "next/image"
// import { FaBeer } from "react-icons/fa";
import { IoCloudDownloadOutline } from "react-icons/io5";
import React from "react"
const Navbar = () => {
    return (
        <div className="sticky top-0 z-50 bg-[#101060] "><header className="text-gray-600 body-font">
            <div className=" text-white container mx-auto  flex flex-wrap  px-2  sm:p-3 flex-col md:flex-row items-center">
                <a  href="https://www.instagram.com/haider_designing/#/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <Image 
  src={logo}  width={100} height={100} alt="logo"
                     className="w-10 rounded-full"/>
                    <span className="text-white  ml-3  text-s sm:text-xl">Haider_desiging</span>
                </a>
                <nav className=" text-white md:ml-auto md:mr-auto sm:space-x-1 space-x-2 md:space-x-2 sm:gap-6 gap-4 flex flex-wrap items-center text-s sm:text-base justify-center">
                    <Link href={"/"}className="mr-5 active:text-red-500 border-b hover:shadow-lg hover:w-15 hover:text-blue-600">Home</Link>
                    <Link href={"#project"}className="mr-5  border-b  active:text-red-500 hover:shadow-lg hover:w-15 hover:text-blue-600">Projects</Link>
                    <Link href={"#services"}className="mr-5  border-b  active:text-red-500 hover:shadow-lg hover:w-15 hover:text-blue-600">Services</Link>
                    <Link href={"#contact"}className="mr-5 active:text-red-500  border-b hover:shadow-lg hover:w-15 hover:text-blue-600">Contact us </Link>
                </nav>
               <a className="rounded-sm items-center hover:text-[#440101] hover:bg-gray-100 border-0 py-0 hover:font-bold w-auto   inline-flex" href="/assets/cv/BILAL AHMED with picture.pdf">
                 <button className=" text-s px-4 hidden sm:block focus:outline-none hover:bg-none  sm:text-base mt-4 md:mt-0">Resume
                
                </button>
                < IoCloudDownloadOutline  className="p-0 mt-2    sm:text-3xl text-2xl text-center sm:mt-1 pr-x-1"/></a>
            </div>
        </header></div>
    )
}

export default Navbar