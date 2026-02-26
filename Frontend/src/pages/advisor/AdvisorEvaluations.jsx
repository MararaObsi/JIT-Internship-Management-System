import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const AdvisorEvaluations = () => {
  const [applications, setApplications] = useState([]);
  const [form, setForm] = useState({});
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/advisor/students", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setApplications(res.data))
      .catch(console.error);
  }, []);

  const submitEvaluation = async (id) => {
    try {
      await axios.post(
        "http://localhost:5000/api/advisor/evaluations",
        {
          applicationId: id,
          ...form[id],
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Evaluation submitted");
    } catch (err) {
      alert(err.response?.data?.message || "Failed");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />

      <main className="flex-grow max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold text-blue-900 mb-8">
          Submit Evaluations
        </h1>

        {applications.map((app) => (
          <div key={app._id} className="bg-white rounded-2xl p-6 shadow mb-6">
            <h2 className="font-semibold text-lg text-blue-900">
              {app.student.userId.fullName}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <input
                type="number"
                placeholder="Score (0–100)"
                className="border p-2 rounded"
                onChange={(e) =>
                  setForm({
                    ...form,
                    [app._id]: { ...form[app._id], score: e.target.value },
                  })
                }
              />

              <select
                className="border p-2 rounded"
                onChange={(e) =>
                  setForm({
                    ...form,
                    [app._id]: { ...form[app._id], grade: e.target.value },
                  })
                }
              >
                <option value="">Grade</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
                <option>D</option>
                <option>F</option>
              </select>

              <textarea
                placeholder="Feedback"
                className="border p-2 rounded md:col-span-3"
                onChange={(e) =>
                  setForm({
                    ...form,
                    [app._id]: { ...form[app._id], feedback: e.target.value },
                  })
                }
              />

              <button
                onClick={() => submitEvaluation(app._id)}
                className="bg-blue-700 text-white px-4 py-2 rounded-xl hover:bg-blue-800"
              >
                Submit Evaluation
              </button>
            </div>
          </div>
        ))}
      </main>

      <Footer />
    </div>
  );
};

export default AdvisorEvaluations;
