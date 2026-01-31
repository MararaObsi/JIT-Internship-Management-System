import Header from "../components/Header";
import Footer from "../components/Footer";

const Privacy = () => {
  return (
    <>
      <Header />

      <div className="min-h-screen bg-gray-100 py-16 px-6">
        <div className="max-w-5xl mx-auto bg-white p-8 rounded shadow">
          <h1 className="text-3xl font-bold mb-6 text-blue-700">
            Privacy Policy
          </h1>

          <p className="text-gray-700 mb-4">
            Jimma Institute of Technology is committed to protecting the
            privacy and security of all users of the Internship Management
            System.
          </p>

          <p className="text-gray-700 mb-4">
            The system collects personal and academic information solely for
            the purpose of managing internship placement, supervision,
            evaluation, and stipend processing. All collected data is handled
            confidentially and used in accordance with university regulations.
          </p>

          <p className="text-gray-700 mb-4">
            Access to information is strictly controlled through role-based
            authentication. Only authorized users are permitted to view or
            manage specific data relevant to their responsibilities.
          </p>

          <p className="text-gray-700 mb-4">
            The system does not share user information with third parties
            without official authorization from Jimma University, except when
            required by law.
          </p>

          <p className="text-gray-700">
            By using this system, users agree to comply with this privacy
            policy and the rules and regulations set by Jimma University.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Privacy;
