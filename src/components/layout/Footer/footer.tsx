import { useState } from "react";
import {
  Heart,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Send,
  Leaf,
} from "lucide-react";
import {
  legalLinks,
  ngo_name,
  quickLinks,
  SOCIAL_LINKS,
} from "../../../constant/constants";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="relative bg-emerald-950 text-emerald-100 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(16,185,129,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.4%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 mb-16">
          <div className="flex-1 lg:flex-[1.5] space-y-6 min-w-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center">
                <Leaf className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">{ngo_name}</h3>
            </div>

            <p className="text-emerald-200/70 leading-relaxed text-sm">
              Working towards a brighter future for underprivileged children
              through education, healthcare, and holistic development. Every
              contribution creates lasting change.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-emerald-200/60 hover:text-emerald-200 transition-colors">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>123 Charity Lane, New Delhi, India 110001</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-emerald-200/60 hover:text-emerald-200 transition-colors">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-emerald-200/60 hover:text-emerald-200 transition-colors">
                <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>
                  contact@{ngo_name.toLowerCase().replace(/\s+/g, "")}.org
                </span>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-emerald-800/50 border border-emerald-700/50 flex items-center justify-center hover:bg-emerald-600 hover:border-emerald-500 transition-all duration-300 hover:-translate-y-1 group"
                >
                  <social.icon className="w-4 h-4 text-emerald-300 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex-shrink-0 lg:w-40">
            <h4 className="text-white font-semibold mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-emerald-200/60 hover:text-emerald-300 transition-all duration-300"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-shrink-0 lg:w-40">
            <h4 className="text-white font-semibold mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Legal
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-emerald-200/60 hover:text-emerald-300 transition-all duration-300"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1 lg:flex-[1.2] min-w-0">
            <h4 className="text-white font-semibold mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Stay Connected
            </h4>

            <p className="text-sm text-emerald-200/60 mb-6 leading-relaxed">
              Subscribe to our newsletter and be the first to know about our
              impact stories, upcoming events, and ways you can help.
            </p>

            <form onSubmit={handleSubscribe} className="relative">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-400/60" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-emerald-900/50 border border-emerald-700/50 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-emerald-400/40 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/30 transition-all"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-primary hover:bg-emerald-600 text-white px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-emerald-900/30 flex items-center gap-2 group flex-shrink-0"
                >
                  <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>

              <div
                className={`absolute -bottom-8 left-0 text-sm text-emerald-400 transition-all duration-300 ${
                  isSubscribed
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2"
                }`}
              >
                Thanks for subscribing!
              </div>
            </form>
          </div>
        </div>
        <div className="relative border-t border-emerald-800/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-emerald-400/50 text-center md:text-left">
              © 2026 {ngo_name}. All rights reserved. Registered under Societies
              Registration Act XXI of 1860.
            </p>

            <div className="flex items-center gap-2 text-sm text-emerald-400/50">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 fill-red-400 animate-pulse" />
              <span>for a better tomorrow</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
