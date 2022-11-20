import React from 'react'
import {motion} from "framer-motion"
import Image from "next/image"

type Props = {}

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
            <p className='font-extrabold text-yellow-300 font-sans tracking-wider cursor-pointer'>
                HUNG-FANG&apos;s PORTFOLIO
            </p>
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
        className='flex flex-row items-center text-blue-400 cursor-pointer'>
            <Image 
            className='p-1'
            src="/email_blue.png" 
            width={30}
            height={30}
            alt="email" />
            <p className='uppercase hidden md:inline-flex text-sm'>
                Get In Touch
            </p>
        </motion.div>
    </header>
  )
}