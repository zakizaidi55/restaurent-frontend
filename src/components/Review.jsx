import React from 'react'
import { REVIEW } from '../constants'
import xaviour from "../assets/xaviour.jpeg"
import customer1 from "../assets/customer1.jpeg"
import customer2 from "../assets/customer2.jpeg"
import customer3 from "../assets/customer3.jpeg"
import customer4 from "../assets/customer4.jpeg"
import {motion} from "framer-motion"


const containerVariant = {
    hidden:{opacity:0},
    show:{
        opacity:1,
        transition:{
            staggerChildren:1,
        }
    }
}

const ItemVariants = {
    hidden:{opacity:0, y:20},
    show:{opacity:1, y:0, 
        transition:{
            duration:0.8
        }
    }
}
function Review() {
  return (
    <section id='review' className='container mx-auto mb-8 mt-12'>
        <motion.div
        initial="hidden"
        whileInView="show"
        variants={containerVariant}
        viewport={{once:true}}
         className='flex flex-col'>
            <motion.p
                variants={ItemVariants}
             className='mb-10 text-3xl font-loght leading-normal tracking-tighter lg:mx-40 lg:mt-40 lg:text-[3.5rem]'>
                {REVIEW.content}
            </motion.p>

            <motion.div
            variants={ItemVariants}
             className='flex items-center justify-center gap-6'>
                <motion.img 
                variants={ItemVariants}
                src={xaviour} width={80} height={80} className='rounded-full border'/>
                <div className='tracking-tighter'>
                    <h6>{REVIEW.name}</h6>
                    <p className='text-m text-neutral-500'>{REVIEW.profession}</p>
                </div>
            </motion.div>
        </motion.div>

        <div className='mt-14 flex flex-col items-center justify-center gap-2 lg:flex-row'>
            {[customer1, customer2, customer3, customer4].map((customer, index) => (
                <img key={index} src={customer} alt="customer" className='h-[330px] w-[220px] rounded-br-3xl rounded-tl-3xl object-cover'></img>
            ))}
        </div>
    </section>
  )
}

export default Review
