import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const plans = [
    {
      name: 'MERN Core Program',
      duration: '2 Months',
      monthlyPrice: '₹2,499',
      fullPrice: '₹6,499',
      features: [
        'Live Classes & Doubt Support',
        'Hands-On Projects',
        'Git & Deployment Training',
        'Certification Included',
        'Structured Curriculum',
      ],
      popular: false,
    },
    {
      name: 'MERN Job Ready Program',
      duration: '3 Months',
      monthlyPrice: '₹3,499',
      fullPrice: '₹9,999',
      features: [
        'Everything in Core Program',
        'Advanced Backend Concepts',
        'Real-World Project',
        'Interview Preparation Guidance',
        'Deployment & Portfolio Optimization',
      ],
      popular: true,
    },
  ];

  return (
    <section id="pricing" className="py-32 sm:py-40 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background light streaks */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/3 via-transparent to-accent-green/3 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <p className="text-sm sm:text-base text-muted-text mb-4 font-medium tracking-wider uppercase">
            Flexible plans designed to build real full-stack expertise
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            <span className="gradient-text">Choose Your Learning Path</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: plan.popular ? 1.02 : 1.01, y: -4 }}
              className={`relative ${
                plan.popular ? 'md:scale-[1.02] z-10' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <span className="brand-gradient text-white text-sm font-bold px-4 py-1.5 rounded-full shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="premium-card glow-effect p-8 lg:p-10 group h-full relative overflow-hidden">
                <div className="relative z-10">
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold mb-2 text-primary-text">{plan.name}</h3>
                    <p className="text-muted-text text-lg">Duration: {plan.duration}</p>
                  </div>

                  <div className="mb-6 pb-6 border-b border-white/5">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-4xl font-bold text-primary-text">{plan.monthlyPrice}</span>
                      <span className="text-muted-text">/ month</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-muted-text text-sm">Full Payment:</span>
                      <span className="text-xl font-semibold text-accent-green">{plan.fullPrice}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="w-6 h-6 brand-icon-container rounded-full mr-4 mt-0.5 flex-shrink-0 flex items-center justify-center">
                          <svg
                            className="w-3 h-3 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </span>
                        <span className="text-muted-text text-base leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      to="/contact"
                      className="premium-button-primary w-full block text-center"
                    >
                      <span className="relative z-10">Enroll Now</span>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
