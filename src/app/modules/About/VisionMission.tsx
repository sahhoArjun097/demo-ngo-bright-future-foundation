import { useState } from "react";
import { VisionMissionCard } from "./VisionMissionCard";
import { ABOUT_CONTENT } from "../../../constant/constants";

const VisionMission = () => {
  const content = ABOUT_CONTENT;
  const [activeTab, setActiveTab] = useState("vision");

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tab Buttons */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-white rounded-2xl p-1.5 shadow-lg shadow-slate-200/50 border border-slate-100">
            {["vision", "mission"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`
                    relative px-8 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all duration-300
                    ${
                      activeTab === tab
                        ? "bg-primary text-white shadow-lg shadow-emerald-600/25"
                        : "text-slate-500 hover:text-primary"
                    }
                  `}
              >
                {tab}
                {activeTab === tab && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="relative min-h-[500px]">
          <div
            className={`transition-all duration-500 ${activeTab === "vision" ? "opacity-100 translate-x-0" : "opacity-0 absolute inset-0 translate-x-8 pointer-events-none"}`}
          >
            <VisionMissionCard data={content.vision} />
          </div>

          <div
            className={`transition-all duration-500 ${activeTab === "mission" ? "opacity-100 translate-x-0" : "opacity-0 absolute inset-0 -translate-x-8 pointer-events-none"}`}
          >
            <VisionMissionCard data={content.mission} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
