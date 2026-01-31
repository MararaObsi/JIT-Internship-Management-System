import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import jitIms from "../assets/jit-ims.png";

const Home = () => {
  return (
    <>
      <Header />

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-32">
        <div className="absolute inset-0 bg-black opacity-25"></div> {/* subtle overlay */}
        <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Text */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
             JIT Internship Management System
            </h1>

            <p className="text-lg md:text-xl text-blue-100/90">
              A centralized digital platform developed for
              <span className="font-semibold text-white"> Jimma Institute of Technology </span>
              to efficiently manage student internship placement, supervision, evaluation, and stipend processing.
            </p>

            <p className="text-blue-200/90 md:text-lg">
              This system strengthens collaboration between students, academic staff, industry partners, and the University–Industry Linkage Office.
            </p>

            <Link
              to="/login"
              className="inline-block px-10 py-4 bg-yellow-400 text-blue-900 font-bold rounded-full shadow-lg hover:bg-yellow-300 transition transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Logo / Visual */}
          <div className="flex justify-center">
            <img
              src={jitIms}
              alt="Jimma University"
              className="h-72 w-72 md:h-96 md:w-96 object-contain bg-white rounded-full p-6 shadow-2xl hover:scale-105 transition-transform"
            />
          </div>
        </div>
      </section>

      {/* PURPOSE SECTION */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-4xl font-bold mb-6 text-blue-800 drop-shadow">
            Purpose of the System
          </h2>

          <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed text-lg">
            The Internship Management System was developed to address challenges associated with the traditional manual internship process. These challenges include delayed communication, lack of transparency, inefficient supervision, and difficulty in tracking student performance and stipend payments.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">

          <div className="p-8 border rounded-2xl shadow-xl hover:shadow-2xl transition-transform transform hover:-translate-y-2">
            <h3 className="text-2xl font-semibold mb-4 text-blue-800">
              Centralized Management
            </h3>
            <p className="text-gray-600 text-lg">
              All internship-related activities are managed through a single secure platform.
            </p>
          </div>

          <div className="p-8 border rounded-2xl shadow-xl hover:shadow-2xl transition-transform transform hover:-translate-y-2">
            <h3 className="text-2xl font-semibold mb-4 text-blue-800">
              Role-Based Access
            </h3>
            <p className="text-gray-600 text-lg">
              Students, advisors, coordinators, supervisors, and UIL officers access only what they are authorized to use.
            </p>
          </div>

          <div className="p-8 border rounded-2xl shadow-xl hover:shadow-2xl transition-transform transform hover:-translate-y-2">
            <h3 className="text-2xl font-semibold mb-4 text-blue-800">
              Transparency & Accountability
            </h3>
            <p className="text-gray-600 text-lg">
              Internship progress, evaluation, and payments are tracked transparently and accurately.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
