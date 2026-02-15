import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Section from '../components/Section';
import CTA from '../components/CTA';
import Pricing from '../components/Pricing';
import Trust from '../components/Trust';
import SEO from '../components/SEO';

const Home = () => {
  return (
    <>
      <SEO
        title="Clarithix - Where Complexity Meets Clarity"
        description="Simplifying complex technology for learners and businesses through structured thinking and clean systems. Full-stack development training and software architecture consulting."
        keywords="tech education, full-stack development, software architecture, web development, coding bootcamp, React, Node.js, MongoDB, software consulting"
        canonicalUrl="/"
      />
      <Hero
        title="Clarithix"
        subtitle="Where Complexity Meets Clarity"
        description="At Clarithix, we believe complexity is not the enemy — confusion is. We transform complex technologies into structured, understandable systems for learners and businesses alike."
        primaryButton={{
          text: 'Explore Programs',
          link: '/academy',
        }}
        secondaryButton={{
          text: 'Work With Us',
          link: '/services',
        }}
      />

      <Section title="What We Do">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.01, y: -4 }}
            className="premium-card glow-effect p-10 lg:p-12 group"
          >
            <div className="w-14 h-14 brand-icon-container mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg
                className="w-7 h-7 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h3 className="text-3xl font-bold mb-5 text-primary-text">Clarithix Academy</h3>
            <p className="text-lg text-muted-text leading-relaxed mb-4">
              We deliver structured full-stack development training designed to build strong foundations. From frontend fundamentals to backend architecture and deployment workflows, our programs focus on clarity, execution, and real-world readiness.
            </p>
            <p className="text-base text-muted-text/80 leading-relaxed">
              Every concept is backed by implementation and real coding practice. We don't just teach syntax — we train developers to think structurally.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.01, y: -4 }}
            className="premium-card glow-effect p-10 lg:p-12 group"
          >
            <div className="w-14 h-14 brand-icon-container mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg
                className="w-7 h-7 text-white"
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
            <h3 className="text-3xl font-bold mb-5 text-primary-text">Clarithix Labs</h3>
            <p className="text-lg text-muted-text leading-relaxed mb-4">
              We design and develop scalable web applications using clean architecture principles. Our focus is long-term maintainability, performance, and structured engineering practices.
            </p>
            <p className="text-base text-muted-text/80 leading-relaxed">
              We don't just write code. We engineer clarity into every system we build.
            </p>
          </motion.div>
        </div>
      </Section>

      <Section title="Why Clarithix?">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {[
            {
              title: 'Structured Thinking',
              description: 'We break down complexity into logical, understandable systems.',
            },
            {
              title: 'Practical Learning',
              description: 'Every concept is backed by implementation and real coding practice.',
            },
            {
              title: 'Clean Architecture',
              description: 'We teach and build using scalable system design principles.',
            },
            {
              title: 'Version Control Mastery',
              description: 'Git and collaboration workflows are part of the foundation.',
            },
            {
              title: 'Deployment Ready',
              description: 'Students and products are prepared for real-world hosting and scaling.',
            },
            {
              title: 'Focused Environment',
              description: 'We value depth over noise and clarity over speed.',
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.01, y: -4 }}
              className="premium-card p-8 group"
            >
              <div className="w-12 h-12 brand-icon-container mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <svg
                  className="w-6 h-6 text-white"
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
              </div>
              <h4 className="text-xl font-bold mb-3 text-primary-text">{feature.title}</h4>
              <p className="text-base text-muted-text leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Pricing />

      <Trust />

      <CTA
        title="Build With Clarity. Scale With Confidence."
        primaryButton={{
          text: 'Join the Academy',
          link: '/academy',
        }}
        secondaryButton={{
          text: 'Start a Project',
          link: '/services',
        }}
      />
    </>
  );
};

export default Home;
