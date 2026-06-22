import { Heart } from "lucide-react";
import { ABOUT_CONTENT } from "../../../constant/constants";

const HeroAboutSection = () => {
  const content = ABOUT_CONTENT;
  return (
    <section className="relative bg-slate-700 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.2),transparent_60%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-primary border border-primary px-4 py-1.5 rounded-full text-sm font-medium text-white mb-8">
            <Heart className="w-4 h-4" fill="currentColor" />
            {content.hero.badge}
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1]">
            {content.hero.title}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              {content.hero.highlight}
            </span>
          </h1>

          <p className="mt-6 text-xl text-slate-300 max-w-2xl leading-relaxed">
            {content.hero.subtitle}
          </p>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {content.hero.stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all"
            >
              <div className="text-3xl lg:text-4xl font-black text-primary">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-slate-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full h-auto">
          <path
            d="M0 60L48 55C96 50 192 40 288 37.5C384 35 480 40 576 45C672 50 768 55 864 52.5C960 50 1056 40 1152 37.5C1248 35 1344 40 1392 42.5L1440 45V60H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroAboutSection;
