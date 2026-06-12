import { motion } from 'framer-motion';
import Section from './Section';

const LearningJourney = () => {
  const steps = [
    {
      title: 'Enroll',
      description: 'Join the academy and get access to the curriculum, mentorship, and community.',
    },
    {
      title: 'Learn Fundamentals',
      description: 'Master the core concepts of web development, including HTML, CSS, JavaScript, and React.',
    },
    {
      title: 'Build Projects',
      description: 'Apply your knowledge by building real-world applications with modern technologies.',
    },
    {
      title: 'Deploy Applications',
      description: 'Learn DevOps basics to host, scale, and maintain your projects in the real world.',
    },
    {
      title: 'Interview Preparation',
      description: 'Get ready for technical interviews with mock sessions, resume building, and portfolio reviews.',
    },
    {
      title: 'Become Job Ready',
      description: 'Graduate as a confident full-stack developer ready to take on industry challenges.',
    },
  ];

  return (
    <Section title="Your Learning Journey" subtitle="The Path to Mastery">
      <div className="max-w-3xl mx-auto relative">
        {/* Vertical Line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 brand-gradient-accent rounded-full opacity-20 -translate-x-1/2" />

        <div className="space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-6 md:left-1/2 w-5 h-5 brand-gradient-icon rounded-full border-4 border-navy shadow-lg shadow-accent-blue/30 -translate-x-1/2 z-10" />

              {/* Card Container */}
              <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                <div className="premium-card glow-effect p-6 lg:p-8 hover:scale-[1.02] transition-transform duration-300">
                  <span className="text-accent-blue text-sm font-bold uppercase tracking-wider mb-2 block">
                    Step 0{index + 1}
                  </span>
                  <h3 className="text-2xl font-bold text-primary-text mb-3">{step.title}</h3>
                  <p className="text-muted-text leading-relaxed">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default LearningJourney;
