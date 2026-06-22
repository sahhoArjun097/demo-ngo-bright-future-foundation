import { Link } from "react-router-dom";
import { ABOUT_CONTENT } from "../../../constant/constants";
import { ArrowUpRight } from "lucide-react";

const Contact = () => {
  const content = ABOUT_CONTENT;

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="relative bg-primary/80 rounded-3xl p-12 lg:p-16 text-center text-white overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.4%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
          </div>

          <div className="relative">
            <h2 className="text-3xl lg:text-5xl font-black mb-4">
              {content.cta.title}
            </h2>
            <p className="text-emerald-100 text-lg max-w-2xl mx-auto mb-10">
              {content.cta.subtitle}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/donation"
                className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-emerald-50 transition-all hover:shadow-xl hover:-translate-y-0.5"
              >
                {content.cta.buttonPrimary}
                <ArrowUpRight className="w-5 h-5" />
              </Link>
              <Link
                to="/volunteer"
                className="inline-flex items-center gap-2 bg-primary border border-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-primary transition-all backdrop-blur-sm"
              >
                {content.cta.buttonSecondary}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
