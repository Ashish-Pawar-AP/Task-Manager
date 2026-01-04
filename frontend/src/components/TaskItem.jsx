import React from "react";
import API from "../services/api";

function TaskItem({ task, tasks, setTasks }) {
  const toggleComplete = async () => {
    try {
      const res = await API.put(`/tasks/${task._id}`, {
        completed: !task.completed,
      });

      setTasks(tasks.map((t) => (t._id === task._id ? res.data : t)));
    } catch (error) {
      alert("Failed to update task");
    }
  };

  const deleteTask = async () => {
    try {
      await API.delete(`/tasks/${task._id}`);
      setTasks(tasks.filter((t) => t._id !== task._id));
    } catch (error) {
      alert("Failed to delete task");
    }
  };

  return (
    <div className="flex justify-between items-center border p-2">
      <span
        onClick={toggleComplete}
        className={`cursor-pointer ${
          task.completed ? "line-through text-gray-500" : ""
        }`}
      >
        {task.text}
      </span>
      <button onClick={deleteTask} className="text-red-500">
        X
      </button>
    </div>
  );
}

export default TaskItem;
