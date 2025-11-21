import { Link } from "react-router-dom";

export default function WelcomePage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Task Management Assignment – Frontend
      </h1>

      <p className="text-gray-700 text-center max-w-xl mb-8">
        This application allows users to create tasks, update their status,
        delete tasks, and filter them by category. Authentication features like
        Login & Signup are implemented using a secure token-based flow.
      </p>

      <div className="flex gap-4">
        <Link
          to="/login"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
        >
          Login
        </Link>

        <Link
          to="/signup"
          className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700"
        >
          Signup
        </Link>
      </div>
    </div>
  );
}
