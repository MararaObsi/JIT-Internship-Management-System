import Header from "../components/Header";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <Header />

      <div className="min-h-screen bg-gray-100 py-16 px-6">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded shadow">
          <h1 className="text-3xl font-bold mb-6 text-blue-700">
            Contact Us
          </h1>

          <p className="text-gray-700 mb-6">
            If you have any questions, concerns, or require support related to
            the Internship Management System, please contact the responsible
            office using the information below.
          </p>

          <div className="space-y-4 text-gray-700">
            <p>
              <strong>University:</strong> Jimma University
            </p>
            <p>
              <strong>Institute:</strong> Jimma Institute of Technology
            </p>
            <p>
              <strong>Office:</strong> University–Industry Linkage (UIL)
            </p>
            <p>
              <strong>Location:</strong> Jimma, Ethiopia
            </p>
            <p>
              <strong>Email:</strong> uil@ju.edu.et
            </p>
            <p>
              <strong>Phone:</strong> +251 47 111 0000
            </p>
          </div>

          <p className="text-gray-600 mt-6 text-sm">
            Office hours are Monday to Friday, 8:30 AM – 5:30 PM.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
