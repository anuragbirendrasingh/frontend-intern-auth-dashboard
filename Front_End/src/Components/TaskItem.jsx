import axiosInstance from "../Utils/axiosInstance";

export default function TaskItem({ task, refresh }) {
  const handleDelete = async () => {
    await axiosInstance.delete(`/task/deleteTask/${task._id}`);
    refresh();
  };

  const toggleStatus = async () => {
    let next =
      task.status === "pending"
        ? "in-progress"
        : task.status === "in-progress"
        ? "completed"
        : "pending";

    await axiosInstance.put(`/task/updateTask/${task._id}`, {
      status: next,
    });

    refresh();
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow mb-4 flex justify-between items-start">
      <div>
        <h3 className="font-semibold">{task.title}</h3>
        {task.description && (
          <p className="text-gray-600">{task.description}</p>
        )}
        <p className="mt-2 text-sm text-gray-500">
          Status: <strong>{task.status}</strong>
        </p>

        <button
          onClick={toggleStatus}
          className="mt-2 bg-yellow-500 text-white px-3 py-1 rounded-lg"
        >
          Update Status
        </button>
      </div>

      <button
        onClick={handleDelete}
        className="bg-red-500 text-white px-3 py-1 rounded-lg h-fit"
      >
        Delete
      </button>
    </div>
  );
}
