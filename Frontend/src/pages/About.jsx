import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Header />

      <div className="min-h-screen bg-gray-100 py-16 px-6">
        <div className="max-w-5xl mx-auto bg-white p-8 rounded shadow">
          <h1 className="text-3xl font-bold mb-6 text-blue-700">
            About the System
          </h1>

          <p className="text-gray-700 mb-4">
            The Internship Management System (IMS) is a web-based platform
            developed for Jimma Institute of Technology (JIT), Jimma University,
            to manage and automate the internship program for undergraduate
            students.
          </p>

          <p className="text-gray-700 mb-4">
            The system aims to address challenges associated with manual
            internship handling such as poor communication, delayed approval,
            lack of transparency, and inefficient record management. By
            digitizing the entire internship workflow, the system ensures
            efficiency, accuracy, and accountability.
          </p>

          <p className="text-gray-700 mb-4">
            The platform serves multiple stakeholders including students,
            academic advisors, department coordinators, industry supervisors,
            and University–Industry Linkage (UIL) officers. Each user is
            provided with role-based access to perform their respective
            responsibilities.
          </p>

          <p className="text-gray-700">
            Overall, the Internship Management System enhances collaboration
            between the university and industry partners while improving
            internship monitoring, evaluation, and stipend management.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
