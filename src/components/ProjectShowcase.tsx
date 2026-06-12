import { motion } from 'framer-motion';
import Section from './Section';

const ProjectShowcase = () => {
  const projects = [
    {
      title: 'Rental Booking Platform',
      description: 'A complete platform for listing, discovering, and booking rental properties with secure payments.',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800',
      category: 'Full Stack',
      features: ['User Authentication', 'Booking Management', 'Payment Flow', 'Admin Dashboard'],
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    },
    {
      title: 'Ride Booking System',
      description: 'A dynamic application connecting riders with drivers, featuring real-time location tracking and status updates.',
      image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=800',
      category: 'Real-Time Systems',
      features: ['Rider Flow', 'Driver Flow', 'Real-Time Tracking', 'Booking Management'],
      technologies: ['React', 'Socket.io', 'Express', 'MongoDB'],
    },
    {
      title: 'Social Media Automation',
      description: 'A dashboard tool for managing social media presence, scheduling posts, and analyzing engagement metrics.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800',
      category: 'SaaS Architecture',
      features: ['Multi Platform Publishing', 'Scheduling', 'Analytics', 'Automation'],
      technologies: ['React', 'Cron Jobs', 'REST APIs', 'Chart.js'],
    },
    {
      title: 'Student Management System',
      description: 'An administrative portal for educational institutions to manage student records, attendance, and performance.',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800',
      category: 'Internal Tools',
      features: ['Student Records', 'Marks Management', 'Authentication', 'Reporting'],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'JWT'],
    },
  ];

  return (
    <Section title="Projects You'll Build" subtitle="Real-World Applications">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="premium-card glow-effect overflow-hidden group flex flex-col h-full"
          >
            {/* Image Container */}
            <div className="relative h-64 overflow-hidden border-b border-white/10">
              <div className="absolute inset-0 bg-navy/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute top-4 right-4 z-20">
                <span className="bg-navy/80 backdrop-blur-md border border-white/10 text-primary-text text-xs font-semibold px-3 py-1.5 rounded-full">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-primary-text mb-3">{project.title}</h3>
              <p className="text-muted-text leading-relaxed mb-6 flex-grow">{project.description}</p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-primary-text uppercase tracking-wider mb-3">Key Features</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start text-sm text-muted-text">
                        <span className="w-1.5 h-1.5 brand-gradient-accent rounded-full mr-2 mt-1.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-6 border-t border-white/5">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, tIndex) => (
                      <span key={tIndex} className="text-xs font-medium text-accent-blue bg-accent-blue/10 px-2.5 py-1 rounded-md border border-accent-blue/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default ProjectShowcase;
