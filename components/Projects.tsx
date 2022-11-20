import React from 'react'
import {motion} from "framer-motion"
import ProjectSlides from './ProjectSlides'

type Props = {}

export default function Projects({}: Props) {
    const projects = [{
        num: 1,
        projectAvatar: "/portfolio/infortrend.jpg",
        projectName: "NAS Scale-Out Function Design",
        projectTitle: "Product Manager, Infortrend Technology Inc.",
        projectTags: ["UX design", "Tech research"],
        projectAttrs: ["Company", "2022", "2021"],
        projectIntro: "Introducing a panacea backstage management UI for Storage Systems across different devices"
    },{
        num: 2,
        projectAvatar: "/portfolio/richi.jpg",
        projectName: "Public Decision Making Map System",
        projectTitle: "Full Stack Engineer, RiChi Technology Inc.",
        projectTags: ["Front-end Design"],
        projectAttrs: ["Company", "2021", "2020"],
        projectIntro: "Developed a fancy digital map operation and dashboard GUI for government users"
    },{
        num: 3,
        projectAvatar: "/portfolio/nslab.jpg",
        projectName: "An Investigation of Cyber Autonomy on Government Websites",
        projectTitle: "Special Research, Network Security Lab, National Taiwan University",
        projectTags: ["Tech research", "Presentation"],
        projectAttrs: ["Laboratory", "2018", "2019"],
        projectIntro: "Two-year scale analysis with data mining on G7 government websites cyber autonomy issues"
    },{
        num: 4,
        projectAvatar: "/portfolio/nchc.jpg",
        projectName: "Certificate Verification System on Blockchain",
        projectTitle: "Internship, National Center for High-performance Computing",
        projectTags: ["Tech research", "Presentation"],
        projectAttrs: ["Company", "2017"],
        projectIntro: "Introduced a verifiable system for schools to upload certificates onto Ethereum smart contracts"
    }]

    return (
        <motion.div 
        initial={{ opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1.5}}
        className='relative flex flex-col justify-evenly items-center mx-auto px-10 
        md:flex-row max-w-full overflow-hidden h-screen'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-[#71d7ff] font-[1100] text-2xl'>
                Projects
            </h3>

            <div className='flex space-x-5 w-[500px] md:w-[600px] xl:w-[900px] overflow-x-scroll p-5 items-center
            snap-x snap-mandatory h-[95vh]'>
                {/* iterate through projects */}
                {projects.map((project, i) => <ProjectSlides obj={project} key={i}/>)}
            </div>
        </motion.div>
    )
}