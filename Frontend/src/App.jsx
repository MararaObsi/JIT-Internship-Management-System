import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import StudentDashboard from "./pages/dashboards/StudentDashboard";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import CoordinatorDashboard from "./pages/dashboards/CoordinatorDashboard";
import AdvisorDashboard from "./pages/dashboards/AdvisorDashboard";
import SupervisorDashboard from "./pages/dashboards/SupervisorDashboard";
import UILDashboard from "./pages/dashboards/UILDashboard";
import StudentProfile from "./pages/student/studentProfile";
import ApplyInternship from "./pages/student/ApplyInternship";
import InternshipApplyForm from "./pages/student/InternshipApplyForm";


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
      <Route path="/coordinator/dashboard" element={<CoordinatorDashboard />} />
      <Route path="/advisor/dashboard" element={<AdvisorDashboard />} />
      <Route path="/supervisor/dashboard" element={<SupervisorDashboard />} />
      <Route path="/uil/dashboard" element={<UILDashboard />} />
      <Route path="/student/profile" element={<StudentProfile />} />
      <Route path="/student/internship" element={<ApplyInternship />} />
      <Route path="/student/apply-internship" element={<InternshipApplyForm />} />
    </Routes>
  );
}

export default App;