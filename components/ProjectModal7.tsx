import React,{useEffect, useState} from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'

type Props = {setShowModal: any}
const imageLoader = require("../pages/api/imageLoader.js");

export default function ProjectModal(obj: Props) {
    
    return (
        <><motion.div
        initial={{opacity: 0}}
        transition={{duration: 1.2}}
        whileInView={{opacity: 1}}
        className="flex fixed justify-center items-center overflow-hidden inset-0 z-50 outline-none focus:outline-none bg-black/80 h-screen"
        >
            <div className="flex py-6 items-center justify-center w-[100vw]">
                {/*content*/}
                <div className="flex flex-col text-black items-center border-0 rounded-lg shadow-lg relative w-full overflow-y-scroll h-screen
                outline-none focus:outline-none overscroll-contain">
                    {/*container*/}
                    <div className='max-w-[1140px] bg-skyblue'>
                    {/*header*/}
                        <div className="relative flex flex-row items-center py-28 rounded-t">
                            <div className='flex flex-col w-full'>
                                <h3 className="text-4xl font-bold text-lavendar tracking-wider text-center">
                                    Dashboard design: Business Ticket Dashboard Portal
                                </h3>
                                <h4 className='pt-2 font-semibold tracking-wider text-center'>
                                    Designed an integrated ticket dashboard portal that connects Sales' vendor-side orders with internal tracking systems
                                </h4>
                            </div>
                            <button
                                className="absolute top-0 right-0 p-3 bg-transparent"
                                onClick={() => obj.setShowModal(false)}
                            >
                                <span className=" bg-transparent font-semibold text-black h-6 w-6 text-3xl block outline-none focus:outline-none">
                                    ×
                                </span>
                            </button>
                        </div>
                        {/*body*/}
                        <div className="relative pb-10 flex items-center justify-center -mt-16">
                            <Image
                            src="/closed-loop-banner.jpg"
                            loader={imageLoader}
                            width={1140}
                            height={545}
                            alt='scale-out-overview'
                            ></Image>
                        </div>
                        {/* Basic Info */}
                        <div className='grid xl:grid-cols-4 lg:grid-cols-4 grid-cols-2 gap-4 px-20 pb-16'>
                            <div className='flex flex-col'>
                                <h3 className='text-3xl py-8 font-bold tracking-[0.3rem]'>My Role</h3>
                                <h4 className='text-lg pt-6 pb-10 tracking-wider space-y-2'>
                                    <ul className="list-disc list-inside marker:text-lavendar-semilight">
                                        <li>Product Manager</li>
                                        <li>UX Designer</li>
                                        <li>Frontend Developer</li>
                                    </ul>
                                </h4>
                            </div>
                            <div className='flex flex-col'>
                                <h3 className='text-3xl py-8 font-bold tracking-[0.3rem]'>Skills</h3>
                                <h4 className='text-lg pt-6 pb-10 tracking-wider space-y-2'>
                                    <ul className="list-disc list-inside marker:text-lavendar-semilight">
                                        <li>Product Requirements</li>
                                        <li>User Research</li>
                                        <li>Competitve Study</li>
                                        <li>Jira</li>
                                        <li>React.js</li>
                                        <li>TailwindCSS</li>
                                        <li>Figma</li>
                                        <li>PostgreSQL</li>
                                    </ul>               
                                </h4>
                            </div>
                            <div className='flex flex-col'>
                                <h3 className='text-3xl py-8 font-bold tracking-[0.3rem]'>Timeline</h3>
                                <h4 className='text-lg pt-6 pb-10 tracking-wider space-y-2'>
                                    <p>June 2024 - Aug. 2024</p>
                                    <p>3 months</p>
                                </h4>
                            </div>
                            <div className='flex flex-col'>
                                <h3 className='text-3xl py-8 font-bold tracking-[0.3rem]'>Tools</h3>
                                <h4 className='text-lg pt-6 pb-10 tracking-wider space-y-2'>
                                    <ul className="list-disc list-inside marker:text-lavendar-semilight">
                                        <figure className='flex flex-row justify-start space-x-1'>
                                            <Image
                                            src="/figma.png"
                                            loader={imageLoader}
                                            width={32}
                                            height={32}
                                            alt='figma'
                                            ></Image>
                                            <Image
                                            src="/react.png"
                                            loader={imageLoader}
                                            width={32}
                                            height={32}
                                            alt='react'
                                            ></Image>
                                            <Image
                                            src="/jira.png"
                                            loader={imageLoader}
                                            width={32}
                                            height={32}
                                            alt='jira'
                                            ></Image>
                                        </figure>
                                    </ul>
                                </h4>
                            </div>
                        </div>
                        {/* problem statement */}
                        <div className='px-20 py-16'>
                            <div className='flex flex-row justify-center text-lg pt-6 pb-10 tracking-wider'> 
                                {/* image */}
                                <figure className='flex flex-col justify-center py-4'>
                                    <Image
                                    src="/closed-loop-problem.png"
                                    loader={imageLoader}
                                    width={1140}
                                    height={257}
                                    alt='Business problem'
                                    ></Image>
                                </figure>
                            </div>
                        </div>
                        {/* goals */}
                        <div className='px-20 py-16'>
                            <div className='flex flex-row justify-center text-lg pt-6 pb-10 tracking-wider'> 
                                {/* image */}
                                <figure className='flex flex-col justify-center py-4'>
                                    <Image
                                    src="/closed-loop-goal.png"
                                    loader={imageLoader}
                                    width={1140}
                                    height={257}
                                    alt='Goals for customer problems'
                                    ></Image>
                                </figure>
                            </div>
                        </div>
                        {/* stats */}
                        <div className='px-20 py-16'>
                            <div className='flex flex-row justify-center text-lg pt-6 pb-10 tracking-wider'> 
                                {/* image */}
                                <figure className='flex flex-col justify-center py-4'>
                                    <Image
                                    src="/closed-loop-stats.png"
                                    loader={imageLoader}
                                    width={1140}
                                    height={257}
                                    alt='Stats for customer problems'
                                    ></Image>
                                </figure>
                            </div>
                        </div>

                        {/* research */}
                        <div className='px-20 py-16'>
                            <div className='text-white text-lg py-6 space-y-4 tracking-wider'>
                                <figure className='flex flex-row flex-wrap gap-4 justify-center'>
                                    <Image
                                    src="/closed-loop-research.png"
                                    loader={imageLoader}
                                    width={1140}
                                    height={257}
                                    alt='Research data'
                                    ></Image>
                                </figure>
                            </div>
                        </div>
                        {/* visual design */}
                        <div className='px-20 py-16'>
                            <div className='flex flex-row justify-center text-white text-lg pt-6 pb-10 tracking-wider'> 
                                {/* image */}
                                <figure className='flex flex-col justify-center py-4'>
                                    <Image
                                    src="/closed-loop-visual-design.png"
                                    loader={imageLoader}
                                    width={1140}
                                    height={257}
                                    alt='Visual design'
                                    ></Image>
                                </figure>
                            </div>
                        </div>
                        {/* wireframe */}
                        <div className='px-20 py-16'>
                            <div className='flex flex-row justify-center text-white text-lg pt-6 pb-10 tracking-wider'> 
                                {/* image */}
                                <figure className='flex flex-col justify-center py-4'>
                                    <Image
                                    src="/closed-loop-wireframe.png"
                                    loader={imageLoader}
                                    width={1140}
                                    height={257}
                                    alt='Wireframe'
                                    ></Image>
                                </figure>
                            </div>
                        </div>
                        {/* prototyping */}
                        <div className='px-20 py-16'>
                            <div className='flex flex-row justify-center text-white text-lg pt-6 pb-10 tracking-wider'> 
                                {/* image */}
                                <figure className='flex flex-col justify-center py-4'>
                                    <Image
                                    src="/closed-loop-prototype.png"
                                    loader={imageLoader}
                                    width={1140}
                                    height={257}
                                    alt='Prototype'
                                    ></Image>
                                </figure>
                            </div>
                        </div>


                        {/*footer*/}
                        <div className="flex flex-row items-center justify-center p-6 border-t border-solid border-lavendar rounded-b">                        
                            <button className='bg-lavendar rounded-md text-black py-2 px-4 font-bold'
                            onClick={() => obj.setShowModal(false)}>
                            <p className="text-white">close</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div></>
        
    )
}