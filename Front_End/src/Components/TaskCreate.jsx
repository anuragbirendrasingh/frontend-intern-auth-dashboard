import { useState } from "react";
import axiosInstance from "../Utils/axiosInstance";

export default function TaskCreate({ refresh }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleAdd = async () => {
    if (!title.trim()) return;

    await axiosInstance.post("/task/createTask", {
      title,
      description: desc,
    });

    setTitle("");
    setDesc("");
    refresh();
  };

  return (
    <div className="max-w-xl mx-auto mt-8 bg-white p-5 rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-3">Create New Task</h2>

      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-3 border rounded-lg mb-3"
      />

      <textarea
        placeholder="Task description (optional)"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        className="w-full p-3 border rounded-lg mb-3"
      />

      <button
        onClick={handleAdd}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full"
      >
        Add Task
      </button>
    </div>
  );
}
