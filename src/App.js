import React, { useState } from "react";

export default function TodoPlanner() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (!newTask.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: newTask.trim(), completed: false }]);
    setNewTask("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto", padding: "20px" }}>
      <h1 style={{ textAlign: "center", fontSize: "24px", marginBottom: "20px" }}>📝 Planer Zadań</h1>
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Wpisz nowe zadanie..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          style={{ flex: 1, padding: "10px" }}
        />
        <button onClick={addTask}>Dodaj</button>
      </div>
      <div>
        {tasks.map((task) => (
          <div
            key={task.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              marginBottom: "10px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
              />
              <span style={{ textDecoration: task.completed ? "line-through" : "none", color: task.completed ? "#888" : "#000" }}>
                {task.text}
              </span>
            </div>
            <button onClick={() => removeTask(task.id)} style={{ color: "red" }}>🗑️</button>
          </div>
        ))}
        {tasks.length === 0 && (
          <p style={{ textAlign: "center", color: "#888" }}>Brak zadań do wykonania.</p>
        )}
      </div>
    </div>
  );
}
