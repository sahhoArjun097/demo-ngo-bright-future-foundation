import { ArrowRight, Heart } from "lucide-react";
import { HERO_CONTENT } from "../../../constant/constants";

const HeroSection = () => (
  <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 text-white overflow-hidden">
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1920&q=80')] bg-cover bg-center opacity-20" />
    <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 to-transparent" />

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
            <Heart className="w-4 h-4 text-red-400" fill="currentColor" />
            <span>Registered NGO under Section 80G</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            {HERO_CONTENT.title}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              {HERO_CONTENT.highlight}
            </span>
          </h1>

          <p className="text-lg text-indigo-100 max-w-lg">
            {HERO_CONTENT.subtitle}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#donate"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg shadow-orange-500/25"
            >
              Donate Now
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#impact"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold transition-all border border-white/20"
            >
              See Our Impact
            </a>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {HERO_CONTENT.stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/10 hover:bg-white/15 transition-all"
            >
              <div className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-indigo-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
