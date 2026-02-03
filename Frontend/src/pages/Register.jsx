import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import jimmaLogo from "../assets/jimma-logo.png";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    department: "",
    phone: "",
    profileImage: null,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
    if (!formData.department.trim()) newErrors.department = "Department is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("fullName", formData.fullName);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("password", formData.password);
      formDataToSend.append("department", formData.department);
      formDataToSend.append("phone", formData.phone);
      if (formData.profileImage) {
        formDataToSend.append("profileImage", formData.profileImage);
      }

      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Registration failed");

      alert("Registration successful. Check your email for login credentials.");
      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-800 via-blue-900 to-blue-700">
      <Header />

      {/* Main content */}
      <main className="flex flex-col items-center justify-center flex-grow px-4 py-12">
        {/* Card with logo */}
        <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-md w-full">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img
              src={jimmaLogo}
              alt="Jimma IMS Logo"
              className="h-24 w-24 object-contain rounded-full shadow-lg"
            />
          </div>

          {/* Title */}
          <h2 className="text-3xl font-extrabold text-center text-blue-900 mb-8">
            Create Your Account
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Full Name</label>
              <input
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none transition ${
                  errors.fullName ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none transition ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none transition ${
                  errors.password ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>

            {/* Department */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Department</label>
              <input
                type="text"
                name="department"
                placeholder="Enter your department"
                value={formData.department}
                onChange={handleChange}
                className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none transition ${
                  errors.department ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.department && <p className="text-red-500 text-sm mt-1">{errors.department}</p>}
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Phone Number</label>
              <input
                type="text"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none transition ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>

            {/* Profile Image */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Profile Image</label>
              <input
                type="file"
                name="profileImage"
                accept="image/*"
                onChange={(e) => setFormData({ ...formData, profileImage: e.target.files[0] })}
                className="w-full"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-yellow-400 text-blue-900 font-bold py-3 rounded-lg shadow-lg hover:bg-yellow-300 transition transform hover:scale-105"
            >
              Sign Up
            </button>
          </form>

          {/* Login Link */}
          <p className="text-center text-gray-600 mt-6">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-900 font-semibold hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Register;
