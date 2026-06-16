import { Mail, MapPin, Phone } from "lucide-react";
import DonationCard from "./DonationCard";
import {
  CONTACT_INFO,
  SOCIAL_LINKS,
  TAX_INFO,
} from "../../../constant/constants";

const DonationSection = () => (
  <section id="donate" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Support the Cause
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Your generosity enables us to provide quality education,
              healthcare, and nutrition to children who need it most. Every
              contribution, big or small, creates ripples of change.
            </p>
          </div>

          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-100">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                {TAX_INFO.badge}
              </div>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              {TAX_INFO.title}
            </h3>
            <p className="text-gray-600 text-sm">{TAX_INFO.description}</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-600">
                <Mail className="w-5 h-5 text-indigo-600" />
                <span>{CONTACT_INFO.email}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Phone className="w-5 h-5 text-indigo-600" />
                <span>{CONTACT_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <MapPin className="w-5 h-5 text-indigo-600" />
                <span>{CONTACT_INFO.address}</span>
              </div>
            </div>
            <p className="text-sm text-gray-500">
              Available: {CONTACT_INFO.hours}
            </p>
          </div>

          <div className="flex gap-4">
            {SOCIAL_LINKS.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-indigo-600 hover:text-white flex items-center justify-center transition-all text-gray-600"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <DonationCard />
      </div>
    </div>
  </section>
);

export default DonationSection;
