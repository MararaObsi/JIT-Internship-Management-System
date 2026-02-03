import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import jimmaLogo from "../assets/jimma-logo.png";

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Login failed");
      }

      // Save auth data
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);
      localStorage.setItem("username", data.username);

      // Redirect to dashboard
       switch (data.role) {
        case "student":
          navigate("/student/dashboard");
          break;
        case "coordinator":
          navigate("/coordinator/dashboard");
          break;
        case "advisor":
          navigate("/advisor/dashboard");
          break;
        case "supervisor":
          navigate("/supervisor/dashboard");
          break;
        case "uil":
          navigate("/uil/dashboard");
          break;
        default:
          navigate("/login");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-800 via-blue-900 to-blue-700">
      <Header />

      {/* Main content */}
      <main className="flex flex-col items-center justify-center flex-grow px-4 py-12">
        {/* Card */}
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
            Welcome Back
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Username */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Username
              </label>
              <input
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none transition"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none transition"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-yellow-400 text-blue-900 font-bold py-3 rounded-lg shadow-lg hover:bg-yellow-300 transition transform hover:scale-105"
            >
              Sign In
            </button>
          </form>

          {/* Register link */}
          <p className="text-center text-gray-600 mt-6">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-blue-900 font-semibold hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Login;
