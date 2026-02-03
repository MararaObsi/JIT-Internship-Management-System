import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const ApplyInternship = () => {
  const navigate = useNavigate();
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    setCompanies([
      { _id: "665a00000000000000000001", name: "Ethio Telecom", location: "Addis Ababa", field: "Telecommunication & IT" },
      { _id: "665a00000000000000000002", name: "Commercial Bank of Ethiopia (CBE)", location: "Addis Ababa", field: "Banking & Finance" },
      { _id: "665a00000000000000000003", name: "Ethiopian Airlines", location: "Addis Ababa", field: "Aviation & Engineering" },
      { _id: "665a00000000000000000004", name: "Information Network Security Agency (INSA)", location: "Addis Ababa", field: "Cyber Security" },
      { _id: "665a00000000000000000005", name: "Ethio Engineering Group", location: "Addis Ababa", field: "Engineering" },
      { _id: "665a00000000000000000006", name: "Ministry of Innovation & Technology", location: "Addis Ababa", field: "Technology & Research" },
      { _id: "665a00000000000000000007", name: "Ethiopian Roads Authority", location: "Addis Ababa", field: "Civil Engineering" },
      { _id: "665a00000000000000000008", name: "Ethio ICT Village", location: "Addis Ababa", field: "Software & ICT" },
      { _id: "665a00000000000000000009", name: "Dashen Bank", location: "Addis Ababa", field: "Banking & IT" },
      { _id: "665a00000000000000000010", name: "Horizon Addis Tech Hub", location: "Addis Ababa", field: "Startup & Software" },
    ]);
  }, []);

  const handleApply = (company) => {
    navigate("/student/apply-internship", { state: { companyName: company.name, internshipId: company._id } });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
      <Header />
      <main className="flex-grow px-6 py-12 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-white mb-3">Apply for Internship</h1>
          <p className="text-blue-100 text-lg">Select one of the top internship hosting organizations</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {companies.map((company) => (
            <div key={company._id} className="bg-white rounded-3xl shadow-2xl p-6 hover:scale-105 transition-transform duration-300">
              <h2 className="text-xl font-bold text-blue-900 mb-2">{company.name}</h2>
              <p className="text-gray-600 mb-1">📍 {company.location}</p>
              <p className="text-gray-600 mb-4">💼 {company.field}</p>
              <button onClick={() => handleApply(company)} className="w-full bg-yellow-400 text-blue-900 font-bold py-2 rounded-xl hover:bg-yellow-300 transition">
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
