import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const SupervisorStudents = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const token = localStorage.getItem("token");

      const { data } = await axios.get(
        "http://localhost:5000/api/supervisor/students",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setStudents(data);
    };

    fetchStudents();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />

      <main className="flex-grow max-w-6xl mx-auto p-6">
        <h1 className="text-2xl font-bold text-blue-900 mb-6">
          Assigned Students
        </h1>

        <div className="bg-white rounded-xl shadow overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-blue-50">
              <tr>
                <th className="p-3">Student Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Company</th>
                <th className="p-3">Location</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {students.map((app) => (
                <tr key={app._id} className="border-t">
                  <td className="p-3">
                    {app.student.userId.fullName}
                  </td>
                  <td className="p-3">
                    {app.student.userId.email}
                  </td>
                  <td className="p-3">
                    {app.internshipId.companyName}
                  </td>
                  <td className="p-3">
                    {app.internshipId.location}
                  </td>
                  <td className="p-3 capitalize text-green-600">
                    {app.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SupervisorStudents;
