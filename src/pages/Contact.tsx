import { useState, type FormEvent } from 'react';
import Hero from '../components/Hero';
import Section from '../components/Section';
import SEO from '../components/SEO';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        alert("Thank you for your message! We will get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Error sending message.");
    }
  };
  

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <SEO
        title="Contact Clarithix - Get In Touch"
        description="Get in touch with Clarithix for full-stack development training or software consulting services. Let's build something together with clarity and clean architecture."
        keywords="contact Clarithix, software consulting contact, coding bootcamp inquiry, web development services, tech training contact"
        canonicalUrl="/contact"
      />
      <Hero title="Get In Touch" subtitle="Let's Build Something Together" />

      <Section title="Contact Us" subtitle="We'd Love to Hear From You">
        <div id="contact-form" className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h3 className="text-3xl font-bold mb-10 text-primary-text">Contact Information</h3>
              <div className="space-y-8">
                <div className="flex items-start group">
                  <div className="w-14 h-14 brand-icon-container flex items-center justify-center mr-5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-7 h-7 text-primary-text"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-muted-text text-sm mb-2 font-medium uppercase tracking-wide">Email</p>
                    <a href="mailto:demerkarthi@gmail.com" className="text-primary-text text-lg hover:text-blue-400 transition-colors duration-300">
                      demerkarthi@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-14 h-14 brand-icon-container flex items-center justify-center mr-5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-7 h-7 text-primary-text"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-muted-text text-sm mb-2 font-medium uppercase tracking-wide">Phone</p>
                    <a href="tel:7339347755" className="text-primary-text text-lg hover:text-blue-400 transition-colors duration-300">
                      +91 7339347755
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-lg text-muted-text leading-relaxed">
                  Have a question or project idea?<br />
                  <span className="text-primary-text font-medium">Let's build something structured and powerful together.</span>
                </p>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-muted-text mb-3"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-primary-text placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all backdrop-blur-sm"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-muted-text mb-3"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-primary-text placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all backdrop-blur-sm"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-muted-text mb-3"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-primary-text placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all resize-none backdrop-blur-sm"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="premium-button-primary w-full"
                >
                  <span className="relative z-10">Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Contact;
