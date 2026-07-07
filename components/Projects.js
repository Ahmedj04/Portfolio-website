'use client'
import { useEffect, useRef } from 'react'

const projects = [
  {
    number: '01',
    title: 'AI-Powered SEO Keyword Analyzer',
    period: 'Mar 2025 – Apr 2025',
    description: 'A full-stack Next.js web application that extracts SEO keywords from URLs, performs competitor analysis, and identifies content gaps to optimize site performance.',
    highlights: [
      'Integrated Google Gemini AI for NLP-driven content suggestions and real-time recommendations.',
      'Built serverless API routes for metadata scraping and keyword processing.',
      'Deployed on Vercel with automatic scaling and secure API key handling.',
    ],
    tags: ['Next.js', 'Google Gemini', 'Vercel', 'Serverless', 'NLP', 'SEO'],
    link: 'https://seominer.vercel.app/',
    featured: true,
  },
  {
    number: '02',
    title: 'Document Classification Pipeline',
    period: 'At DocAcquire',
    description: 'AI-powered document processing system with Zero-Shot extraction capabilities. Fine-tuned models for automated document classification achieving 90% accuracy improvement.',
    highlights: [
      'Angular frontend for complex document workflows.',
      'Zero-Shot Extraction without model training requirements.',
      'Multi-region Azure deployment with CI/CD pipelines.',
    ],
    tags: ['Angular', 'Azure DevOps', 'AI/ML', 'TypeScript', 'CI/CD'],
    link: null,
    featured: false,
  },
  {
    number: '03',
    title: 'Booking Engine Platform',
    period: 'At VIT Camp',
    description: 'Dynamic website with integrated booking engine, real-time data APIs, and Redux state management. Built with Next.js and Tailwind CSS for optimal performance.',
    highlights: [
      'Real-time API integration for live data display.',
      'Redux for centralized state management.',
      'Full booking and reservation system.',
    ],
    tags: ['Next.js', 'Redux', 'Tailwind CSS', 'API Integration'],
    link: null,
    featured: false,
  },
]

export default function Projects() {
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
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="py-28 px-6 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <div className="reveal flex items-center gap-4 mb-16">
          <span className="font-mono text-accent text-sm">04.</span>
          <h2 className="font-display font-bold text-2xl text-paper">Projects</h2>
          <div className="section-line flex-1 ml-4" />
        </div>

        <div className="space-y-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1} group relative bg-surface border rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1 ${
                project.featured
                  ? 'border-accent/30 hover:border-accent'
                  : 'border-border hover:border-accent/40'
              }`}
            >
              {project.featured && (
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
              )}

              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-2xl font-bold text-border group-hover:text-accent/30 transition-colors duration-300">
                      {project.number}
                    </span>
                    <div>
                      <h3 className="font-display font-bold text-lg text-paper group-hover:text-accent transition-colors duration-300">
                        {project.title}
                      </h3>
                      <span className="font-mono text-xs text-muted">{project.period}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    {project.featured && (
                      <span className="px-2 py-1 bg-accent/10 border border-accent/30 rounded-full text-xs font-mono text-accent">
                        Featured
                      </span>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg text-xs font-body text-muted hover:text-accent hover:border-accent transition-all duration-200"
                      >
                        Live Demo
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-muted font-body text-sm leading-relaxed mb-5">{project.description}</p>

                <ul className="space-y-2 mb-6">
                  {project.highlights.map((h, j) => (
                    <li key={j} className="flex gap-2 text-xs font-body text-muted/80">
                      <span className="text-accent flex-shrink-0">→</span>
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-ink border border-border rounded-md text-xs font-mono text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
