"use client"
import Image from 'next/image'
import Typewriter from 'typewriter-effect';
import React from 'react'
import l from "../../../public/assets/image/logo-1.jpg"
import Link from 'next/link';
const Promotion = () => {
  return (
    
    <div>
   
<section className="bg-white  px-4 py-8 antialiased dark:bg-gray-900 md:py-16">
  <div className="mx-auto grid max-w-screen-xl rounded-lg bg-gradient-to-b border-1 drop-shadow-md from-gray-50 to-gray-100  p-4 dark:bg-gray-800 md:p-8 lg:grid-cols-12 lg:gap-8 lg:p-16 xl:gap-16">
    <div className="lg:col-span-5 lg:mt-0">
      <a href="#">
      
      <Image
          className="mb-4  hover:-translate-y-2 delay-100 hover:shadow-xl bg-none hover:z-10 transition h-56 w-56 dark:hidden sm:h-96 sm:w-96 md:h-full md:w-full"
          src={l}
  
          width={500}
          height={500}
          alt="peripherals"
        />
        <Image
          className="mb-4 hidden dark:block md:h-full"
          src={l}
          width={100}
          height={200}
          alt="peripherals"
        />
      </a>
    </div>
    <div className="me-auto place-self-center lg:col-span-7">
    <h1 className=' mb-2 sm:mb-3 text-[20px] font-extrabold leading-tight tracking-tight text-black dark:text-white md:text-5xl'>IF YOU  </h1><h1 className="mb-3 text-[20px] font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-5xl">
  WANT TO{' '}
  <span className="inline-block animate-pulse text-blue-900 sm:text-3xl md:text-5xl font-bold">
    <Typewriter
      options={{
        strings: ['BOOST', 'ENHANCED'],
        autoStart: true,
        loop: true,
        deleteSpeed: 10,
        delay: 150,
      }}
    />
  </span>
</h1>
  <p className='text-3xl font-bold text-red-600 hover:text-red-700'> Your Attention DM US NOW!.</p>
      
      <p className="mb-6 text-gray-500 dark:text-gray-300 sm:mt-1 sm:mr-2">
      <i> Go Our Instapage "@haider_designing" select the Design and send to our DM and get your Design. With an Amazing Experience and dont forget to give us your Feedback it means usalot. </i>
      </p>
      <Link
        href={"https://www.instagram.com/haider_designing#/"}
        className="ml-4    delay-75 bg-green-500 border-0 py-2 px-4 focus:outline-none hover:bg-green-800 text-lg inline-flex items-center justify-center rounded-lg bg-primary-700  text-center  font-medium text-white transition delay-50 hover:-translate-y-2 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 "
      >
        {" "}
        DM Now{" "}
      </Link>
    </div>
  </div>
</section>
      
    </div>
  )
}

export default Promotion




