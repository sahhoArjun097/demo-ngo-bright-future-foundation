import { useMemo, useState } from "react";
import { Sparkles, CalendarDays } from "lucide-react";
import { EVENTS_CONTENT, events } from "../../../constant/constants";
import EventCard from "./EventCard";

const Events = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeStatus, setActiveStatus] = useState("All");

  const filtered = useMemo(
    () =>
      events.filter((event) => {
        const matchesCategory =
          activeCategory === "All" || event.category === activeCategory;
        const matchesStatus =
          activeStatus === "All" || event.status === activeStatus;
        return matchesCategory && matchesStatus;
      }),
    [activeCategory, activeStatus],
  );

  const badgeClass = (isActive: boolean) =>
    `px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
      isActive
        ? "bg-primary text-white border-primary shadow-lg shadow-primary/25"
        : "bg-white text-slate-600 border-slate-200 hover:border-primary hover:text-primary"
    }`;

  const collage = events.slice(0, 3);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-primary/5">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-cyan-200/30 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(16,185,129,0.06)_1px,transparent_0)] bg-[size:28px_28px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Left: copy */}
            <div>
              <span className="inline-flex items-center gap-2 text-white bg-primary px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wider shadow-lg shadow-primary/25">
                <Sparkles className="w-4 h-4" />
                {EVENTS_CONTENT.hero.badge}
              </span>

              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1]">
                {EVENTS_CONTENT.hero.title}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">
                  {EVENTS_CONTENT.hero.highlight}
                </span>
              </h1>

              <p className="mt-6 text-lg text-slate-500 leading-relaxed max-w-xl">
                {EVENTS_CONTENT.hero.subtitle}
              </p>

              {/* Stats */}
              <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
                {EVENTS_CONTENT.hero.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="text-2xl sm:text-3xl font-black text-primary">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-xs font-semibold text-slate-500">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: collage */}
            <div className="relative hidden lg:block h-[420px]">
              {/* Main image */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[68%] h-64 rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 rotate-2 hover:rotate-0 transition-transform duration-500 z-10 border-4 border-white">
                <img
                  src={collage[0].image}
                  alt={collage[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
              </div>

              {/* Small image bottom-left */}
              <div className="absolute bottom-0 left-0 w-[52%] h-48 rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 -rotate-3 hover:rotate-0 transition-transform duration-500 z-20 border-4 border-white">
                <img
                  src={collage[1].image}
                  alt={collage[1].title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Small image bottom-right */}
              <div className="absolute bottom-4 right-0 w-[48%] h-44 rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 rotate-3 hover:rotate-0 transition-transform duration-500 z-20 border-4 border-white">
                <img
                  src={collage[2].image}
                  alt={collage[2].title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating date chip */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 z-30 bg-primary text-white rounded-2xl px-5 py-3 shadow-xl shadow-primary/30 flex items-center gap-2 animate-bounce">
                <CalendarDays className="w-5 h-5" />
                <span className="font-bold text-sm">
                  {events.find((e) => e.status === "Upcoming")?.date}
                </span>
              </div>

              {/* Decorative ring */}
              <div className="absolute -top-6 right-8 w-28 h-28 border-2 border-dashed border-primary/50 rounded-full animate-[spin_18s_linear_infinite]" />
            </div>
          </div>
        </div>
      </section>

      {/* Events list */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Filters */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-2 text-slate-500">
            <CalendarDays className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold uppercase tracking-wider">
              {filtered.length} {filtered.length === 1 ? "Event" : "Events"}
            </span>
          </div>

          {/* Status filter */}
          <div className="flex flex-wrap gap-2">
            {EVENTS_CONTENT.filters.map((status) => (
              <button
                key={status}
                onClick={() => setActiveStatus(status)}
                className={badgeClass(activeStatus === status)}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2.5 mb-12">
          {EVENTS_CONTENT.categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={badgeClass(activeCategory === category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((event, index) => (
              <EventCard key={event.title} event={event} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <CalendarDays className="w-14 h-14 text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-700">
              No events found
            </h3>
            <p className="text-slate-400 mt-2">
              Try adjusting the category or status filters.
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Events;
