import React from 'react'
import {motion} from "framer-motion"
import Image from "next/image"

type Props = {}
const imageLoader = require("../pages/api/imageLoader.js");

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20'>
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
            <a href="#hero" className='font-extrabold text-yellow-300 font-sans tracking-wider cursor-pointer'>
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
        className='flex flex-row items-center text-blue-400 font-bold cursor-pointer space-x-6'>
            <a href="#projects" className='flex flex-row'>
                <p className='flex text-center justify-center'>📚</p>
                <p className='uppercase hidden md:flex md:flex-col md:justify-end text-sm tracking-wider text-[#49b3ff] hover:text-[#71d7ff]'>
                    PROJECTS
                </p>
            </a>
            <a href="#about" className='flex'>
                <p>🧐</p>
                <p className='uppercase hidden md:flex md:flex-col md:justify-end text-sm tracking-wider text-[#49b3ff] hover:text-[#71d7ff]'>
                    ABOUT
                </p>
            </a>
        </motion.div>
    </header>
  )
}