import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { User, ClipboardCheck, FileText, DollarSign, CheckCircle } from "lucide-react";

const CoordinatorDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />

      {/* Dashboard Main */}
      <main className="flex-grow px-6 py-10 max-w-7xl mx-auto">
        {/* Welcome Section */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-green-900">
            Coordinator Dashboard
          </h1>
          <p className="text-gray-600 mt-1">
            Manage student placements, assign advisors, and oversee internship progress
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow">
            <User className="text-green-700 mb-3" />
            <h3 className="text-sm text-gray-500">Total Students</h3>
            <p className="text-xl font-bold text-green-900">25</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow">
            <CheckCircle className="text-green-700 mb-3" />
            <h3 className="text-sm text-gray-500">Placements Approved</h3>
            <p className="text-xl font-bold text-green-900">18</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow">
            <ClipboardCheck className="text-green-700 mb-3" />
            <h3 className="text-sm text-gray-500">Evaluations Pending</h3>
            <p className="text-xl font-bold text-green-900">6</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow">
            <DollarSign className="text-green-700 mb-3" />
            <h3 className="text-sm text-gray-500">Stipends Processed</h3>
            <p className="text-xl font-bold text-green-900">15</p>
          </div>
        </div>

        {/* Main Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link
            to="/coordinator/students"
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
            <User className="text-green-800 mb-4" />
            <h3 className="text-lg font-semibold text-green-900">Manage Students</h3>
            <p className="text-gray-600 text-sm mt-1">
              View all assigned students and their internship status
            </p>
          </Link>

          <Link
            to="/coordinator/placements"
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
            <CheckCircle className="text-green-800 mb-4" />
            <h3 className="text-lg font-semibold text-green-900">Approve Placements</h3>
            <p className="text-gray-600 text-sm mt-1">
              Review student applications and approve internship placements
            </p>
          </Link>

          <Link
            to="/coordinator/assign-advisors"
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
            <ClipboardCheck className="text-green-800 mb-4" />
            <h3 className="text-lg font-semibold text-green-900">Assign Advisors</h3>
            <p className="text-gray-600 text-sm mt-1">
              Assign academic advisors and examiners to students
            </p>
          </Link>

          <Link
            to="/coordinator/reports"
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
            <FileText className="text-green-800 mb-4" />
            <h3 className="text-lg font-semibold text-green-900">Review Reports</h3>
            <p className="text-gray-600 text-sm mt-1">
              Check internship reports submitted by students
            </p>
          </Link>

          <Link
            to="/coordinator/stipends"
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
            <DollarSign className="text-green-800 mb-4" />
            <h3 className="text-lg font-semibold text-green-900">Stipend Management</h3>
            <p className="text-gray-600 text-sm mt-1">
              Process stipend payments and verify bank account details
            </p>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CoordinatorDashboard;
