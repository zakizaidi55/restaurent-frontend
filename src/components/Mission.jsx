import React from 'react'
import missionImg from "../assets/mission.jpeg"
import mission from "../assets/mission.mp4"
import {MISSION} from "../constants"
import {motion} from "framer-motion"

function Mission() {
  return (
    <section id='mission' className='lg:mt-[200px]'>
        <div className='container mx-auto text-center'>
            <h2 className='mb-8 text-3xl lg:text-4xl'>Our Mission</h2>
            <div className='relative flex items-center justify-center'>
                <motion.video 
                initial={{opacity:0, y:50}}
                whileInView={{opacity:1, y:0}}
                viewport={{once:true}}
                transition={{duration:1}}
                className='w-full rounded-3xl' autoPlay muted loop playsInline poster={missionImg}>
                    <source src={mission} type='video/mp4'/>
                </motion.video>
                <motion.div 
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                viewport={{once:true}}
                transition={{duration:0.6, delay:0.4}}
                className='absolute h-full w-full rounded-3xl bg-black/40'></motion.div>
                <motion.p 
                initial={{opacity:0, y:20}}
                whileInView={{opacity:1, y:0}}
                viewport={{once:true}}
                transition={{duration:0.6, delay:0.4}}
                className='absolute max-w-lg tracking-tighter lg:text-3xl'>
                    {MISSION}
                </motion.p>
            </div>
        </div>
    </section>
  )
}

export default Mission
