import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { CheckCircle, XCircle, Clipboard, User } from "lucide-react";

const SupervisorDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />

      <main className="flex-grow px-6 py-10 max-w-7xl mx-auto">
        {/* Welcome Section */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-blue-900">
            Supervisor Dashboard
          </h1>
          <p className="text-gray-600 mt-1">
            Manage student applications, track attendance, and upload evaluations
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow">
            <User className="text-blue-700 mb-3" />
            <h3 className="text-sm text-gray-500">Assigned Students</h3>
            <p className="text-xl font-bold text-blue-900">12</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow">
            <CheckCircle className="text-blue-700 mb-3" />
            <h3 className="text-sm text-gray-500">Applications Accepted</h3>
            <p className="text-xl font-bold text-blue-900">8</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow">
            <XCircle className="text-blue-700 mb-3" />
            <h3 className="text-sm text-gray-500">Applications Rejected</h3>
            <p className="text-xl font-bold text-blue-900">2</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow">
            <Clipboard className="text-blue-700 mb-3" />
            <h3 className="text-sm text-gray-500">Evaluations Submitted</h3>
            <p className="text-xl font-bold text-blue-900">6</p>
          </div>
        </div>

        {/* Main Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link
            to="/supervisor/students"
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
            <User className="text-blue-800 mb-4" />
            <h3 className="text-lg font-semibold text-blue-900">View Assigned Students</h3>
            <p className="text-gray-600 text-sm mt-1">
              See the list of students assigned to your supervision
            </p>
          </Link>

          <Link
            to="/supervisor/applications"
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
            <CheckCircle className="text-blue-800 mb-4" />
            <h3 className="text-lg font-semibold text-blue-900">Approve/Reject Applications</h3>
            <p className="text-gray-600 text-sm mt-1">
              Review internship applications and decide acceptance
            </p>
          </Link>

          <Link
            to="/supervisor/attendance"
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
            <Clipboard className="text-blue-800 mb-4" />
            <h3 className="text-lg font-semibold text-blue-900">Track Attendance</h3>
            <p className="text-gray-600 text-sm mt-1">
              Monitor and record daily attendance of interns
            </p>
          </Link>

          <Link
            to="/supervisor/evaluations"
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
            <Clipboard className="text-blue-800 mb-4" />
            <h3 className="text-lg font-semibold text-blue-900">Submit Evaluations</h3>
            <p className="text-gray-600 text-sm mt-1">
              Upload performance evaluations for your assigned interns
            </p>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SupervisorDashboard;
