import { motion } from 'framer-motion';
import Section from './Section';

const ClarithixMethod = () => {
  const methods = [
    {
      title: 'Structured Learning',
      description: 'We break down complex topics into clear, logical steps. No scattered tutorials, just a proven path to mastery.',
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
        </svg>
      ),
    },
    {
      title: 'Real Projects',
      description: 'Theory is not enough. You will build, debug, and deploy production-grade applications that solve real-world problems.',
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Deployment Ready',
      description: 'Learn modern DevOps practices. Understand CI/CD, version control, and how to host your applications on cloud platforms.',
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
    },
    {
      title: 'Systems Thinking',
      description: 'Move beyond writing code. Learn to architect scalable solutions, understand trade-offs, and think like a senior engineer.',
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
  ];

  return (
    <Section title="The Clarithix Method">
      <div className="max-w-4xl mx-auto mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-2xl sm:text-3xl text-primary-text font-light mb-6">
            Most courses teach <span className="gradient-text font-semibold">syntax</span>. We teach <span className="gradient-text font-semibold">systems</span>.
          </p>
          <p className="text-lg text-muted-text leading-relaxed mb-6">
            At Clarithix, students learn how applications are designed, developed, deployed, and maintained in the real world.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-primary-text font-medium">
            <span>Learn the code.</span>
            <span className="hidden sm:block w-1.5 h-1.5 rounded-full brand-gradient-accent" />
            <span>Understand the architecture.</span>
            <span className="hidden sm:block w-1.5 h-1.5 rounded-full brand-gradient-accent" />
            <span>Think like an engineer.</span>
          </div>
        </motion.div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {methods.map((method, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02, y: -4 }}
            className="premium-card glow-effect p-8 group"
          >
            <div className="w-12 h-12 brand-icon-container mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
              {method.icon}
            </div>
            <h4 className="text-xl font-bold mb-3 text-primary-text">{method.title}</h4>
            <p className="text-base text-muted-text leading-relaxed">{method.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default ClarithixMethod;
