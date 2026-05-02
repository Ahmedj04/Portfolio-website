'use client'
import { useEffect, useRef, useState } from 'react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav({ armed = false }) {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const [musicOn, setMusicOn] = useState(true)
  const audioRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = navLinks.map((link) => link.href.slice(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.volume = 0.5
    audio.loop = true

    const savedPreference = window.localStorage.getItem('portfolio-music') !== 'off'
    setMusicOn(savedPreference)
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.volume = 0.5
    audio.loop = true

    const savedPreference = localStorage.getItem('portfolio-music') !== 'off'
    setMusicOn(savedPreference)

    // Autoplay is blocked by browsers until user interaction — wait for it
    const tryPlay = () => {
      if (savedPreference) audio.play().catch(() => {})
    }

    window.addEventListener('pointerdown', tryPlay, { once: true })
    window.addEventListener('keydown', tryPlay, { once: true })

    return () => {
      window.removeEventListener('pointerdown', tryPlay)
      window.removeEventListener('keydown', tryPlay)
      audio.pause()
    }
  }, [])

  const toggleMusic = () => {
    const audio = audioRef.current
    if (!audio) return

    if (musicOn) {
      audio.pause()
      setMusicOn(false)
      localStorage.setItem('portfolio-music', 'off')
    } else {
      audio.play().catch(() => {})
      setMusicOn(true)
      localStorage.setItem('portfolio-music', 'on')
    }
  }

  const MusicToggle = ({ mobile = false }) => (
    <button
      onClick={toggleMusic}
      aria-label={musicOn ? 'Turn music off' : 'Turn music on'}
      className={`group flex items-center gap-2 border border-border text-xs font-mono 
        transition-all duration-300 rounded-sm px-3 py-2
        ${mobile ? 'w-full justify-between' : ''}
        ${musicOn ? 'border-accent/60 text-paper' : 'text-muted hover:text-paper hover:border-accent'}
      `}
    >
      <span className="flex items-end gap-0.5 h-4" aria-hidden="true">
        {[0, 1, 2].map((bar) => (
          <span
            key={bar}
            className={`block w-1 rounded-full bg-current ${musicOn ? 'animate-pulse' : ''}`}
            style={{ height: `${6 + bar * 4}px`, animationDelay: `${bar * 120}ms` }}
          />
        ))}
      </span>
      <span>{musicOn ? 'Music On' : 'Music Off'}</span>
    </button>
  )

  return (
    <>
      <audio ref={audioRef} src="/audio/theme2.mp3" preload="auto" />

      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3 bg-ink/80 backdrop-blur-xl border-b border-border' : 'py-6'
      }`}>
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="font-display font-bold text-xl tracking-tight group">
            <span className="text-paper">AJ</span>
            <span className="text-accent">.</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-body text-sm font-medium relative group transition-colors duration-200 ${
                  activeSection === link.href.slice(1) ? 'text-accent' : 'text-muted hover:text-paper'
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-px bg-accent transition-all duration-300 ${
                  activeSection === link.href.slice(1) ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </a>
            ))}
            <MusicToggle />
            <a
              href="mailto:janahmed902@gmail.com"
              className="px-4 py-2 border border-accent text-accent text-sm font-medium font-body hover:bg-accent hover:text-white transition-all duration-300 rounded-sm"
            >
              Hire Me
            </a>
          </div>

          <button
            type="button"
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`block w-6 h-px bg-paper transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-4 h-px bg-paper transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-px bg-paper transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        <div className={`md:hidden transition-all duration-500 overflow-hidden ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="bg-surface border-t border-border px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-muted hover:text-paper font-body text-sm py-1"
              >
                {link.label}
              </a>
            ))}
            <MusicToggle mobile />
          </div>
        </div>
      </nav>
    </>
  )
}
