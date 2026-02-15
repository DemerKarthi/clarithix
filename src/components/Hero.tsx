import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryButton?: {
    text: string;
    link: string;
  };
  secondaryButton?: {
    text: string;
    link: string;
  };
}

const Hero = ({
  title,
  subtitle,
  description,
  primaryButton,
  secondaryButton,
}: HeroProps) => {
  return (
    <section className="relative pt-40 pb-40 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="hero-gradient-bg pointer-events-none" />
      
      {/* Tech grid pattern */}
      <div className="tech-grid pointer-events-none" />
      
      {/* Additional overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy/20 to-navy pointer-events-none" />
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        {subtitle && (
          <p className="text-base sm:text-lg text-muted-text mb-6 font-medium tracking-wide uppercase fade-in-up">
            {subtitle}
          </p>
        )}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] tracking-tight fade-in-up-delay-1">
          <span className="gradient-text">
            {title}
          </span>
        </h1>
        {description && (
          <p className="text-xl sm:text-2xl text-muted-text mb-12 max-w-3xl mx-auto leading-relaxed font-light fade-in-up-delay-2">
            {description}
          </p>
        )}
        {(primaryButton || secondaryButton) && (
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center fade-in-up-delay-3">
            {primaryButton && (
              <Link
                to={primaryButton.link}
                className="hero-button-primary"
              >
                <span className="relative z-10">{primaryButton.text}</span>
              </Link>
            )}
            {secondaryButton && (
              <Link
                to={secondaryButton.link}
                className="hero-button-secondary"
              >
                <span className="relative z-10">{secondaryButton.text}</span>
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
