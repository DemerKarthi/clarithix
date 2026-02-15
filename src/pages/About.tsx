import Hero from '../components/Hero';
import Section from '../components/Section';
import SEO from '../components/SEO';

const About = () => {
  return (
    <>
      <SEO
        title="About Clarithix - Our Mission & Vision"
        description="Learn about Clarithix's mission to bring clarity to complex technology. We empower learners and businesses through structured thinking and clean architecture."
        keywords="about Clarithix, tech education company, software architecture company, coding bootcamp mission, technology training philosophy"
        canonicalUrl="/about"
      />
      <Hero title="About Clarithix" />

      <Section title="Founder's Note" subtitle="Why Clarithix Exists">
        <div className="max-w-4xl mx-auto">
          <div className="premium-card glow-effect p-12 lg:p-16">
            <p className="text-xl text-muted-text leading-relaxed mb-6 font-light">
              Clarithix was founded on a simple principle — complexity becomes manageable when structured properly. Whether in learning or engineering, clarity is the difference between confusion and confidence.
            </p>
            <p className="text-lg text-muted-text/80 leading-relaxed">
              We believe that every complex system can be understood, every challenging problem can be solved, and every developer can build with clarity when given the right structure and methodology.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Vision" subtitle="Our Purpose" className="">
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-muted-text leading-relaxed text-center font-light">
            To bring clarity to complex technological systems in both learning and product development. We believe that every complex problem has a clear solution when approached with the right structure and methodology.
          </p>
        </div>
      </Section>

      <Section title="Mission" subtitle="What We Do" className="">
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-muted-text leading-relaxed text-center font-light">
            To empower learners and businesses through structured thinking and clean architecture. We simplify the complex, making technology accessible and manageable for everyone.
          </p>
        </div>
      </Section>

      <Section title="Philosophy" subtitle="Our Core Belief">
        <div className="max-w-4xl mx-auto">
          <div className="premium-card glow-effect p-16 lg:p-20 text-center">
            <p className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8">
              <span className="gradient-text">
                Clarity is power.
              </span>
            </p>
            <p className="text-2xl text-muted-text leading-relaxed font-light">
              Complexity becomes manageable when structured properly.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Our Values" subtitle="What Guides Us">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {[
            {
              title: 'Precision',
              description: 'Every detail matters. We value accuracy and attention to structure in everything we build and teach.',
            },
            {
              title: 'Structure',
              description: 'We approach problems with methodical, well-organized solutions that scale.',
            },
            {
              title: 'Scalability',
              description: 'We build systems that grow with your needs, maintaining clarity at every stage.',
            },
            {
              title: 'Clarity',
              description: 'Complexity becomes manageable when structured properly. Clarity is our foundation.',
            },
          ].map((value, index) => (
            <div
              key={index}
              className="premium-card glow-effect p-10 group"
            >
              <h3 className="text-3xl font-bold mb-5 text-primary-text">{value.title}</h3>
              <p className="text-lg text-muted-text leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default About;
