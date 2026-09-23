import { useTheme } from '../context/ThemeContext'

export default function Footer() {
  const { isDark } = useTheme()
  const year = new Date().getFullYear()

  const handleNav = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className={`py-10 border-t
      ${isDark ? 'bg-dark-bg border-dark-border' : 'bg-light-bg border-light-border'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <span className="w-7 h-7 rounded-md bg-gold flex items-center justify-center text-[#0D0D0D] font-black text-xs">
              OO
            </span>
            <span className={`text-sm font-semibold ${isDark ? 'text-[#EDEDED]' : 'text-[#111]'}`}>
              Obed Oyakhire
            </span>
          </div>

          {/* Nav links */}
          <nav className="flex items-center gap-6">
            {[['Home', '#home'], ['About', '#about'], ['Services', '#services'], ['Contact', '#contact']].map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={(e) => handleNav(e, href)}
                className={`text-xs font-medium transition-colors
                  ${isDark ? 'text-dark-muted hover:text-[#EDEDED]' : 'text-light-muted hover:text-[#111]'}`}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className={`text-xs ${isDark ? 'text-dark-muted' : 'text-light-muted'}`}>
            © {year} Obed Oyakhire. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
