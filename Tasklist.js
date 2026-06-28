import React from "react";

function TaskList({ tasks, refreshTasks }) {
  const updateTask = async (id) => {
    await fetch(`http://localhost:5000/updateTask/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: "completed" }),
    });
    refreshTasks();
  };

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/deleteTask/${id}`, {
      method: "DELETE",
    });
    refreshTasks();
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task._id}>
          {task.title} - {task.status}
          <button onClick={() => updateTask(task._id)}>Complete</button>
          <button onClick={() => deleteTask(task._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
