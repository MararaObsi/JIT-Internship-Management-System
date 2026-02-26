import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { User, Briefcase, FileText, Download, Clock } from "lucide-react";

const AdvisorReports = () => {
  const [reports, setReports] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:5000/api/advisor/reports",
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setReports(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchReports();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />

      <main className="flex-grow max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold text-blue-900 mb-6">Student Reports</h1>
        <p className="text-gray-600 mb-8">
          Review submitted internship reports from your assigned students.
        </p>

        {reports.length === 0 ? (
          <p className="text-gray-500 text-center mt-20">No reports submitted yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reports.map((app) => (
              <div
                key={app._id}
                className="bg-white rounded-3xl shadow-xl p-6 hover:shadow-2xl transition transform hover:-translate-y-1"
              >
                {/* Student Info */}
                <div className="flex items-center gap-4 mb-4">
                  {app.student.profileImage ? (
                    <img
                      src={`http://localhost:5000${app.student.profileImage}`}
                      alt={app.student.userId.fullName}
                      className="w-12 h-12 rounded-full object-cover border-2 border-blue-300"
                    />
                  ) : (
                    <User className="text-blue-600 w-12 h-12" />
                  )}
                  <div>
                    <h2 className="text-lg font-semibold text-blue-900">
                      {app.student.userId.fullName}
                    </h2>
                    <p className="text-sm text-gray-500">{app.student.userId.email}</p>
                  </div>
                </div>

                {/* Internship Info */}
                <div className="flex items-center gap-2 mb-3">
                  <Briefcase className="text-green-600 w-5 h-5" />
                  <p className="text-sm text-gray-700">
                    {app.internshipId.companyName} - {app.internshipId.location}
                  </p>
                </div>

                {/* Report */}
                {/* Report Actions */}
{/* Report Section */}
{app.report ? (
  <div className="mt-4 space-y-3">
    <div className="flex items-center gap-2 text-gray-700">
      <FileText className="text-yellow-600 w-5 h-5 shrink-0" />
      <span className="text-sm font-semibold">Internship Report</span>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {/* View Button */}
      <a
        href={`http://localhost:5000/${app.report}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl
                   bg-blue-600 text-white text-sm font-medium
                   hover:bg-blue-700 transition shadow"
      >
        <FileText className="w-4 h-4" />
        View Report
      </a>

      {/* Download Button */}
      <a
        href={`http://localhost:5000/api/advisor/download-report?path=${app.report}`}
        className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl
                   bg-green-600 text-white text-sm font-medium
                   hover:bg-green-700 transition shadow"
      >
        <Download className="w-4 h-4" />
        Download Report
      </a>
    </div>
  </div>
) : (
  <p className="text-gray-500 text-sm mt-3">No report submitted yet.</p>
)}


                {/* Status */}
                <div className="mt-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      app.status === "approved"
                        ? "bg-green-100 text-green-800"
                        : app.status === "pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default AdvisorReports;
