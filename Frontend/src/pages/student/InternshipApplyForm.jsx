import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const InternshipApplyForm = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [motivation, setMotivation] = useState("");
  const [skills, setSkills] = useState("");
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("internshipId", state.internshipId);
      formData.append("motivation", motivation);
      formData.append("skills", skills);
      if (report) formData.append("report", report);

      const res = await fetch("http://localhost:5000/api/internships/apply", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to apply");

      alert("✅ Internship application submitted successfully!");
      navigate("/student/dashboard");
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-grow max-w-4xl mx-auto py-10 px-6">
        <h1 className="text-3xl font-bold mb-6 text-blue-900">
          Apply for {state.companyName}
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-xl space-y-4"
        >
          <textarea
            required
            placeholder="Why do you want this internship?"
            className="w-full h-32 p-4 border rounded-lg"
            value={motivation}
            onChange={(e) => setMotivation(e.target.value)}
          />

          <textarea
            required
            placeholder="Your skills"
            className="w-full h-24 p-4 border rounded-lg"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
          />

          <input
            type="file"
            accept=".pdf"
            onChange={(e) => setReport(e.target.files[0])}
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default InternshipApplyForm;
