import { useEffect, useRef } from "react";
import gsap from "gsap";
import { partners } from "../../../constant/constants";

const OurPartners = () => {
  const sliderRef = useRef(null);
  const duplicatedPartners = [...partners, ...partners];

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    const tween = gsap.to(slider, {
      xPercent: -50,
      duration: 20,
      ease: "none",
      repeat: -1,
    });

    return () => {
      tween.kill();
    };
  }, []);

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <span className="text-sm font-semibold tracking-widest text-blue-600 uppercase">
          Our Partners
        </span>

        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
          Trusted By Leading Organizations
        </h2>

        <p className="mt-4 max-w-2xl mx-auto text-slate-600">
          Collaborating with corporations, institutions, and organizations to
          create sustainable social impact.
        </p>
      </div>

      <div className="relative mt-14 overflow-hidden">
        <div ref={sliderRef} className="flex w-max">
          {duplicatedPartners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center h-20 w-30 justify-center flex-shrink-0 mx-8"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-14 w-auto object-contain transition-all duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
