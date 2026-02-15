import Hero from '../components/Hero';
import Section from '../components/Section';
import SEO from '../components/SEO';

const Academy = () => {
  return (
    <>
      <SEO
        title="Clarithix Academy - Full-Stack Development Training"
        description="Transform into a confident full-stack developer through structured training. Learn React, Node.js, MongoDB, and deployment. Small batches, real-world projects, Git training included."
        keywords="coding bootcamp, full-stack development course, React training, Node.js course, MongoDB training, web development bootcamp, JavaScript course, software development training"
        canonicalUrl="/academy"
      />
      <Hero
        title="Clarithix Academy"
        subtitle="Clarity in Learning. Strength in Execution."
      />

      <Section
        title="Our Approach"
        subtitle="Structured Learning for Real Results"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-muted-text leading-relaxed text-center font-light mb-6">
            At Clarithix Academy, we don't just teach syntax. We train developers to think structurally, write maintainable code, and understand systems from the inside out.
          </p>
          <p className="text-lg text-muted-text leading-relaxed text-center">
            Our curriculum is designed to take you from beginner to confident developer through hands-on projects, structured learning, and real-world application.
          </p>
        </div>
      </Section>

      <Section title="Curriculum" className="">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          <div className="premium-card glow-effect p-10 group">
            <div className="w-14 h-14 brand-icon-container mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg
                className="w-7 h-7 text-primary-text"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                />
              </svg>
            </div>
            <h3 className="text-3xl font-bold mb-4 text-primary-text">Frontend</h3>
            <p className="text-base text-muted-text mb-6 leading-relaxed">
              Learn how modern interfaces are structured, styled, and made interactive.
            </p>
            <ul className="space-y-4 text-muted-text">
              <li className="flex items-center text-lg">
                <span className="w-2.5 h-2.5 brand-gradient-accent rounded-full mr-4 shadow-sm"></span>
                HTML
              </li>
              <li className="flex items-center text-lg">
                <span className="w-2.5 h-2.5 brand-gradient-accent rounded-full mr-4 shadow-sm"></span>
                CSS
              </li>
              <li className="flex items-center text-lg">
                <span className="w-2.5 h-2.5 brand-gradient-accent rounded-full mr-4 shadow-sm"></span>
                JavaScript
              </li>
              <li className="flex items-center text-lg">
                <span className="w-2.5 h-2.5 brand-gradient-accent rounded-full mr-4 shadow-sm"></span>
                React
              </li>
            </ul>
          </div>

          <div className="premium-card glow-effect p-10 group">
            <div className="w-14 h-14 brand-icon-container mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg
                className="w-7 h-7 text-primary-text"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                />
              </svg>
            </div>
            <h3 className="text-3xl font-bold mb-4 text-primary-text">Backend</h3>
            <p className="text-base text-muted-text mb-6 leading-relaxed">
              Understand server logic, API architecture, and database modeling.
            </p>
            <ul className="space-y-4 text-muted-text">
              <li className="flex items-center text-lg">
                <span className="w-2.5 h-2.5 brand-gradient-accent rounded-full mr-4 shadow-sm"></span>
                Node.js
              </li>
              <li className="flex items-center text-lg">
                <span className="w-2.5 h-2.5 brand-gradient-accent rounded-full mr-4 shadow-sm"></span>
                Express.js
              </li>
              <li className="flex items-center text-lg">
                <span className="w-2.5 h-2.5 brand-gradient-accent rounded-full mr-4 shadow-sm"></span>
                REST APIs
              </li>
              <li className="flex items-center text-lg">
                <span className="w-2.5 h-2.5 brand-gradient-accent rounded-full mr-4 shadow-sm"></span>
                MongoDB
              </li>
            </ul>
          </div>

          <div className="premium-card glow-effect p-10 group">
            <div className="w-14 h-14 brand-icon-container mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg
                className="w-7 h-7 text-primary-text"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>
            <h3 className="text-3xl font-bold mb-4 text-primary-text">DevOps Basics</h3>
            <p className="text-base text-muted-text mb-6 leading-relaxed">
              Master Git workflows and deploy applications confidently.
            </p>
            <ul className="space-y-4 text-muted-text">
              <li className="flex items-center text-lg">
                <span className="w-2.5 h-2.5 brand-gradient-accent rounded-full mr-4 shadow-sm"></span>
                Git & GitHub
              </li>
              <li className="flex items-center text-lg">
                <span className="w-2.5 h-2.5 brand-gradient-accent rounded-full mr-4 shadow-sm"></span>
                Version control workflows
              </li>
              <li className="flex items-center text-lg">
                <span className="w-2.5 h-2.5 brand-gradient-accent rounded-full mr-4 shadow-sm"></span>
                Deployment (Vercel / Render)
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section
        title="Project-Based Learning"
        subtitle="Build Real Applications"
      >
        <div className="max-w-4xl mx-auto">
          <div className="premium-card glow-effect p-10 lg:p-12">
            <p className="text-xl text-muted-text leading-relaxed mb-8 font-light">
              Students build complete full-stack applications including:
            </p>
            <ul className="space-y-5">
              {[
                'User authentication systems',
                'CRUD operations with databases',
                'RESTful API development',
                'Frontend-backend integration',
                'Deployment and hosting',
                'Version control with Git',
              ].map((item, index) => (
                <li key={index} className="flex items-start group">
                  <span className="w-7 h-7 brand-icon-container rounded-full mr-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-4 h-4 text-primary-text"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="text-muted-text text-lg leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section
        title="Outcome"
        subtitle="What You'll Achieve"
        className=""
      >
        <div className="max-w-4xl mx-auto">
          <div className="premium-card glow-effect p-12 lg:p-16 text-center">
            <p className="text-2xl sm:text-3xl text-muted-text leading-relaxed font-light">
              By the end of the program, learners will be capable of independently building and deploying full-stack applications.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Academy;
