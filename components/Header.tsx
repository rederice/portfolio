import React from 'react'
import {motion} from "framer-motion"
import Image from "next/image"

type Props = {}
const imageLoader = require("../pages/api/imageLoader.js");

export default function Header({}: Props) {
    function anchorHeroSection(){
        const anchorPoint = document.getElementById("hero")!;
        anchorPoint.scrollIntoView();
    }
  return (
    <header className='sticky top-0 px-[8vw] md:py-5 sm:py-2 bg-pinky/90 flex items-center justify-between w-[100%] z-20'>
        <motion.div 
        initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1
        }}
        transition={{
            duration: 1.5
        }}
        className='flex flex-row items-center'>        
            <motion.img
              initial={{opacity: 0,}}
              transition={{duration: 1.2}}
              whileInView={{opacity: 1}}
              viewport={{once: true}}
              className="w-[32px] h-[32px] bg-lavendar-light cursor-pointer"
              src="/portfolio/favicon.ico"
              onClick={anchorHeroSection}
            ></motion.img>
            <a href="#hero" className='pl-2 font-extrabold text-lavendar font-sans tracking-wider cursor-pointer invisible md:visible'>
                HUNG-FANG&apos;s PORTFOLIO
            </a>
        </motion.div>

        <motion.div         
        initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1
        }}
        transition={{
            duration: 1.5
        }}
        className='flex flex-row items-center text-black cursor-pointer space-x-6'>
            <a href="#projects" className='flex flex-row'>
                <p className='flex flex-col justify-end text-sm tracking-wider hover:underline hover:underline-offset-4 hover:decoration-lavendar'>
                    Work
                </p>
            </a>
            <p>|</p>
            <a href="#about" className='flex'>
                <p className='flex flex-col md:justify-end text-sm tracking-wider hover:underline hover:underline-offset-4 hover:decoration-lavendar'>
                    About
                </p>
            </a>
            <p>|</p>
            <a href="/portfolio/Resume_HungfangChen.pdf" target="_blank" className='flex'>
                <p className='flex flex-col md:justify-end text-sm tracking-wider hover:underline hover:underline-offset-4 hover:decoration-lavendar'>
                    Résumé
                </p>
            </a>
        </motion.div>
    </header>
  )
}