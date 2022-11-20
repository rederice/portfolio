import type { NextPage } from 'next'
import Head from 'next/head'
import Header from "../components/Header"
import Hero from '../components/Hero'
import Projects from '../components/Projects'

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen 
    snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
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
    </div>
  )
}
