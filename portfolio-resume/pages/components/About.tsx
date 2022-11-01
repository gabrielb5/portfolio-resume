import React from 'react'
import { motion } from "framer-motion"

type Props = {}

export default function About({}: Props) {
  return (
    <div className='flex flex-col relative h-screen md:text-left md-flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-xl pb-5'> About </h3>

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


        <div className='space-y-10 px-0 md:px-10'>
            {/* <h4 className='top-24 uppercase tracking-[20px] text-gray-500 text-xl pb-5'> 
                Here's <span className='underline decoration-slate-50'> my </span>background
            </h4> */}
            <div className=' mt-10 xl:mt-1'>
                <p className='text-sm' >
                Hi, I&#39;m Gabriel! <br></br>Expirienced software developer born in Puerto Rico with knowledge in techonologies such as React, Javascript, Ruby on Rails, Firebase, SQL and others with a bachelor&#39;s degree in Accounting with Business Administration. Fully billingual in Spanish and English. I take pride in being a good team player and I&#39;ve been an athlete all my life. Playing sports has helped me to understand how to collaborate and work together towards a common goal, which is something I&#39;ve already utilized in my starting coding carreer.  I look forward to keep creating projects and learing all that I can!
                </p>
            </div>
        </div>

    </div>
  )
}