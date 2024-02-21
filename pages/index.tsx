import type { NextPage } from 'next'
import Head from 'next/head'
import Header from "../components/Header"
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import About from '../components/About'

export default function Home() {
  return (
    <div className="bg-[url('/portfolio/bg.png')] bg-cover text-white h-screen 
    overflow-scroll z-0">
      <Head>
        <meta property="og:image" content="/portfolio/favicon.ico"></meta>
        <link rel="icon" href="/portfolio/favicon.ico"></link>
        <title>Hung-Fang&apos;s Portfolio</title>
      </Head>

      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="hero">
        <Hero />
      </section>

      {/* Projects */}
      <section id="projects">
        <Projects />
      </section>
      
      {/* About */}
      <section id="about">
        <About />
      </section>
    </div>
  )
}
