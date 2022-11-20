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
                    <div className="relative flex flex-row items-center p-5 bg-blue-400 rounded-t">
                        <div className='flex flex-col w-full'>
                            <h3 className="text-3xl font-bold text-black tracking-wider text-center">
                                NAS Scale-Out Function Design
                            </h3>
                            <h4 className='pt-2 font-semibold tracking-wider text-center'>
                                Introducing backstage management UI for Storage Systems
                            </h4>
                        </div>
                        <button
                            className="p-1 ml-auto bg-transparent border-0 text-white float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => obj.setShowModal(false)}
                        >
                            <span className="absolute bg-transparent top-0 text-white h-6 w-6 text-2xl block outline-none focus:outline-none">
                                ×
                            </span>
                        </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-8 flex items-center justify-center">
                        <Image
                        src="/scale-out-overview.png"
                        loader={imageLoader}
                        width={704}
                        height={545}
                        alt='scale-out-overview'
                        ></Image>
                    </div>
                    {/* overview */}
                    <div>
                        <h3 className='bg-[#f1d6a6] text-2xl border-t-black rounded-t-md text-[#006bad] text-left px-8 py-8 uppercase font-bold tracking-[0.3rem]'>Overview</h3>
                        <h4 className='bg-slate-200 text-black font-semibold text-lg px-10 pt-6 pb-10 tracking-wider'>GS series play an important role of united storage systems among international corporations. During my tenure as a Project Manager at Infortrend, one of the projects I worked on was the design of GS function extension, <span className='text-blue-500 underline underline-offset-2'>GS Scale-Out System</span>. This project introduces <span className='decoration-blue-500 underline underline-offset-2'>a whole new structure of file systems integration</span> over the world and aims to be <span className='decoration-blue-500 underline underline-offset-2'>user-friendly for system administrators</span>.</h4>
                    </div>
                    {/* problems */}
                    <div>
                        <h3 className='bg-[#f1d6a6] text-2xl border-t border-solid border-black rounded-t-md text-[#006bad] text-left -mt-2 px-8 py-8 uppercase font-bold tracking-[0.3rem]'>Problems</h3>
                        <div className='bg-slate-200 text-black font-semibold text-lg px-8 py-6 tracking-wider'>
                            <h4>The GS Scale-Out function connects multiple existed file systems into an integrated one. Therefore, challenges are identified as the following listed:</h4>
                            <ul className='list-decimal pl-6 py-4 space-y-4 marker:text-blue-500 font-bold'>
                                <li><span className='text-blue-500 font-bold underline underline-offset-2'>File Explorer</span>: Integration between different systems should be expected on new GUI.</li>
                                <li><span className='text-blue-500 font-bold underline underline-offset-2'>File Migration</span>: Files can be transferred among systems on demand. We need a user-friendly visualization for administrators&apos; surveillance.</li>
                                <li><span className='text-blue-500 font-bold underline underline-offset-2'>Master/Slave Device Interfaces</span>: Administrators should be able to check detailed status on all devices after integration.</li>
                            </ul>
                        </div>
                    </div>
                    {/* research */}
                    <div>
                        <h3 className='text-[#f1d6a6] text-2xl bg-[#006bad] text-center px-8 py-8 uppercase font-bold tracking-[0.3rem]'>What should I do?</h3>
                        <h4 className='bg-[#f1d6a6] text-2xl text-[#006bad] text-left px-8 py-8 uppercase font-bold tracking-[0.3rem]'>Competitive Research</h4>
                        <div className=' text-white font-semibold text-lg px-8 py-6 tracking-wider'>
                            <ul className='list-decimal pl-6 py-4 space-y-4 marker:text-blue-500 font-bold text-blue-300'>
                                <li>Unlike traditional scale-out NAS structure, which the file system integration is done once deployed initially, our product features <span className='decoration-[#f1d6a6] underline underline-offset-2'>live integration</span> as an extension for several file systems to connect with each.</li>
                                <li>Based on the similarity with NetApp, Dell EMC, HPE NAS scale-out products, I adopted the ideas of <span className='decoration-[#f1d6a6] underline underline-offset-2'>File Explorer integration</span> showcase.</li>
                                <li>Moreover, live extension and file migration functions should be <span className='decoration-[#f1d6a6] underline underline-offset-2'>displayed dynamically</span> with <span className='decoration-[#f1d6a6] underline underline-offset-2'>more sensitive information</span> to users.</li>
                            </ul>
                        </div>
                    </div>
                    {/* evaluate */}
                    <div>
                        <h3 className='text-[#f1d6a6] text-2xl bg-[#006bad] text-center px-8 py-8 uppercase font-bold tracking-[0.3rem]'>What I have done.</h3>
                        <h4 className='bg-[#f1d6a6] text-2xl text-[#006bad] text-left px-8 py-8 uppercase font-bold tracking-[0.3rem]'>Evaluate Feasibilities</h4>
                        <div className=' text-white font-semibold text-lg px-8 py-6 tracking-wider'>
                            <ul className='list-decimal pl-6 py-4 space-y-4 marker:text-blue-500 font-bold text-blue-300'>
                                <li><span className='decoration-[#f1d6a6] underline underline-offset-2'>Technical researches</span> were conducted with firmware engineers to ensure our functions, and further plan for <span className='decoration-[#f1d6a6] underline underline-offset-2'>overall flows</span> of live integration.</li>
                                <li>Product Specs were written(C0 documents) to include complete <span className='decoration-[#f1d6a6] underline underline-offset-2'>function listing</span> as well as <span className='decoration-[#f1d6a6] underline underline-offset-2'>static prototypes</span>.</li>
                                <li>Deep discussion meetings were held continuously with UI/UX designer and CEO, for the <span className='decoration-[#f1d6a6] underline underline-offset-2'>review of GUI prototypes</span> in comprehensive aspects.</li>
                            </ul>
                        </div>
                    </div>
                    {/* solution */}
                    <div>
                        <h3 className='bg-[#f1d6a6] text-2xl border-t border-solid border-black rounded-t-md text-[#006bad] text-left -mt-2 px-8 py-8 uppercase font-bold tracking-[0.3rem]'>Solution</h3>
                        <div className='bg-slate-200 font-semibold text-lg px-8 py-6 tracking-wider'>
                            <ul className='flex flex-col justify-center items-center list-disc pl-6 pt-4 space-y-8 text-blue-400 marker:text-blue-400 font-bold text-xl'>
                                <h4 className='text-black text-3xl'>STEP 1: Overall Flow</h4>
                                <li>Define clear spec documents</li>
                                <li>Draw flow chart</li>
                                {/* image: flow designed */}
                                <Image
                                src="/scale-out-flow.png"
                                loader={imageLoader}
                                width={866}
                                height={257}
                                alt='scale-out-flow'
                                ></Image>
                                <div className='border border-b border-white w-[20vw] mx-auto'></div>
                                <h4 className='text-black text-3xl'>STEP 2: Prototype</h4>
                                <li>Turn into Adobe XD prototype</li>
                                <li>Consider operation style consistency</li>
                                {/* image: style consistency */}
                                <Image
                                src="/scale-out-prototype.jpg"
                                loader={imageLoader}
                                width={800}
                                height={730}
                                alt='scale-out-prototype'
                                ></Image>
                                <Image
                                src="/scale-out-style.png"
                                loader={imageLoader}
                                width={800}
                                height={430}
                                alt='scale-out-style'
                                ></Image>
                                <div className='border border-b border-white w-[20vw] mx-auto'></div>
                                <h4 className='text-black text-3xl'>STEP 3: Rolling Enhancement</h4>
                                <li>In engineering phase, adjust required detail information</li>
                                <li>Remain simple and understandable</li>
                                {/* image: status display */}
                                <Image
                                src="/scale-out-detail.png"
                                loader={imageLoader}
                                width={800}
                                height={444}
                                alt='scale-out-detail'
                                ></Image>
                            </ul>
                        </div>
                    </div>
                    {/* final design */}
                    <div>
                        <h3 className='bg-[#f1d6a6] text-2xl border-t border-solid border-black rounded-t-md text-[#006bad] text-left -mt-2 px-8 py-8 uppercase font-bold tracking-[0.3rem]'>final design</h3>
                        <div className='bg-slate-200 font-semibold text-lg px-8 py-6 tracking-wider'>
                            <div className='flex flex-row justify-center items-start list-decimal px-1 pt-4 space-x-1 text-blue-400 font-bold text-md text-ellipsis'>
                                <div className='flex flex-col flex-auto w-[25vw]'>
                                    <p><span className='border-2 border-blue-300 p-1'>1</span> File Explorer:</p>
                                    <p className='text-black text-sm p-2'>style consistency, tree structure, expandable</p>
                                </div>
                                <div className='flex flex-col flex-auto w-[25vw]'>
                                    <p><span className='border-2 border-blue-300 p-1'>2</span> File Migration:</p>
                                    <p className='text-black text-sm p-2'>attribute of folder, popup, customized settings</p>
                                </div>
                                <div className='flex flex-col flex-auto w-[25vw]'>
                                    <p><span className='border-2 border-blue-300 p-1'>3</span> Interfaces:</p>
                                    <p className='text-black text-sm p-2'>dashboard, switch option</p>
                                </div>
                                
                            </div>
                            <div className='flex flex-row py-4 justify-center'>
                                {/* image: final design */}
                                <Image
                                src="/scale-out-final.png"
                                loader={imageLoader}
                                width={866}
                                height={257}
                                alt='scale-out-final-design'
                                ></Image>
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
        </motion.div></>
        
    )
}