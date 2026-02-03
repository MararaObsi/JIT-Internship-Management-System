import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { GraduationCap, FileText, ClipboardCheck, Wallet, Building2, User } from "lucide-react";

const StudentDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />

      {/* Dashboard Body */}
      <main className="flex-grow px-6 py-10 max-w-7xl mx-auto">
        {/* Welcome Section */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-blue-900">
            Student Dashboard
          </h1>
          <p className="text-gray-600 mt-1">
            Manage your internship journey from application to stipend payment
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow">
            <ClipboardCheck className="text-blue-700 mb-3" />
            <h3 className="text-sm text-gray-500">Internship Status</h3>
            <p className="text-xl font-bold text-blue-900">Pending</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow">
            <Building2 className="text-blue-700 mb-3" />
            <h3 className="text-sm text-gray-500">Placement</h3>
            <p className="text-xl font-bold text-blue-900">Not Assigned</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow">
            <FileText className="text-blue-700 mb-3" />
            <h3 className="text-sm text-gray-500">Report Status</h3>
            <p className="text-xl font-bold text-blue-900">Not Submitted</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow">
            <Wallet className="text-blue-700 mb-3" />
            <h3 className="text-sm text-gray-500">Stipend</h3>
            <p className="text-xl font-bold text-blue-900">0 Birr</p>
          </div>
        </div>

        {/* Main Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link to="/student/profile" className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <User className="text-blue-800 mb-4" />
            <h3 className="text-lg font-semibold text-blue-900">My Profile</h3>
            <p className="text-gray-600 text-sm mt-1">View and update your personal information</p>
          </Link>

          <Link to="/student/internship" className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <GraduationCap className="text-blue-800 mb-4" />
            <h3 className="text-lg font-semibold text-blue-900">Apply for Internship</h3>
            <p className="text-gray-600 text-sm mt-1">Submit internship application and track approval</p>
          </Link>

          <Link to="/student/report" className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <FileText className="text-blue-800 mb-4" />
            <h3 className="text-lg font-semibold text-blue-900">Upload Report</h3>
            <p className="text-gray-600 text-sm mt-1">Upload and manage internship reports</p>
          </Link>

          <Link to="/student/attendance" className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <ClipboardCheck className="text-blue-800 mb-4" />
            <h3 className="text-lg font-semibold text-blue-900">Attendance</h3>
            <p className="text-gray-600 text-sm mt-1">View supervisor-submitted attendance records</p>
          </Link>

          <Link to="/student/evaluation" className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <GraduationCap className="text-blue-800 mb-4" />
            <h3 className="text-lg font-semibold text-blue-900">Evaluation</h3>
            <p className="text-gray-600 text-sm mt-1">View advisor and supervisor evaluations</p>
          </Link>

          <Link to="/student/stipend" className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <Wallet className="text-blue-800 mb-4" />
            <h3 className="text-lg font-semibold text-blue-900">Stipend Payment</h3>
            <p className="text-gray-600 text-sm mt-1">Track stipend calculation and payment status</p>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default StudentDashboard;
