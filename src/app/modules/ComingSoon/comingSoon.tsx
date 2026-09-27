import { Link, useLocation } from "react-router-dom";
import { Sparkles, ArrowRight, Mail } from "lucide-react";
import { ngo_name } from "../../../constant/constants";

const ComingSoon = () => {
  const { pathname } = useLocation();
  const pageName = pathname.split("/").filter(Boolean).pop() || "Page";

  const title =
    pageName.charAt(0).toUpperCase() + pageName.slice(1).replace(/-/g, " ");

  return (
    <div className="relative flex items-center justify-center min-h-[75vh] overflow-hidden bg-gradient-to-br from-slate-50 via-white to-primary/10">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-cyan-200/30 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(16,185,129,0.06)_1px,transparent_0)] bg-[size:28px_28px]" />
      </div>

      <div className="relative max-w-2xl mx-auto px-4 text-center py-24">
        <span className="inline-flex items-center gap-2 text-white bg-primary px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wider shadow-lg shadow-primary/25">
          <Sparkles className="w-4 h-4" />
          Coming Soon
        </span>

        <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1]">
          {title}
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">
            Page is Almost Ready
          </span>
        </h1>

        <p className="mt-6 text-lg text-slate-500 leading-relaxed max-w-xl mx-auto">
          We're working hard to bring you an amazing{" "}
          <span className="font-semibold text-slate-700">{title}</span> page.
          Please check back soon — or explore what we already offer.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-primary text-white px-7 py-3.5 rounded-xl font-bold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5"
          >
            Back to Home
            <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href={`mailto:brightfuturefoundationcontact@gmail.com`}
            className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-700 px-7 py-3.5 rounded-xl font-bold hover:border-primary hover:text-primary transition-all duration-300 hover:-translate-y-0.5"
          >
            <Mail className="w-5 h-5" />
            Notify Me
          </a>
        </div>

        <p className="mt-12 text-sm text-slate-400">
          © {new Date().getFullYear()} {ngo_name}
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;