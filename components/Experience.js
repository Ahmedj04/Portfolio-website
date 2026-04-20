'use client'
import { useEffect, useRef, useState } from 'react'

const experiences = [
  {
    role: 'Software Engineer',
    company: 'DocAcquire',
    location: 'London, UK · Remote',
    period: 'Mar 2024 – Jan 2026',
    logo: 'DA',
    color: '#FF4D1C',
    highlights: [
      'Led Angular frontend development, delivering dynamic navigation components and grid-based document pipelines to improve workflow efficiency.',
      'Built configurable field and table extraction features including Zero-Shot Extraction for data capture without model training.',
      'Fine-tuned AI models for document classification and splitting, improving automated processing accuracy by 90%.',
      'Deployed new releases across multiple regions using Azure DevOps, ensuring smooth rollout and minimal downtime.',
      'Collaborated with product and QA teams to refine features based on client feedback and usability testing.',
    ],
    tags: ['Angular', 'Azure DevOps', 'AI/ML', 'CI/CD', 'TypeScript'],
  },
  {
    role: 'Junior Developer',
    company: 'VIT Camp',
    location: 'Srinagar, India',
    period: 'Jan 2023 – Feb 2024',
    logo: 'VC',
    color: '#6366F1',
    highlights: [
      'Implemented Next.js and Tailwind CSS to create a visually appealing website, integrating APIs to dynamically fetch and display real-time data.',
      'Implemented Redux for state management ensuring a centralized and efficient way to handle the application\'s data flow.',
      'Contributed to the development of a booking engine for seamless user reservations.',
    ],
    tags: ['Next.js', 'Tailwind CSS', 'Redux', 'React', 'API Integration'],
  },
]

export default function Experience() {
  const sectionRef = useRef(null)
  const [active, setActive] = useState(0)

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
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" ref={sectionRef} className="py-28 px-6 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <div className="reveal flex items-center gap-4 mb-16">
          <span className="font-mono text-accent text-sm">02.</span>
          <h2 className="font-display font-bold text-2xl text-paper">Experience</h2>
          <div className="section-line flex-1 ml-4" />
        </div>

        <div className="grid md:grid-cols-[220px,1fr] gap-8">
          {/* Company tabs */}
          <div className="reveal flex md:flex-col gap-2">
            {experiences.map((exp, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`text-left px-4 py-3 rounded-lg border transition-all duration-300 font-body text-sm ${
                  active === i
                    ? 'border-accent bg-accent/10 text-accent'
                    : 'border-border text-muted hover:border-accent/40 hover:text-paper'
                }`}
              >
                <div className="font-medium">{exp.company}</div>
                <div className="text-xs opacity-60 mt-0.5 font-mono hidden md:block">{exp.period}</div>
              </button>
            ))}
          </div>

          {/* Active experience detail */}
          <div className="reveal reveal-delay-2 exp-card rounded-lg p-6 md:p-8 bg-surface">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className={`transition-all duration-500 ${active === i ? 'block' : 'hidden'}`}
              >
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="font-display font-bold text-xl text-paper">
                      {exp.role}
                      <span className="text-accent"> @ {exp.company}</span>
                    </h3>
                    <p className="text-muted text-sm font-body mt-1">{exp.location}</p>
                  </div>
                  <div className="flex-shrink-0 px-3 py-1 border border-border rounded-full">
                    <span className="font-mono text-xs text-muted">{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {exp.highlights.map((h, j) => (
                    <li key={j} className="flex gap-3 text-sm font-body text-muted/90 leading-relaxed">
                      <span className="text-accent mt-1 flex-shrink-0">▸</span>
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-ink border border-border text-xs font-mono text-muted hover:text-accent hover:border-accent/50 transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
