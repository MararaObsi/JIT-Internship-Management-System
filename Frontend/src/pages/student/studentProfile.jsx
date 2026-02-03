import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const StudentProfile = () => {
  const [student, setStudent] = useState(null);
  const [editMode, setEditMode] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    department: "",
    phone: "",
    profileImage: null,
  });

  const [originalData, setOriginalData] = useState(null);

  const token = localStorage.getItem("token");

  /* ================= FETCH PROFILE ================= */
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/students/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();
        if (!res.ok) throw new Error(data.message || "Failed to fetch profile");

        setStudent(data);

        setFormData({
          fullName: data.fullName || "",
          email: data.email || "",
          department: data.department || "",
          phone: data.phone || "",
          profileImage: null,
        });

        setOriginalData({
          fullName: data.fullName || "",
          email: data.email || "",
          department: data.department || "",
          phone: data.phone || "",
        });
      } catch (err) {
        alert(err.message);
      }
    };

    fetchProfile();
  }, [token]);

  /* ================= HANDLE INPUT ================= */
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "profileImage") {
      setFormData({ ...formData, profileImage: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  /* ================= SAVE PROFILE ================= */
  const handleSave = async (e) => {
    e.preventDefault();

    const hasChanges =
      formData.fullName !== originalData.fullName ||
      formData.email !== originalData.email ||
      formData.department !== originalData.department ||
      formData.phone !== originalData.phone ||
      formData.profileImage !== null;

    if (!hasChanges) {
      alert("No changes detected. Please update something before saving.");
      return;
    }

    try {
      const formToSend = new FormData();
      formToSend.append("fullName", formData.fullName);
      formToSend.append("email", formData.email);
      formToSend.append("department", formData.department);
      formToSend.append("phone", formData.phone);

      if (formData.profileImage) {
        formToSend.append("profileImage", formData.profileImage);
      }

      const res = await fetch("http://localhost:5000/api/students/profile", {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formToSend,
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Update failed");

      setStudent(data);

      setOriginalData({
        fullName: data.fullName,
        email: data.email,
        department: data.department,
        phone: data.phone,
      });

      setEditMode(false);
      alert("Profile updated successfully!");
    } catch (err) {
      alert(err.message);
    }
  };

  if (!student) {
    return (
      <p className="text-center mt-24 text-xl font-semibold text-gray-600">
        Loading profile...
      </p>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-blue-100">
      <Header />

      <main className="flex-grow px-6 py-12">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">

          {/* ===== HEADER ===== */}
          <div className="bg-gradient-to-r from-blue-700 to-blue-500 p-8 text-white">
            <h1 className="text-3xl font-bold">
              Welcome, {student.fullName}
            </h1>
            <p className="opacity-90 mt-1">Student Profile Dashboard</p>
          </div>

          {/* ===== CONTENT ===== */}
          <form onSubmit={handleSave} className="p-10 grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* ===== AVATAR ===== */}
            <div className="flex flex-col items-center">
              <img
                src={
                  formData.profileImage
                    ? URL.createObjectURL(formData.profileImage)
                    : student.profileImage
                    ? `http://localhost:5000${student.profileImage}`
                    : "https://via.placeholder.com/200"
                }
                alt="Profile"
                className="w-44 h-44 rounded-full object-cover border-4 border-blue-500 shadow-lg"
              />

              {editMode && (
                <input
                  type="file"
                  name="profileImage"
                  accept="image/*"
                  onChange={handleChange}
                  className="mt-4 block text-sm"
                />
              )}
            </div>

            
            <div className="md:col-span-2 space-y-6">

              {[
                { label: "Full Name", name: "fullName" },
                { label: "Email", name: "email" },
                { label: "Department", name: "department" },
                { label: "Phone", name: "phone" },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-gray-700 font-semibold mb-1">
                    {field.label}
                  </label>

                  {editMode ? (
                    <input
                      type="text"
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
                    />
                  ) : (
                    <p className="bg-gray-50 p-3 rounded-xl">
                      {student[field.name] || "—"}
                    </p>
                  )}
                </div>
              ))}

              
              <div className="pt-4">
                {editMode ? (
                  <div className="flex gap-4">
                    <button
                      type="submit"
                      className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-500 transition"
                    >
                      Save Changes
                    </button>
                    <button
                      type="button"
                      onClick={() => setEditMode(false)}
                      className="bg-gray-200 px-8 py-3 rounded-xl hover:bg-gray-300"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => setEditMode(true)}
                    className="bg-yellow-400 text-blue-900 px-10 py-3 rounded-xl font-bold hover:bg-yellow-300 transition"
                  >
                    Edit Profile
                  </button>
                )}
              </div>

            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default StudentProfile;
