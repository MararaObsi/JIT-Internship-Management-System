import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const ApplyInternship = () => {
  const token = localStorage.getItem("token");
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/internships", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.message || "Failed to fetch");
        setCompanies(data);
      } catch (err) {
        alert(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCompanies();
  }, [token]);

  const handleApply = (company) => {
    navigate("/student/apply-internship", {
      state: {
        internshipId: company._id,
        companyName: company.companyName,
      },
    });
  };

  if (loading)
    return <p className="text-center mt-10 text-white">Loading internships...</p>;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
      <Header />
      <main className="flex-grow px-6 py-12 max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-white mb-6">
          Apply for Internship
        </h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {companies.map((company) => (
            <div
              key={company._id}
              className="bg-white rounded-3xl shadow-2xl p-6 hover:scale-105 transition-transform duration-300"
            >
              <h2 className="text-xl font-bold text-blue-900 mb-2">
                {company.companyName}
              </h2>
              <p className="text-gray-600 mb-1">📍 {company.location}</p>
              <p className="text-gray-500 mb-2">{company.description}</p>
              <button
                onClick={() => handleApply(company)}
                className="w-full bg-yellow-400 text-blue-900 font-bold py-2 rounded-xl hover:bg-yellow-300 transition"
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ApplyInternship;
