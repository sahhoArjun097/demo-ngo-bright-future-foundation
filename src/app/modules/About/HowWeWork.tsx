import { ABOUT_CONTENT } from "../../../constant/constants";

const HowWeWork = () => {
  const content = ABOUT_CONTENT;
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            <span className="w-8 h-px bg-primary" />
            {content.work.label}
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-2">
            {content.work.title}
          </h2>
          <h2 className="text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-primary mb-8">
            {content.work.highlight}
          </h2>

          <div className="space-y-6">
            {content.work.areas.map((area, i) => (
              <div
                key={i}
                className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-${area.color}-50 border border-${area.color}-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                >
                  <area.icon className={`w-6 h-6 text-${area.color}-600`} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">
                    {area.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {area.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden aspect-[3/4] bg-slate-100 shadow-2xl">
            <img
              src={content.work.image}
              alt={content.work.imageAlt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/40 to-transparent" />
          </div>

          <div className="absolute -top-6 -right-6 w-32 h-32 bg-emerald-100 rounded-full blur-2xl opacity-60" />
          <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-teal-100 rounded-full blur-2xl opacity-60" />

          <div className="absolute -top-4 -left-4 w-20 h-20 border-l-4 border-t-4 border-primary rounded-tl-3xl" />
          <div className="absolute -bottom-4 -right-4 w-20 h-20 border-r-4 border-b-4 border-primary rounded-br-3xl" />
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
