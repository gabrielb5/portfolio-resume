import React from 'react'
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from "./BackgroundCircles"
import Image from 'next/image'
import Link from 'next/link'
import Golden from './golden.jpg'

import { motion } from "framer-motion"

type Props = {};


function Hero({} : Props) {
  const role = "Full Stack Developer"
  const [text, count] = useTypewriter({
    words: [
      "Hi, my name is Gabriel Burgos",
      "Hola, mi nombre es Gabriel Burgos",
      "Loves-Basketball-🏀.jsx",
      "<ILoveCodingToo/>"
    ],
    loop: true,
    delaySpeed: 1000
  })
  return (
   <div className='h-screen flex flex-col space-y-8 items-center justify-center overflow-hidden text-center'>
    <BackgroundCircles />
    <div className='z-20'>
    <motion.img src='https://media-exp1.licdn.com/dms/image/C4E03AQENmSp952_JEQ/profile-displayphoto-shrink_400_400/0/1661457257888?e=1671667200&v=beta&t=ekmY7V3IwOu_51Reu6f8NwnzmHoUtICYr6d28r8EZD8'

className='-mb-20 sm:mb-10 md:mb-0 mt-[100px] flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-full  md:w-95 md:h-95 xl:w-600 xl:h-600 xl:mt-[150px] '

initial={{
    x:-200,
    opacity: 0 
}}
transition={{
    duration: 1.2,

}}
whileInView={{
    x:0,
    opacity: 1
}}
viewport={{ once: true}}>

</motion.img>
    
        <h2 className='text-[10px] uppercase text-gray-500 pb-2 tracking-[15px]'> {role} </h2>
        <h1 className='text-3xl lg:text-5xl font-semibold scroll-px-10'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#F7AB0AS' />
        </h1>
        <div className='pt-5'>
          <Link href='#about'>
            <button className='heroButton'> About </button>
          </Link>
          {/* <Link href='#expirience'>
            <button className='heroButton'> Expirience</button>
          </Link> */}
          <Link href='#skills'>
            <button className='heroButton'> Skills </button>
          </Link>
          <Link href='#projects'>
           <button className='heroButton'> Projects </button>
          </Link>
          <Link href='#capstone'>
           <button className='heroButton'> Capstone </button>
          </Link>
        </div>
     </div>
   </div>
  )
}

export default Hero