import { 
  FileText, 
  Edit3, 
  Search, 
  ClipboardList, 
  FileSignature,
  Lightbulb,
  FileCheck,
  BarChart3,
  Database,
  ShieldCheck,
  ClipboardCheck,
  MoreHorizontal
} from 'lucide-react';

export const services = [
  { id: 'long-essay', label: 'Long Essay Writing', icon: FileText },
  { id: 'editing', label: 'Editing Long Essay / Project Work', icon: Edit3 },
  { id: 'proofreading', label: 'Proofreading of Long Essay', icon: Search },
  { id: 'assignments', label: 'Assignments', icon: ClipboardList },
  { id: 'cv-writing', label: 'CV Writing', icon: FileSignature },
  { id: 'topic-selection', label: 'Topic Selection', icon: Lightbulb },
  { id: 'research-proposal', label: 'Research Proposal', icon: FileCheck },
  { id: 'survey-data', label: 'Survey Data Collection', icon: Database },
  { id: 'data-analysis', label: 'Data Analysis (Qualitative and Quantitative)', icon: BarChart3 },
  { id: 'plagiarism-ai', label: 'Plagiarism and AI Checking', icon: ShieldCheck },
  { id: 'questionnaires', label: 'Developing and Filling Questionnaires', icon: ClipboardCheck },
  { id: 'other', label: 'And Many More', icon: MoreHorizontal },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(43 74% 49%) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-gold uppercase tracking-widest text-sm font-medium mb-4">
            Our Services
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Comprehensive <span className="gradient-text">Research Solutions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From inception to completion, we offer end-to-end research support tailored 
            to your academic needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="glass rounded-xl p-6 hover-glow group transition-all duration-500 hover:-translate-y-1 cursor-pointer"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-foreground group-hover:text-gold transition-colors duration-300">
                    {service.label}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Need assistance with your research project? We're here to help.
          </p>
          <a
            href="#request"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-medium"
          >
            Request a Service
            <span className="text-xl">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};
