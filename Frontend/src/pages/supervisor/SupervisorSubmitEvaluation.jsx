import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const SupervisorSubmitEvaluation = () => {
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({});
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:5000/api/supervisor/evaluations/students",
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setStudents(data);
      } catch (error) {
        console.error(error);
        setStudents([]);
      }
    };
    fetchStudents();
  }, []);

  const handleChange = (studentId, e) => {
    setFormData({
      ...formData,
      [studentId]: { ...formData[studentId], [e.target.name]: e.target.value },
    });
  };

  const handleSubmit = async (studentId, internshipId) => {
    const data = formData[studentId];
    if (!data || !data.skills || !data.report || !data.overallPerformance) {
      alert("Please fill all required fields");
      return;
    }

    try {
      await axios.post(
        "http://localhost:5000/api/supervisor/evaluations/submit",
        {
          studentId,
          internshipId,
          skills: data.skills,
          report: data.report,
          behavior: data.behavior,
          overallPerformance: data.overallPerformance,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Evaluation submitted successfully");
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Submit Performance Evaluations
        </h1>

        {students.length === 0 ? (
          <p className="text-gray-500 text-center mt-10">
            No approved students ready for evaluation
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {students.map((app) => (
              <div
                key={app._id}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-lg font-semibold text-blue-900">
                  {app.student.userId.fullName}
                </h3>
                <p className="text-gray-500 text-sm">{app.student.userId.email}</p>
                <p className="text-gray-500 text-sm mt-1">
                  Internship: {app.internshipId.companyName}
                </p>

                {/* Evaluation Form */}
                <div className="mt-4 flex flex-col gap-3">
                  <input
                    type="text"
                    name="skills"
                    placeholder="Skills Observed"
                    className="border rounded-lg px-3 py-2"
                    onChange={(e) => handleChange(app.student._id, e)}
                  />
                  <textarea
                    name="report"
                    placeholder="Performance Report"
                    className="border rounded-lg px-3 py-2"
                    onChange={(e) => handleChange(app.student._id, e)}
                  ></textarea>
                  <input
                    type="text"
                    name="behavior"
                    placeholder="Behavior Notes"
                    className="border rounded-lg px-3 py-2"
                    onChange={(e) => handleChange(app.student._id, e)}
                  />
                  <select
                    name="overallPerformance"
                    className="border rounded-lg px-3 py-2"
                    onChange={(e) => handleChange(app.student._id, e)}
                  >
                    <option value="">Select Overall Performance</option>
                    <option value="Excellent">Excellent</option>
                    <option value="Good">Good</option>
                    <option value="Average">Average</option>
                    <option value="Poor">Poor</option>
                  </select>

                  <button
                    onClick={() => handleSubmit(app.student._id, app.internshipId._id)}
                    className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg mt-2"
                  >
                    Submit Evaluation
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

export default SupervisorSubmitEvaluation;
