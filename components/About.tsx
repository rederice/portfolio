import React from 'react'
import {motion} from 'framer-motion'

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div 
    initial={{ opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}
    className='relative flex flex-col justify-evenly items-center mx-auto px-10 
    md:flex-row max-w-full overflow-hidden h-screen'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-[#71d7ff] font-[1100] text-2xl'>
            About
        </h3>

        <div className='flex pt-24 space-x-5 w-[350px] md:w-[700px] xl:w-[800px] items-center
        h-[60%] mx-auto'>
          <motion.img
            initial={{opacity: 0,}}
            transition={{duration: 1.2}}
            whileInView={{opacity: 1}}
            viewport={{once: true}}
            className="absolute w-[350px] md:w-[700px] xl:w-[800px] justify-center mx-auto"
            src="/portfolio/coord.png"
            ></motion.img>
        </div>
    </motion.div>
  )
}