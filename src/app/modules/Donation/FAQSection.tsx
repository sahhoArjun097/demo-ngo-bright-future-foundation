import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { FAQS } from "../../../constant/constants";

const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900">
                  {faq.question}
                </span>
                <span
                  className={`transform transition-transform duration-200 ${openIdx === idx ? "rotate-180" : ""}`}
                >
                  <ArrowRight className="w-5 h-5 text-gray-400 rotate-90" />
                </span>
              </button>
              {openIdx === idx && (
                <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default FAQSection;
