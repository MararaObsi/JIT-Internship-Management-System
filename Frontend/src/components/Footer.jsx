import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* About */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">
            JIT Internship Management System
          </h3>
          <p className="text-sm">
            A web-based system developed for Jimma Institute of Technology
            to automate internship placement, supervision, evaluation,
            and stipend management.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link to="/login" className="hover:text-white">Sign In</Link></li>
            <li><Link to="/register" className="hover:text-white">Sign Up</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">
            Contact
          </h3>
          <p className="text-sm">
            Jimma University<br />
            Jimma Institute of Technology<br />
            University–Industry Linkage Office
          </p>
        </div>
      </div>

      <div className="text-center text-sm text-gray-400 border-t border-gray-700 py-4">
        © {new Date().getFullYear()} Jimma Institute of Technology. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
