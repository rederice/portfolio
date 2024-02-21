import React from 'react'
import {Cursor, useTypewriter} from "react-simple-typewriter"
import BackgroundCircles from './BackgroundCircles'
import Image from "next/image"
import Link from 'next/link'

type Props = {}
const imageLoader = require("../pages/api/imageLoader.js");

export default function Hero({}: Props) {
  return (
    <div className='flex flex-col space-y-16 justify-start px-[8vw] h-screen'>
        <div className="flex flex-row text-black font-bold pt-[10vh] leading-tight
         xl:text-8xl md:text-8xl text-6xl">
            <p>User Experience<br/>
            Researcher<span className="text-lavendar">.</span></p>
        </div>

        <div className="flex flex-col items-end leading-tight text-black
         xl:text-4xl md:text-3xl text-xl">
            <div className="flex flex-row">Hello! I am&nbsp;<div className="font-bold">Hung-Fang</div>, a passionate UX researcher</div>
            <div className="flex flex-row items-end">with &nbsp;
                <div className="font-semibold text-shadow-lg shadow-lavendar
                xl:text-6xl md:text-5xl text-2xl">Software Product Design</div>
            </div>
            <div className="flex flex-row">experience.</div>
        </div>

        <div className="flex flex-row justify-center pt-4">
            <button className="px-6 py-4 rounded-md bg-lavendar-semilight text-shadow-sm shadow-black shadow-md
            hover:bg-lavendar xl:text-4xl md:text-4xl text-2xl"><a href="/portfolio/Resume_HungfangChen.pdf" target="_blank">View Résumé</a></button>
        </div>
    </div>
  )
}