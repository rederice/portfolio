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
                                NAS Scale-Out Function Design
                            </h3>
                            <h4 className='pt-2 font-semibold tracking-wider text-center'>
                                Introducing backstage management GUI for Storage Systems Administrators
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
                        src="/panel-design-banner.jpg"
                        loader={imageLoader}
                        width={1140}
                        height={545}
                        alt='scale-out-overview'
                        ></Image>
                    </div>
                    {/* overview */}
                    <div className='px-20 py-16'>
                        <h3 className='text-2xl text-white py-8 uppercase font-bold tracking-[0.3rem]'>Overview</h3>
                        <h4 className='text-white text-lg pt-6 pb-10 tracking-wider space-y-2'>
                            <p>GS series are united storage systems. International corporations use NAS/SAN services for data storage.</p>
                            <p>During my tenure as a Project Manager at Infortrend, one design I worked on was an extension of, <span className='projectSlideHighlightText'>GS Scale-Out System</span>.</p>
                            <p>This project introduces <span className='projectSlideUnderlineText'>a whole new structure of file systems integration</span> over the world and aims to be <span className='projectSlideUnderlineText'>user-friendly for system administrators</span>.</p>
                        </h4>
                    </div>
                    {/* problems */}
                    <div className='px-20 py-16'>
                        <h3 className='text-2xl text-white py-8 uppercase font-bold tracking-[0.3rem]'>User Problems</h3>
                        <div className='text-white text-lg pt-6 pb-10 tracking-wider'>
                            <h4>The GS Scale-Out function connects multiple existing file systems into an integrated one. Based on the origin single system UI/UX, I faced the following function design challenges:</h4>
                            <ul className='list-decimal pl-6 py-4 space-y-4 marker:text-blue-400'>
                                <li><span className='projectSlideHighlightText'>File Explorer</span>: Integration between different systems should be expected on the new GUI.</li>
                                <li><span className='projectSlideHighlightText'>File Migration</span>: Files can be transferred among systems on demand. We need a user-friendly visualization for administrators&apos; surveillance.</li>
                                <li><span className='projectSlideHighlightText'>Master/Slave Device Interfaces</span>: Administrators should be able to check the detailed status of all devices after integration.</li>
                            </ul>
                            <div className='flex flex-col'>
                            {/* image: flow designed */}
                                <figure className='flex flex-row justify-center py-4'>
                                    <Image
                                    src="/scale-out-problems.png"
                                    loader={imageLoader}
                                    width={866}
                                    height={257}
                                    alt='scale-out-problems'
                                    ></Image>
                                </figure>
                                <caption className='flex flex-row text-center justify-center text-sm text-gray-300'>Required extension functions for scale-out</caption>
                            </div>
                        </div>
                    </div>
                    {/* research */}
                    <div className='px-20 py-16'>
                        <h3 className='text-2xl text-white py-8 uppercase font-bold tracking-[0.3rem]'>Competitive Research</h3>
                        <div className='text-white font-semibold text-lg pt-6 pb-10 tracking-wider'>
                            <ul className='list-decimal pl-6 py-4 space-y-4 marker:text-blue-400 font-bold'>
                                <li>Unlike the traditional scale-out NAS structure, in which the file system integration is done once deployed initially, our product features <span className='projectSlideUnderlineText'>live integration</span> as an extension for several file systems to connect with each.</li>
                                <li>Based on the similarity with NetApp, Dell EMC, HPE NAS scale-out products, I adopted the idea of a <span className='projectSlideUnderlineText'>File Explorer integration</span> showcase.</li>
                                <li>Moreover, live extension and file migration functions should be <span className='projectSlideUnderlineText'>displayed dynamically</span> with <span className='projectSlideUnderlineText'>more sensitive information</span> to users.</li>
                            </ul>
                        </div>
                    </div>
                    {/* evaluate */}
                    <div className='px-20 py-16'>
                        <h3 className='text-2xl text-white py-8 uppercase font-bold tracking-[0.3rem]'>Feasibility Studies</h3>
                        <div className='text-white text-lg pt-6 pb-10 tracking-wider'>
                            <ul className='list-decimal pl-6 py-4 space-y-4 marker:text-blue-400'>
                                <li><span className='projectSlideUnderlineText'>Technical research</span> was conducted with firmware engineers to ensure our functions, and further plan for <span className='projectSlideUnderlineText'>overall flows</span> of live integration.</li>
                                <div className='flex flex-col py-4'>
                                {/* image: flow designed */}
                                    <figure className='flex flex-row justify-center py-4'>
                                        <Image
                                        src="/scale-out-flow.png"
                                        loader={imageLoader}
                                        width={866}
                                        height={257}
                                        alt='scale-out-flow'
                                        ></Image>
                                    </figure>
                                    <caption className='flex flex-row text-center justify-center text-sm text-gray-300'>Flow chart preview</caption>
                                </div>
                                <li>Product Specs were written(C0 documents) to include complete <span className='projectSlideUnderlineText'>function listing</span> as well as <span className='projectSlideUnderlineText'>static prototypes</span>.</li>
                                <li>Deep discussion meetings were held continuously with UI/UX designer and CEO, to <span className='projectSlideUnderlineText'>review GUI prototypes</span> in comprehensive aspects.</li>
                            </ul>
                            <div className='flex flex-col py-4'>
                            {/* image: flow designed */}
                                <figure className='flex flex-row justify-center py-4'>
                                    <Image
                                    src="/scale-out-prototype.jpg"
                                    loader={imageLoader}
                                    width={800}
                                    height={730}
                                    alt='scale-out-prototype'
                                    ></Image>
                                </figure>
                                <caption className='flex flex-row text-center justify-center text-sm text-gray-300'>Prototype preview</caption>
                            </div>
                        </div>
                    </div>
                    {/* final design */}
                    <div className='px-20 py-16'>
                        <h3 className='text-2xl text-white py-8 uppercase font-bold tracking-[0.3rem]'>final design</h3>
                        <div className='text-white text-lg py-6 space-y-8 tracking-wider'>
                            <div className='flex flex-row py-4 justify-center'>
                                <Image
                                src="/scale-out-final.png"
                                loader={imageLoader}
                                width={866}
                                height={257}
                                alt='scale-out-final-design'
                                ></Image>
                            </div>
                            <div className='flex flex-col justify-start py-4 space-x-1 space-y-2 text-lg'>
                                <p><span className='border-2 border-blue-400 text-blue-400 p-1'>1</span> <span className='projectSlideHighlightText'>File Explorer</span></p>
                                <ul className='px-8 list-disc space-y-2'>
                                    <li>In the administration panel, we adopted an <span className='projectSlideUnderlineText'>expandable layered structure</span>.</li>
                                    <div className='flex flex-col py-4 justify-center'>
                                        <Image
                                        src="/scale-out-tree.png"
                                        loader={imageLoader}
                                        width={866}
                                        height={257}
                                        alt='scale-out-final-tree-structure'
                                        ></Image>
                                        <caption className='flex flex-row text-center justify-center text-sm text-gray-300'>Tree structure</caption>
                                    </div>
                                    <li>UI/UX is consistent with renowned OS explorers and original GS products.</li>
                                    <div className='flex flex-col py-4 justify-center'>
                                        <Image
                                        src="/scale-out-style.png"
                                        loader={imageLoader}
                                        width={866}
                                        height={257}
                                        alt='scale-out-final-style-consistency'
                                        ></Image>
                                        <caption className='flex flex-row text-center justify-center text-sm text-gray-300'>Style consistency</caption>
                                    </div>
                                </ul>
                            </div>
                            <div className='flex flex-col justify-start py-4 space-x-1 space-y-2 text-lg'>
                                <p><span className='border-2 border-blue-400 text-blue-400 p-1'>2</span> <span className='projectSlideHighlightText'>File Migration</span></p>
                                <ul className='px-8 list-disc space-y-2'>
                                    <li>Upon user demands, we designed a migration task creation <span className='projectSlideUnderlineText'>popup</span> inside File Explorer. Further task details can be set inside.</li>
                                    <div className='flex flex-col py-4 justify-center'>
                                        <Image
                                        src="/scale-out-migrate-attribute.png"
                                        loader={imageLoader}
                                        width={866}
                                        height={257}
                                        alt='scale-out-migrate-attribute'
                                        ></Image>
                                        <caption className='flex flex-row text-center justify-center text-sm text-gray-300'>Migration tasks creation popup</caption>
                                    </div>
                                    <li>For administrator monitoring, migration tasks can be managed in <span className='projectSlideUnderlineText'>another tab</span> independently. We adopted a table view for centralized display.</li>
                                    <div className='flex flex-col py-4 justify-center'>
                                        <Image
                                        src="/scale-out-migration-tab.png"
                                        loader={imageLoader}
                                        width={866}
                                        height={257}
                                        alt='scale-out-migration-tab'
                                        ></Image>
                                        <caption className='flex flex-row text-center justify-center text-sm text-gray-300'>Migration tasks management</caption>
                                    </div>
                                </ul>
                            </div>
                            <div className='flex flex-col justify-start py-4 space-x-1 space-y-2 text-lg'>
                            <p><span className='border-2 border-blue-400 text-blue-400 p-1'>3</span> <span className='projectSlideHighlightText'>Master/Slave Device Interfaces</span></p>
                                <ul className='px-8 list-disc space-y-2'>
                                    <li>On the dashboard, we added a device quick switch <span className='projectSlideUnderlineText'>dropdown</span>.</li>
                                    <li>Independent devices can be displayed as <span className='projectSlideUnderlineText'>cards</span> for status overview.</li>
                                    <div className='flex flex-col py-4 justify-center'>
                                        <Image
                                        src="/scale-out-interface-switch.png"
                                        loader={imageLoader}
                                        width={866}
                                        height={257}
                                        alt='scale-out-interface-switch'
                                        ></Image>
                                        <caption className='flex flex-row text-center justify-center text-sm text-gray-300'>Device switching and details</caption>
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