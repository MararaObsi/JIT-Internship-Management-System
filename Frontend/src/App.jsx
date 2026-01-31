import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import StudentDashboard from "./pages/dashboards/StudentDashboard";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/student/dashboard" element={<StudentDashboard />} />
    </Routes>
  );
}

export default App;