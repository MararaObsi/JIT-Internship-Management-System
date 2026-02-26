import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const SupervisorAttendance = () => {
  const [applications, setApplications] = useState([]);
  const [date, setDate] = useState("");

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/attendance/students",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setApplications(res.data);
      } catch (error) {
        console.error("Fetch students error:", error);
        setApplications([]);
      }
    };

    fetchStudents();
  }, [token]);

  const markAttendance = async (studentId, internshipId, status) => {
    if (!date) {
      alert("Please select a date");
      return;
    }

    try {
      await axios.post(
        "http://localhost:5000/api/attendance/mark",
        { studentId, internshipId, date, status },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      alert("Attendance saved successfully");
    } catch (error) {
      console.error("Mark attendance error:", error);
      alert("Failed to mark attendance");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-100 to-gray-200">
      <Header />

      <main className="flex-grow max-w-6xl mx-auto p-6">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 text-center">
          Attendance Tracking
        </h1>

       
        <div className="flex justify-center mb-8">
          <input
            type="date"
            className="border border-gray-300 px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        
        {applications.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">
            No assigned students
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((app) => (
              <div
                key={app._id}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
              >
                <h2 className="font-bold text-xl text-gray-800 mb-1">
                  {app.student.userId.fullName}
                </h2>
                <p className="text-sm text-gray-500 mb-1">
                  {app.student.userId.email}
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  {app.internshipId.companyName} - {app.internshipId.location}
                </p>

                <div className="flex gap-4">
                  <button
                    onClick={() =>
                      markAttendance(app.student._id, app.internshipId._id, "present")
                    }
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition-colors duration-300 shadow"
                  >
                    Present
                  </button>

                  <button
                    onClick={() =>
                      markAttendance(app.student._id, app.internshipId._id, "absent")
                    }
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg transition-colors duration-300 shadow"
                  >
                    Absent
                  </button>
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

export default SupervisorAttendance;
