import { useState, type ChangeEvent, type FormEvent } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  AlertCircle,
  Send,
  Heart,
  BadgeCheck,
} from "lucide-react";
import { VOLUNTEER_CONTENT } from "../../../constant/constants";

const inputClass =
  "w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 py-3.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 transition-all";

const VolunteerForm = ({
  selectedRole,
  onSelectedRoleChange,
}: {
  selectedRole: string | null;
  onSelectedRoleChange: (role: string | null) => void;
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    role: selectedRole ?? "",
    interest: "",
    motivation: "",
  });

  const handleRoleChange = (value: string) => {
    onSelectedRoleChange(value || null);
    setFormData((prev) => ({ ...prev, role: value }));
  };
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "success" | "error" | null
  >(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus("success");
      onSelectedRoleChange(null);
      setFormData({
        name: "",
        email: "",
        phone: "",
        city: "",
        role: "",
        interest: "",
        motivation: "",
      });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section
      id="volunteer-form"
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-primary/5 py-20"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-cyan-200/30 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(16,185,129,0.06)_1px,transparent_0)] bg-[size:28px_28px]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-white bg-primary px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wider shadow-lg shadow-primary/25">
            <Heart className="w-4 h-4" />
            Join Our Team
          </span>
          <h2 className="mt-5 text-4xl lg:text-5xl font-black text-slate-900">
            Become a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">
              Volunteer
            </span>{" "}
            Today
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            Fill in the form below and our volunteer coordinator will reach out
            to you within 48 hours.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-slate-100 shadow-2xl p-8 lg:p-10">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name & Email */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
              </div>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
              </div>
            </div>

            {/* Phone & City */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
              </div>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
              </div>
            </div>

            {/* Role & Interest */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="relative">
                <BadgeCheck className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                <select
                  name="role"
                  value={selectedRole ?? formData.role}
                  onChange={(e) => handleRoleChange(e.target.value)}
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 py-3.5 text-slate-800 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 transition-all appearance-none cursor-pointer"
                >
                  <option value="" disabled>
                    Select a Role
                  </option>
                  {VOLUNTEER_CONTENT.roles.map((role) => (
                    <option key={role.title} value={role.title}>
                      {role.title} · {role.commitment}
                    </option>
                  ))}
                </select>
              </div>
              <div className="relative">
                <Heart className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 py-3.5 text-slate-800 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 transition-all appearance-none cursor-pointer"
                >
                  <option value="" disabled>
                    Area of Interest
                  </option>
                  {VOLUNTEER_CONTENT.interestAreas.map((area) => (
                    <option key={area} value={area}>
                      {area}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Motivation */}
            <div className="relative">
              <textarea
                name="motivation"
                placeholder="Tell us why you want to volunteer..."
                value={formData.motivation}
                onChange={handleChange}
                required
                rows={4}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  Apply to Volunteer
                  <Send className="w-5 h-5" />
                </>
              )}
            </button>

            {submitStatus === "success" && (
              <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-3 text-emerald-700">
                <CheckCircle className="w-5 h-5 shrink-0" />
                <span className="text-sm font-medium">
                  Application submitted successfully! Our coordinator will
                  contact you soon.
                </span>
              </div>
            )}
            {submitStatus === "error" && (
              <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-red-700">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <span className="text-sm font-medium">
                  Something went wrong. Please try again.
                </span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default VolunteerForm;