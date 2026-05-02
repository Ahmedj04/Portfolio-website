'use client'
import { useEffect, useState } from 'react'
import Cursor from '../components/Cursor'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  const [entered, setEntered] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('landing-locked', !entered)

    return () => {
      document.body.classList.remove('landing-locked')
    }
  }, [entered])

  return (
    <>
      <Cursor />
      {!entered && (
        <button
          type="button"
          className="enter-screen"
          onClick={() => setEntered(true)}
          aria-label="Enter portfolio"
        >
          <div className="enter-screen__ambient" aria-hidden="true" />
          <div className="enter-screen__ring" aria-hidden="true" />
          <div className="enter-screen__content">
            <span className="enter-screen__eyebrow">Ahmed Jan Portfolio</span>
            <h1 className="enter-screen__title">
              Click to enter
            </h1>
            <p className="enter-screen__copy">
              Sound on. Step into the work.
            </p>
          </div>
        </button>
      )}
      <Nav armed={entered} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
