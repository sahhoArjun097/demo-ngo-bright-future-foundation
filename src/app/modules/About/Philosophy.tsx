import { ABOUT_CONTENT } from "../../../constant/constants";

const Philosophy = () => {
  const content = ABOUT_CONTENT;
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider mb-4">
          <span className="w-8 h-px bg-primary" />
          {content.philosophy.label}
          <span className="w-8 h-px bg-primary" />
        </span>
        <h2 className="text-4xl lg:text-5xl font-black text-slate-900">
          {content.philosophy.title}
          <span className="text-transparent bg-clip-text bg-primary">
            {content.philosophy.highlight}
          </span>
        </h2>
        <p className="mt-6 text-lg text-slate-500 max-w-3xl mx-auto">
          {content.philosophy.description}
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-slate-100 shadow-xl">
          <img
            src={content.philosophy.image}
            alt={content.philosophy.imageAlt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-950/20 to-transparent" />
        </div>

        {/* Pillars */}
        <div className="grid sm:grid-cols-2 gap-6">
          {content.philosophy.pillars.map((pillar, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl p-6 border border-slate-100 hover:border-primary hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/50 border border-emerald-100 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:border-primary transition-colors">
                <pillar.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {pillar.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
