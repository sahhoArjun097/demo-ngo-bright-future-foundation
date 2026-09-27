import { useState } from "react";
import { Sparkles, HeartHandshake, Clock, Check } from "lucide-react";
import { VOLUNTEER_CONTENT } from "../../../constant/constants";
import VolunteerForm from "./VolunteerForm";

const Volunteer = () => {
  const { hero, benefits, roles } = VOLUNTEER_CONTENT;
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

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
            {/* Copy */}
            <div>
              <span className="inline-flex items-center gap-2 text-white bg-primary px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wider shadow-lg shadow-primary/25">
                <Sparkles className="w-4 h-4" />
                {hero.badge}
              </span>

              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1]">
                {hero.title}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">
                  {hero.highlight}
                </span>
              </h1>

              <p className="mt-6 text-lg text-slate-500 leading-relaxed max-w-xl">
                {hero.subtitle}
              </p>

              <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
                {hero.stats.map((stat) => (
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

              <a
                href="#volunteer-form"
                className="mt-10 inline-flex items-center gap-2 bg-primary text-white px-7 py-3.5 rounded-xl font-bold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5"
              >
                Join Us Now
                <Sparkles className="w-4 h-4" />
              </a>
            </div>

            {/* Image */}
            <div className="relative hidden lg:block">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 rotate-2 hover:rotate-0 transition-transform duration-500 border-4 border-white">
                <img
                  src="/assets/volunteerWork.png"
                  alt="Volunteers in action"
                  className="w-full h-[440px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl px-6 py-4 shadow-xl shadow-slate-200/80 border border-slate-100 flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <HeartHandshake className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-black text-slate-900">100+</div>
                  <div className="text-xs text-slate-400 font-medium">
                    Volunteers Strong
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            <span className="w-8 h-px bg-primary" />
            Why Volunteer With Us
            <span className="w-8 h-px bg-primary" />
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900">
            More Than Just{" "}
            <span className="text-transparent bg-clip-text bg-primary">
              Giving Back
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group bg-white rounded-2xl p-7 border border-slate-100 hover:border-primary hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
                <benefit.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Roles */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              <span className="w-8 h-px bg-primary" />
              Open Roles
              <span className="w-8 h-px bg-primary" />
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900">
              Find Your{" "}
              <span className="text-transparent bg-clip-text bg-primary">
                Perfect Fit
              </span>
            </h2>
            <p className="mt-4 text-lg text-slate-500">
              Pick a role that matches your skills, interests and availability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {roles.map((role) => {
              const isSelected = selectedRole === role.title;
              return (
                <button
                  key={role.title}
                  onClick={() =>
                    setSelectedRole((prev) =>
                      prev === role.title ? null : role.title,
                    )
                  }
                  className={`text-left group bg-white rounded-2xl p-7 border-2 flex flex-col transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? "border-primary shadow-xl shadow-primary/10 -translate-y-1"
                      : "border-slate-100 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3
                      className={`text-xl font-bold transition-colors ${
                        isSelected
                          ? "text-primary"
                          : "text-slate-900 group-hover:text-primary"
                      }`}
                    >
                      {role.title}
                    </h3>
                    <span
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                        isSelected
                          ? "bg-primary text-white"
                          : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white"
                      }`}
                    >
                      {isSelected ? (
                        <Check className="w-5 h-5" />
                      ) : (
                        <Clock className="w-5 h-5" />
                      )}
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed flex-1">
                    {role.desc}
                  </p>
                  <span
                    className={`mt-5 inline-flex items-center justify-center text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full transition-colors ${
                      isSelected
                        ? "bg-primary text-white"
                        : "bg-primary/10 text-primary"
                    }`}
                  >
                    {isSelected ? "Selected" : role.commitment}
                  </span>
                </button>
              );
            })}
          </div>

          <p className="text-center text-sm text-slate-400">
            {selectedRole
              ? `Selected role: ${selectedRole} — continue to the form below.`
              : "Select a role above and it will be pre-filled in the application form below."}
          </p>
        </div>
      </section>

      {/* Registration form */}
      <VolunteerForm
        selectedRole={selectedRole}
        onSelectedRoleChange={setSelectedRole}
      />
    </div>
  );
};

export default Volunteer;