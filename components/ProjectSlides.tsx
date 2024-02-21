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
            className='flex flex-col m-2 items-start rounded-lg space-y-7 bg-[#FFF]/40 p-5
            w-[84vw] h-[70vh] md:w-[38vw] md:h-[70vh] xl:w-[40vw] xl:h-[70vh] cursor-pointer transition-opacity duration-200'>
                <div className='flex flex-row px-0 space-x-2'>
                    <div className="flex flex-row text-lavendar">{obj.num}</div>
                    <div className="flex flex-row text-black">|</div>
                    <div className='flex flex-row text-black flex-wrap'>
                        {/* iterate through roles */}
                        {obj.projectRoles.map(
                            (tag: string, i: number) => <p key={i}>{tag}・</p>
                        )}
                        {obj.projectTitle}
                    </div>
                </div>
                <motion.img
                initial={{y: -100, opacity: 0,}}
                transition={{duration: 1.2}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                className="w-32 h-32 w-[84vw] md:w-[38vw] xl:w-[40vw] h-[30vh] md:h-[25vh] xl:h-[40vh] object-contain object-center border-lavender-400 border-1"
                src={obj.projectAvatar}
                ></motion.img>

                <div className='px-0'>
                    <h4 className='font-bold text-2xl text-lavendar'>{obj.projectName}</h4>
                    <div className='flex flex-row m-2 flex-wrap'>
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
                    <p className='list-disc space-y-4 pt-2 tracking-wider text-black'>
                        {obj.projectIntro}
                    </p>
                </div>
            </motion.article>
            <div>{showModal && obj.num === 6 ? (<ProjectModal6 setShowModal={setShowModal}/>): null}</div>
            <div>{showModal && obj.num === 5 ? (<ProjectModal5 setShowModal={setShowModal}/>): null}</div>
            <div>{showModal && obj.num === 4 ? (<ProjectModal4 setShowModal={setShowModal}/>): null}</div>
            <div>{showModal && obj.num === 3 ? (<ProjectModal3 setShowModal={setShowModal}/>): null}</div>
            <div>{showModal && obj.num === 2 ? (<ProjectModal2 setShowModal={setShowModal}/>): null}</div>
        </>
    )
}