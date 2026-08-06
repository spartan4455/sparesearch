import { Shield, Award, Users, Clock } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Trusted Expertise',
    description: 'Our team of seasoned research consultants brings decades of combined academic experience across diverse disciplines.',
  },
  {
    icon: Award,
    title: 'Quality Guaranteed',
    description: 'Every project undergoes rigorous quality checks to ensure academic excellence and adherence to the highest standards.',
  },
  {
    icon: Users,
    title: 'Personalized Approach',
    description: 'We tailor our services to your unique requirements, providing customized solutions that align with your academic goals.',
  },
  {
    icon: Clock,
    title: 'Timely Delivery',
    description: 'We understand the importance of deadlines. Our streamlined processes ensure your work is delivered on schedule.',
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-gold uppercase tracking-widest text-sm font-medium mb-4">
            About Us
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose <span className="gradient-text">SPARTAN RESEARCH</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We are dedicated to empowering scholars and researchers with the tools and 
            expertise needed to achieve academic excellence.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-8 hover-glow group transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
