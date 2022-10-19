import React from 'react'
import Frisbee from "./Frisbee.png"
import Blackjack from "./Blackjack.png"
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

export default function ProjectsList({}: Props) {
    const projects = [{
        title: "The Frisbee App: Intagram Clone",
        description: "Engineered a full stack web app similar to Instagram that allows users to post and comment on the pictures. Technologies used: React, Firebase ( Firestore, Authentication, Storage) and Material UI",
        photo: Frisbee,
        link: "https://www.thefrisbeeapp.com/"
    },
    {
        title: "Blackjack App",
        description: "Built a prototype blackjack game app that allows users to authenticate and compete in a leaderboard with other players.. Technologies used: React, Firebase ( Authentication), Sinatra (Ruby) and Bootstrap",
        photo: Blackjack,
        link: "https://phase-3-project-blackjack.netlify.app/"
    }
]

    console.log(projects)
  return (
    <div className='h-screen  relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl mb-[100px]'>
            Projects
        </h3>
        <div className='w-full relative w-1200-max flex overflow-x-scroll overflow-y-hidden items-center snap-center snap-mandatory z-200 mt-10'>
            {projects.map((project, i) => (
                <div key={project.title} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                    {/* </div> */}
                    <Image src={project.photo} width="345" height="180" />
                    <div>
                        <h4> <span className='underline font-semibold skew-y-6s'> Case Study {i + 1} of {projects.length}:</span> {project.title} </h4>
                    </div>
                    <Link href={project.link}><a className='text-blue-500 underline'>{project.link}</a></Link>
                    <p>
                        {project.description}
                    </p>

                </div>
            ))}
        </div>
       
    </div>
  )
}