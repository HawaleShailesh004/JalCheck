import React, { useState } from "react";
import { use } from "react";

const Todo = () => {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [isEditing, setIsEditing] = useState(false);

  const addTask = () => {
    setTasks((tasks) => [
      ...tasks,
      { id: Date.now(), text: newTask, completed: false },
    ]);
  };

  const deleteTask = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const editTask = (id) => {
    alert(tasks.find(id).text);
    setIsEditing(!isEditing)
    if (isEditing) {
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, text: newTask } : task
        )
      );
      setNewTask("");
    } else {
      setNewTask(tasks.find(id).text);
    }
  };

  let filteredTasks = () => {
    if (filter === "completed") {
      return tasks.filter((task) => task.completed);
    } else if (filter === "pending") {
      return tasks.filter((task) => !task.completed);
    } else {
      return tasks;
    }
  };

  return (
    <>
      <div className="mx-auto container max-w-lg h-screen p-6 bg-gray-100">
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            name="task"
            id="task"
            placeholder="Enter a Task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="flex-1 p-2 border border-gray-300 rounded"
          />
          <button
            type="button"
            onClick={() => addTask()}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Add
          </button>
        </div>
        <div className="flex gap-2 mb-4">
          <button
            type="button"
            onClick={() => setFilter("all")}
            className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
          >
            All
          </button>
          <button
            type="button"
            onClick={() => setFilter("completed")}
            className="px-3 py-1 bg-green-400 text-white rounded hover:bg-green-500"
          >
            Completed
          </button>
          <button
            type="button"
            onClick={() => setFilter("pending")}
            className="px-3 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500"
          >
            Pending
          </button>
        </div>
        <div className="border border-gray-300 rounded p-4 bg-white">
          {filteredTasks() &&
            filteredTasks().map((task) => {
              return (
                <div
                  key={task.id}
                  className="flex items-center justify-between p-2 border-b last:border-b-0"
                >
                  <li
                    className={`list-none flex-1 ${
                      task.completed ? "line-through text-gray-500" : ""
                    }`}
                  >
                    {task.text}
                  </li>
                  <button
                    className="text-red-500 hover:text-red-700 mr-2"
                    onClick={() => deleteTask(task.id)}
                  >
                    ❌
                  </button>
                  <input
                    type="checkbox"
                    name="toggle"
                    id="toggle"
                    onChange={() => toggleTask(task.id)}
                    className="w-4 h-4"
                  />
                  <button
                    className="text-red-500 hover:text-red-700 mr-2"
                    onClick={() => editTask(task.id)}
                  >
                    {!isEditing ? "✏️" : "✅"}
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Todo;
