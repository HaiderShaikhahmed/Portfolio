"use client"
import logo from "../../../public/assets/image/logo.jpeg";
import Link from "next/link"
import Image from "next/image"

// import { FaBeer } from "react-icons/fa";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import { useState } from "react";
import React from "react"
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Track the state of the menu

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle menu open/close
    };
    return (
        <div className="scroll-smooth sticky top-1 z-50 max-w-[90%] text-wrap sm:w-full mx-auto  pt-4 sm:pt-0 sm:rounded-t-[25px] rounded-t-[0px]  bg-[#00308F] "><header className="text-gray-600 body-font">
           
            <div className="left-side text-white container mx-auto  flex flex-wrap  px-2  sm:p-3 flex-col md:flex-row items-center">
            <div className="flex space-between justify-center">  <a  href="https://www.instagram.com/haider_designing/#/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <Image 
  src={logo}  width={100} height={100} alt="logo"
                     className="w-10 rounded-full"/>
                    <span className="text-white  ml-3  text-s sm:text-xl">Haider_desiging</span>
                
                </a>
                <button
                        className="block sm:hidden flex mt-1 ml-[105%] right-side text-white focus:outline-none"
                        onClick={toggleMenu}
                        aria-label="Toggle Menu"
                    >
                        <TiThMenu className="text-3xl" />
                    </button> </div>
                    <nav className={`${
                        isMenuOpen ? "block" : "hidden"
                    } sm:block text-white md:ml-auto mx-auto space-between md:mr-auto sm:space-x-4 space-x-2  md:space-x-8 sm:gap-6 gap-4 flex flex-wrap items-center text-s sm:text-lg justify-center`}>
                    <Link href={"/"} className=" px-1 rounded-md active:text-red-500 transition  hover:shadow-md hover:bg-white hover:w-15 hover:text-blue-900">Home</Link>
                    <Link href={"#project"} className="px-1 rounded-md  mr-5    transition active:text-red-500  hover:shadow-md  hover:bg-white hover:w-15 hover:text-blue-900">Projects</Link>
                    <Link href={"#services"}className="px-1 rounded-md mr-5  transition   active:text-red-500  hover:shadow-md hover:bg-white hover:w-15 hover:text-blue-900">Services</Link>
                    <Link href={"#contact"}className="px-1 rounded-md  mr-5 transition active:text-red-500   hover:shadow-md hover:bg-white hover:w-15 hover:text-blue-900">Contact us </Link>
                </nav>
               <a className="rounded-sm items-center px-1 hover:text-[#440101] hover:bg-gray-100 border-0 py-0  w-max-full hover:font-semibold  inline-flex" href="/assets/cv/BILAL AHMED with picture.pdf">
                 <button className=" text-s pr-1  -translate-y-[188%] translate-x-[200%] sm:translate-x-0 sm:translate-y-0 focus:outline-none hover:bg-none  sm:text-base  md:mt-0">Resume
                
                </button>
                < IoCloudDownloadOutline  className="p-0 mt-0 sm:mt-2  sm:block hidden sm:text-3xl text-2xl text-center  pr-1"/></a>

            </div>
        </header></div>
    )
}

export default Navbar