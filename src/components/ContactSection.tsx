import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react';

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-gold uppercase tracking-widest text-sm font-medium mb-4">
            Contact Us
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Have questions? Our research consultants are ready to assist you.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Phone Card */}
          <div className="glass rounded-2xl p-8 text-center hover-glow transition-all duration-500 hover:-translate-y-2">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center mx-auto mb-6">
              <Phone className="w-8 h-8 text-gold" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">
              Call Us
            </h3>
            <p className="text-muted-foreground mb-4">
              Speak directly with our team
            </p>
            <a
              href="tel:0592448667"
              className="text-gold hover:text-gold-light transition-colors font-medium text-lg"
            >
              0592 448 667
            </a>
          </div>

          {/* Email Card */}
          <div className="glass rounded-2xl p-8 text-center hover-glow transition-all duration-500 hover:-translate-y-2">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-gold" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">
              Email Us
            </h3>
            <p className="text-muted-foreground mb-4">
              Send us a detailed inquiry
            </p>
            <a
              href="mailto:ametvin2@gmail.com"
              className="text-gold hover:text-gold-light transition-colors font-medium"
            >
              ametvin2@gmail.com
            </a>
          </div>

          {/* Hours Card */}
          <div className="glass rounded-2xl p-8 text-center hover-glow transition-all duration-500 hover:-translate-y-2">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center mx-auto mb-6">
              <Clock className="w-8 h-8 text-gold" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">
              Working Hours
            </h3>
            <p className="text-muted-foreground mb-4">
              Available to assist you
            </p>
            <p className="text-gold font-medium">
              Mon - Sun: 24/7
            </p>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <div className="mt-16 text-center">
          <div className="glass-strong rounded-3xl p-10 max-w-2xl mx-auto">
            <div className="w-20 h-20 rounded-full bg-[#25D366] flex items-center justify-center mx-auto mb-6 animate-pulse-gold">
              <MessageCircle className="w-10 h-10 text-white" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
              Prefer WhatsApp?
            </h3>
            <p className="text-muted-foreground mb-8">
              Connect with a research consultant instantly via WhatsApp for quick responses
              and real-time assistance.
            </p>
            <Button
              variant="whatsapp"
              size="xl"
              asChild
            >
              <a
                href="https://wa.me/233592448667?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20research%20services."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
                Chat with a Research Consultant
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
