import React from 'react'
import { AcademicCapIcon, BeakerIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

type Props = {}

export default function Contact({}: Props) {
  return (
    <div className='flex flex-col h-screen space-y-10'>
        <h3 className='top-24 uppercase tracking-[20px] text-gray-500 text-xl text-center mt-[100px]'> Contact </h3>
        <h4 className='decoration-[#F7AB0A]/50 underline text-center text-xl xl:text-4xl'> Let&#39;s talk ! </h4>
        <div className='space-y-10'>
            <div className='flex items-center space-x-5 justify-center'>
                <PhoneIcon className='h-7 w-7 animate-bounce' />
                <p className='text-xl xl:text-3xl'> +1787-422-7583</p>
            </div>
            <div className='flex items-center space-x-5 justify-center'>
                <EnvelopeIcon className='h-7 w-7 animate-pulse' />
                <p className='text-xl xl:text-3xl'> gabrielburgosmm@gmail.com </p>
            </div>
            <div className='flex items-center space-x-5 justify-center'>
                <Link href="https://pdfhost.io/v/YUD.ZdWIa_resume_10">
                 <AcademicCapIcon className='h-7 w-7 animate-pulse'/>
                </Link>
                <p className='text-xl xl:text-3xl'> Resume </p>
            
            </div>
        
        </div>

    </div>
  )
}