'use client'
import { useEffect, useRef, useState } from 'react'

export default function Contact() {
  const sectionRef = useRef(null)
  const [copied, setCopied] = useState(false)

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

  const copyEmail = () => {
    navigator.clipboard.writeText('janahmed902@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" ref={sectionRef} className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="reveal flex items-center gap-4 mb-16">
          <span className="font-mono text-accent text-sm">05.</span>
          <h2 className="font-display font-bold text-2xl text-paper">Contact</h2>
          <div className="section-line flex-1 ml-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div>
            <h3 className="reveal font-display font-bold text-3xl md:text-4xl text-paper leading-tight mb-5">
              Let's build something
              <span className="block gradient-text">remarkable.</span>
            </h3>
            <p className="reveal reveal-delay-1 text-muted font-body text-base leading-relaxed mb-8">
              I'm currently open to new opportunities — whether that's a full-time role, freelance project, or just a chat about tech and AI. My inbox is always open.
            </p>

            {/* Contact details */}
            <div className="reveal reveal-delay-2 space-y-4">
              {/* Email */}
              <div className="flex items-center gap-4 p-4 bg-surface border border-border rounded-xl hover:border-accent/40 transition-colors duration-300 group">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-muted font-body mb-0.5">Email</p>
                  <p className="text-sm text-paper font-mono truncate">janahmed902@gmail.com</p>
                </div>
                <button
                  onClick={copyEmail}
                  className="flex-shrink-0 px-3 py-1.5 text-xs font-body border border-border rounded-lg text-muted hover:text-accent hover:border-accent transition-all duration-200"
                >
                  {copied ? '✓ Copied' : 'Copy'}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 p-4 bg-surface border border-border rounded-xl hover:border-accent/40 transition-colors duration-300">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-muted font-body mb-0.5">Phone</p>
                  <p className="text-sm text-paper font-mono">+91 600-535-3529</p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="reveal reveal-delay-3 flex gap-4 mt-6">
              <a
                href="https://www.linkedin.com/in/ahmed-jan004/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg border border-border bg-surface flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              {/* <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg border border-border bg-surface flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a> */}
            </div>
          </div>

          {/* Right - CTA card */}
          <div className="reveal reveal-delay-2">
            <div className="relative bg-surface border border-border rounded-2xl p-8 overflow-hidden">
              {/* Decorative glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

              <div className="relative">
                <p className="font-mono text-accent text-xs mb-4">// open to work</p>
                <h4 className="font-display font-bold text-xl text-paper mb-4 leading-tight">
                  Ready to build scalable,<br />AI-powered products?
                </h4>
                <p className="text-muted font-body text-sm leading-relaxed mb-8">
                  With expertise in React, Angular, Next.js and AI integrations, I bring both the frontend finesse and the engineering depth to ship products that matter.
                </p>

                <div className="space-y-3">
                  <a
                    href="mailto:janahmed902@gmail.com"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-accent text-white font-body font-medium text-sm rounded-lg hover:bg-orange-500 transition-colors duration-300"
                  >
                    Send me an email
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  <a
                    href="tel:+916005353529"
                    className="flex items-center justify-center gap-2 w-full py-3 border border-border text-paper font-body font-medium text-sm rounded-lg hover:border-accent hover:text-accent transition-all duration-300"
                  >
                    +91 600-535-3529
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
