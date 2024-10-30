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
                    <div className='max-w-[1140px] bg-pinky'>
                    {/*header*/}
                        <div className="relative flex flex-row items-center py-28 rounded-t">
                            <div className='flex flex-col w-full'>
                                <h3 className="text-4xl font-bold text-lavendar tracking-wider text-center">
                                    Website Redesign: Taipei City Office of Commerce
                                </h3>
                                <h4 className='pt-2 font-semibold tracking-wider text-center'>
                                    Conducted usability study on redesigning a legacy government website to create better user experiences
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
                            src="/redesign-banner.jpg"
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
                                        <li>UX Researcher</li>
                                        <li>UX Designer</li>
                                    </ul>
                                </h4>
                            </div>
                            <div className='flex flex-col'>
                                <h3 className='text-3xl py-8 font-bold tracking-[0.3rem]'>Skills</h3>
                                <h4 className='text-lg pt-6 pb-10 tracking-wider space-y-2'>
                                    <ul className="list-disc list-inside marker:text-lavendar-semilight">
                                        <li>Heuristic Evaluation</li>
                                        <li>User Research</li>
                                        <li>Usability study</li>
                                        <li>Prototyping</li>
                                    </ul>               
                                </h4>
                            </div>
                            <div className='flex flex-col'>
                                <h3 className='text-3xl py-8 font-bold tracking-[0.3rem]'>Timeline</h3>
                                <h4 className='text-lg pt-6 pb-10 tracking-wider space-y-2'>
                                    <p>Sep. 2023 - Nov. 2023</p>
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
                                            src="/googledoc.png"
                                            loader={imageLoader}
                                            width={32}
                                            height={32}
                                            alt='figma'
                                            ></Image>
                                            <Image
                                            src="/googleform.png"
                                            loader={imageLoader}
                                            width={32}
                                            height={32}
                                            alt='figma'
                                            ></Image>
                                        </figure>
                                    </ul>
                                </h4>
                            </div>
                        </div>
                        {/* purpose of study */}
                        <div className='px-20 pb-16'>
                            <h3 className='text-3xl py-8 font-bold tracking-[0.3rem]'>Purpose of Study</h3>
                            <div className='text-lg pt-6 pb-10 tracking-wider'>
                                <h4>A usability test study was undertaken on the Taipei City Office of Commerce website, with the aim of evaluating and addressing uncovered usability issues and enhancing accessibility. The results were analyzed to identify user experience problems associated with the website, and subsequent redesign efforts were implemented to address and improve these issues.</h4>
                            </div>
                        </div>
                        {/* Testing motivations */}
                        <div className='grid grid-cols-2 gap-4 px-20 pb-16'>
                            <div className='flex flex-col'>
                                <h3 className='text-3xl py-8 font-bold tracking-[0.3rem]'>Testing Objective</h3>
                                <div className='text-lg pt-6 pb-10 tracking-wider'>
                                    <ul className='list-disc pl-6 py-4 space-y-4 marker:text-lavendar-semilight'>
                                        <li>Identify the weakness and strengths of the navigation system and hierarchy.</li>
                                        <li>Investigate whether visitors are able to download documents successfully from the system.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <h3 className='text-3xl py-8 font-bold tracking-[0.3rem]'>Testing Goals</h3>
                                <div className='text-lg pt-6 pb-10 tracking-wider'>
                                    <ul className='list-disc pl-6 py-4 space-y-4 marker:text-lavendar-semilight'>
                                        <li>Reveal usability issues among navigation bar design.</li>
                                        <li>Identify accessibility level for popular functionality.</li>
                                        <li>Establish solutions to improve usability.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* 6 methodologies */}
                        <div className='px-20 py-16'>
                            <div className='flex flex-row justify-center text-lg pt-6 pb-10 tracking-wider'> 
                                {/* image */}
                                <figure className='flex flex-col justify-center py-4'>
                                    <Image
                                    src="/redesign-6-methodologies.jpg"
                                    loader={imageLoader}
                                    width={1140}
                                    height={257}
                                    alt='6-methodologies'
                                    ></Image>
                                </figure>
                            </div>
                        </div>
                        {/* heuristic evaluation */}
                        <div className='px-20 py-16'>
                            <div className='flex flex-row justify-center text-lg pt-6 pb-10 tracking-wider'> 
                                {/* image */}
                                <figure className='flex flex-col justify-center py-4'>
                                    <Image
                                    src="/redesign-heuristic1.jpg"
                                    loader={imageLoader}
                                    width={1140}
                                    height={257}
                                    alt='Heuristic-Evaluation'
                                    ></Image>
                                    <Image
                                    src="/redesign-heuristic2.jpg"
                                    loader={imageLoader}
                                    width={1140}
                                    height={257}
                                    alt='Heuristic-Evaluation'
                                    ></Image>
                                </figure>
                            </div>
                        </div>
                        {/* user research */}
                        <div className='px-20 py-16'>
                            <div className='flex flex-row justify-center text-lg pt-6 pb-10 tracking-wider'> 
                                {/* image */}
                                <figure className='flex flex-col justify-center py-4'>
                                    <Image
                                    src="/redesign-research1.jpg"
                                    loader={imageLoader}
                                    width={1140}
                                    height={257}
                                    alt='User-Research'
                                    ></Image>
                                    <Image
                                    src="/redesign-research2.jpg"
                                    loader={imageLoader}
                                    width={1140}
                                    height={257}
                                    alt='User-Research'
                                    ></Image>
                                </figure>
                            </div>
                        </div>

                        {/* persona */}
                        <div className='px-20 py-16'>
                            <div className='flex flex-row w-[100%] bg-lavendar-semilight align-center justify-center'>
                                <h3 className='text-3xl text-white py-2 font-bold tracking-[0.3rem]'>Persona</h3>
                            </div>
                            <div className='text-white text-lg py-6 space-y-4 tracking-wider'>
                                <figure className='flex flex-row flex-wrap gap-4 justify-center'>
                                    <Image
                                    src="/redesign-persona1.jpg"
                                    loader={imageLoader}
                                    width={433}
                                    height={257}
                                    alt='Persona'
                                    ></Image>
                                    <Image
                                    src="/redesign-persona2.jpg"
                                    loader={imageLoader}
                                    width={433}
                                    height={257}
                                    alt='Persona'
                                    ></Image>
                                </figure>
                                <figure className='flex flex-row flex-wrap gap-4 justify-center'>
                                    <Image
                                    src="/redesign-persona3.png"
                                    loader={imageLoader}
                                    width={433}
                                    height={257}
                                    alt='Persona'
                                    ></Image>
                                </figure>
                            </div>
                        </div>
                        {/* user stories */}
                        <div className='px-20 py-16'>
                            <div className='flex flex-row w-[100%] bg-lavendar-semilight align-center justify-center'>
                                <h3 className='text-3xl text-white py-2 font-bold tracking-[0.3rem]'>User Stories</h3>
                            </div>
                            <div className='flex flex-row justify-center text-white text-lg pt-6 pb-10 tracking-wider'> 
                                {/* image */}
                                <figure className='flex flex-col justify-center py-4'>
                                    <Image
                                    src="/redesign-stories.jpg"
                                    loader={imageLoader}
                                    width={1140}
                                    height={257}
                                    alt='User-Stories'
                                    ></Image>
                                </figure>
                            </div>
                        </div>
                        {/* user journey map */}
                        <div className='px-20 py-16'>
                            <div className='flex flex-row w-[100%] bg-lavendar-semilight align-center justify-center'>
                                <h3 className='text-3xl text-white py-2 font-bold tracking-[0.3rem]'>User Journey Map - class research case</h3>
                            </div>
                            <div className='flex flex-row justify-center text-white text-lg pt-6 pb-10 tracking-wider'> 
                                {/* image */}
                                <figure className='flex flex-col justify-center py-4'>
                                    <Image
                                    src="/redesign-journey.jpg"
                                    loader={imageLoader}
                                    width={1140}
                                    height={257}
                                    alt='User-Journey-Map'
                                    ></Image>
                                </figure>
                            </div>
                        </div>
                        {/* usability testing */}
                        <div className='px-20 py-16'>
                            <div className='flex flex-row w-[100%] bg-lavendar-semilight align-center justify-center'>
                                <h3 className='text-3xl text-white py-2 font-bold tracking-[0.3rem]'>Usability Testing</h3>
                            </div>
                            <div className='flex flex-row justify-center text-white text-lg pt-6 pb-10 tracking-wider'> 
                                {/* image */}
                                <figure className='flex flex-col justify-center py-4'>
                                    <Image
                                    src="/redesign-usability.jpg"
                                    loader={imageLoader}
                                    width={1140}
                                    height={257}
                                    alt='Usability-Testing'
                                    ></Image>
                                </figure>
                            </div>
                        </div>
                        {/* prototying */}
                        <div className='px-20 py-16'>
                            <div className='flex flex-row w-[100%] bg-lavendar-semilight align-center justify-center'>
                                <h3 className='text-3xl text-white py-2 font-bold tracking-[0.3rem]'>Prototyping</h3>
                            </div>
                            <div className='flex flex-row justify-center py-6'>
                                 <div className='text-lg tracking-wider'>
                                    Redesigned Prototype&nbsp;(
                                    <a className='text-lavendar-semilight underline' href='https://www.figma.com/proto/nhARB7CQvuwGY5HpGo3ZMP/TCOOC-prototype?type=design&node-id=101-221&t=CdfjtI1smK05NeWE-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A2&mode=design'>
                                    Figma Link
                                    </a>
                                    )
                                </div>
                            </div>
                            <div className='flex flex-row justify-center text-lg pb-10 tracking-wider'> 
                                {/* image */}
                                <figure className='flex flex-col justify-center gap-6 pb-4'>
                                    <Image
                                    src="/redesign-prototype.jpg"
                                    loader={imageLoader}
                                    width={1140}
                                    height={257}
                                    alt='Prototype'
                                    ></Image>
                                    <Image
                                    src="/redesign-prototype-design.jpg"
                                    loader={imageLoader}
                                    width={1140}
                                    height={257}
                                    alt='Prototype-Design'
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