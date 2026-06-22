import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Leaf } from "lucide-react";
import { HERO_CONTENT, heroImages } from "../../../constant/constants";

const HeroSection = () => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused, heroImages.length]);

  const goToSlide = (index: number) => setCurrentIndex(index);
  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);
  const prevSlide = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + heroImages.length) % heroImages.length,
    );

  return (
    <section className="relative bg-white text-slate-800 overflow-hidden min-h-[90vh] flex items-center">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-[radial-gradient(circle_at_70%_30%,rgba(16,185,129,0.08),transparent_50%)]" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[radial-gradient(circle_at_30%_70%,rgba(52,211,153,0.06),transparent_50%)]" />

        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20viewBox%3D%220%200%2032%2032%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2310b981%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2216%22%20cy%3D%2216%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-60" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-0 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8 z-10">
            <div className="inline-flex items-center gap-2 bg-emerald-50 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium border border-emerald-200/60 shadow-sm">
              <Leaf className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-primary">{HERO_CONTENT.label}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-slate-900">
              {HERO_CONTENT.title}{" "}
              <span className="text-transparent bg-clip-text bg-primary">
                {HERO_CONTENT.highlight}
              </span>
            </h1>

            <p className="text-lg text-slate-500 max-w-lg leading-relaxed">
              {HERO_CONTENT.subtitle}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#donate"
                className="group inline-flex items-center gap-2 bg-primary hover:bg-primary text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-emerald-900/20 hover:shadow-emerald-600/30 hover:-translate-y-0.5"
              >
                Donate Now
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#impact"
                className="inline-flex items-center gap-2 bg-slate-50 hover:bg-slate-100 text-slate-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 border border-slate-200 hover:border-slate-300"
              >
                See Our Impact
              </a>
            </div>
          </div>

          <div
            className="relative lg:h-[600px] flex items-center justify-center"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="absolute inset-0 rounded-3xl border border-primary bg-emerald-50/30 backdrop-blur-sm" />

            <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-primary rounded-tl-3xl" />
            <div className="absolute top-4 right-4 w-16 h-16 border-r-2 border-t-2 border-primary rounded-tr-3xl" />
            <div className="absolute bottom-4 left-4 w-16 h-16 border-l-2 border-b-2 border-primary rounded-bl-3xl" />
            <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-primary rounded-br-3xl" />

            <div className="relative w-full h-full p-6 md:p-8">
              <div className="absolute inset-0 rounded-2xl border-2 border-dashed border-primary-200 m-4" />

              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl shadow-emerald-900/10">
                <div
                  ref={sliderRef}
                  className="flex h-full transition-transform duration-700 ease-out"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {heroImages.map((image, index) => (
                    <div
                      key={index}
                      className="w-full h-full flex-shrink-0 relative"
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                      <div className="absolute inset-0  via-transparent to-transparent" />

                      <div className="absolute bottom-6 left-6 right-6">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-xs font-medium border border-white/30 text-white">
                          <Leaf className="w-3 h-3" />
                          {image.caption}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-md border border-primary flex items-center justify-center hover:bg-white hover:shadow-lg transition-all hover:scale-110 text-primary"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-md border border-primary flex items-center justify-center hover:bg-white hover:shadow-lg transition-all hover:scale-110 text-primary"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                  {heroImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`h-1.5 rounded-full transition-all duration-500 ${
                        index === currentIndex
                          ? "w-8 bg-primary"
                          : "w-1.5 bg-white/60 hover:bg-white/80"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full h-auto">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#10b981"
            fillOpacity="0.03"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
