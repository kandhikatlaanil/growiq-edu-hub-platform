import React from 'react';
import { Code, Server, Database, Cloud, Shield, BarChart, Zap, Cpu } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const TechnologyStack = () => {
  const frontendTech = [
    "React.js – For scalable and dynamic UI components",
    "HTML5, CSS3, JavaScript (ES6+) – The essentials for responsive design",
    "Tailwind CSS / Bootstrap – For rapid UI development and clean design",
    "Next.js (for SSR) – Improving performance and SEO for client-facing apps"
  ];

  const backendTech = [
    "Node.js – High-performance, event-driven architecture",
    "Express.js / NestJS – Modular and scalable backend services",
    ".NET Core / C# – Enterprise-level APIs and legacy integrations",
    "Python – For automation, data pipelines, and AI integrations"
  ];

  const databaseTech = [
    "PostgreSQL / MySQL – For structured data and strong ACID compliance",
    "MongoDB – Flexible, document-based NoSQL for dynamic datasets",
    "Redis – High-speed caching and session storage",
    "Firebase (Firestore & Realtime DB) – For mobile-first features & live updates"
  ];

  const cloudTech = [
    "Amazon Web Services (AWS) – EC2, RDS, S3, Lambda, CloudWatch",
    "Microsoft Azure / Google Cloud (as required) – Region-specific deployments",
    "Docker & Kubernetes – Containerization & orchestration for microservices",
    "CI/CD with GitHub Actions / Jenkins – Automated deployment pipelines"
  ];

  const securityTech = [
    "OAuth 2.0 / JWT / SAML – Secure authentication mechanisms",
    "Data Encryption – AES 256-bit encryption at rest & TLS in transit",
    "Role-Based Access Control (RBAC) – Granular permission management",
    "Compliance – GDPR-ready, FERPA-aware practices"
  ];

  const analyticsTech = [
    "Power BI / Tableau / Metabase – Dashboards & reporting",
    "ElasticSearch / Kibana – Real-time logging and monitoring",
    "Google Analytics 4 / Firebase Analytics – Usage tracking & optimization",
    "AI/ML Models – Personalized recommendations & predictive learning paths"
  ];

  const integrationTech = [
    "Zoom, Google Meet, Microsoft Teams – For virtual classroom experiences",
    "SMS, WhatsApp, and Email APIs – For instant communication",
    "Tally, Razorpay, Paytm, Google Pay – For accounting & fee payments",
    "LMS & ERP Integrations – To unify the learning ecosystem"
  ];

  const devopsTech = [
    "GitHub / GitLab – Source control and code collaboration",
    "Docker, Helm, Terraform – For infrastructure as code",
    "Prometheus + Grafana – For real-time system health tracking",
    "Sentry / New Relic / Datadog – Error tracking and performance monitoring"
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-accent-600 to-growiq-600">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  🚀 Our Technology Stack
                </h1>
                <p className="text-xl md:text-2xl font-semibold mb-4">
                  Engineering Intelligent Ecosystems
                </p>
                <p className="text-lg opacity-90">
                  Our cutting-edge tech stack ensures speed, scalability, security, and seamless performance, enabling educational institutions to evolve digitally with confidence.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Technology Stack"
                  className="rounded-xl shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Frontend Technologies */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <Code className="w-8 h-8 text-accent-600" />
                <h2 className="text-3xl font-bold">💻 Frontend Technologies</h2>
              </div>
              <p className="text-lg text-gray-700 mb-8">
                We use modern frontend frameworks to craft intuitive, fast, and responsive interfaces — ensuring users enjoy a smooth and consistent experience across devices.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {frontendTech.map((tech, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700">{tech}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Backend Technologies */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <Server className="w-8 h-8 text-accent-600" />
                <h2 className="text-3xl font-bold">🛠 Backend Technologies</h2>
              </div>
              <p className="text-lg text-gray-700 mb-8">
                Our backend is engineered for performance and extensibility, capable of handling large user bases, complex workflows, and real-time interactions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {backendTech.map((tech, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg">
                    <p className="text-gray-700">{tech}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Database Systems */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <Database className="w-8 h-8 text-accent-600" />
                <h2 className="text-3xl font-bold">🗃 Database Systems</h2>
              </div>
              <p className="text-lg text-gray-700 mb-8">
                We prioritize data integrity, speed, and secure access with a mix of relational and NoSQL systems tailored to fit each module.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {databaseTech.map((tech, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700">{tech}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Cloud Infrastructure */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <Cloud className="w-8 h-8 text-accent-600" />
                <h2 className="text-3xl font-bold">☁️ Cloud Infrastructure & Hosting</h2>
              </div>
              <p className="text-lg text-gray-700 mb-8">
                GrowIQ apps are powered by enterprise-grade cloud services to deliver unmatched uptime, auto-scaling, and global availability.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cloudTech.map((tech, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg">
                    <p className="text-gray-700">{tech}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Security & Compliance */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <Shield className="w-8 h-8 text-accent-600" />
                <h2 className="text-3xl font-bold">🔐 Security & Compliance</h2>
              </div>
              <p className="text-lg text-gray-700 mb-8">
                We follow strict security protocols to ensure data protection, privacy, and regulatory compliance in the EdTech domain.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {securityTech.map((tech, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700">{tech}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Analytics & Intelligence */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <BarChart className="w-8 h-8 text-accent-600" />
                <h2 className="text-3xl font-bold">📊 Analytics & Intelligence</h2>
              </div>
              <p className="text-lg text-gray-700 mb-8">
                Insightful decision-making starts with smart data. Our systems are embedded with analytics layers to drive growth and engagement.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {analyticsTech.map((tech, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg">
                    <p className="text-gray-700">{tech}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Integrations & APIs */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <Zap className="w-8 h-8 text-accent-600" />
                <h2 className="text-3xl font-bold">🔌 Integrations & APIs</h2>
              </div>
              <p className="text-lg text-gray-700 mb-8">
                GrowIQ integrates effortlessly with third-party services and legacy systems via RESTful & GraphQL APIs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {integrationTech.map((tech, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700">{tech}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* DevOps & Monitoring */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <Cpu className="w-8 h-8 text-accent-600" />
                <h2 className="text-3xl font-bold">💡 DevOps & Monitoring</h2>
              </div>
              <p className="text-lg text-gray-700 mb-8">
                From code to deployment, we automate and monitor everything for optimal performance.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {devopsTech.map((tech, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg">
                    <p className="text-gray-700">{tech}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">🌟 Built for Scale. Designed for Simplicity. Powered by Innovation.</h2>
              <p className="text-lg text-gray-700">
                At GrowIQ, our tech stack reflects our commitment to building future-ready EdTech solutions that are secure, scalable, and smart. We're constantly evolving, adapting new technologies to meet the needs of educators, administrators, students, and parents.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default TechnologyStack; 