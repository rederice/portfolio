import type { NextPage } from 'next'
import Head from 'next/head'
import Header from "../components/Header"
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import About from '../components/About'

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen 
    snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <meta property="og:image" content={`${process.env.NEXT_PUBLIC_BASE_PATH}/favicon.ico`}></meta>
        <link rel="icon" href={`${process.env.NEXT_PUBLIC_BASE_PATH}/favicon.ico`}></link>
        <title>Hung-Fang&apos;s Portfolio</title>
      </Head>

      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="hero" className='snap-start'>
        <Hero />
      </section>

      {/* Projects */}
      <section id="projects" className='snap-center'>
        <Projects />
      </section>
      
      {/* Resume */}
      <section id="resume" className='snap-center'>
        <About />
      </section>
    </div>
  )
}
