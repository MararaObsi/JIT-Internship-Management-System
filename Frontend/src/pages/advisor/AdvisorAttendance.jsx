import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  CheckCircle,
  XCircle,
  Calendar,
  Briefcase,
  User,
} from "lucide-react";

const AdvisorAttendance = () => {
  const [attendance, setAttendance] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:5000/api/advisor/attendance",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setAttendance(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAttendance();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />

      <main className="flex-grow max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold text-blue-900 mb-2">
          Student Attendance
        </h1>
        <p className="text-gray-600 mb-8">
          Attendance records submitted by supervisors
        </p>

        {attendance.length === 0 ? (
          <p className="text-center text-gray-500 mt-20">
            No attendance records found.
          </p>
        ) : (
          <div className="space-y-4">
            {attendance.map((record) => (
              <div
                key={record._id}
                className="bg-white rounded-2xl shadow p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
              >
                {/* Student */}
                <div className="flex items-center gap-3">
                  <User className="text-blue-600" />
                  <div>
                    <p className="font-semibold text-blue-900">
                      {record.student.userId.fullName}
                    </p>
                    <p className="text-sm text-gray-500">
                      {record.student.userId.email}
                    </p>
                  </div>
                </div>

                {/* Internship */}
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <Briefcase className="text-green-600" />
                  {record.internshipId.companyName}
                </div>

                {/* Date */}
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Calendar />
                  {new Date(record.date).toLocaleDateString()}
                </div>

                {/* Status */}
                <div className="flex items-center gap-2">
                  {record.status === "present" ? (
                    <>
                      <CheckCircle className="text-green-600" />
                      <span className="text-green-600 font-semibold">
                        Present
                      </span>
                    </>
                  ) : (
                    <>
                      <XCircle className="text-red-600" />
                      <span className="text-red-600 font-semibold">
                        Absent
                      </span>
                    </>
                  )}
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

export default AdvisorAttendance;
