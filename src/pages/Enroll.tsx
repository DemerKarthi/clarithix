import { useState, type FormEvent } from 'react';
import Hero from '../components/Hero';
import Section from '../components/Section';
import SEO from '../components/SEO';
import { submitEnrollment, type EnrollmentPayload } from '../services/enrollment';
import { motion, AnimatePresence } from 'framer-motion';

const Enroll = () => {
  const [formData, setFormData] = useState<EnrollmentPayload>({
    fullName: '',
    mobileNumber: '',
    emailAddress: '',
    collegeName: '',
    degree: '',
    currentYear: '',
    courseInterested: 'MERN Core Program',
    preferredMode: 'Online',
    additionalMessage: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const response = await submitEnrollment(formData);

    setIsSubmitting(false);
    
    if (response.success) {
      setSubmitStatus('success');
      setStatusMessage(response.message);
      setFormData({
        fullName: '',
        mobileNumber: '',
        emailAddress: '',
        collegeName: '',
        degree: '',
        currentYear: '',
        courseInterested: 'MERN Core Program',
        preferredMode: 'Online',
        additionalMessage: '',
      });
    } else {
      setSubmitStatus('error');
      setStatusMessage(response.message);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <SEO
        title="Enroll - Clarithix Academy"
        description="Enroll in Clarithix Academy's full-stack development training programs. Join the next batch of modern software engineers."
        keywords="enroll Clarithix, coding bootcamp enrollment, full stack course registration"
        canonicalUrl="/enroll"
      />
      <Hero title="Enroll Now" subtitle="Start Your Learning Journey" />

      <Section title="Application Form" subtitle="Take the next step">
        <div className="max-w-4xl mx-auto">
          <div className="premium-card glow-effect p-8 lg:p-12">
            
            <AnimatePresence mode="wait">
              {submitStatus === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="text-center py-16"
                >
                  <div className="w-20 h-20 brand-gradient-icon rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-accent-green/20">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-primary-text mb-4">Application Received!</h3>
                  <p className="text-lg text-muted-text max-w-lg mx-auto leading-relaxed">
                    {statusMessage}
                  </p>
                  <button 
                    onClick={() => setSubmitStatus('idle')}
                    className="mt-8 premium-button-secondary inline-block"
                  >
                    Submit Another Application
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {submitStatus === 'error' && (
                    <div className="mb-8 p-5 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-center">
                      <p>{statusMessage}</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Personal Information */}
                      <div className="col-span-1 md:col-span-2 mb-2">
                        <h4 className="text-xl font-semibold text-primary-text border-b border-white/10 pb-3">Personal Information</h4>
                      </div>

                      <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-muted-text mb-2">Full Name *</label>
                        <input
                          type="text" id="fullName" name="fullName" required
                          value={formData.fullName} onChange={handleChange}
                          className="w-full px-5 py-3.5 bg-white/5 border border-white/10 rounded-xl text-primary-text placeholder-gray-500 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/50 transition-all backdrop-blur-sm"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label htmlFor="emailAddress" className="block text-sm font-medium text-muted-text mb-2">Email Address *</label>
                        <input
                          type="email" id="emailAddress" name="emailAddress" required
                          value={formData.emailAddress} onChange={handleChange}
                          className="w-full px-5 py-3.5 bg-white/5 border border-white/10 rounded-xl text-primary-text placeholder-gray-500 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/50 transition-all backdrop-blur-sm"
                          placeholder="john@example.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="mobileNumber" className="block text-sm font-medium text-muted-text mb-2">Mobile Number *</label>
                        <input
                          type="tel" id="mobileNumber" name="mobileNumber" required
                          value={formData.mobileNumber} onChange={handleChange}
                          className="w-full px-5 py-3.5 bg-white/5 border border-white/10 rounded-xl text-primary-text placeholder-gray-500 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/50 transition-all backdrop-blur-sm"
                          placeholder="+91 9876543210"
                        />
                      </div>

                      {/* Educational Background */}
                      <div className="col-span-1 md:col-span-2 mb-2 mt-4">
                        <h4 className="text-xl font-semibold text-primary-text border-b border-white/10 pb-3">Educational Background</h4>
                      </div>

                      <div>
                        <label htmlFor="collegeName" className="block text-sm font-medium text-muted-text mb-2">College/University *</label>
                        <input
                          type="text" id="collegeName" name="collegeName" required
                          value={formData.collegeName} onChange={handleChange}
                          className="w-full px-5 py-3.5 bg-white/5 border border-white/10 rounded-xl text-primary-text placeholder-gray-500 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/50 transition-all backdrop-blur-sm"
                          placeholder="e.g. ABC Engineering College"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="degree" className="block text-sm font-medium text-muted-text mb-2">Degree *</label>
                          <input
                            type="text" id="degree" name="degree" required
                            value={formData.degree} onChange={handleChange}
                            className="w-full px-5 py-3.5 bg-white/5 border border-white/10 rounded-xl text-primary-text placeholder-gray-500 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/50 transition-all backdrop-blur-sm"
                            placeholder="e.g. B.Tech CS"
                          />
                        </div>
                        <div>
                          <label htmlFor="currentYear" className="block text-sm font-medium text-muted-text mb-2">Year *</label>
                          <select
                            id="currentYear" name="currentYear" required
                            value={formData.currentYear} onChange={handleChange}
                            className="w-full px-5 py-3.5 bg-navy border border-white/10 rounded-xl text-primary-text focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/50 transition-all"
                          >
                            <option value="" disabled>Select Year</option>
                            <option value="1st Year">1st Year</option>
                            <option value="2nd Year">2nd Year</option>
                            <option value="3rd Year">3rd Year</option>
                            <option value="4th Year">4th Year</option>
                            <option value="Passed Out">Passed Out</option>
                            <option value="Working Professional">Working Professional</option>
                          </select>
                        </div>
                      </div>

                      {/* Course Preferences */}
                      <div className="col-span-1 md:col-span-2 mb-2 mt-4">
                        <h4 className="text-xl font-semibold text-primary-text border-b border-white/10 pb-3">Course Preferences</h4>
                      </div>

                      <div>
                        <label htmlFor="courseInterested" className="block text-sm font-medium text-muted-text mb-2">Course Interested *</label>
                        <select
                          id="courseInterested" name="courseInterested" required
                          value={formData.courseInterested} onChange={handleChange}
                          className="w-full px-5 py-3.5 bg-navy border border-white/10 rounded-xl text-primary-text focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/50 transition-all"
                        >
                          <option value="MERN Core Program">MERN Core Program</option>
                          <option value="MERN Job Ready Program">MERN Job Ready Program</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="preferredMode" className="block text-sm font-medium text-muted-text mb-2">Preferred Learning Mode *</label>
                        <select
                          id="preferredMode" name="preferredMode" required
                          value={formData.preferredMode} onChange={handleChange}
                          className="w-full px-5 py-3.5 bg-navy border border-white/10 rounded-xl text-primary-text focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/50 transition-all"
                        >
                          <option value="Online">Online</option>
                          <option value="Offline">Offline</option>
                          <option value="Hybrid">Hybrid</option>
                        </select>
                      </div>

                      <div className="col-span-1 md:col-span-2">
                        <label htmlFor="additionalMessage" className="block text-sm font-medium text-muted-text mb-2">Additional Message (Optional)</label>
                        <textarea
                          id="additionalMessage" name="additionalMessage" rows={4}
                          value={formData.additionalMessage} onChange={handleChange}
                          className="w-full px-5 py-3.5 bg-white/5 border border-white/10 rounded-xl text-primary-text placeholder-gray-500 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/50 transition-all resize-none backdrop-blur-sm"
                          placeholder="Tell us about your coding experience or any questions you have..."
                        />
                      </div>
                    </div>

                    <div className="pt-6">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`premium-button-primary w-full flex items-center justify-center ${isSubmitting ? 'opacity-80 cursor-not-allowed' : ''}`}
                      >
                        <span className="relative z-10 flex items-center">
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Submitting Application...
                            </>
                          ) : (
                            'Submit Application'
                          )}
                        </span>
                      </button>
                      <p className="text-center text-sm text-muted-text mt-4">
                        By submitting, you agree to our terms and conditions. We will never share your personal information.
                      </p>
                    </div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
            
          </div>
        </div>
      </Section>
    </>
  );
};

export default Enroll;
