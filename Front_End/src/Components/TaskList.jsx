import TaskItem from "./TaskItem";

export default function TaskList({ tasks, loading, filter, refresh }) {
  const filtered =
    filter === "all" ? tasks : tasks.filter((t) => t.status === filter);

  if (loading) return <p className="text-center mt-6">Loading...</p>;

  if (filtered.length === 0)
    return <p className="text-center mt-6">No tasks found.</p>;

  return (
    <div className="max-w-xl mx-auto mt-6">
      {filtered.map((task) => (
        <TaskItem key={task._id} task={task} refresh={refresh} />
      ))}
    </div>
  );
}
