import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { FileText, ClipboardCheck, User, GraduationCap } from "lucide-react";

const AdvisorDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />

      {/* Dashboard Body */}
      <main className="flex-grow px-6 py-10 max-w-7xl mx-auto">
        {/* Welcome Section */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-blue-900">
            Advisor Dashboard
          </h1>
          <p className="text-gray-600 mt-1">
            Monitor student progress, review reports, and submit evaluations
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow">
            <ClipboardCheck className="text-blue-700 mb-3" />
            <h3 className="text-sm text-gray-500">Pending Evaluations</h3>
            <p className="text-xl font-bold text-blue-900">3</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow">
            <FileText className="text-blue-700 mb-3" />
            <h3 className="text-sm text-gray-500">Reports to Review</h3>
            <p className="text-xl font-bold text-blue-900">5</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow">
            <User className="text-blue-700 mb-3" />
            <h3 className="text-sm text-gray-500">Assigned Students</h3>
            <p className="text-xl font-bold text-blue-900">12</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow">
            <GraduationCap className="text-blue-700 mb-3" />
            <h3 className="text-sm text-gray-500">Internships Monitored</h3>
            <p className="text-xl font-bold text-blue-900">8</p>
          </div>
        </div>

        {/* Main Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link
            to="/advisor/students"
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
            <User className="text-blue-800 mb-4" />
            <h3 className="text-lg font-semibold text-blue-900">My Students</h3>
            <p className="text-gray-600 text-sm mt-1">
              View assigned students and their internship progress
            </p>
          </Link>

          <Link
            to="/advisor/reports"
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
            <FileText className="text-blue-800 mb-4" />
            <h3 className="text-lg font-semibold text-blue-900">Review Reports</h3>
            <p className="text-gray-600 text-sm mt-1">
              Check internship reports submitted by students
            </p>
          </Link>

          <Link
            to="/advisor/evaluations"
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
            <ClipboardCheck className="text-blue-800 mb-4" />
            <h3 className="text-lg font-semibold text-blue-900">Submit Evaluations</h3>
            <p className="text-gray-600 text-sm mt-1">
              Record student performance and feedback during internships
            </p>
          </Link>

          <Link
            to="/advisor/attendance"
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
            <ClipboardCheck className="text-blue-800 mb-4" />
            <h3 className="text-lg font-semibold text-blue-900">Attendance</h3>
            <p className="text-gray-600 text-sm mt-1">
              Monitor student attendance submitted by industry supervisors
            </p>
          </Link>

          <Link
            to="/advisor/internship-status"
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
            <GraduationCap className="text-blue-800 mb-4" />
            <h3 className="text-lg font-semibold text-blue-900">Internship Status</h3>
            <p className="text-gray-600 text-sm mt-1">
              Track the overall progress of students’ internships
            </p>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AdvisorDashboard;
