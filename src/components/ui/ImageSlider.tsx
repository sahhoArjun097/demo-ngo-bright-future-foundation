import { useEffect, useState } from "react";
import type { Slide } from "../../constant/constants-types";

interface ImageSliderProps {
  slides: Slide[];
}
const ImageSlider = ({ slides }: ImageSliderProps) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="relative  min-h-[350px] md:h-[90vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt="slide"
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      <div className="absolute bottom-5 w-full flex justify-center gap-2 z-20">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              current === index ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
