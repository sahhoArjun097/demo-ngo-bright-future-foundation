import { ArrowRight, Quote } from "lucide-react";
import { ABOUT_CONTENT } from "../../../constant/constants";
import { Link } from "react-router-dom";

const OurStory = () => {
  const content = ABOUT_CONTENT;

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-slate-100">
            <img
              src={content.story.image}
              alt={content.story.imageAlt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/30 to-transparent" />
          </div>

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

          <div className="absolute -top-4 -left-4 w-24 h-24 border-l-4 border-t-4 border-primary rounded-tl-3xl" />
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-4 border-b-4 border-primary rounded-br-3xl" />
        </div>

        <div className="lg:pl-8">
          <div className="space-y-5">
            {content.story.paragraphs.map((para, i) => (
              <p key={i} className="text-slate-600 leading-relaxed text-lg">
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="pt-4 justify-center w-full  flex item-center mt-6">
        <Link
          to={content.story.href}
          className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 group"
        >
          <span>Learn More About Us</span>
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
};

export default OurStory;
