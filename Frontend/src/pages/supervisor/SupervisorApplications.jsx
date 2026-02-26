import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const SupervisorApplications = () => {
  const [applications, setApplications] = useState([]);

  const fetchApplications = async () => {
    const token = localStorage.getItem("token");

    const { data } = await axios.get(
      "http://localhost:5000/api/supervisor/applications/pending",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setApplications(data);
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  const handleDecision = async (id, decision) => {
    const token = localStorage.getItem("token");

    await axios.put(
      "http://localhost:5000/api/supervisor/applications/decide",
      {
        applicationId: id,
        decision,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    fetchApplications(); // refresh list
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />

      <main className="flex-grow max-w-6xl mx-auto p-6">
        <h1 className="text-2xl font-bold text-blue-900 mb-6">
          Pending Internship Applications
        </h1>

        {applications.length === 0 && (
          <p className="text-gray-500">No pending applications.</p>
        )}

        <div className="space-y-4">
          {applications.map((app) => (
            <div
              key={app._id}
              className="bg-white p-5 rounded-xl shadow flex justify-between items-center"
            >
              <div>
                <h3 className="font-semibold text-lg">
                  {app.student.userId.fullName}
                </h3>
                <p className="text-sm text-gray-600">
                  {app.student.userId.email}
                </p>
                <p className="text-sm text-gray-500">
                  {app.internshipId.companyName} — {app.internshipId.location}
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => handleDecision(app._id, "approved")}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                >
                  Accept
                </button>

                <button
                  onClick={() => handleDecision(app._id, "rejected")}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                >
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SupervisorApplications;
