import { type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

const Section = ({ title, subtitle, children, className = '' }: SectionProps) => {
  return (
    <section className={`py-32 sm:py-40 px-4 sm:px-6 lg:px-8 relative overflow-hidden ${className}`}>
      {/* Subtle background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/2 via-transparent to-accent-green/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 sm:mb-20"
          >
            {subtitle && (
              <p className="text-sm sm:text-base text-muted-text mb-4 font-medium tracking-wider uppercase">
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                <span className="gradient-text">
                  {title}
                </span>
              </h2>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
