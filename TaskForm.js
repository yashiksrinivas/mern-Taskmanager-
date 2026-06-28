import React, { useState } from "react";

function TaskForm({ refreshTasks }) {
  const [title, setTitle] = useState("");

  const addTask = async () => {
    await fetch("http://localhost:5000/addTask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });
    setTitle("");
    refreshTasks();
  };

  return (
    <div>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New Task"
      />
      <button onClick={addTask}>Add Task</button>
    </div>
  );
}

export default TaskForm;
