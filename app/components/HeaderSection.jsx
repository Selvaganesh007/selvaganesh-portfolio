"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

function HeaderSection() {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 md:text-4xl text-2xl lg:text-6xl font-extrabold">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I`m Selvaganesh{""}
            </span>
            <TypeAnimation
              sequence={[
                "React Developer",
                1000,  
                "Full Stack Developer",
                1000,
                "MERN Stack Developer",
                1000,
                "Mendix Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[ADB7BE] text-sm text-lg mb-6 md:text-2xl">
          I specialize in front-end technologies including ReactJS, Redux, JavaScript, HTML, CSS, SASS, and TypeScript. I also have experience building scalable low-code applications using Mendix. Additionally, I have a strong foundation in using Next.js for server-side rendering and creating high-performance web applications.
          </p>
          <div>
            <Link
              href="https://drive.google.com/file/d/1U0kugSbamVOw6VG5RFyjpW_2AtYBkwyc/view?usp=drive_link"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
              target="_blank"
            >
              <span className="block text-black bg-purple-500 hover:bg-slate-800 hover:text-white rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
          </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full shadow-md shadow-pink-400 bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/my-pic.png"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="profile"
              width={380}
              height={380}
            />
          </div>
          </motion.div>
      </div>
    </section>
  );
}

export default HeaderSection;
