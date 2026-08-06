import { MessageCircle, Mail, Phone } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

const services = [
  'Long Essay Writing',
  'Research Proposal',
  'Data Analysis',
  'CV Writing',
  'Proofreading',
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden">
      {/* Top Border */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="py-16 bg-gradient-to-b from-background to-navy-dark/50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold to-gold-light flex items-center justify-center">
                  <span className="font-display font-bold text-navy-dark text-xl">SRI</span>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground text-lg leading-tight">
                    SPARTAN RESEARCH
                  </h3>
                  <p className="text-gold text-xs tracking-widest uppercase">Institute</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Strength in Inquiry, Excellence in Discovery. Your trusted partner in 
                academic research and consultancy.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://wa.me/233592448667"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-[#25D366]/20 flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-300"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a
                  href="mailto:ametvin2@gmail.com"
                  className="w-10 h-10 rounded-lg bg-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-navy-dark transition-all duration-300"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href="tel:0592448667"
                  className="w-10 h-10 rounded-lg bg-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-navy-dark transition-all duration-300"
                  aria-label="Phone"
                >
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display font-semibold text-foreground text-lg mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-gold transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-display font-semibold text-foreground text-lg mb-6">
                Our Services
              </h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <a
                      href="#services"
                      className="text-muted-foreground hover:text-gold transition-colors duration-300"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-display font-semibold text-foreground text-lg mb-6">
                Contact Info
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-muted-foreground text-sm">Phone</p>
                    <a href="tel:0592448667" className="text-foreground hover:text-gold transition-colors">
                      0592 448 667
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-muted-foreground text-sm">Email</p>
                    <a href="mailto:ametvin2@gmail.com" className="text-foreground hover:text-gold transition-colors">
                      ametvin2@gmail.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MessageCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-muted-foreground text-sm">WhatsApp</p>
                    <a
                      href="https://wa.me/233592448667"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-gold transition-colors"
                    >
                      +233 592 448 667
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-border/50">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-muted-foreground text-sm">
                © {currentYear} Spartan Research Institute. All rights reserved.
              </p>
              <div className="flex items-center gap-6 text-sm">
                <a href="#" className="text-muted-foreground hover:text-gold transition-colors">
                  
                </a>
                <a href="#" className="text-muted-foreground hover:text-gold transition-colors">
                  by Spartan Tech
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
