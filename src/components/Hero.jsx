import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

// Social icon components (inline SVG for zero-dependency)
const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
)

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const TwitterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
)

const EmailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <polyline points="22,4 12,13 2,4"/>
  </svg>
)

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
)

const SOCIAL_LINKS = [
  {
    label: 'GitHub',
    href: 'https://github.com/almond-12',
    icon: GithubIcon,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/obed-oyakhire-859a77376/',
    icon: LinkedInIcon,
  },
  {
    label: 'X / Twitter',
    href: 'https://x.com/seme_obed',
    icon: TwitterIcon,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/obeden.1',
    icon: InstagramIcon,
  },
]

const STATS = [
  { value: '4+', label: 'Years Experience' },
  { value: '20+', label: 'Projects Delivered' },
  { value: '6+', label: 'Tech Stacks' },
]

export default function Hero() {
  const { isDark } = useTheme()

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(${isDark ? '#fff' : '#000'} 1px, transparent 1px),
            linear-gradient(90deg, ${isDark ? '#fff' : '#000'} 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Gold glow blob */}
      <div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-[120px] opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #C9A84C, transparent)' }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-8 border
              ${isDark
                ? 'border-dark-border bg-dark-card text-dark-muted'
                : 'border-light-border bg-light-card text-light-muted'
              }`}
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for new opportunities
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight mb-6"
          >
            <span className={isDark ? 'text-[#EDEDED]' : 'text-[#111]'}>
              Full-Stack &{' '}
            </span>
            <br />
            <span className="gold-gradient">DevOps</span>
            <br />
            <span className={isDark ? 'text-[#EDEDED]' : 'text-[#111]'}>
              Engineer
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className={`text-lg md:text-xl leading-relaxed max-w-2xl mb-10
              ${isDark ? 'text-dark-muted' : 'text-light-muted'}`}
          >
            I specialize in building <span className={isDark ? 'text-[#EDEDED]' : 'text-[#111]'}>high-throughput, data-intensive web applications</span> while engineering the GitOps pipelines and Kubernetes infrastructure that scale them.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4 mb-16"
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gold text-[#0D0D0D] font-semibold text-sm hover:bg-gold-light transition-all duration-200 hover:gap-3"
            >
              Let's Work Together
              <ArrowIcon />
            </a>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border text-sm font-semibold transition-all duration-200
                ${isDark
                  ? 'border-dark-border text-[#EDEDED] hover:bg-dark-card'
                  : 'border-light-border text-[#111] hover:bg-gray-100'
                }`}
            >
              View Services
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className={`flex flex-wrap items-center gap-8 pt-8 border-t
              ${isDark ? 'border-dark-border' : 'border-light-border'}`}
          >
            {STATS.map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-3xl font-black gold-gradient leading-none">
                  {stat.value}
                </span>
                <span className={`text-sm mt-1 ${isDark ? 'text-dark-muted' : 'text-light-muted'}`}>
                  {stat.label}
                </span>
              </div>
            ))}

            {/* Social links */}
            <div className="flex items-center gap-3 ml-auto">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200
                    ${isDark
                      ? 'bg-dark-card border border-dark-border text-dark-muted hover:text-gold hover:border-gold/30'
                      : 'bg-light-card border border-light-border text-light-muted hover:text-gold hover:border-gold/30'
                    }`}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className={`text-xs ${isDark ? 'text-dark-muted' : 'text-light-muted'}`}>
          Scroll down
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="w-4 h-4"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
