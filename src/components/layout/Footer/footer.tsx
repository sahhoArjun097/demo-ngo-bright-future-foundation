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
  Address,
} from "../../../constant/constants";
import Socials from "../../ui/socials";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const Year = new Date().getFullYear();

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="relative bg-white text-slate-800 overflow-hidden border-t border-slate-100">
      <div className="absolute inset-0 opacity-[0.4] pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20viewBox%3D%220%200%2032%2032%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2310b981%22%20fill-opacity%3D%220.06%22%3E%3Ccircle%20cx%3D%2216%22%20cy%3D%2216%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-60" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-10 mb-16">
          <div className="flex-1 lg:flex-[1.6] space-y-6 min-w-0">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Leaf className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                  {ngo_name}
                </h3>
                <p className="text-xs text-slate-400 font-medium tracking-wider uppercase">
                  {Address.address.established}
                </p>
              </div>
            </div>

            <p className="text-slate-500 leading-relaxed text-sm max-w-md">
              Working towards a brighter future for underprivileged children
              through education, healthcare, and holistic development. Every
              contribution creates lasting change.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-slate-500 hover:text-primary transition-colors group cursor-pointer">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <span>{Address.address.location}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-500 hover:text-primary transition-colors group cursor-pointer">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <span>{Address.address.phoneNo}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-500 hover:text-primary transition-colors group cursor-pointer">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <span>{Address.address.email}</span>
              </div>
            </div>

            {/* Social Links */}
            <Socials />
          </div>

          {/* Quick Links */}
          <div className="flex-shrink-0 lg:w-44">
            <h4 className="text-slate-900 font-bold mb-6 flex items-center gap-2 text-sm uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Quick Links
            </h4>
            <ul className="space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-slate-500 hover:text-primary transition-all duration-300"
                  >
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary" />
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
            <h4 className="text-slate-900 font-bold mb-6 flex items-center gap-2 text-sm uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Legal
            </h4>
            <ul className="space-y-3.5">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-slate-500 hover:text-primary transition-all duration-300"
                  >
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary" />
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
            <h4 className="text-slate-900 font-bold mb-6 flex items-center gap-2 text-sm uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Stay Connected
            </h4>

            <p className="text-sm text-slate-500 mb-6 leading-relaxed">
              Subscribe to our newsletter and be the first to know about our
              impact stories, upcoming events, and ways you can help.
            </p>

            <form onSubmit={handleSubscribe} className="relative">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-11 pr-4 py-3.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-primary text-white hover:bg-primary/90 px-5 py-3.5 rounded-xl text-sm font-bold transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 flex items-center gap-2 group flex-shrink-0"
                >
                  <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>

              <div
                className={`absolute -bottom-8 left-0 text-sm text-primary font-medium transition-all duration-300 ${
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
        <div className="relative border-t border-slate-100 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-5">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-sm text-slate-400 text-center md:text-left">
              <span>© {Year}</span>
              <span className="font-semibold text-slate-700 tracking-wide">
                {ngo_name}
              </span>
              <span className="hidden sm:inline text-slate-300">•</span>
              <span>Registered under Societies Act XXI of 1860</span>
            </div>

            <div className="group flex items-center gap-2 text-sm text-slate-400">
              <span>Crafted with</span>
              <Heart className="w-4 h-4 text-red-400 fill-red-400 animate-pulse" />
              <span>for a better tomorrow by</span>
              <a
                href="https://arjunagarwal.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-slate-600 transition-all duration-300 hover:text-primary hover:underline underline-offset-4"
              >
                Arjun Agarwal
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
