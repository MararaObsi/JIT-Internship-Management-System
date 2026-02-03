import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { FileText, Users, DollarSign, Clipboard, CheckCircle, Settings } from "lucide-react";

const UILDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />

      <main className="flex-grow px-6 py-10 max-w-7xl mx-auto">
        {/* Welcome Section */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-blue-900">
            UIL Officer Dashboard
          </h1>
          <p className="text-gray-600 mt-1">
            Manage placements, stipends, evaluations, and all internship-related activities
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow">
            <Users className="text-blue-700 mb-3" />
            <h3 className="text-sm text-gray-500">Total Students</h3>
            <p className="text-xl font-bold text-blue-900">120</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow">
            <CheckCircle className="text-blue-700 mb-3" />
            <h3 className="text-sm text-gray-500">Placements Approved</h3>
            <p className="text-xl font-bold text-blue-900">95</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow">
            <DollarSign className="text-blue-700 mb-3" />
            <h3 className="text-sm text-gray-500">Stipends Processed</h3>
            <p className="text-xl font-bold text-blue-900">80</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow">
            <FileText className="text-blue-700 mb-3" />
            <h3 className="text-sm text-gray-500">Reports Submitted</h3>
            <p className="text-xl font-bold text-blue-900">102</p>
          </div>
        </div>

        {/* Main Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link
            to="/uil/placements"
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
            <CheckCircle className="text-blue-800 mb-4" />
            <h3 className="text-lg font-semibold text-blue-900">Approve Placements</h3>
            <p className="text-gray-600 text-sm mt-1">
              Review and approve or reject internship placement applications
            </p>
          </Link>

          <Link
            to="/uil/assign-advisors"
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
            <Users className="text-blue-800 mb-4" />
            <h3 className="text-lg font-semibold text-blue-900">Assign Advisors</h3>
            <p className="text-gray-600 text-sm mt-1">
              Assign academic advisors to students for supervision
            </p>
          </Link>

          <Link
            to="/uil/attendance"
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
            <Clipboard className="text-blue-800 mb-4" />
            <h3 className="text-lg font-semibold text-blue-900">Monitor Attendance</h3>
            <p className="text-gray-600 text-sm mt-1">
              Track student attendance reported by supervisors
            </p>
          </Link>

          <Link
            to="/uil/evaluations"
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
            <FileText className="text-blue-800 mb-4" />
            <h3 className="text-lg font-semibold text-blue-900">View Evaluations</h3>
            <p className="text-gray-600 text-sm mt-1">
              Check evaluations submitted by supervisors and advisors
            </p>
          </Link>

          <Link
            to="/uil/stipends"
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
            <DollarSign className="text-blue-800 mb-4" />
            <h3 className="text-lg font-semibold text-blue-900">Process Stipends</h3>
            <p className="text-gray-600 text-sm mt-1">
              Approve and track student internship allowance payments
            </p>
          </Link>

          <Link
            to="/uil/reports"
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
            <Settings className="text-blue-800 mb-4" />
            <h3 className="text-lg font-semibold text-blue-900">Generate Reports</h3>
            <p className="text-gray-600 text-sm mt-1">
              Generate comprehensive reports on placements, performance, and stipend payments
            </p>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default UILDashboard;
