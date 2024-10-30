import { motion } from 'framer-motion'
import React from 'react'
import ProjectModal6 from './ProjectModal6'
import ProjectModal5 from './ProjectModal5'
import ProjectModal4 from './ProjectModal4'
import ProjectModal3 from './ProjectModal3'
import ProjectModal2 from './ProjectModal2'

type Props = {obj: any}

export default function ProjectSlides({obj}: Props) {
    const [showModal, setShowModal] = React.useState(false);

    return (
        <>
            <motion.article 
            onClick={() => setShowModal(true)}
            transition={{
                duration: 0.2
            }}
            whileHover={{
                boxShadow: "0px 0px 8px rgb(98, 51, 204)"
            }}
            className='flex flex-col m-2 rounded-lg py-7 bg-[#FFF]/40 p-5 gap-4
            sm:w-[84vw] sm:h-[70vh] md:w-[38vw] md:h-[70vh] lg:w-[38vw] lg:h-[60vh] xl:w-[40vw] xl:h-[65vh] cursor-pointer transition-opacity duration-200'>
                <motion.img
                initial={{y: -50, opacity: 0.5}}
                transition={{duration: 0.5}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                className="sm:w-[84vw] md:w-[38vw] lg:w-[50vw] xl:w-[60vw]
                object-contain object-center"
                src={obj.projectAvatar}
                ></motion.img>

                <h4 className='flex flew-row font-bold text-2xl text-lavendar'>{obj.projectName}</h4>
                <div className='flex flex-row flex-wrap'>
                    {/* iterate through tags & attrs */}
                    {obj.projectTags.map(
                        (tag: string, i:number) =>
                        <p className='text-sm border border-transparent rounded-md py-1 px-2 mr-1 mb-1 bg-black text-pinky' key={i}>{tag}</p>
                    )}
                    {obj.projectAttrs.map(
                        (attr: string, i:number) => 
                        <p className='text-sm border border-transparent rounded-md py-1 px-2 mr-1 mb-1 bg-lavendar-light text-black' key={i}>{attr}</p>
                    )}
                </div>
                <p className='list-disc tracking-wider text-black'>
                    {obj.projectIntro}
                </p>
            </motion.article>
            <div>{showModal && obj.num === 6 ? (<ProjectModal6 setShowModal={setShowModal}/>): null}</div>
            <div>{showModal && obj.num === 5 ? (<ProjectModal5 setShowModal={setShowModal}/>): null}</div>
            <div>{showModal && obj.num === 4 ? (<ProjectModal4 setShowModal={setShowModal}/>): null}</div>
            <div>{showModal && obj.num === 3 ? (<ProjectModal3 setShowModal={setShowModal}/>): null}</div>
            <div>{showModal && obj.num === 2 ? (<ProjectModal2 setShowModal={setShowModal}/>): null}</div>
        </>
    )
}