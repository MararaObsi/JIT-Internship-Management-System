import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const InternshipStatus = () => {
  const [applications, setApplications] = useState([]);
  const [error, setError] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const res = await fetch(
          "http://localhost:5000/api/internships/my-statuses",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        const data = await res.json();
        if (!res.ok) throw new Error(data.message || "Failed to fetch statuses");
        setApplications(data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchStatus();
  }, [token]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-grow max-w-4xl mx-auto py-12 px-6">
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Internship Application Status
        </h1>

        {error && (
          <div className="bg-red-100 text-red-700 p-4 rounded-lg">{error}</div>
        )}
        {!applications.length && !error && (
          <p className="text-center text-gray-500">Loading...</p>
        )}

        {applications.map((application) => (
          <div
            key={application._id}
            className="bg-white rounded-2xl shadow-xl p-8 mb-6 space-y-6"
          >
            <div>
              <h2 className="text-2xl font-bold text-blue-900">
                {application.companyName}
              </h2>
              <p className="text-gray-500">{application.location}</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="font-semibold">Status:</span>
              <span
                className={`px-4 py-1 rounded-full text-white text-sm font-bold ${
                  application.status === "approved"
                    ? "bg-green-600"
                    : application.status === "rejected"
                    ? "bg-red-600"
                    : "bg-yellow-500"
                }`}
              >
                {application.status.toUpperCase()}
              </span>
            </div>

            <div>
              <h3 className="font-semibold mb-1">Motivation</h3>
              <p className="text-gray-700">
                {application.motivation || "Not provided"}
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-1">Skills</h3>
              <p className="text-gray-700">{application.skills || "Not provided"}</p>
            </div>

            {application.report && (
              <div>
                <h3 className="font-semibold mb-1">Uploaded Report</h3>
                <a
                  href={`http://localhost:5000/${application.report}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  View Report
                </a>
              </div>
            )}
          </div>
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default InternshipStatus;
