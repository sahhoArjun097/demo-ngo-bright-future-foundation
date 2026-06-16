import { BookOpen, Home, Stethoscope, Users } from "lucide-react";

const IMPACT_AREAS = [
  {
    icon: BookOpen,
    title: "Primary Education",
    description: "Quality schooling for children aged 6-14 years",
    color: "bg-blue-500",
  },
  {
    icon: Stethoscope,
    title: "Health & Nutrition",
    description: "Regular health checkups and nutritious meals",
    color: "bg-green-500",
  },
  {
    icon: Users,
    title: "Teacher Training",
    description: "Professional development for educators",
    color: "bg-purple-500",
  },
  {
    icon: Home,
    title: "Infrastructure",
    description: "Building classrooms and learning spaces",
    color: "bg-orange-500",
  },
];
const ImpactSection = () => (
  <section id="impact" className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Where Your Donation Goes
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Every rupee is carefully allocated to maximize impact and ensure
          transparent utilization.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {IMPACT_AREAS.map((area, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100"
          >
            <div
              className={`${area.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
            >
              <area.icon className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {area.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {area.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default ImpactSection;
