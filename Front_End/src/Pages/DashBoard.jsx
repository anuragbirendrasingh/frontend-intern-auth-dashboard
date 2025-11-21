import { useEffect, useState } from "react";
import axiosInstance from "../Utils/axiosInstance";
import { useNavigate } from "react-router-dom";

export default function DashBoard() {
  const navigate = useNavigate();

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const [loading, setLoading] = useState(true);

  // Fetch Tasks
  const fetchTasks = async () => {
    try {
      const res = await axiosInstance.get("/task/getTasks");
      setTasks(res.data.tasks || []);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  // Add Task
  const handleAddTask = async () => {
    if (!newTask.trim()) return;

    try {
      await axiosInstance.post("/task/createTask", { title: newTask });
      setNewTask("");
      fetchTasks();
    } catch (err) {
      console.log(err);
    }
  };

  // Delete Task
  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`/task/deleteTask/${id}`);
      fetchTasks();
    } catch (err) {
      console.log(err);
    }
  };

  // Logout
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* TOP NAVBAR */}
      <div className="bg-white shadow-sm p-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold">Task Dashboard</h1>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-lg"
          onClick={logout}
        >
          Logout
        </button>
      </div>

      {/* CREATE TASK */}
      <div className="max-w-xl mx-auto mt-8 bg-white p-5 rounded-xl shadow">
        <h2 className="text-lg font-semibold mb-3">Create New Task</h2>

        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Enter task title"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="flex-1 p-3 border rounded-lg"
          />
          <button
            onClick={handleAddTask}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Add
          </button>
        </div>
      </div>

      {/* TASK LIST */}
      <div className="max-w-xl mx-auto mt-6">
        {loading ? (
          <p className="text-center text-gray-500">Loading tasks...</p>
        ) : tasks.length === 0 ? (
          <p className="text-center text-gray-500">No tasks created yet.</p>
        ) : (
          tasks.map((task) => (
            <div
              key={task._id}
              className="bg-white p-4 rounded-xl shadow mb-4 flex justify-between"
            >
              <span className="font-medium">{task.title}</span>

              <button
                onClick={() => handleDelete(task._id)}
                className="bg-red-500 text-white px-3 py-1 rounded-lg"
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
