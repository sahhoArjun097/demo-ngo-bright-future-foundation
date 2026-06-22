import { ABOUT_CONTENT } from "../../../constant/constants";

const LifeCycle = () => {
  const content = ABOUT_CONTENT;
  return (
    <section className="py-24  text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(16,185,129,0.3),transparent_50%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            <span className="w-8 h-px bg-primary" />
            {content.lifecycle.label}
            <span className="w-8 h-px bg-primary" />
          </span>
          <h2 className="text-4xl lg:text-5xl font-black">
            {content.lifecycle.title}
            <span className="text-slate-900 bg-clip-text ">
              {content.lifecycle.highlight}
            </span>
          </h2>
        </div>
        <div className="relative">
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-primary" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {content.lifecycle.steps.map((step, i) => (
              <div key={i} className="relative group">
                <div className="text-center">
                  <div className="relative inline-flex mb-6">
                    <div className="w-24 h-24 rounded-full bg-primary/50 border-2 border-primary flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-all duration-300">
                      <span className="text-2xl font-black  hover:text-white ">
                        {step.number}
                      </span>
                    </div>
                    {/* Pulse ring */}
                    <div className="absolute inset-0 rounded-full border border-primary animate-ping opacity-0 group-hover:opacity-100" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text- leading-relaxed text-slate-900">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifeCycle;
