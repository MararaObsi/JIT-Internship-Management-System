import React from "react";
import { useNavigate } from "react-router-dom";

const StudentDashboard = () => {
  const navigate = useNavigate();

  const handleApply = () => {
    navigate("/student/apply");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">
        Student Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2">My Profile</h2>
          <p className="text-gray-600">View and manage your profile</p>
          <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            View Profile
          </button>
        </div>

        {/* Internship Application */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2">
            Internship Application
          </h2>
          <p className="text-gray-600">
            Apply for internship placement
          </p>
          <button
            onClick={handleApply}
            className="mt-4 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            Apply Now
          </button>
        </div>

        {/* Status */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2">
            Application Status
          </h2>
          <p className="text-gray-600">
            Track your internship progress
          </p>
          <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700">
            View Status
          </button>
        </div>
      </div>

      {/* Future Sections */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2">Reports</h2>
          <p className="text-gray-600">
            Upload and view internship reports
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2">Stipend Payment</h2>
          <p className="text-gray-600">
            View stipend payment details
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
