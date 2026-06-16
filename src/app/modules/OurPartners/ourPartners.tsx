const OurPartners = () => {
  // Partner logos from your reference images
  const partners = [
    { name: "Parivartan", logo: "/partners/parivartan.png" },
    { name: "FIS", logo: "/partners/fis.png" },
    { name: "Cisco", logo: "/partners/cisco.png" },
    { name: "IndiGo", logo: "/partners/indigo.png" },
    { name: "Mitsubishi Electric", logo: "/partners/mitsubishi.png" },
    { name: "OTIS", logo: "/partners/otis.png" },
    { name: "Philips", logo: "/partners/philips.png" },
    { name: "Oracle", logo: "/partners/oracle.png" },
    { name: "Hexaware", logo: "/partners/hexaware.png" },
    { name: "Dow", logo: "/partners/dow.png" },
    { name: "Reliance", logo: "/partners/reliance.png" },
    { name: "Hab Shifa", logo: "/partners/habshifa.png" },
    { name: "HNF Foundation", logo: "/partners/hnf.png" },
    { name: "Relaxo", logo: "/partners/relaxo.png" },
    // Government & NGO partners from first image
    { name: "PSACS", logo: "/partners/psacs.png" },
    { name: "India HIV AIDS Alliance", logo: "/partners/hivaids.png" },
    { name: "SMILE Foundation", logo: "/partners/smile.png" },
    { name: "NPCL", logo: "/partners/npcl.png" },
    { name: "Delhi Commission for Women", logo: "/partners/dcw.png" },
    { name: "SBTC", logo: "/partners/sbtc.png" },
    { name: "HSACS", logo: "/partners/hsacs.png" },
    { name: "National Health Mission", logo: "/partners/nhm.png" },
    { name: "MCF Faridabad", logo: "/partners/mcf.png" },
  ];

  // Duplicate for seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="w-full py-20 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-4 py-1.5 mb-4">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
              Collaborations
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Our Partners
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Proudly supported by leading corporations, government bodies, and
            NGOs working together for social impact
          </p>
        </div>
      </div>

      {/* Infinite Scroll Slider */}
      <div className="relative w-full">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track */}
        <div className="flex animate-scroll hover:[animation-play-state:paused]">
          {duplicatedPartners.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex-shrink-0 mx-6 group"
            >
              <div className="relative w-40 h-24 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center p-4 hover:scale-105 hover:border-slate-200">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                />
                {/* Tooltip */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                  {partner.name}
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 rotate-45" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "25+", label: "Corporate Partners" },
            { number: "15+", label: "Government Bodies" },
            { number: "10+", label: "NGO Collaborations" },
            { number: "50+", label: "Years of Impact" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-sm font-medium text-slate-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <button className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
          Become a Partner
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default OurPartners;
