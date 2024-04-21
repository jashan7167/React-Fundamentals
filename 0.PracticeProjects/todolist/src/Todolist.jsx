import React, { useState } from "react";

function Todolist() {
  const [tasks, setTasks] = useState([
    "Eat Breakfast",
    "Take a shower",
    "Walk the dog",
  ]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }
  function removeTask(event) {}
  function addTask(event) {
    if (newTask.trim() != "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  }
  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }
  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }
  function moveTaskDown(index) {
    if (index < tasks.length) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  return (
    <div className="to-do-list">
      <h1>To Do List</h1>

      <div>
        <input
          type="text"
          placeholder="Enter a task.."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-Button" onClick={addTask}>
          Add
        </button>
      </div>

      <ol className="Task-Display">
        {tasks.map((task, index) => {
          return (
            <li key={index}>
              <span className="text">{task}</span>
              <button
                className="delete-button"
                onClick={() => deleteTask(index)}
              >
                Remove
              </button>
              <button className="up-button" onClick={() => moveTaskUp(index)}>
                Up
              </button>
              <button
                className="down-button"
                onClick={() => moveTaskDown(index)}
              >
                Down
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default Todolist;
