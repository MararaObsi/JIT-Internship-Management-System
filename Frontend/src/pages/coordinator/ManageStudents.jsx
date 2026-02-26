import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const ManageStudents = () => {
  const [applications, setApplications] = useState([]);
  const token = localStorage.getItem("token");

  /* ================= FETCH ALL STUDENTS ================= */
  const fetchApplications = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/applications/coordinator/all",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setApplications(res.data);
    } catch (error) {
      console.log(error);
      alert("Failed to load students");
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />

      <main className="flex-grow px-6 py-10 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-green-900 mb-8">
          Manage Students
        </h1>

        <div className="bg-white rounded-2xl shadow overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-green-800 text-white">
              <tr>
                <th className="p-4">Student</th>
                <th className="p-4">Company</th>
                <th className="p-4">Location</th>
                <th className="p-4">Status</th>
                <th className="p-4">Advisor</th>
                <th className="p-4">Supervisor</th>
                <th className="p-4">Applied Date</th>
              </tr>
            </thead>

            <tbody>
              {applications.map((app) => (
                <tr key={app._id} className="border-b hover:bg-gray-50">
                  <td className="p-4 font-semibold">
                    {app.student?.name}
                  </td>

                  <td className="p-4">{app.companyName}</td>

                  <td className="p-4">{app.location}</td>

                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded text-white text-sm ${
                        app.status === "approved"
                          ? "bg-green-600"
                          : app.status === "rejected"
                          ? "bg-red-600"
                          : "bg-yellow-500"
                      }`}
                    >
                      {app.status}
                    </span>
                  </td>

                  <td className="p-4">
                    {app.advisor ? app.advisor.name : "Not Assigned"}
                  </td>

                  <td className="p-4">
                    {app.supervisor ? app.supervisor.name : "Not Assigned"}
                  </td>

                  <td className="p-4">
                    {new Date(app.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {applications.length === 0 && (
            <p className="text-center p-6 text-gray-500">
              No students found.
            </p>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ManageStudents;