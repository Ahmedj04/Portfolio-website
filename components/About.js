'use client'
import { useEffect, useRef } from 'react'

export default function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'))
            entry.target.querySelectorAll('.section-line').forEach((el) => el.classList.add('visible'))
          }
        })
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-28 px-6 max-w-6xl mx-auto">
      {/* Section label */}
      <div className="reveal flex items-center gap-4 mb-16">
        <span className="font-mono text-accent text-sm">01.</span>
        <h2 className="font-display font-bold text-2xl text-paper">About Me</h2>
        <div className="section-line flex-1 ml-4" />
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Text */}
        <div className="space-y-5">
          <p className="reveal text-paper/90 font-body text-base leading-relaxed">
            Hey — I'm Ahmed, a Software Engineer based in <span className="text-accent font-medium">Srinagar, India</span>, building modern web applications that sit at the intersection of great UX and intelligent automation.
          </p>
          <p className="reveal reveal-delay-1 text-muted font-body text-base leading-relaxed">
            Over the past 2.5+ years, I've worked remotely with a London-based SaaS company, leading frontend development for document intelligence products. I've shipped features used by real clients, fine-tuned AI models, and managed cloud deployments on Azure DevOps.
          </p>
          <p className="reveal reveal-delay-2 text-muted font-body text-base leading-relaxed">
            I'm passionate about <span className="text-paper">Generative AI</span>, building tools that automate complex workflows, and crafting performant interfaces that feel fast and intuitive. Outside of work, I'm exploring AI-powered SaaS products.
          </p>

          {/* Links */}
          <div className="reveal reveal-delay-3 flex flex-wrap gap-4 pt-4">
            <a
              href="https://www.linkedin.com/in/ahmed-jan004/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-body text-muted hover:text-accent transition-colors duration-200 group"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
              <svg className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            {/* <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-body text-muted hover:text-accent transition-colors duration-200 group"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
              <svg className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a> */}
          </div>
        </div>

        {/* Card/visual side */}
        <div className="reveal reveal-delay-2 space-y-4">
          {/* Education card */}
          <div className="bg-surface border border-border rounded-lg p-5 hover:border-accent/40 transition-colors duration-300">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <div>
                <p className="font-display font-semibold text-paper text-sm">University of Kashmir</p>
                <p className="text-muted text-xs mt-0.5 font-body">B.E. Computer Science — CGPA 7.15</p>
                <p className="text-muted/60 text-xs mt-1 font-mono">2018 – 2022</p>
              </div>
            </div>
          </div>

          {/* AWS Cert */}
          <div className="bg-surface border border-border rounded-lg p-5 hover:border-accent/40 transition-colors duration-300">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div>
                <p className="font-display font-semibold text-paper text-sm">AWS Cloud Practitioner</p>
                <p className="text-muted text-xs mt-0.5 font-body">Cloud Practitioner Essentials</p>
                <p className="text-muted/60 text-xs mt-1 font-mono">Mar 2024</p>
              </div>
            </div>
          </div>

          {/* Quick facts */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: '📍', label: 'Srinagar, India' },
              { icon: '🌐', label: 'Remote-ready' },
              { icon: '🤖', label: 'AI Enthusiast' },
              { icon: '☁️', label: 'Azure DevOps' },
            ].map(({ icon, label }) => (
              <div key={label} className="bg-surface border border-border rounded-lg p-3 flex items-center gap-2">
                <span className="text-base">{icon}</span>
                <span className="text-xs font-body text-muted">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
