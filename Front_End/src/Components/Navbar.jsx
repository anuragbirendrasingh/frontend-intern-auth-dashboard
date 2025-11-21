import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="bg-white shadow-sm p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">Task Dashboard</h1>

      <div className="flex items-center gap-4">
        <img
          src={user?.photoUrl}
          alt="profile"
          className="w-10 h-10 rounded-full border object-cover bg-white overflow-hidden"
        />
        <span className="font-medium">{user?.firstName}</span>

        <button
          className="bg-red-500 text-white px-4 py-2 rounded-lg"
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
