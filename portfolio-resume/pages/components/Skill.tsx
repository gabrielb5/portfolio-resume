import { MotionConfig } from 'framer-motion'
import React from 'react'
import { motion } from "framer-motion"

type Props = {
    directionLeft?:boolean;
    skillLevel:string;
    image:string;
}

export default function Skill({ directionLeft, image,  skillLevel}: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img 
        initial={{
            opacity: 0
        }}
        transition={{ duration: 1}}
        whileInView={{ opacity: 1, x: 0}}
        src={image} alt='Skill image' 
        className='rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out p-1'/>
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 rounded-full w-24 md:w-28 md:h-28 xl:w-32 xl:h-32'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-black opacity-100'>
                    {skillLevel}
                </p>
            </div>
        </div>
    </div>
  )
}