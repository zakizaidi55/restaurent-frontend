import React from 'react'
import about from "../assets/about.jpeg"
import {ABOUT} from "../constants"
import {motion} from "framer-motion"
function About() {
  return (
    <section className='container mx-auto mb-8' id='about'>
        <motion.h2 
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true}}
        transition={{duration:0.6, delay:0.2}}
        className='mb-8 text-center text-3xl tracking-tighter lg:text-4xl'>About Us</motion.h2>
        <motion.div 
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true}}
        transition={{duration:0.6, delay:0.4}}
        className='flex flex-wrap'>
            <div className='w-full lg:w-1/2'>
                <img src={about} className='rounded-3xl lg:rotate-3'/>
            </div>
            <div className='w-full px-2 lg:w-1/2'>
                <h2 className='text-4xl tracking-tighter lg:text-6xl'>
                    {ABOUT.header}
                </h2>
                <div className='mb-8 mt-1 h-2 w-36 bg-rose-300 lg:rotate-3'></div>
                <motion.p
                initial={{opacity:0, y:50}}
                whileInView={{opacity:1, y:0}}
                viewport={{once:true}}
                transition={{duration:0.6, delay:0.4}}
                 className='m-8 text-2xl leading-relaxed tracking-tight lg:max-w-xl'>
                        {ABOUT.content}
                </motion.p>
            </div>
        </motion.div>
    </section>
  )
}

export default About
