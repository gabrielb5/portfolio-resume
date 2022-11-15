import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from "framer-motion"
import Link from 'next/link'



function Header() {
  return (

        <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
            <motion.div 
            className='flex flex-row items-center'
            initial={{
                x: -500,
                opacity: 1,
                scale: 1
            }}
            transition={{
                duration: 1.5
            }}
            animate={{
                x:0,
                opacity: 1,
                scale: 1
            }}>
                <SocialIcon 
                url="https://www.linkedin.com/in/gabriel-burgos-berardini/"
                fgColor='gray'
                bgColor='transparent' />
                <SocialIcon 
                url="https://medium.com/@gabrielburgosmm"
                fgColor='gray'
                bgColor='transparent' />
                <SocialIcon 
                url="https://github.com/gabrielb5"
                fgColor='gray'
                bgColor='transparent' />
            </motion.div>
            <motion.div 
            className='flex flex-row items-center text-gray-300'
            initial={{
                x: 500,
                opacity: 1,
                scale: 1
            }}
            transition={{
                duration: 1.5
            }}
            animate={{
                x:0,
                opacity: 1,
                scale: 1
            }}>
                <Link href="https://pdfhost.io/v/7NjhvcGpw_Gabriel_Burgos_Resume">
                <a href="https://pdfhost.io/v/7NjhvcGpw_Gabriel_Burgos_Resume" className='uppercase hidden md:inline-flex text-sm text-gray-400' >
                    Resume
                </a>
                <SocialIcon  
                    network='email'
                    fgColor='gray'
                    bgColor='transparent' />
             
                </Link>
   
             
            </motion.div>
        </header>

  )
}

export default Header