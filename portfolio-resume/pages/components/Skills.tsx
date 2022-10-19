import React from 'react'
import { motion } from "framer-motion"
import Skill from "./Skill"

type Props = {}

export default function Skills({}: Props) {
  return (
    <motion.div 
    initial={{
        opacity:0
    }}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}

    className='h-screen flex relative flex-col text-center md:text-left xl:flex-row- max-w-[2000px] xl:px-10 nub-h-screen justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Skills
        </h3>

        <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'> 
        Hover over a skills for current proficiency
        </h3>

        <div className='grid grid-cols-4 gap-5 pt-[75px]'>
            <Skill image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" skillLevel="80%" />
            <Skill image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png" skillLevel="80%" />
            <Skill image="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190902124355/ruby-programming-language.png" skillLevel="70%" />
            <Skill image="https://avatars.githubusercontent.com/u/4223" skillLevel="70%" />
            <Skill image="https://www.gstatic.com/devrel-devsite/prod/v3d59008e544647a0ef15b3aa6144afaaec4bb33821f37d7fece1fe7311821ed6/firebase/images/touchicon-180.png" skillLevel="70%" />
            <Skill image="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png" skillLevel="60%" />
            <Skill image="https://news.thewindowsclub.com/wp-content/uploads/2021/11/Visual-Studio-logo-1200x900.jpg" skillLevel="75%" />
            <Skill image="https://pajaaleksic.com/wp-content/uploads/2019/07/react-native-workshop.jpg" skillLevel="35%" />
            <Skill image="https://yt3.ggpht.com/ikv41jMTr1uHGdILrJhvbfVJcDt4oqhwApKX37TjAleF_cRPbF2W-waj7uMnS5JySvnlvAlTCg=s900-c-k-c0x00ffffff-no-rj" skillLevel="30%" />
            <Skill image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/640px-Postgresql_elephant.svg.png" skillLevel="40%" />
            <Skill image="https://seeklogo.com/images/M/microsoft-sql-server-logo-96AF49E2B3-seeklogo.com.png" skillLevel="30%" />
            <Skill image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT21xoTaWVV0KhPJ68qFK-phOLgBPJs1UelSndLZyq3NETbeUYU4woP77kXsr6dd8VC3cQ&usqp=CAU" skillLevel="15%" />
            {/* <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill /> */}
        </div>

        
    </motion.div>
  )
}