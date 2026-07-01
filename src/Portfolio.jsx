import React, { useState, useEffect } from 'react';
import { ArrowRight, Zap, TrendingUp, Users } from 'lucide-react';

const rotatingWords = ['sells', 'converts', 'resonates', 'connects', 'performs'];

export default function PortfolioConcept() {
  const [typedText, setTypedText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(null);
  

  
  useEffect(() => {
    const word = rotatingWords[currentWordIndex];
    let currentIndex = 0;
    
    const typingInterval = setInterval(() => {
      if (currentIndex <= word.length) {
        setTypedText(word.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
        }, 2000);
      }
    }, 100);
    
    return () => clearInterval(typingInterval);
  }, [currentWordIndex]);

  const projects = [
    {
      title: "Raley's Supermarkets",
      category: "Grocery & Loyalty",
      impact: "Led creative copy across six grocery brands in a $5B+ revenue portfolio. Managed email campaigns sent to 1M+ subscribers.",
      metrics: { boost: "52%", metric: "avg email open rate" },
      color: "from-red-500 to-pink-600",
      contributions: ["Email Campaigns", "Landing Page Development", "Radio Scripts ($250k)", "Brand Voice Development", "Push Notifications"]
    },
    {
      title: "Food City Mi Club",
      category: "Loyalty Launch",
      impact: "Concepted 'Siempre Savings' tagline and wrote launch copy for bilingual loyalty program.",
      metrics: { boost: "40k", metric: "email sign-ups in one month" },
      color: "from-orange-500 to-red-600",
      contributions: ["Campaign Concepting", "Bilingual Messaging", "Email Campaigns", "Style Guide Creation"]
    },
    {
      title: "Better for Every Budget",
      category: "Brand Campaign",
      impact: "Concepted and named this inflation-fighting campaign positioning Raley's as the affordable choice.",
      metrics: { boost: "5%", metric: "quarterly sales increase" },
      color: "from-green-500 to-emerald-600",
      contributions: ["Campaign Branding", "Cross-Channel Messaging", "Web Copy", "In-Store Signage"]
    },
    {
      title: "Bay Alarm",
      category: "Security Tech ($1B Company)",
      impact: "Led full-funnel content strategy. Wrote landing pages, SEO blogs, and Help Center copy.",
      metrics: { boost: "18%", metric: "reduction in support calls" },
      color: "from-blue-500 to-purple-600",
      contributions: ["Content Strategy", "Landing Page Development", "Blog Writing", "50k+ Organic Clicks", "Help Center Development"]
    }
  ];

  const stats = [
    { number: "250K+", label: "Organic Search Clicks", icon: Zap},
    { number: "$5M+", label: "Revenue Growth Driven", icon: TrendingUp },
    { number: "1M+", label: "Email Subscribers Managed", icon: Users }
  ];


  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      {/* Hero Section - The Hook */}
<section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-20 md:pt-0 relative overflow-hidden">
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="mb-8">
            <span className="text-orange-600 font-medium tracking-wider uppercase text-sm">
              Copywriter & Content Strategist
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            I write copy that<br></br>{' '}
            <span className="text-orange-600 inline-block min-w-[280px] border-b-4 border-orange-600">
              {typedText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-stone-600 mb-12 max-w-3xl font-light leading-relaxed">

          </p>
          
<div className="flex flex-wrap gap-6 mb-20">
  <a 
    href="mailto:jessezalasky@gmail.com" 
    className="bg-stone-900 text-white px-8 py-4 rounded-none font-medium hover:bg-orange-600 transition-all duration-300 flex items-center gap-2 group"
  >
    Let's Talk!
    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
  </a>
</div>
          
          {/* Stats Bar */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 pb-16 md:pb-0 border-t-2 border-stone-200">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <Icon className="text-orange-600" size={24} />
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-stone-900">{stat.number}</div>
                    <div className="text-stone-600 mt-1">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-12 leading-tight">
            Making Every Word Matter
          </h2>
          <div className="space-y-8 text-xl text-stone-300 leading-relaxed">
            <p>
              I write copy that connects with real people, drives real action, and delivers real results.
              Whether it's a homepage that converts, an email sequence that nurtures, or a brand voice 
              that resonates, my approach is the same: understand the audience, clarify the message, 
              and make every word matter.
            </p>
            <p className="text-orange-400 font-medium text-2xl pt-8">
              Strategy. Creativity.<br></br>Proven Results.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section - The Proof */}
      <section className="py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Work That Works
            </h2>
            <p className="text-xl text-stone-600 max-w-2xl">
              Real businesses that saw real growth.
            </p>
          </div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-white border-2 border-stone-200 hover:border-orange-600 transition-all duration-300 overflow-hidden cursor-pointer"
                onMouseEnter={() => setIsHovered(index)}
                onMouseLeave={() => setIsHovered(null)}
              >
                <div className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6">
                    <div>
                      <div className="text-sm text-stone-500 mb-2">{project.category}</div>
                      <h3 className="text-4xl md:text-5xl font-bold">{project.title}</h3>
                    </div>
                    <div className="flex items-center gap-3 text-orange-600 font-medium">
                    </div>
                  </div>

                  <p className="text-xl text-stone-700 mb-8 max-w-3xl">
                    {project.impact}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.contributions.map((contribution, i) => (
                      <span 
                        key={i}
                        className="px-4 py-2 bg-stone-100 text-stone-700 text-sm font-medium"
                      >
                        {contribution}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-baseline gap-3">
                    <div className={`text-5xl font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                      {project.metrics.boost}
                    </div>
                    <div className="text-stone-600">{project.metrics.metric}</div>
                  </div>
                </div>

                {/* Accent bar */}
                <div 
                  className={`h-2 bg-gradient-to-r ${project.color} transform origin-left transition-transform duration-300 ${
                    isHovered === index ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section - Reimagined */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              What I Bring to the Team
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Brand Voice & Messaging",
                description: "I don't just write. I build the identity that makes your brand unmistakable.",
                icon: "✍️"
              },
              {
                title: "Conversion-Focused Copy",
                description: "Landing pages, CTAs, and email sequences engineered to turn browsers into buyers.",
                icon: "🎯"
              },
              {
                title: "Content Strategy",
                description: "The roadmap that connects your message to the right audience at the right time.",
                icon: "🗺️"
              },
              {
                title: "Email Marketing",
                description: "Sequences that nurture, campaigns that convert, and subject lines that actually get opened.",
                icon: "📧"
              },
              {
                title: "Web Development",
                description: "I can plug into your CMS and know HTML & CSS.",
                icon: "⚡"
              },
              {
                title: "CMS Mastery",
                description: "WordPress, Salesforce, Bloomreach, and HubSpot experience.",
                icon: "🛠️"
              }
            ].map((skill, index) => (
              <div 
                key={index}
                className="bg-white p-8 border-2 border-transparent hover:border-orange-600 transition-all duration-300 group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {skill.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{skill.title}</h3>
                <p className="text-stone-600 leading-relaxed">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* Side Project Callout */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-stone-900">
        <div className="max-w-6xl mx-auto">
          <a 
            href="https://downvotedb.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block bg-gradient-to-r from-orange-600 to-pink-600 p-12 md:p-16 border-4 border-white/20 hover:border-white/40 transition-all duration-300 group relative overflow-hidden"
          >
            {/* Animated background effect */}
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-all duration-300"></div>
            
            <div className="relative z-10">
              <div className="flex items-start justify-between gap-8 flex-wrap">
                <div className="flex-1 min-w-[280px]">
                  <div className="text-white/80 text-sm font-medium mb-3 tracking-wider uppercase">
                    Side Project → Built with React + PostgreSQL
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    DownvoteDB
                  </h3>
                  <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-6">
                    I built a Reddit analytics dashboard that auto-collects data from 125+ subreddits 
                    every 24 hours. Check it out!
                  </p>
                  <div className="flex items-center gap-3 text-white font-medium">
                    <span>See the Stats</span>
                    <ArrowRight className="group-hover:translate-x-2 transition-transform" size={24} />
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm px-6 py-4 border-2 border-white/30 self-start">
                  <div className="text-white/70 text-xs mb-1">Tech Stack</div>
                  <div className="text-white font-mono text-sm">React • Tailwind • PostgreSQL</div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* The Fun Stuff Section */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-orange-500 to-pink-600 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              All the Fun Stuff
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-sm p-8 border-2 border-white/20">
            <h3 className="text-3xl font-bold mb-4">
              FOOD PUNS
            </h3>
              <div className="space-y-3 text-lg">
                <p className="">Berry Demure, Berry Mindful</p>
                <p className="">BBQ Girl in a BBQ World</p>
                <p className="">Endive Had the Thyme of My Life</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 border-2 border-white/20">
            <h3 className="text-3xl font-bold mb-4">
              CAMPAIGN CONCEPTING
            </h3>
              <div className="space-y-3">
                <div>
                  <p className="font-bold text-xl">Siempre Savings</p>
                  <p className="text-orange-100">Bilingual tagline that became Food City's brand platform</p>
                </div>
                <div>
                  <p className="font-bold text-xl">Better for Every Budget</p>
                  <p className="text-orange-100">Campaign that turned inflation anxiety into brand loyalty</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 border-2 border-white/20">
            <h3 className="text-3xl font-bold mb-4">
              AND SO MUCH MORE
            </h3>
            <p className="text-lg text-orange-100 leading-relaxed">
              I've written $250k radio campaigns, translated app features into plain-language tutorial scripts, 
              crafted SEO blogs that drove 50k organic clicks, and even made security systems sound friendly. 
              If it needs words, I can write it. 
            </p>
          </div>
        </div>
      </section>
{/* CTA Section */}
<section className="py-32 px-6 md:px-12 lg:px-16 bg-stone-900 text-white">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 max-w-2xl mx-auto leading-tight">
      Let's talk about what my words can do for you.
    </h2>
    
    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
      <a 
        href="https://www.linkedin.com/in/jesse-zalasky/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-orange-600 text-white px-8 py-4 rounded-none font-medium hover:bg-orange-700 transition-all duration-300 flex items-center gap-2 min-w-[200px] justify-center"
      >
        Connect on LinkedIn
        <ArrowRight size={20} />
      </a>
      <a 
        href="mailto:jessezalasky@gmail.com"
        className="border-2 border-white text-white px-8 py-4 rounded-none font-medium hover:bg-white hover:text-stone-900 transition-all duration-300 min-w-[200px] justify-center flex items-center"
      >
        Send Me an Email
      </a>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 lg:px-24 bg-stone-950 text-stone-400 text-center">
        <p>© 2026 Jesse Zalasky</p>
      </footer>
    </div>
  );
}