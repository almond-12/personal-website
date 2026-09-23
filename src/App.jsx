import { ThemeProvider } from './context/ThemeContext'
import { useTheme } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

function AppInner() {
  const { isDark } = useTheme()

  return (
    <div className={isDark ? 'dark' : 'light'}>
      <div className={`min-h-screen font-sans transition-colors duration-300
        ${isDark ? 'bg-dark-bg text-[#EDEDED]' : 'bg-light-bg text-[#111]'}`}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <AppInner />
    </ThemeProvider>
  )
}
