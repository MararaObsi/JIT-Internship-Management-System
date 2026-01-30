export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
        <h1 className="text-3xl font-bold text-indigo-600 mb-4">
          Tailwind is Working 🚀
        </h1>

        <p className="text-gray-600 mb-6">
          If you see colors, spacing, and rounded corners, Tailwind is set up correctly.
        </p>

        <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-800 transition">
          Click me
        </button>
      </div>
    </div>
  )
}
