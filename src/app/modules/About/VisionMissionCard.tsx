import { ChevronRight, type LucideIcon } from "lucide-react";
type VisionMissionData = {
  icon: LucideIcon;
  label: string;
  title: string;
  highlight: string;
  description: string;
  points: string[];
  image: string;
  imageAlt: string;
};

type VisionMissionCardProps = {
  data: VisionMissionData;
};

export const VisionMissionCard = ({ data }: VisionMissionCardProps) => {
  const Icon = data.icon;

  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div className="order-2 lg:order-1">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-primary text-primary text-sm font-semibold mb-6">
          <Icon className="w-4 h-4" />
          {data.label}
        </div>

        <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-2">
          {data.title}
        </h2>
        <h2 className="text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-primary mb-8">
          {data.highlight}
        </h2>

        <p className="text-lg text-slate-500 leading-relaxed mb-8">
          {data.description}
        </p>

        <ul className="space-y-4">
          {data.points.map((point, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <ChevronRight className="w-3 h-3 text-primary" />
              </div>
              <span className="text-slate-600">{point}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="order-1 lg:order-2 relative">
        <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-slate-100 shadow-2xl">
          <img
            src={data.image}
            alt={data.imageAlt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/20 to-transparent" />
        </div>

        <div className="absolute -top-4 -right-4 w-24 h-24 border-r-4 border-t-4 border-primary rounded-tr-3xl" />
        <div className="absolute -bottom-4 -left-4 w-24 h-24 border-l-4 border-b-4 border-primary rounded-bl-3xl" />

        {/* Floating badge */}
        <div className="absolute -bottom-6 left-8 bg-white rounded-xl shadow-lg px-4 py-2 border border-emerald-100 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm font-bold text-slate-700">{data.label}</span>
        </div>
      </div>
    </div>
  );
};
