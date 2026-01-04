import React, { useEffect, useState } from "react";
import API from "../services/api";
import TaskItem from "../components/TaskItem";
import TaskList from "../components/TaskList";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await API.get("/tasks");
      setTasks(res.data);
    } catch (error) {
      alert("Failed to load Tasks");
    }
  };

  const addTask = async (e) => {
    e.preventDefault();
    if (!taskText.trim()) return;

    try {
      const res = await API.post("/tasks", { text: taskText });
      setTasks([res.data, ...tasks]);
      setTaskText("");
    } catch (error) {
      alert("Failed to add task");
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">My Tasks</h2>
      <form onSubmit={addTask} className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="New task"
          className="border p-2 flex-1"
          value={taskText}
          onChange={(e)=>setTaskText(e.target.value)}
        />
        <button className="bg-black text-white px-4">Add</button>
      </form>
      <div className="space-y-2">
        {tasks.map((task) => (
          <TaskItem
            key={task._id}
            task={task}
            tasks={tasks}
            setTasks={setTasks}
          />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
