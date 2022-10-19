import type { NextPage } from 'next'
import Head from 'next/head'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/ProjectsList'
import Skills from './components/Skills'

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title> My Portfolio </title>
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
      <section id='projects' className='snap-center'>
        <Projects />
      </section>
      <section id='skills' className='snap-center'>
        <Skills  />
      </section>
 

      {/* Skills  */}

      {/* Projects  */}

      {/* Contact me  */}


    </div>

  )
}

export default Home
