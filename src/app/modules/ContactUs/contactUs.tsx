import HeroSection from "./HeroSection";

const ContactUs = () => {
  return (
    <section id="contact" className="relative bg-white overflow-hidden">
      <HeroSection />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div
          className="bg-gradient-to-br from-primary to-teal-6
        00 rounded-3xl p-8 lg:p-12 text-center text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.4%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
          </div>
          <div className="relative">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Still Have Questions?
            </h3>
            <p className="text-emerald-100 text-lg max-w-2xl mx-auto mb-8">
              Check out our frequently asked questions or reach out to our
              support team for immediate assistance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#faq"
                className="bg-white text-primary px-8 py-3.5 rounded-xl font-bold hover:bg-emerald-50 transition-all hover:shadow-xl"
              >
                View FAQs
              </a>
              <a
                href="tel:+919876543210"
                className="bg-primary border border-primary text-white px-8 py-3.5 rounded-xl font-bold hover:bg-emerald-700/70 transition-all backdrop-blur-sm"
              >
                Call Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
