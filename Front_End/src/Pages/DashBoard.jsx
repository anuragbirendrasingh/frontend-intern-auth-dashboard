import { useEffect, useState, useContext } from "react";
import axiosInstance from "../Utils/axiosInstance";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../Context/AuthContext";

// Components
import Navbar from "../Components/Navbar";
import TaskCreate from "../Components/TaskCreate";
import TaskFilters from "../Components/TaskFilters";
import TaskList from "../Components/TaskList";

export default function DashBoard() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  const fetchTasks = async () => {
    try {
      const res = await axiosInstance.get("/task/getTasks");
      setTasks(res.data.tasks || []);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* NAVBAR FROM COMPONENTS */}
      <Navbar />

      <TaskCreate refresh={fetchTasks} />

      <TaskFilters filter={filter} setFilter={setFilter} />

      <TaskList
        tasks={tasks}
        loading={loading}
        filter={filter}
        refresh={fetchTasks}
      />
    </div>
  );
}
