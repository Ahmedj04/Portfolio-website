'use client'
import { useEffect, useRef } from 'react'

const skillGroups = [
  {
    category: 'Languages',
    icon: '< />',
    skills: ['HTML/CSS', 'JavaScript', 'TypeScript', 'Python'],
  },
  {
    category: 'Frameworks',
    icon: '⚡',
    skills: ['React.js', 'Angular', 'Next.js', 'Tailwind CSS', 'FastAPI'],
  },
  {
    category: 'Cloud & DevOps',
    icon: '☁',
    skills: ['Azure DevOps', 'Docker', 'CI/CD', 'Cloud Computing'],
  },
  {
    category: 'State & Tools',
    icon: '⚙',
    skills: ['Redux', 'Git', 'Vercel', 'REST APIs'],
  },
  {
    category: 'AI & ML',
    icon: '🤖',
    skills: ['Model Fine-tuning', 'Google Gemini', 'AI Integration', 'Zero-Shot Extraction'],
  },
]

const marqueeItems = [
  'React.js', 'Angular', 'Next.js', 'Python', 'TypeScript', 'Azure DevOps',
  'Tailwind CSS', 'Docker', 'FastAPI', 'Redux', 'CI/CD', 'Generative AI',
  'Node.js', 'REST APIs', 'Vercel', 'Git'
]

export default function Skills() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'))
            entry.target.querySelectorAll('.section-line').forEach((el) => el.classList.add('visible'))

            // Animate skill bars
            entry.target.querySelectorAll('[data-width]').forEach((el) => {
              setTimeout(() => {
                el.style.width = el.getAttribute('data-width')
              }, parseInt(el.getAttribute('data-delay') || 0))
            })
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="reveal flex items-center gap-4 mb-16">
          <span className="font-mono text-accent text-sm">03.</span>
          <h2 className="font-display font-bold text-2xl text-paper">Skills</h2>
          <div className="section-line flex-1 ml-4" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => (
            <div
              key={group.category}
              className={`reveal reveal-delay-${i + 1} bg-surface border border-border rounded-xl p-6 hover:border-accent/40 transition-all duration-300 group`}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center text-accent font-mono text-sm">
                  {group.icon}
                </div>
                <h3 className="font-display font-semibold text-paper text-sm">{group.category}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-tag px-3 py-1.5 border border-border rounded-md text-xs font-mono text-muted cursor-default"
                  >
                    <span className="relative z-10 transition-colors duration-200">{skill}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Areas of Interest card */}
          <div className="reveal reveal-delay-5 lg:col-span-2 bg-accent/5 border border-accent/20 rounded-xl p-6 hover:border-accent/40 transition-all duration-300">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-lg bg-accent/20 flex items-center justify-center text-accent font-mono text-sm">★</div>
              <h3 className="font-display font-semibold text-paper text-sm">Areas of Interest</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Full-stack Development', 'Responsive Web Design', 'Generative AI', 'SaaS Products', 'AI Automation', 'Document Intelligence'].map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 bg-accent/10 border border-accent/30 rounded-md text-xs font-body text-accent"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="reveal mt-16 overflow-hidden py-4 border-y border-border">
          <div className="animate-marquee flex gap-8 whitespace-nowrap" style={{ width: 'max-content' }}>
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="flex items-center gap-3 text-sm font-mono text-muted">
                <span className="text-accent">◆</span>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
