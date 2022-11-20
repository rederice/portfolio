import React,{useEffect, useState} from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'

type Props = {setShowModal: any}
const imageLoader = require("../pages/api/imageLoader.js");

export default function ProjectModal(obj: Props) {
    
    return (
        <><motion.div
        initial={{scale: 0.1, opacity: 0.1}}
        transition={{duration: 0.2}}
        whileInView={{scale: 1, opacity: 1}}
        className="flex fixed justify-center items-center overflow-hidden inset-0 z-50 outline-none focus:outline-none bg-[#333]/80 h-screen"
        >
            <div className="relative w-auto py-6 mx-auto max-w-[60vw]">
                {/*content*/}
                <div className="flex flex-col border-0 rounded-lg shadow-lg relative w-full overflow-y-scroll h-screen
                bg-[rgb(36,36,36)] outline-none focus:outline-none overscroll-contain">
                    {/*header*/}
                    <div className="flex flex-row items-center p-5 bg-blue-400 rounded-t">
                        <div className='relative flex flex-col w-full'>
                            <h3 className="text-3xl font-bold text-black tracking-wider text-center">
                                Public Decision Making Map System
                            </h3>
                            <h4 className='pt-2 font-semibold tracking-wider text-center'>
                                Developed a digital map with backstage management for government users
                            </h4>
                        </div>
                        <button
                            className="p-1 ml-auto bg-transparent border-0 text-white text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => obj.setShowModal(false)}
                        >
                            <span className="absolute bg-transparent text-white top-0 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                ×
                            </span>
                        </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-8 flex items-center justify-center">
                        <Image
                        src="/typhoon-overview.jpg"
                        loader={imageLoader}
                        width={704}
                        height={545}
                        alt='typhoon-overview'
                        ></Image>
                    </div>
                    {/* overview */}
                    <div>
                        <h3 className='bg-[#f1d6a6] text-2xl border-t-black rounded-t-md text-[#006bad] text-left px-8 py-8 uppercase font-bold tracking-[0.3rem]'>Overview</h3>
                        <h4 className='bg-slate-200 text-black font-semibold text-lg px-10 pt-6 pb-10 tracking-wider'>
                        The system is a disaster control application for government. We introduce map object drawing as indication of disaster relief placement, typhoon history comparison and dashboards to review the statistics of all objects on map.
                        </h4>
                    </div>
                    {/* problems */}
                    <div>
                        <h3 className='bg-[#f1d6a6] text-2xl border-t border-solid border-black rounded-t-md text-[#006bad] text-left -mt-2 px-8 py-8 uppercase font-bold tracking-[0.3rem]'>Problems</h3>
                        <div className='bg-slate-200 text-black font-semibold text-lg px-8 py-6 tracking-wider'>
                            <h4>Public Decision Making System involved multiple modules. For Typhoon History Dashboard, we deal with the following issues:</h4>
                            <ul className='list-decimal pl-6 py-4 space-y-4 marker:text-blue-500 font-bold'>
                                <li><span className='text-blue-500 font-bold underline underline-offset-2'>Dashboard Comparison</span>: Two typhoon traces on maps and statistics should show simultaneously.</li>
                                <li><span className='text-blue-500 font-bold underline underline-offset-2'>Typhoon Timeline</span>: Two typhoons can be displayed in different time spot.</li>
                                <li><span className='text-blue-500 font-bold underline underline-offset-2'>Dashboard Information Cards</span>: We need a bigger space for different types of detailed information to be displayed.</li>
                            </ul>
                        </div>
                    </div>
                    {/* solution */}
                    <div>
                        <h3 className='text-[#f1d6a6] text-2xl bg-[#006bad] text-center px-8 py-8 uppercase font-bold tracking-[0.3rem]'>What should I do?</h3>
                        <h4 className='bg-[#f1d6a6] text-2xl text-[#006bad] text-left px-8 py-8 uppercase font-bold tracking-[0.3rem]'>Project Meetings</h4>
                        <div className=' text-white font-semibold text-lg px-8 py-6 tracking-wider'>
                            <ul className='list-decimal pl-6 py-4 space-y-4 marker:text-blue-500 font-bold text-blue-300'>
                                <li>To understand opinions and requirements from the client, we participate meetings to synchronize our work progress and their feedbacks.</li>
                                <li>Based on the design prototypes from UI/UX designers and project managers, I am responsible to review the consumption of time according to the requirements.</li>
                                <li>Suggested better ideas to project managers about technical feasibilities.</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h3 className='text-[#f1d6a6] text-2xl bg-[#006bad] text-center px-8 py-8 uppercase font-bold tracking-[0.3rem]'>What I have done.</h3>
                        <h4 className='bg-[#f1d6a6] text-2xl text-[#006bad] text-left px-8 py-8 uppercase font-bold tracking-[0.3rem]'>Evaluate Feasibilities</h4>
                        <div className=' text-white font-semibold text-lg px-8 py-6 tracking-wider'>
                            <ul className='list-decimal pl-6 py-4 space-y-4 marker:text-blue-500 font-bold text-blue-300'>
                                <li>Technical researches were conducted to ensure designs can be implemented.</li>
                                <li>Rapidly develop the base functions and frameworks, for project managers and clients to review the big picture sooner as possible.</li>
                            </ul>
                        </div>
                        <h4 className='bg-[#f1d6a6] text-2xl text-[#006bad] text-left px-8 py-8 uppercase font-bold tracking-[0.3rem]'>Development</h4>
                        <div className=' text-white font-semibold text-lg px-8 py-6 tracking-wider'>
                            <ul className='list-decimal pl-6 py-4 space-y-4 marker:text-blue-500 font-bold text-blue-300'>
                                <li>Development phase involved full stack design and functional testing.</li>
                                <li>Fix issues at testing environment according to QA tests.</li>
                                <li>Deploy to production environment for the client.</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h3 className='bg-[#f1d6a6] text-2xl border-t border-solid border-black rounded-t-md text-[#006bad] text-left -mt-2 px-8 py-8 uppercase font-bold tracking-[0.3rem]'>Solution / Final Design</h3>
                        <div className='bg-slate-200 font-semibold text-lg px-8 py-6 tracking-wider'>
                            <ul className='flex flex-col justify-center items-center list-disc pl-6 pt-4 space-y-8 text-black marker:text-blue-500 font-bold text-xl'>
                                <p className='tracking-wider'>Problem 1: <span className='text-blue-400 underline'>Dashboard Comparison</span></p>
                                <li>For the visual experience of 2 maps to compare side by side, we suggested to synchronize the same geological point whenever dragging.</li>
                                {/* image: typhoon compare */}
                                <Image
                                src="/typhoon-comp.png"
                                loader={imageLoader}
                                width={866}
                                height={257}
                                alt='typhoon-comp'
                                ></Image>
                                <div className='border border-b border-white w-[20vw] mx-auto'></div>
                                
                                <p className='tracking-wider'>Problem 2: <span className='text-blue-400 underline'>Asynchronous Timeline</span></p>
                                <li>We consider timeline dragging are considered in a full map display operation, so added the timeline bar at the bottom of map. When information cards expand, the timeline bar would be covered.</li>
                                <li>Two independent timeline bars are set on each typhoon maps.</li>
                                {/* image: typhoon timeline */}
                                <Image
                                src="/typhoon-timeline.png"
                                loader={imageLoader}
                                width={800}
                                height={430}
                                alt='typhoon-timeline'
                                ></Image>
                                <div className='border border-b border-white w-[20vw] mx-auto'></div>

                                <p className='tracking-wider'>Problem 3: <span className='text-blue-400 underline'>Massive amount of information cards</span></p>
                                <li>I decided to divide cards into 3 categories according to its display style.</li>
                                <li>Display of cards will also be mirrored to show 2 typhoon details.</li>
                                <li>I introduced a “free dragging” expansion for cards section in order to customize the view height for different types of cards and usage scenarios.</li>
                                {/* image: typhoon cards */}
                                <Image
                                src="/typhoon-card.png"
                                loader={imageLoader}
                                width={800}
                                height={444}
                                alt='typhoon-card'
                                ></Image>
                            </ul>
                        </div>
                    </div>
                    {/*footer*/}
                    <div className="flex flex-row items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">                        
                        <button className='uppercase bg-blue-300 rounded-md text-black py-2 px-4 font-bold'
                        onClick={() => obj.setShowModal(false)}>
                        close
                        </button>
                    </div>
                </div>
            </div>
        </motion.div></>
        
    )
}