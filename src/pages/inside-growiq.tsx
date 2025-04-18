import React from 'react';
import { Users, Lightbulb, Rocket, Heart, BookOpen, Code, Zap, Smile } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const InsideGrowIQ = () => {
  const culturePoints = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Weekly learning sessions & tech talks",
      description: "Continuous learning and knowledge sharing"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Access to new tools and certifications",
      description: "Stay ahead with the latest technologies"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Internal mentorship & leadership building",
      description: "Grow your career with guidance"
    }
  ];

  const collaborationPoints = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Open-door leadership",
      description: "Accessible and approachable management"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Flat hierarchy & ownership culture",
      description: "Your voice matters at every level"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Transparent communication",
      description: "Clear and open dialogue with teams"
    }
  ];

  const innovationPoints = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Hackathons & innovation sprints",
      description: "Regular opportunities to innovate"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "R&D-driven development",
      description: "Research-backed solutions"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Problem-solving mindset",
      description: "Creative solutions at all levels"
    }
  ];

  const funPoints = [
    {
      icon: <Smile className="w-6 h-6" />,
      title: "Festival celebrations & birthdays",
      description: "Celebrate together"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Team outings & retreats",
      description: "Build connections outside work"
    },
    {
      icon: <Smile className="w-6 h-6" />,
      title: "Casual Fridays & Game Hours",
      description: "Relax and have fun"
    }
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
                  Inside GrowIQ
                </h1>
                <p className="text-xl md:text-2xl font-semibold mb-4">
                  Where Innovation Meets Passion
                </p>
                <p className="text-lg opacity-90">
                  A culture that fuels creativity, collaboration, and continuous learning. More than just desks and devices — it's a space where ideas spark, challenges inspire, and people grow together.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="GrowIQ Team"
                  className="rounded-xl shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Culture of Growth Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">🌱 A Culture of Growth</h2>
              <p className="text-lg text-gray-700">
                True to our name, growth is at the heart of everything we do. Whether it's personal development, professional learning, or evolving together as a team — GrowIQ is a launchpad for ambitious thinkers and doers.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {culturePoints.map((point, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl">
                  <div className="text-accent-600 mb-4">
                    {point.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
                  <p className="text-gray-600">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Collaboration Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">🤝 Collaboration That Clicks</h2>
                <p className="text-lg text-gray-700 mb-8">
                  We work in cross-functional, agile teams where everyone's voice is heard, and ideas matter — from interns to architects. Our environment encourages healthy debates, creative brainstorming, and quick decision-making.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {collaborationPoints.map((point, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg">
                      <div className="text-accent-600 mb-2">
                        {point.icon}
                      </div>
                      <h3 className="font-semibold mb-1">{point.title}</h3>
                      <p className="text-sm text-gray-600">{point.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Team Collaboration"
                  className="rounded-xl shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Innovation Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">⚡ Innovation in Action</h2>
              <p className="text-lg text-gray-700 mb-8">
                Every challenge is an opportunity to innovate. Our teams are constantly experimenting with AI, IoT, cloud technologies, and low-code/no-code platforms to create futuristic education tools that actually solve real problems.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {innovationPoints.map((point, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-xl">
                    <div className="text-accent-600 mb-4">
                      {point.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
                    <p className="text-gray-600">{point.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Work + Fun Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Team Fun"
                  className="rounded-xl shadow-lg w-full"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">🎉 Work + Fun = GrowIQ</h2>
                <p className="text-lg text-gray-700 mb-8">
                  We know that happy teams are productive teams. That's why we make sure there's always room for fun, celebration, and personal connection.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {funPoints.map((point, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg">
                      <div className="text-accent-600 mb-2">
                        {point.icon}
                      </div>
                      <h3 className="font-semibold mb-1">{point.title}</h3>
                      <p className="text-sm text-gray-600">{point.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Join Our Journey Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">🧠 Learn, Build, Impact</h2>
              <p className="text-lg text-gray-700 mb-8">
                We're not just building a company — we're building the future of education. Every line of code, every UX detail, every client interaction contributes to something bigger — creating smart campuses and empowered learners.
              </p>
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">Join Our Journey</h3>
                <p className="text-lg text-gray-700 mb-6">
                  Whether you're a coder, designer, tester, or dreamer — GrowIQ is where your potential meets purpose. If you're looking to do meaningful work with a team that values your skills and your smile — we're hiring!
                </p>
                <p className="text-xl font-semibold text-accent-600">
                  Come build, grow, and thrive with us — Inside GrowIQ.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default InsideGrowIQ; 