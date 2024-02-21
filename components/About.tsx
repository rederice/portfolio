import React from 'react'
import {motion} from 'framer-motion'

type Props = {}

export default function About({}: Props) {
  const skillsets = [{
        num: 1,
        categoryName: "User Experience Research",
        skills: ["Heuristic Evaluation", "User Research","Persona","User Story","Usability Study", "Prototyping"]
    },{
        num: 2,
        categoryName: "User Experience Design",
        skills: ["Wireframe", "Prototype"]
    },{
        num: 3,
        categoryName: "Product Management",
        skills: ["Competitive Analysis","Feasibility Study","Project Management","Customer Feedback","Communication","Coordination","Presentation"]
    },{
        num: 4,
        categoryName: "Visual Design",
        skills: ["Logo/Brand Design","Poster Design","Social Media Post","Youtube Video"]
    },{
        num: 5,
        categoryName: "Design Tools",
        skills: ["Figma","Adobe XD","Adobe Illustrator","Adobe Photoshop","Adobe Indesign","Adobe Premiere",]
    },{
        num: 6,
        categoryName: "Web Development",
        skills: ["Vue.js","React.js","Typescript","SASS","ASP.NET","Node.js","SQL","ArcGIS"]
    },{
        num: 7,
        categoryName: "Computer Science",
        skills: ["Cyber Security","Blockchain","Data Mining","Network Attached Storage","Load-Balancing","Virtual Reality","Machine Learning"]
    }];
  return (
    <motion.div 
    initial={{ opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}
    className='relative flex flex-col px-[8vw] pt-[10vh] space-y-10 max-w-full'>
        <div className="flex flex-row self-start font-bold text-4xl text-black tracking-wider">
            About Me<span className="text-lavendar">.</span>
        </div>

        <div className="text-black text-xl leading-10">Hey! I’m Hung-Fang. I am currently a UX researcher studying Master of User Experience at Arizona State University. I have product management, full-stack development, and computer science research experience.</div>

        <div className="flex flex-col space-y-8">
          <div className="flex flex-row align-start text-4xl text-black tracking-wider">
              Skills<span className="text-lavendar font-bold">.</span>
          </div>
          <div className="flex flex-row flex-wrap justify-center tracking-wider">
            {skillsets.map((skillset, skillset_i) => 
                <div className="flex flex-col w-1/3 text-black p-4" key={skillset_i}>
                  <div className="p-2 text-lavendar-semilight min-h-[6.5rem] font-semibold
                  xl:text-4xl md:text-2xl">{skillset.categoryName}</div>
                  <ul className="list-inside list-disc marker:text-lavendar-semilight">
                      {skillset.skills.map((skill, skill_i) => 
                        <li className="p-2 
                        xl:text-2xl md:text-xl" key={skill_i}>{skill}</li>)}
                  </ul>
                </div>
              )}
          </div>
        </div>
        <figure className='flex flex-col space-x-5 w-[350px] md:w-[700px] xl:w-[800px] items-center
        h-[60%] mx-auto'>
          <motion.img
            initial={{opacity: 0,}}
            transition={{duration: 1.2}}
            whileInView={{opacity: 1}}
            viewport={{once: true}}
            className="w-[350px] md:w-[700px] xl:w-[800px] justify-center bg-lavendar-light"
            src="/portfolio/coord.png"
            ></motion.img>
        </figure>
    </motion.div>
  )
}