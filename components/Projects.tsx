import React from 'react'
import {motion} from "framer-motion"
import ProjectSlides from './ProjectSlides'

type Props = {}

export default function Projects({}: Props) {
    const projects = [{
        num: 6,
        projectAvatar: "/portfolio/redesign-banner.jpg",
        projectName: "Website Redesign: Taipei City Office of Commerce",
        projectTitle: "MSUX @ASU",
        projectTags: ["Usability Study", "User Research", "Prototyping"],
        projectRoles: ["UX design", "GUI", "UX Researcher"],
        projectAttrs: ["2023"],
        projectIntro: "Conducted usability study on redesigning a legacy government website to create better user experiences."
    },{
        num: 5,
        projectAvatar: "/portfolio/panel-design-banner.jpg",
        projectName: "Web Panel Design: NAS Management Interface",
        projectTitle: "Infortrend Technology Inc.",
        projectTags: ["Competitive Research", "Feasibility Study", "Prototyping"],
        projectRoles: ["Product Design", "GUI", "Product Manager"],
        projectAttrs: ["2022", "2021"],
        projectIntro: "Introduced a panacea backstage management UI for Storage Systems across different devices."
    },{
        num: 4,
        projectAvatar: "/portfolio/map-design-banner.jpg",
        projectName: "Web Develop: Typhoon Map Dashboard",
        projectTitle: "RiChi Technology Inc.",
        projectTags: ["UX design", "Front-end Design"],
        projectRoles: ["Frontend Develop", "GUI", "Full-stack Engineer"],
        projectAttrs: ["2021", "2020"],
        projectIntro: "Developed a fancy digital map operation and dashboard GUI for government users."
    },{
        num: 3,
        projectAvatar: "/portfolio/visual-design-banner.jpg",
        projectName: "Web Develop: Data Visualization of Cyber Autonomy",
        projectTitle: "NSlab @NTU",
        projectTags: ["Data Visualization", "Front-end Design"],
        projectRoles: ["Frontend Develop", "GUI", "Frontend/Tech Researcher"],
        projectAttrs: ["2019", "2018"],
        projectIntro: "Developed a demonstration website to present quantitative analysis through data mining on cyber autonomy issues from G7 websites ."
    },{
        num: 2,
        projectAvatar: "/portfolio/oop.jpg",
        projectName: "Taiwan High Speed Rail Booking System",
        projectTitle: "Final Project, Object-oriented Analysis and Design Course",
        projectTags: ["Front-end Design", "Presentation"],
        projectRoles: ["Full-stack Develop", "Infrastructure", "Architecture designer"],
        projectAttrs: ["2019"],
        projectIntro: "Simulated booking system of THSR to demonstrate object-oriented programming using software engineering techniques."
    },{
        num: 1,
        projectAvatar: "/portfolio/nchc.jpg",
        projectName: "Certificate Verification System on Blockchain",
        projectTitle: "Internship, National Center for High-performance Computing",
        projectTags: ["Tech research", "Presentation"],
        projectRoles: ["Full-stack Develop", "Infrastructure", "Architecture designer"],
        projectAttrs: ["2017"],
        projectIntro: "Introduced a verifiable system for schools to upload certificates onto Ethereum smart contracts."
    }]

    return (
        <motion.div 
        initial={{ opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1.5}}
        className='relative flex flex-col justify-center items-center px-[8vw] space-y-5
        max-w-full'>
            <div className="flex flex-row self-start pt-[10vh] font-bold text-4xl text-black tracking-wider">
                Featured Work<span className="text-lavendar">.</span>
            </div>
            <div className='flex flex-wrap items-center justify-center'>
                {/* iterate through projects */}
                {projects.map((project, i) => <ProjectSlides obj={project} key={i}/>)}
            </div>
        </motion.div>
    )
}