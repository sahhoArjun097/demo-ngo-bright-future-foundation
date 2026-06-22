import { Quote } from "lucide-react";
import { ABOUT_CONTENT } from "../../../constant/constants";

const WhyTrustUs = () => {
  const content = ABOUT_CONTENT;
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid sm:grid-cols-2 gap-6">
              {content.trust.reasons.map((reason, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-xl hover:shadow-emerald-900/5 hover:border-primary transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-4">
                    <reason.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {reason.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              <span className="w-8 h-px bg-primary" />
              {content.trust.label}
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-2">
              {content.trust.title}
            </h2>
            <h2 className="text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-primary mb-8">
              {content.trust.highlight}
            </h2>

            {/* Quote */}
            <div className="relative bg-white rounded-2xl p-8 border border-emerald-100 shadow-lg">
              <Quote className="absolute top-4 right-4 w-10 h-10 text-primary" />
              <p className="text-slate-600 italic leading-relaxed text-lg relative z-10">
                {content.trust.quote.text}
              </p>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">
                    {content.trust.quote.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">
                    {content.trust.quote.author}
                  </p>
                  <p className="text-xs text-slate-500">
                    {content.trust.quote.role}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTrustUs;
