import Hero from '../components/Hero';
import Section from '../components/Section';
import SEO from '../components/SEO';

const Services = () => {
  const services = [
    {
      title: 'Web Application Development',
      description: 'Modern, responsive, performance-driven applications built with clean architecture principles.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
    },
    {
      title: 'Full-Stack Development',
      description: 'End-to-end development from frontend to backend infrastructure with seamless integration.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      title: 'API Design & Development',
      description: 'RESTful and GraphQL APIs designed for scalability, performance, and maintainability.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'System Architecture Consulting',
      description: 'Design systems that scale without chaos. Expert guidance on building scalable and maintainable systems.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Infrastructure Planning',
      description: 'Strategic planning for cloud infrastructure and deployment strategies that grow with your business.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
    },
    {
      title: 'Codebase Refactoring',
      description: 'Transform messy systems into clean, maintainable structures. Improve existing code quality, performance, and maintainability.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
  ];

  const processSteps = [
    {
      number: '1',
      title: 'Understand',
      description: 'We dive deep into your business needs and technical requirements.',
    },
    {
      number: '2',
      title: 'Architect',
      description: 'We design clean, scalable solutions tailored to your goals.',
    },
    {
      number: '3',
      title: 'Build',
      description: 'We develop with best practices and maintainable code structure.',
    },
    {
      number: '4',
      title: 'Scale',
      description: 'We ensure your system grows with your business needs.',
    },
  ];

  return (
    <>
      <SEO
        title="Clarithix Labs - Software Development & Consulting"
        description="Clean architecture and scalable systems for modern businesses. Web application development, API design, system architecture consulting, and codebase optimization."
        keywords="software development, web application development, API development, system architecture, software consulting, code refactoring, infrastructure planning, full-stack development services"
        canonicalUrl="/services"
      />
      <Hero
        title="Clarithix Labs"
        subtitle="Clean Architecture. Scalable Systems."
      />

      <Section title="Introduction" subtitle="Engineering with Clarity">
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-muted-text leading-relaxed text-center font-light">
            Clarithix Labs exists to solve real engineering challenges with clarity and structure. We don't just write code — we engineer clarity into every system we build.
          </p>
        </div>
      </Section>

      <Section title="Services" subtitle="What We Offer" className="">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="premium-card glow-effect p-10 group"
            >
              <div className="w-14 h-14 brand-icon-container mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary-text">{service.title}</h3>
              <p className="text-lg text-muted-text leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Our Process" subtitle="How We Work">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="relative premium-card glow-effect p-10 group"
            >
              <div className="absolute -top-6 -left-6 w-16 h-16 brand-icon-container rounded-2xl flex items-center justify-center text-primary-text font-bold text-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                {step.number}
              </div>
              <h3 className="text-3xl font-bold mb-5 text-primary-text mt-6">{step.title}</h3>
              <p className="text-lg text-muted-text leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Our Promise" subtitle="What Sets Us Apart" className="">
        <div className="max-w-4xl mx-auto">
          <div className="premium-card glow-effect p-12 lg:p-16 text-center">
            <p className="text-2xl sm:text-3xl text-muted-text leading-relaxed font-light">
              We don't just write code. We engineer clarity.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Services;
