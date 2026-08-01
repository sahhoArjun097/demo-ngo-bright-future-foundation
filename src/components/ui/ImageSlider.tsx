import type { Slide } from "../../constant/constants-types";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageSliderProps {
  slides: Slide[];
}
const ImageSlider = ({ slides }: ImageSliderProps) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

  const slideTo = (index: number) => {
    if (!sliderRef.current) return;

    gsap.to(sliderRef.current, {
      xPercent: -100 * index,
      duration: 0.8,
      ease: "power3.inOut",
    });

    setCurrent(index);
  };

  const next = () => {
    slideTo((current + 1) % slides.length);
  };

  const prev = () => {
    slideTo((current - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => {
        const nextIndex = (prev + 1) % slides.length;

        if (sliderRef.current) {
          gsap.to(sliderRef.current, {
            xPercent: -100 * nextIndex,
            duration: 0.8,
            ease: "power3.inOut",
          });
        }

        return nextIndex;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full overflow-hidden ">
      <div ref={sliderRef} className="flex">
        {slides.map((slide, i) => (
          <div key={i} className="min-w-full shrink-0">
            <img
              src={slide.image}
              alt={`Slide ${i + 1}`}
              className="w-full h-[600px] object-cover"
            />
          </div>
        ))}
      </div>
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary/50 backdrop-blur-md p-3 rounded-full shadow-lg hover:scale-110 transition"
      >
        <ChevronLeft className="text-white" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary/50 backdrop-blur-md p-3 rounded-full shadow-lg hover:scale-110 transition"
      >
        <ChevronRight className="text-white" />
      </button>
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => slideTo(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              current === i
                ? "w-8 bg-primary"
                : "w-2 bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
