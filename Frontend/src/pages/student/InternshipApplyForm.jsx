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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("internshipId", state.internshipId); 
    formData.append("motivation", motivation);
    formData.append("skills", skills);
    if (report) formData.append("report", report);

    const res = await fetch("http://localhost:5000/api/internships/apply", {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: formData,
    });

    const data = await res.json();
    if (!res.ok) return alert(data.message);

    alert("✅ Application submitted successfully!");
    navigate("/student/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col bg-blue-50">
      <Header />
      <main className="flex-grow max-w-4xl mx-auto py-12 px-6">
        <h1 className="text-4xl font-extrabold text-blue-900 mb-6 text-center">
          Apply for {state.companyName}
        </h1>

        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-semibold mb-2">Why do you want this internship?</label>
              <textarea required value={motivation} onChange={(e) => setMotivation(e.target.value)} className="w-full h-32 p-4 border rounded-lg focus:ring-2 focus:ring-blue-500"></textarea>
            </div>
            <div>
              <label className="block font-semibold mb-2">What skills can you bring to the company?</label>
              <textarea required value={skills} onChange={(e) => setSkills(e.target.value)} className="w-full h-24 p-4 border rounded-lg focus:ring-2 focus:ring-blue-500"></textarea>
            </div>
            <div>
              <label className="block font-semibold mb-2">Upload supporting report (PDF)</label>
              <input type="file" accept=".pdf" onChange={(e) => setReport(e.target.files[0])} className="w-full p-2 border rounded-lg" />
            </div>
            <button type="submit" className="w-full bg-green-600 text-white font-bold py-3 rounded-lg hover:bg-green-500 transition">Submit Application</button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default InternshipApplyForm;
