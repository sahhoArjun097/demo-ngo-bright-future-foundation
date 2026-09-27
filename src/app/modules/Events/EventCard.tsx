import { Calendar, MapPin, Users } from "lucide-react";
import type { EventItem } from "../../../constant/constants-types";

const EventCard = ({ event, index }: { event: EventItem; index: number }) => {
  const isUpcoming = event.status === "Upcoming";

  return (
    <article className="group relative rounded-3xl overflow-hidden bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2">
      {/* Image */}
      <div className="relative h-56">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/10 to-transparent" />
        </div>

        {/* Status badge */}
        <span
          className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white ${
            isUpcoming ? "bg-green-500" : "bg-slate-500/80 backdrop-blur"
          }`}
        >
          {event.status}
        </span>

        {/* Index number */}
        <span className="absolute top-3 right-4 text-6xl font-black text-white/15 select-none group-hover:text-white/25 transition-colors">
          0{index + 1}
        </span>

        {/* Date badge */}
        <div className="absolute -bottom-5 left-4 bg-primary text-white rounded-xl px-4 py-2 z-10 shadow-lg shadow-primary/30 flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          <span className="text-sm font-bold">{event.date}</span>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 pt-9">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
            {event.category}
          </span>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
          {event.title}
        </h3>
        <p className="text-sm text-slate-500 leading-relaxed mb-5 line-clamp-2">
          {event.description}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-primary" />
              {event.location}
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5">
              <Users className="w-4 h-4 text-primary" />
              {event.attendees.toLocaleString("en-IN")}
            </span>
          </div>

          <span className="w-9 h-9 rounded-full border-2 border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-300 group-hover:rotate-45">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17L17 7" />
              <path d="M9 7h8v8" />
            </svg>
          </span>
        </div>
      </div>
    </article>
  );
};

export default EventCard;
