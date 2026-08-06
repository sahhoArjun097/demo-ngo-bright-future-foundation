import { termsAndConditionsdummy } from "../../../constant/constants";

const TermsCondition = () => {
  return (
    <section className="max-w-5xl mx-auto px-5 py-16">
      {/* Header */}
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900">
          {termsAndConditionsdummy.title}
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Last Updated: {termsAndConditionsdummy.lastUpdated}
        </p>
      </header>

      {/* Introduction */}
      <div className="space-y-5">
        {termsAndConditionsdummy.introduction.map((paragraph, index) => (
          <p key={index} className="text-gray-600 leading-8">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Sections */}
      <div className="mt-14 space-y-10">
        {termsAndConditionsdummy.sections.map((section) => (
          <article key={section.id} className="border-b border-gray-200 pb-8">
            <h2 className="text-2xl font-semibold mb-3">
              {section.id}. {section.title}
            </h2>

            <p className="leading-8 text-gray-600">{section.description}</p>
          </article>
        ))}
      </div>

      {/* Important Notice */}
      <div className="mt-16 rounded-2xl border border-yellow-200 bg-yellow-50 p-8">
        <h2 className="text-2xl font-semibold text-yellow-900 mb-5">
          Important Notice
        </h2>

        <ul className="space-y-3 list-disc pl-5">
          {termsAndConditionsdummy.importantNotice.map((notice, index) => (
            <li key={index} className="leading-7 text-yellow-900">
              {notice}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TermsCondition;
