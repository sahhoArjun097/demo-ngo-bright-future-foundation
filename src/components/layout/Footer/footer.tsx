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
    <footer className="relative bg-primary text-white overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23000000%22%20fill-opacity%3D%221%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
      </div>

      {/* Top wave decoration */}
      <div className="absolute top-0 left-0 right-0 -translate-y-[99%]">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full h-auto">
          <path
            d="M0 60L48 55C96 50 192 40 288 37.5C384 35 480 40 576 45C672 50 768 55 864 52.5C960 50 1056 40 1152 37.5C1248 35 1344 40 1392 42.5L1440 45V60H0Z"
            fill="#8BC34A"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-10 mb-16">
          {/* Brand Column */}
          <div className="flex-1 lg:flex-[1.6] space-y-6 min-w-0">
            {/* Logo + Name */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center backdrop-blur-sm">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-white tracking-tight">
                  {ngo_name}
                </h3>
                <p className="text-xs text-white/60 font-medium tracking-wider uppercase">
                  Registered NGO · Est. 2003
                </p>
              </div>
            </div>

            <p className="text-white/80 leading-relaxed text-sm max-w-md">
              Working towards a brighter future for underprivileged children
              through education, healthcare, and holistic development. Every
              contribution creates lasting change.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <span>123 Charity Lane, New Delhi, India 110001</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <span>
                  contact@
                  {ngo_name.toLowerCase().replace(/\s+/g, "")}.org
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 pt-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white hover:border-white transition-all duration-300 hover:-translate-y-1 group"
                >
                  <social.icon className="w-4 h-4 text-white group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex-shrink-0 lg:w-44">
            <h4 className="text-white font-bold mb-6 flex items-center gap-2 text-sm uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-white" />
              Quick Links
            </h4>
            <ul className="space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-white/70 hover:text-white transition-all duration-300"
                  >
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="flex-shrink-0 lg:w-44">
            <h4 className="text-white font-bold mb-6 flex items-center gap-2 text-sm uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-white" />
              Legal
            </h4>
            <ul className="space-y-3.5">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-white/70 hover:text-white transition-all duration-300"
                  >
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="flex-1 lg:flex-[1.3] min-w-0">
            <h4 className="text-white font-bold mb-6 flex items-center gap-2 text-sm uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-white" />
              Stay Connected
            </h4>

            <p className="text-sm text-white/60 mb-6 leading-relaxed">
              Subscribe to our newsletter and be the first to know about our
              impact stories, upcoming events, and ways you can help.
            </p>

            <form onSubmit={handleSubscribe} className="relative">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/10 border border-white/20 rounded-xl pl-11 pr-4 py-3.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-white text-primary hover:bg-white/90 px-5 py-3.5 rounded-xl text-sm font-bold transition-all duration-300 hover:shadow-lg flex items-center gap-2 group flex-shrink-0"
                >
                  <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>

              <div
                className={`absolute -bottom-8 left-0 text-sm text-white font-medium transition-all duration-300 ${
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

        {/* Bottom Bar */}
        <div className="relative border-t border-white/15 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-white/50">
              <span>© 2026</span>
              <span className="font-semibold text-white/70">{ngo_name}</span>
              <span>
                · All rights reserved · Reg. under Societies Act XXI of 1860
              </span>
            </div>

            <div className="flex items-center gap-2 text-sm text-white/50">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-white fill-white animate-pulse" />
              <span>for a better tomorrow</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
