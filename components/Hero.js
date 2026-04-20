'use client'
import { useEffect, useRef, useState } from 'react'

const roles = ['Software Engineer', 'Frontend Developer', 'AI Integrations', 'Full Stack Dev']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const canvasRef = useRef(null)

  // Typewriter
  useEffect(() => {
    const current = roles[roleIndex]
    let timeout

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40)
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false)
      setRoleIndex((i) => (i + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, roleIndex])

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.5 + 0.1,
    }))

    let animId
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 77, 28, ${p.opacity})`
        ctx.fill()

        particles.forEach((q) => {
          const dx = p.x - q.x, dy = p.y - q.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.strokeStyle = `rgba(255, 77, 28, ${(1 - dist / 120) * 0.08})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })
      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60" />

      {/* Radial gradient bg */}
      <div className="absolute inset-0 bg-radial-gradient" style={{
        background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(255,77,28,0.06) 0%, transparent 70%)'
      }} />

      {/* Big number bg */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 font-display font-bold text-[22vw] leading-none text-white/[0.02] select-none pointer-events-none">
        AJ
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Available badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-border rounded-full text-xs font-mono text-muted mb-8 animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse-slow" />
            Available for opportunities
          </div>

          {/* Name */}
          <h1 className="font-display font-bold leading-none mb-4" style={{ fontSize: 'clamp(3rem, 8vw, 6.5rem)' }}>
            <span className="block text-paper animate-fade-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
              Ahmed
            </span>
            <span
              className="block glitch-text gradient-text animate-fade-up"
              data-text="Jan."
              style={{ animationDelay: '0.25s', opacity: 0 }}
            >
              Jan.
            </span>
          </h1>

          {/* Typewriter role */}
          <div className="flex items-center gap-3 mb-6 animate-fade-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
            <span className="text-muted font-mono text-sm">~/</span>
            <span className="font-mono text-accent text-lg md:text-xl font-medium">
              {displayed}
              <span className="caret text-accent">|</span>
            </span>
          </div>

          {/* Summary */}
          <p className="text-muted font-body text-base md:text-lg leading-relaxed max-w-xl mb-10 animate-fade-up" style={{ animationDelay: '0.55s', opacity: 0 }}>
            2.5+ years crafting <span className="text-paper">scalable web applications</span> with Angular, React & Next.js.
            Building AI-powered products and deploying with Azure DevOps.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '0.7s', opacity: 0 }}>
            <a
              href="#projects"
              className="group flex items-center gap-2 px-6 py-3 bg-accent text-white font-body font-medium text-sm hover:bg-orange-500 transition-all duration-300 rounded-sm"
            >
              View Work
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 px-6 py-3 border border-border text-paper font-body font-medium text-sm hover:border-accent hover:text-accent transition-all duration-300 rounded-sm"
            >
              Get in Touch
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-14 pt-8 border-t border-border animate-fade-up" style={{ animationDelay: '0.9s', opacity: 0 }}>
            {[
              { value: '2.5+', label: 'Years Exp.' },
              { value: '90%', label: 'AI Accuracy' },
              { value: '3+', label: 'Frameworks' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display font-bold text-2xl text-accent">{stat.value}</div>
                <div className="font-body text-xs text-muted mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="text-xs font-mono text-muted">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-muted to-transparent" />
      </div>
    </section>
  )
}
