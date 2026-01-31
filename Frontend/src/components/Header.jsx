import { Link } from "react-router-dom";
import jimmaLogo from "../assets/jimma-logo.png";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-700 shadow-2xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo + University Name */}
        <Link to="/" className="flex items-center gap-4">
          <img
            src={jimmaLogo}
            alt="Jimma University Logo"
            className="h-16 w-16 object-contain bg-white rounded-full p-1 shadow-lg"
          />
          <div className="text-white leading-tight">
            <h1 className="text-lg md:text-xl font-bold drop-shadow">
              Jimma University
            </h1>
            <p className="text-sm md:text-base text-blue-200">
              Jimma Institute of Technology
            </p>
            <p className="text-xs md:text-sm text-blue-300">
              Internship Management System
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-white font-semibold text-lg">
          <Link to="/" className="hover:text-blue-200 transition">Home</Link>
          <Link to="/about" className="hover:text-blue-200 transition">About</Link>
          <Link to="/contact" className="hover:text-blue-200 transition">Contact</Link>
          <Link to="/privacy" className="hover:text-blue-200 transition">Privacy</Link>

          <Link
            to="/login"
            className="px-5 py-2 border border-white rounded-full hover:bg-white hover:text-blue-800 transition transform hover:scale-105"
          >
            Sign In
          </Link>

          <Link
            to="/register"
            className="px-5 py-2 bg-yellow-400 text-blue-900 font-bold rounded-full hover:bg-yellow-300 transition transform hover:scale-105"
          >
            Sign Up
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
