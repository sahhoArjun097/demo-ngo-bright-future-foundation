import { MessageSquare } from "lucide-react";

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
    </>
  );
};

export default HeroSection;
