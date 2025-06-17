import React from 'react'
import {motion} from "framer-motion"
import ProjectSlides from './ProjectSlides'

type Props = {}

export default function Projects({}: Props) {
    const projects = [{
        num: 7,
        projectAvatar: "/portfolio/closed-loop-banner.jpg",
        projectName: "Business Ticket Dashboard Portal",
        projectTitle: "Sanhau Automotive Inc.",
        projectTags: ["User Research", "Prototyping", "Product Management", "Front-end Design", "System Architecture"],
        projectRoles: ["UX design", "Product Management", "Full-stack Engineer"],
        projectAttrs: ["2024"],
        projectIntro: "Designed an integrated ticket dashboard portal that connects Sales' vendor-side orders with internal tracking systems, streamlining management workflows and enhancing operational visibility."
    },{
        num: 6,
        projectAvatar: "/portfolio/redesign-banner.jpg",
        projectName: "Website design for City Government",
        projectTitle: "MSUX @ASU",
        projectTags: ["Usability Study", "User Research", "Prototyping"],
        projectRoles: ["UX design", "GUI", "UX Researcher"],
        projectAttrs: ["2023"],
        projectIntro: "Conducted usability study on redesigning a legacy government website to create better user experiences."
    },{
        num: 5,
        projectAvatar: "/portfolio/panel-design-banner.jpg",
        projectName: "Web Panel Interface Design",
        projectTitle: "Infortrend Technology Inc.",
        projectTags: ["Competitive Research", "Feasibility Study", "Prototyping"],
        projectRoles: ["Product Design", "GUI", "Product Manager"],
        projectAttrs: ["2022", "2021"],
        projectIntro: "Introduced a panacea backstage management UI for Storage Systems across different devices."
    },{
        num: 4,
        projectAvatar: "/portfolio/map-design-banner.jpg",
        projectName: "Typhoon Map Dashboard",
        projectTitle: "RiChi Technology Inc.",
        projectTags: ["UX design", "Front-end Design"],
        projectRoles: ["Frontend Develop", "GUI", "Full-stack Engineer"],
        projectAttrs: ["2021", "2020"],
        projectIntro: "Developed a fancy digital map operation and dashboard GUI for government users."
    },{
        num: 3,
        projectAvatar: "/portfolio/visual-design-banner.jpg",
        projectName: "Data Visualization for Cyber Autonomy",
        projectTitle: "NSlab @NTU",
        projectTags: ["Data Visualization", "Front-end Design"],
        projectRoles: ["Frontend Develop", "GUI", "Frontend/Tech Researcher"],
        projectAttrs: ["2019", "2018"],
        projectIntro: "Developed a website to present quantitative analysis through data mining on cyber autonomy issues from G7 websites."
    },{
        num: 2,
        projectAvatar: "/portfolio/oop.jpg",
        projectName: "High Speed Rail Booking System",
        projectTitle: "OOP Course @NTU",
        projectTags: ["Front-end Design", "System Architecture"],
        projectRoles: ["Full-stack Develop", "Infrastructure", "Architecture designer"],
        projectAttrs: ["2019"],
        projectIntro: "Developed THSR booking system architecture using object-oriented programming."
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