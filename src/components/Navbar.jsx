import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const { isDark, toggle } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 nav-blur
          ${scrolled
            ? isDark
              ? 'bg-[#0D0D0D]/80 border-b border-dark-border'
              : 'bg-white/80 border-b border-light-border shadow-sm'
            : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 group"
          >
            <span className="w-8 h-8 rounded-lg bg-gold flex items-center justify-center text-[#0D0D0D] font-black text-sm">
              OO
            </span>
            <span className={`font-semibold text-sm tracking-wide hidden sm:block
              ${isDark ? 'text-[#EDEDED]' : 'text-[#111]'}`}>
              Obed Oyakhire
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                  ${isDark
                    ? 'text-dark-muted hover:text-[#EDEDED] hover:bg-dark-card'
                    : 'text-light-muted hover:text-[#111] hover:bg-gray-100'
                  }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200
                ${isDark
                  ? 'bg-dark-card border border-dark-border text-dark-muted hover:text-[#EDEDED]'
                  : 'bg-gray-100 border border-light-border text-light-muted hover:text-[#111]'
                }`}
            >
              {isDark ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5"/>
                  <line x1="12" y1="1" x2="12" y2="3"/>
                  <line x1="12" y1="21" x2="12" y2="23"/>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                  <line x1="1" y1="12" x2="3" y2="12"/>
                  <line x1="21" y1="12" x2="23" y2="12"/>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
              )}
            </button>

            {/* CTA */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg bg-gold text-[#0D0D0D] text-sm font-semibold hover:bg-gold-light transition-colors duration-200"
            >
              Hire Me
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`md:hidden w-9 h-9 rounded-lg flex items-center justify-center transition-colors
                ${isDark ? 'bg-dark-card border border-dark-border' : 'bg-gray-100 border border-light-border'}`}
              aria-label="Toggle menu"
            >
              <div className="flex flex-col gap-1.5 w-4">
                <motion.span
                  animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  className={`h-0.5 rounded-full ${isDark ? 'bg-[#EDEDED]' : 'bg-[#111]'}`}
                />
                <motion.span
                  animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className={`h-0.5 rounded-full ${isDark ? 'bg-[#EDEDED]' : 'bg-[#111]'}`}
                />
                <motion.span
                  animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  className={`h-0.5 rounded-full ${isDark ? 'bg-[#EDEDED]' : 'bg-[#111]'}`}
                />
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className={`fixed top-16 left-0 right-0 z-40 nav-blur border-b
              ${isDark
                ? 'bg-[#0D0D0D]/95 border-dark-border'
                : 'bg-white/95 border-light-border'
              }`}
          >
            <nav className="flex flex-col px-6 py-4 gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all
                    ${isDark
                      ? 'text-dark-muted hover:text-[#EDEDED] hover:bg-dark-card'
                      : 'text-light-muted hover:text-[#111] hover:bg-gray-100'
                    }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="mt-2 px-4 py-3 rounded-lg bg-gold text-[#0D0D0D] text-sm font-semibold text-center"
              >
                Hire Me
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
