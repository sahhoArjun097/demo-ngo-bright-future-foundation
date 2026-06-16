const Footer = () => (
  <footer className="bg-gray-900 text-gray-300 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <div>
          <h4 className="text-white font-bold text-lg mb-4">
            Ganga Social Foundation
          </h4>
          <p className="text-sm leading-relaxed">
            Working towards a brighter future for underprivileged children
            through education and holistic development.
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Our Programs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Success Stories
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Annual Reports
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Use
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Refund Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                80G Certificate
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Newsletter</h4>
          <p className="text-sm mb-4">
            Subscribe to receive updates on our impact.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-sm flex-1 focus:outline-none focus:border-indigo-500"
            />
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 pt-8 text-center text-sm">
        <p>
          © 2026 Ganga Social Foundation. All rights reserved. Registered under
          Societies Registration Act XXI of 1860.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
