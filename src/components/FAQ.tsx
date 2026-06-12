import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from './Section';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Who can join this program?',
      answer: 'Our program is designed for college students, fresh graduates, and working professionals looking to transition into full-stack development or upskill their current tech stack.',
    },
    {
      question: 'Do I need prior coding knowledge?',
      answer: 'While basic computer literacy is required, you don\'t need extensive coding experience. We start from the fundamentals and gradually build up to advanced architectural concepts.',
    },
    {
      question: 'Is the program online or offline?',
      answer: 'We offer flexible learning modes. You can choose between fully Online, Offline (at our training center), or a Hybrid model based on your location and preference.',
    },
    {
      question: 'Will I receive a certificate?',
      answer: 'Yes, upon successful completion of the program and final project evaluations, you will receive an industry-recognized certificate from Clarithix Academy.',
    },
    {
      question: 'Will I build real projects?',
      answer: 'Absolutely. The Clarithix method is heavily project-based. You will build, deploy, and maintain multiple production-grade applications that you can showcase in your portfolio.',
    },
    {
      question: 'Is placement guidance available?',
      answer: 'Yes, our Job Ready Program includes dedicated interview preparation, resume building, portfolio optimization, and placement guidance to help you land your desired role.',
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section title="Frequently Asked Questions" subtitle="Everything You Need To Know">
      <div className="max-w-3xl mx-auto">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="premium-card glow-effect overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="text-lg font-semibold text-primary-text pr-8">{faq.question}</span>
                <span className={`flex-shrink-0 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-transform duration-300 ${openIndex === index ? 'rotate-180 bg-white/5' : ''}`}>
                  <svg className="w-5 h-5 text-muted-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-5 pt-1 text-muted-text leading-relaxed border-t border-white/5 mt-2">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default FAQ;
