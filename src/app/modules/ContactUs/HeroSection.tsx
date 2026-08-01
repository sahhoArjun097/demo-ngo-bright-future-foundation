import { ChevronRight, Mail, MapPin, MessageSquare, Phone } from "lucide-react";

const contactCards = [
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 98765 43210",
    subtitle: "Mon-Sat, 9am to 6pm",
    action: "tel:+919876543210",
    actionLabel: "Call Now",
    color: "primary",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "contact@ngoname.org",
    subtitle: "We reply within 24 hours",
    action: "mailto:contact@ngoname.org",
    actionLabel: "Send Email",
    color: "primary",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: "New Delhi, India",
    subtitle: "Headquarters",
    action: "#offices",
    actionLabel: "Get Directions",
    color: "primary",
  },
];

const HeroSection = () => {
  return (
    <>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/50 rounded-full blur-3xl" />
        <div
          className="absolute 
         bottom-0 left-0 w-1/4 h-1/4 bg-primary/50 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
        <div className="inline-flex items-center gap-2 bg-primary/50 border border-emerald-100 px-4 py-1.5 rounded-full text-sm font-medium text-primary mb-6">
          <MessageSquare className="w-4 h-4" />
          Get In Touch
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight">
          Contact{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary/50 to-primary">
            Us
          </span>
        </h2>
        <p className="mt-6 text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
          Have a question, want to volunteer, or need assistance? We'd love to
          hear from you. Reach out and let's make a difference together.
        </p>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid md:grid-cols-3 gap-6">
          {contactCards.map((card, index) => (
            <a
              key={index}
              href={card.action}
              className="group relative bg-white rounded-2xl border border-slate-100 p-6 hover:shadow-xl hover:shadow-emerald-900/5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`w-12 h-12 rounded-xl  border border-${card.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <card.icon className={`w-6 h-6 text-${card.color}`} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                {card.title}
              </h3>
              <p className="text-slate-900 font-semibold mb-1">{card.value}</p>
              <p className="text-sm text-slate-400 mb-4">{card.subtitle}</p>
              <div
                className={`inline-flex items-center gap-1 text-sm font-semibold text-${card.color}-600 group-hover:gap-2 transition-all`}
              >
                {card.actionLabel}
                <ChevronRight className="w-4 h-4" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default HeroSection;
