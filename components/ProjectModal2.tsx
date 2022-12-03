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
        className="flex fixed justify-center items-center overflow-hidden inset-0 z-50 outline-none focus:outline-none bg-[#444]/90 h-screen"
        >
            <div className="flex py-6 items-center justify-center w-[100vw]">
                {/*content*/}
                <div className="flex flex-col items-center border-0 rounded-lg shadow-lg relative w-full overflow-y-scroll h-screen
                outline-none focus:outline-none overscroll-contain">
                    {/*container*/}
                    <div className='max-w-[1140px] bg-[rgb(36,36,36)]'>
                    {/*header*/}
                    <div className="relative flex flex-row items-center py-28 bg-[#333]/80 rounded-t">
                        <div className='flex flex-col w-full'>
                            <h3 className="text-4xl font-bold text-blue-400 tracking-wider text-center">
                                Public Decision Making Map System
                            </h3>
                            <h4 className='pt-2 font-semibold tracking-wider text-center'>
                                Introducing a digital map system GUI for government users
                            </h4>
                        </div>
                        <button
                            className="absolute top-0 right-0 p-1 ml-auto bg-transparent border-0 text-white float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => obj.setShowModal(false)}
                        >
                            <span className=" bg-transparent text-white h-6 w-6 text-3xl block outline-none focus:outline-none">
                                ×
                            </span>
                        </button>
                    </div>
                    {/*body*/}
                    <div className="relative pb-10 flex items-center justify-center -mt-16">
                        <Image
                        className='rounded-lg'
                        src="/typhoon-overview.jpg"
                        loader={imageLoader}
                        width={704}
                        height={545}
                        alt='typhoon-overview'
                        ></Image>
                    </div>
                    {/* overview */}
                    <div className='px-20 py-16'>
                        <h3 className='text-2xl text-white py-8 uppercase font-bold tracking-[0.3rem]'>Overview</h3>
                        <h4 className='text-white text-lg pt-6 pb-10 tracking-wider'>
                            <p>Public Decision Making Map System is a disaster control application for government.</p>
                            <p>During my position as a Full-Stack Engineer at RiChi, I introduce <span className='projectSlideUnderlineText'>map object drawing</span> as indication of <span className='projectSlideHighlightText'>disaster relief placement</span>, <span className='projectSlideHighlightText'>typhoon history comparison</span> and <span className='projectSlideHighlightText'>dashboards</span> to review the statistics of all objects on map.</p>
                        </h4>
                    </div>
                    {/* problems */}
                    <div className='px-20 py-16'>
                        <h3 className='text-2xl text-white py-8 uppercase font-bold tracking-[0.3rem]'>User Problems</h3>
                        <div className='text-white text-lg pt-6 pb-10 tracking-wider'>
                            <h4>Public Decision Making System involved multiple modules. For Typhoon History Dashboard, we deal with the following issues:</h4>
                            <ul className='list-decimal pl-6 py-4 space-y-4 marker:text-blue-400'>
                                <li><span className='projectSlideHighlightText'>Dashboard Comparison</span>: Two typhoon must be selected first. Then both traces on maps and statistics should be showed simultaneously.</li>
                                <li><span className='projectSlideHighlightText'>Typhoon Timeline</span>: Two typhoons can be displayed in different time spot independently.</li>
                                <li><span className='projectSlideHighlightText'>Dashboard Information Cards</span>: We need a bigger space for different types of detailed information to be displayed.</li>
                            </ul>
                            <div className='flex flex-col'>
                            {/* image: flow designed */}
                                <figure className='flex flex-row justify-center py-4'>
                                    <Image
                                    src="/typhoon-prototype.png"
                                    loader={imageLoader}
                                    width={866}
                                    height={257}
                                    alt='typhoon-prototype'
                                    ></Image>
                                </figure>
                                <caption className='flex flex-row text-center justify-center text-sm text-gray-300'>Typhoon dashboard initial prototype</caption>
                            </div>
                        </div>
                    </div>
                    <div className='px-20 py-16'>
                        <h3 className='text-2xl text-white py-8 uppercase font-bold tracking-[0.3rem]'>Project Meetings</h3>
                        <div className='text-white font-semibold text-lg pt-6 pb-10 tracking-wider'>
                            <ul className='list-decimal pl-6 py-4 space-y-4 marker:text-blue-400 font-bold'>
                                <li>To understand opinions and requirements from the client, we participate meetings to <span className="projectSlideUnderlineText">synchronize our work progress and their feedbacks</span> periodically.</li>
                                <li>Based on the design prototypes from UI/UX designers and project managers, I am responsible to <span className="projectSlideUnderlineText">review and suggest GUI adjustments</span> and estimate time consumption according to the requirements.</li>
                                <li><span className="projectSlideUnderlineText">Technical researches</span> were conducted to ensure designs can be implemented.</li>
                            </ul>
                        </div>
                    </div>
                    <div className='px-20 py-16'>
                        <h3 className='text-2xl text-white py-8 uppercase font-bold tracking-[0.3rem]'>Development</h3>
                        <div className='text-white font-semibold text-lg pt-6 pb-10 tracking-wider'>
                            <ul className='list-decimal pl-6 py-4 space-y-4 marker:text-blue-400 font-bold'>
                                <li>My work involved in the development phase from <span className="projectSlideUnderlineText">frontend layout design</span>, <span className="projectSlideUnderlineText">backend login system</span>, <span className="projectSlideUnderlineText">database management</span> to <span className="projectSlideUnderlineText">functional testing</span>.</li>
                                <li>Fix issues at testing environment as well as GUI rolling enhancement according to QA tests.</li>
                                <li>Deploy to production environment for the client.</li>
                            </ul>
                        </div>
                    </div>
                    {/* final design */}
                    <div className='px-20 py-16'>
                        <h3 className='text-2xl text-white py-8 uppercase font-bold tracking-[0.3rem]'>final design</h3>
                        <div className='text-white text-lg py-6 space-y-8 tracking-wider'>
                            {/* <div className='flex flex-row py-4 justify-center'>
                                <Image
                                src="/scale-out-final.png"
                                loader={imageLoader}
                                width={866}
                                height={257}
                                alt='scale-out-final-design'
                                ></Image>
                            </div> */}
                            <div className='flex flex-col justify-start py-4 space-x-1 space-y-2 text-lg'>
                                <p><span className='border-2 border-blue-400 text-blue-400 p-1'>1</span> <span className='projectSlideHighlightText'>Dashboard Comparison</span></p>
                                <ul className='px-8 list-disc space-y-2'>
                                    <li>Typhoon sections are divided into 2 sections all through the following flow.</li>
                                    <li>For comparison purpose, <span className='projectSlideUnderlineText'>side-by-side</span> display for 2 maps is introduced.</li>
                                    <div className='flex flex-col py-4 justify-center'>
                                        <Image
                                        src="/typhoon-comp.png"
                                        loader={imageLoader}
                                        width={866}
                                        height={257}
                                        alt='typhoon-comparison'
                                        ></Image>
                                        <caption className='flex flex-row text-center justify-center text-sm text-gray-300'>Typhoon comparison workflow & display style</caption>
                                    </div>
                                </ul>
                            </div>
                            <div className='flex flex-col justify-start py-4 space-x-1 space-y-2 text-lg'>
                                <p><span className='border-2 border-blue-400 text-blue-400 p-1'>2</span> <span className='projectSlideHighlightText'>Asynchronous Timeline</span></p>
                                <ul className='px-8 list-disc space-y-2'>
                                    <li><span className='projectSlideUnderlineText'>Two independent timeline bars</span> are set on each typhoon maps.</li>
                                    <li>As timeline dragging is only considered necessary under full map view, I made it <span className='projectSlideUnderlineText'>at the bottom of the map</span>. Thus, if the card section expands, it will automatically covers the timeline section.</li>
                                    <div className='flex flex-col py-4 justify-center'>
                                        <Image
                                        src="/typhoon-timeline.png"
                                        loader={imageLoader}
                                        width={866}
                                        height={257}
                                        alt='typhoon-timeline'
                                        ></Image>
                                        <caption className='flex flex-row text-center justify-center text-sm text-gray-300'>Independent timeline for 2 typhoons</caption>
                                    </div>
                                </ul>
                            </div>
                            <div className='flex flex-col justify-start py-4 space-x-1 space-y-2 text-lg'>
                            <p><span className='border-2 border-blue-400 text-blue-400 p-1'>3</span> <span className='projectSlideHighlightText'>Massive amount of information cards</span></p>
                                <ul className='px-8 list-disc space-y-2'>
                                    <li>Facing UX problems due to too many cards available to be viewed when testing, I decided to divide cards into 3 tabs according to their categories and display style.</li>
                                    <ul className='list-decimal pl-6'>
                                        <li><span className='p-1 text-semibold bg-[#333]/80 text-[rgb(86,162,171)]'>Information Cards</span>: 1 to 2 unit(s) wide, text-based context</li>
                                        <li><span className='p-1 text-semibold bg-[#333]/80 text-[rgb(86,162,171)]'>Statistics Cards</span>: 4 units wide, graph-based context</li>
                                        <li><span className='p-1 text-semibold bg-[#333]/80 text-[rgb(86,162,171)]'>Image Cards</span>: 4 units wide, image-based context</li>
                                    </ul>
                                    <li>Display of cards are mirrored according to 2 typhoons.</li>
                                    <li><span className='projectSlideUnderlineText'>I developed a “free dragging” expansion</span> for cards section in order to customize the view height for different types of cards and usage scenarios.</li>
                                    <div className='flex flex-col py-4 justify-center'>
                                            <Image
                                            src="/typhoon-card.png"
                                            loader={imageLoader}
                                            width={866}
                                            height={257}
                                            alt='typhoon-card'
                                            ></Image>
                                            <caption className='flex flex-row text-center justify-center text-sm text-gray-300'>Typhoon cards dynamic display section</caption>
                                        </div>
                                </ul>
                            </div>
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
            </div>
        </motion.div></>
        
    )
}