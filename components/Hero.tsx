import React from 'react'
import {Cursor, useTypewriter} from "react-simple-typewriter"
import BackgroundCircles from './BackgroundCircles'
import Image from "next/image"
import Link from 'next/link'

type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi, I'm Hung-Fang.👋",
            "A former Web Developer👨‍💻...",
            "Also, Product Manager🎯",
            "and I LOVE WEB DESIGNS !!!"
        ],
        loop: true,
        delaySpeed: 2000
    })
  return (
    <div className='flex flex-col space-y-8 items-center justify-center text-center overflow-hidden h-screen'>
        <BackgroundCircles />
        <Image
        className='relative rounded-full h-32 w-32 mx-auto'
        src="/avatar.jpeg" 
        width={100}
        height={100}
        alt="avatar" />
        <div className='z-20'>
            <h2 className='text-sm uppercase font-[1000] text-[#49ccff] tracking-[15px] pb-2'>Web Developer</h2>
            <h1 className='text-5xl lg:text-6xl font-semibold scroll-px-10'>
                <span className='mr-3'>{text}</span>
                <Cursor cursorColor='#2eb4eb'></Cursor>
            </h1>

            <div className='flex flex-row justify-center space-x-2 pt-5'>
                <Link href="#projects"><button className='heroButton'>Projects</button></Link>                
                <Link href="#resume"><button className='heroButton'>Resume</button></Link>
            </div>
        </div>
    </div>
  )
}