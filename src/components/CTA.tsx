import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface CTAProps {
  title: string;
  primaryButton?: {
    text: string;
    link: string;
  };
  secondaryButton?: {
    text: string;
    link: string;
  };
}

const CTA = ({ title, primaryButton, secondaryButton }: CTAProps) => {
  return (
    <section id="cta" className="py-32 sm:py-40 px-4 sm:px-6 lg:px-8 relative">
      {/* Subtle background glow with unified gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 via-transparent to-accent-green/5 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-12 leading-tight"
        >
          <span className="gradient-text">
            {title}
          </span>
        </motion.h2>
        {(primaryButton || secondaryButton) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center"
          >
            {primaryButton && (
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to={primaryButton.link}
                  className="premium-button-primary"
                >
                  <span className="relative z-10">{primaryButton.text}</span>
                </Link>
              </motion.div>
            )}
            {secondaryButton && (
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to={secondaryButton.link}
                  className="premium-button-secondary"
                >
                  <span className="relative z-10">{secondaryButton.text}</span>
                </Link>
              </motion.div>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default CTA;
