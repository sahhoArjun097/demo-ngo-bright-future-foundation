import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { programs } from "../../../constant/constants";

const Programmes = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  return (
    <section className="w-full bg-slate-50 py-24 px-5 sm:px-10 lg:px-20 relative overflow-hidden">
      <div className="relative text-center mb-20">
        <div className="inline-flex items-center gap-2 bg-white border border-primary px-4 py-1.5 rounded-full text-sm font-medium text-primary mb-6 shadow-sm">
          <Sparkles className="w-4 h-4 text-primary" />
          What We Do
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 uppercase tracking-tight">
          Our
          <span className="text-transparent bg-clip-text bg-primary">
            Programmes
          </span>
        </h2>

        <p className="mt-6 text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
          Transforming lives through targeted initiatives that address critical
          community needs
        </p>

        <div className="w-24 h-1.5 bg-primary mx-auto mt-8 rounded-full" />
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {programs.map((item, index) => {
          const Icon = item.icon;
          const isHovered = hoveredIndex === index;
          const isLarge = index === 0 || index === 3;

          return (
            <div
              key={index}
              className={`
                group relative
                ${isLarge ? "md:col-span-2 lg:col-span-1" : ""}
                ${index === 0 ? "lg:col-span-2" : ""}
                ${index === 3 ? "lg:col-span-2" : ""}
              `}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(0)}
            >
              <Link to={item.link} className="block h-full">
                <div
                  className={` 
                  relative h-full min-h-[280px]
                  bg-white rounded-3xl overflow-hidden
                  border border-slate-100
                  transition-all duration-500 ease-out
                  hover:shadow-2xl hover:shadow-emerald-900/5
                  hover:border-primary
                  hover:-translate-y-1
                `}
                >
                  <div
                    className={`h-1.5 w-full ${item.bg.replace("bg-", "bg-").replace("/10", "")}`}
                  />

                  <div className="p-8 h-full flex flex-col">
                    <div className="flex items-start justify-between mb-6 ">
                      <div
                        className={`
                        w-16 h-16 rounded-2xl flex items-center justify-center
                        ${item.bg}
                        transition-transform duration-500
                        group-hover:scale-110 group-hover:rotate-3
                      `}
                      >
                        <Icon className={`${item.color} w-8 h-8`} />
                      </div>

                      <div
                        className={`
                        w-10 h-10 rounded-full border border-slate-200  z-30
                        flex items-center justify-center
                        transition-all duration-300
                        group-hover:bg-primary group-hover:border-primary
                      `}
                      >
                        <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                      </div>
                    </div>

                    <div className="flex-1 flex flex-col">
                      <h3
                        className={`
                        text-2xl font-bold uppercase tracking-wide mb-3
                        transition-colors duration-300
                        ${item.color}
                      `}
                      >
                        {item.title}
                      </h3>

                      <p className="text-slate-500 leading-relaxed mb-6 flex-1">
                        {item.description}
                      </p>
                    </div>

                    <div className="absolute top-4 right-16 text-8xl font-black text-slate-50 select-none pointer-events-none transition-all duration-500 group-hover:text-slate-100 group-hover:scale-110">
                      0{index + 1}
                    </div>
                    <div
                      className={`
                      absolute bottom-0 left-0 h-1 bg-primary
                      transition-all duration-700 ease-out
                      ${isHovered ? "w-full" : "w-0"}
                    `}
                    />
                  </div>

                  {/* {item.image && (
                    <div
                      className={`
                      absolute inset-0 z-10
                      transition-opacity duration-500
                      ${isHovered ? "opacity-100" : "opacity-0 pointer-events-none"}
                    `}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent" />
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )} */}
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Programmes;
