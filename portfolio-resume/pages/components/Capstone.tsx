import React from 'react'

type Props = {}

export default function Capstone({}: Props) {
  return (
    <div className='h-screen mx-auto justify-evenly flex flex-col p-8 '>
        <h3  className='text-center top-24 uppercase tracking-[20px] text-gray-500 text-xl mt-[75px]'> Capstone Project </h3>
        <iframe  className='w-[400px] h-[300px] mb-[50px] xl:w-[900px] xl:h-[700px] xl:p-[50px]' src="https://www.youtube.com/embed/27V6J8Q41a8?start=4571&amp;end=5252" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe>

    </div>
  )
}