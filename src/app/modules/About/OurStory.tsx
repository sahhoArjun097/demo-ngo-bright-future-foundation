import { Quote } from "lucide-react";
import { ABOUT_CONTENT } from "../../../constant/constants";

const OurStory = () => {
  const content = ABOUT_CONTENT;

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Image Side */}
        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-slate-100">
            <img
              src={content.story.image}
              alt={content.story.imageAlt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/30 to-transparent" />
          </div>

          {/* Floating quote card */}
          <div className="absolute -bottom-8 -right-4 lg:right-8 bg-white rounded-2xl shadow-xl p-6 max-w-xs border border-primary">
            <Quote className="w-8 h-8 text-primary mb-3" />
            <p className="text-slate-700 text-sm italic leading-relaxed">
              {content.story.quote.text}
            </p>
            <div className="mt-4 pt-3 border-t border-slate-100">
              <p className="text-sm font-bold text-slate-900">
                {content.story.quote.author}
              </p>
              <p className="text-xs text-slate-500">
                {content.story.quote.role}
              </p>
            </div>
          </div>

          {/* Decorative frame */}
          <div className="absolute -top-4 -left-4 w-24 h-24 border-l-4 border-t-4 border-primary rounded-tl-3xl" />
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-4 border-b-4 border-primary rounded-br-3xl" />
        </div>

        {/* Content Side */}
        <div className="lg:pl-8">
          <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            <span className="w-8 h-px bg-primary" />
            {content.story.label}
          </span>

          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-2">
            {content.story.title}
          </h2>
          <h2 className="text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-primary mb-8">
            {content.story.highlight}
          </h2>

          <div className="space-y-5">
            {content.story.paragraphs.map((para, i) => (
              <p key={i} className="text-slate-600 leading-relaxed text-lg">
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
