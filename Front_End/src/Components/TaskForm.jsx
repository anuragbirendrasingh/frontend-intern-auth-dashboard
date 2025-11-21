import { useState } from "react";

export default function TaskForm({ handleAddTask }) {
  const [newTask, setNewTask] = useState("");

  const submitTask = () => {
    if (!newTask.trim()) return;
    handleAddTask(newTask);
    setNewTask("");
  };

  return (
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
          onClick={submitTask}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Add
        </button>
      </div>
    </div>
  );
}
