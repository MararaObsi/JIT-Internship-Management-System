import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { User, Briefcase, CheckCircle, XCircle, Clock } from "lucide-react";

const AdvisorStudents = () => {
  const [students, setStudents] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:5000/api/advisor/students",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setStudents(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-gray-100">
      <Header />

      <main className="flex-grow max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold text-blue-900 mb-6">My Students</h1>
        <p className="text-gray-600 mb-8">
          View all assigned students and track their internship status.
        </p>

        {students.length === 0 ? (
          <p className="text-gray-500 text-center mt-20">No assigned students found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {students.map((app) => (
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

                {/* Status */}
                <div className="flex items-center gap-2 mb-2">
                  {app.status === "approved" && (
                    <CheckCircle className="text-green-600 w-5 h-5" />
                  )}
                  {app.status === "rejected" && (
                    <XCircle className="text-red-600 w-5 h-5" />
                  )}
                  {app.status === "pending" && (
                    <Clock className="text-yellow-600 w-5 h-5" />
                  )}
                  <span
                    className={`font-medium ${
                      app.status === "approved"
                        ? "text-green-600"
                        : app.status === "rejected"
                        ? "text-red-600"
                        : "text-yellow-600"
                    }`}
                  >
                    {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                  </span>
                </div>

                {/* Optional: Skills / Motivation */}
                {app.skills && (
                  <p className="text-sm text-gray-600 mt-2">
                    <span className="font-semibold">Skills:</span> {app.skills}
                  </p>
                )}
                {app.motivation && (
                  <p className="text-sm text-gray-600 mt-1">
                    <span className="font-semibold">Motivation:</span> {app.motivation}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default AdvisorStudents;
