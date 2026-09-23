import { useTheme } from '../context/ThemeContext'
import { FadeUp, StaggerContainer, StaggerItem } from './animations/Animations'

const HIGHLIGHTS = [
  {
    icon: '⚡',
    title: 'Full-Stack Development',
    desc: 'End-to-end application architecture from database schema to pixel-perfect UIs.',
  },
  {
    icon: '☁️',
    title: 'Cloud Infrastructure',
    desc: 'Kubernetes clusters, Terraform modules, and resilient multi-cloud deployments.',
  },
  {
    icon: '🔁',
    title: 'GitOps & CI/CD',
    desc: 'Automated pipelines with zero-downtime deployments and self-healing guardrails.',
  },
]

const TECH_TAGS = [
  'Python', 'Go', 'TypeScript', 'React', 'C# .NET', 'Node.js',
  'Kubernetes', 'Docker', 'Terraform', 'ArgoCD', 'PostgreSQL', 'Redis',
  'GitHub Actions', 'AWS', 'Azure', 'Prometheus',
]

export default function About() {
  const { isDark } = useTheme()

  return (
    <section id="about" className={`py-28 ${isDark ? 'bg-dark-bg' : 'bg-light-bg'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section label */}
        <FadeUp>
          <span className={`text-xs font-semibold tracking-widest uppercase
            ${isDark ? 'text-dark-muted' : 'text-light-muted'}`}>
            About Me
          </span>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-6">
          {/* Left column — bio */}
          <div>
            <FadeUp delay={0.05}>
              <h2 className={`text-4xl md:text-5xl font-black leading-tight mb-8
                ${isDark ? 'text-[#EDEDED]' : 'text-[#111]'}`}>
                Engineering at the
                <br />
                <span className="gold-gradient">intersection of</span>
                <br />
                code and cloud.
              </h2>
            </FadeUp>

            <FadeUp delay={0.1}>
              <p className={`text-base leading-relaxed mb-5
                ${isDark ? 'text-dark-muted' : 'text-light-muted'}`}>
                I'm <strong className={isDark ? 'text-[#EDEDED]' : 'text-[#111]'}>Obed Oyakhire</strong> — a Full-Stack and DevOps Engineer who bridges the gap between feature development and enterprise-grade cloud operations.
              </p>
            </FadeUp>

            <FadeUp delay={0.15}>
              <p className={`text-base leading-relaxed mb-5
                ${isDark ? 'text-dark-muted' : 'text-light-muted'}`}>
                My portfolio showcases the end-to-end lifecycle: writing efficient full-stack code and deploying it via self-healing microservices and automated CI/CD guardrails. This duality allows me to eliminate the friction between feature development and enterprise-grade cloud operations.
              </p>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className={`text-base leading-relaxed
                ${isDark ? 'text-dark-muted' : 'text-light-muted'}`}>
                Whether I'm architecting a REST/GraphQL API in Go, crafting a TypeScript React frontend, or wiring up a Kubernetes GitOps pipeline — I bring the same obsessive attention to reliability and developer experience.
              </p>
            </FadeUp>
          </div>

          {/* Right column — highlights + tech stack */}
          <div className="flex flex-col gap-8">
            {/* Highlight cards */}
            <StaggerContainer className="grid gap-4" staggerDelay={0.08}>
              {HIGHLIGHTS.map((item) => (
                <StaggerItem key={item.title}>
                  <div className={`flex items-start gap-4 p-5 rounded-2xl border transition-colors
                    ${isDark
                      ? 'bg-dark-card border-dark-border hover:border-gold/30'
                      : 'bg-light-card border-light-border hover:border-gold/40 shadow-sm'
                    }`}>
                    <span className="text-2xl mt-0.5 flex-shrink-0">{item.icon}</span>
                    <div>
                      <h3 className={`text-sm font-semibold mb-1
                        ${isDark ? 'text-[#EDEDED]' : 'text-[#111]'}`}>
                        {item.title}
                      </h3>
                      <p className={`text-sm leading-relaxed
                        ${isDark ? 'text-dark-muted' : 'text-light-muted'}`}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Tech stack */}
            <FadeUp delay={0.25}>
              <div className={`p-5 rounded-2xl border
                ${isDark ? 'bg-dark-card border-dark-border' : 'bg-light-card border-light-border shadow-sm'}`}>
                <p className={`text-xs font-semibold tracking-widest uppercase mb-4
                  ${isDark ? 'text-dark-muted' : 'text-light-muted'}`}>
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {TECH_TAGS.map((tag) => (
                    <span
                      key={tag}
                      className={`px-3 py-1 rounded-lg text-xs font-medium border
                        ${isDark
                          ? 'bg-[#0D0D0D] border-dark-border text-[#EDEDED]'
                          : 'bg-gray-50 border-light-border text-[#333]'
                        }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  )
}
