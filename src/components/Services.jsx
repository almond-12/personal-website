import { useTheme } from '../context/ThemeContext'
import { FadeUp, StaggerContainer, StaggerItem } from './animations/Animations'

const SERVICES = [
  {
    number: '01',
    title: 'Python & Go Backend Engineering',
    desc: 'High-performance APIs, data pipelines, microservices, and async workers built for throughput and reliability.',
    tags: ['FastAPI', 'Django', 'Gin', 'gRPC', 'Kafka'],
  },
  {
    number: '02',
    title: 'React & TypeScript Frontends',
    desc: 'Pixel-perfect, accessible UIs with state management, real-time data, and exceptional developer ergonomics.',
    tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Zustand'],
  },
  {
    number: '03',
    title: 'C# .NET Application Development',
    desc: 'Robust enterprise-grade applications, REST APIs, and background services on the modern .NET platform.',
    tags: ['ASP.NET Core', 'Entity Framework', 'SignalR', 'Blazor'],
  },
  {
    number: '04',
    title: 'Kubernetes & Container Orchestration',
    desc: 'Production-grade K8s clusters with autoscaling, RBAC, network policies, and self-healing workloads.',
    tags: ['Kubernetes', 'Helm', 'Docker', 'Istio', 'ArgoCD'],
  },
  {
    number: '05',
    title: 'Full-Stack API Architecture',
    desc: 'End-to-end API design — REST, GraphQL, WebSockets — with auth, rate limiting, and observability baked in.',
    tags: ['REST', 'GraphQL', 'OpenAPI', 'OAuth2', 'JWT'],
  },
  {
    number: '06',
    title: 'GitOps & Automation Pipelines',
    desc: 'Zero-downtime CI/CD pipelines with automated testing, progressive delivery, and infrastructure-as-code.',
    tags: ['GitHub Actions', 'Terraform', 'ArgoCD', 'Prometheus', 'Grafana'],
  },
]

export default function Services() {
  const { isDark } = useTheme()

  return (
    <section
      id="services"
      className={`py-28 ${isDark ? 'bg-dark-card' : 'bg-gray-50'}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <FadeUp>
            <span className={`text-xs font-semibold tracking-widest uppercase
              ${isDark ? 'text-dark-muted' : 'text-light-muted'}`}>
              What I Do
            </span>
          </FadeUp>
          <FadeUp delay={0.05}>
            <h2 className={`text-4xl md:text-5xl font-black leading-tight mt-3
              ${isDark ? 'text-[#EDEDED]' : 'text-[#111]'}`}>
              Services &{' '}
              <span className="gold-gradient">Expertise</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className={`text-base mt-5 leading-relaxed
              ${isDark ? 'text-dark-muted' : 'text-light-muted'}`}>
              From writing a single clean API endpoint to orchestrating a multi-region cloud deployment — I handle the full engineering lifecycle.
            </p>
          </FadeUp>
        </div>

        {/* Services grid */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          staggerDelay={0.07}
        >
          {SERVICES.map((service) => (
            <StaggerItem key={service.number}>
              <div
                className={`group relative h-full flex flex-col p-7 rounded-2xl border transition-all duration-300 cursor-default
                  ${isDark
                    ? 'bg-dark-bg border-dark-border hover:border-gold/30 hover:bg-[#111]'
                    : 'bg-white border-light-border hover:border-gold/40 hover:shadow-md shadow-sm'
                  }`}
              >
                {/* Number */}
                <span className={`text-xs font-semibold tracking-widest mb-5
                  ${isDark ? 'text-dark-muted' : 'text-light-muted'}`}>
                  {service.number}
                </span>

                {/* Title */}
                <h3 className={`text-base font-bold mb-3 leading-snug group-hover:text-gold transition-colors duration-200
                  ${isDark ? 'text-[#EDEDED]' : 'text-[#111]'}`}>
                  {service.title}
                </h3>

                {/* Description */}
                <p className={`text-sm leading-relaxed mb-6 flex-1
                  ${isDark ? 'text-dark-muted' : 'text-light-muted'}`}>
                  {service.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2.5 py-1 rounded-md text-xs font-medium border
                        ${isDark
                          ? 'bg-dark-card border-dark-border text-dark-muted'
                          : 'bg-gray-50 border-light-border text-light-muted'
                        }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Accent line on hover */}
                <div className="absolute bottom-0 left-7 right-7 h-px bg-gradient-to-r from-transparent via-gold/0 to-transparent group-hover:via-gold/40 transition-all duration-500 rounded-full" />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
