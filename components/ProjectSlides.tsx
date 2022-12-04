import { motion } from 'framer-motion'
import React,{Component, useEffect, useState} from 'react'
import ProjectModal1 from './ProjectModal1'
import ProjectModal2 from './ProjectModal2'
import ProjectModal3 from './ProjectModal3'

type Props = {obj: any}

export default function ProjectSlides({obj}: Props) {
    const [showModal, setShowModal] = React.useState(false);

    return (
        <>
            <motion.article 
            onClick={() => setShowModal(true)}
            initial={{scale: 0.9}}
            whileHover={{scale: 1}}
            className='flex flex-col items-center rounded-lg space-y-7 flex-shrink-0 bg-[#333]/80 p-10
            w-[500px] md:w-[600px] xl:w-[900px] cursor-pointer transition-opacity duration-200
            snap-center overflow-hidden'>
                <motion.img
                initial={{y: -100, opacity: 0,}}
                transition={{duration: 1.2}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                className="w-32 h-32 rounded-xl xl:w-[200px] xl:h-[200px] object-cover object-center border-blue-400 border-4"
                src={obj.projectAvatar}
                ></motion.img>

                <div className='px-0 md:px-10'>
                    <h4 className='font-bold text-4xl text-blue-400'>{obj.projectName}</h4>
                    <p className='font-bold text-1xl mt-2 text-yellow-200'>{obj.projectTitle}</p>
                    <div className='flex flex-row space-x-2 mt-2'>
                        {/* iterate through tags & attrs */}
                        {obj.projectTags.map(
                            (tag: string, i:number) =>
                            <p className='text-sm border border-transparent rounded-md py-1 px-2 bg-slate-200 text-black' key={i}>{tag}</p>
                        )}
                        {obj.projectAttrs.map(
                            (attr: string, i:number) => 
                            <p className='text-sm border border-transparent rounded-md py-1 px-2 bg-yellow-100 text-black' key={i}>{attr}</p>
                        )}
                    </div>
                    <p className='list-disc space-y-4 text-lg pt-2 tracking-wider'>
                        {obj.projectIntro}
                    </p>
                </div>
            </motion.article>
            <div>{showModal && obj.num === 1 ? (<ProjectModal1 setShowModal={setShowModal}/>): null}</div>
            <div>{showModal && obj.num === 2 ? (<ProjectModal2 setShowModal={setShowModal}/>): null}</div>
            <div>{showModal && obj.num === 3 ? (<ProjectModal3 setShowModal={setShowModal}/>): null}</div>
        </>
    )
}