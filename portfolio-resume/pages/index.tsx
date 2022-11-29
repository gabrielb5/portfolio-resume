import type { NextPage } from 'next'
import Head from 'next/head'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/ProjectsList'
import Skills from './components/Skills'
import Capstone from './components/Capstone'
import Contact from './components/Contact'

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(145,178,199)] text-black h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title> Gabriel&#39;s Portfolio </title>
      </Head>

      <Header />

      <section id='hero' className='snap-start'>
        <Hero />

      </section>

      {/* Hero */}

      {/* About */}

      <section id='about' className='snap-center'>
        <About />
      </section>

      {/* Expirience  */}
      <section id='skills' className='snap-center'>
        <Skills  />
      </section>

      <section id='projects' className='snap-center'>
        <Projects />

      </section>
      <section id='capstone' className='snap-center'>
        <Capstone />
      </section>
      <section id='contact' className='snap-center'>
        <Contact />
      </section>
 

      {/* Skills  */}

      {/* Projects  */}

      {/* Contact me  */}


    </div>

  )
}

export default Home
