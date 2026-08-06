import { privacyPolicydummy } from "../../../constant/constants";
const PrivacyPolicyPage = () => {
  return (
    <section className="max-w-5xl mx-auto px-5 py-20">
      <h1 className="text-4xl font-bold">{privacyPolicydummy.title}</h1>

      <p className="text-sm text-gray-500 mt-2">
        Last Updated: {privacyPolicydummy.lastUpdated}
      </p>

      <div className="space-y-4 mt-8">
        {privacyPolicydummy.introduction.map((item, index) => (
          <p key={index} className="text-gray-700 leading-8">
            {item}
          </p>
        ))}
      </div>

      <div className="mt-12 space-y-10">
        {privacyPolicydummy.sections.map((section) => (
          <div key={section.id} className="border-b pb-8">
            <h2 className="text-2xl font-semibold mb-3">
              {section.id}. {section.title}
            </h2>

            <p className="leading-8 text-gray-600">{section.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-xl border bg-gray-50 p-8">
        <h2 className="text-2xl font-semibold mb-5">Important Notice</h2>

        <ul className="space-y-3 list-disc pl-5">
          {privacyPolicydummy.importantNotice.map((item, index) => (
            <li key={index} className="leading-7 text-gray-700">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PrivacyPolicyPage;
