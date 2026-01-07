import React, { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoFilters from "./components/TodoFilters";
import TodoStats from "./components/TodoStats";
import TodoList from "./components/TodoList";
import styles from "./styles/App.module.css";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    loadTasks();
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      saveTasks();
    }
  }, [tasks]);

  const loadTasks = async () => {
    try {
      const result = await window.storage.get("todo-tasks");
      if (result && result.value) {
        setTasks(JSON.parse(result.value));
      }
    } catch (error) {
      console.log("Nenhuma tarefa salva ainda");
    }
  };

  const saveTasks = async () => {
    try {
      await window.storage.set("todo-tasks", JSON.stringify(tasks));
    } catch (error) {
      console.error("Erro ao salvar:", error);
    }
  };

  const handleAddTask = () => {
    if (inputValue.trim() !== "") {
      const newTask = {
        id: Date.now(),
        text: inputValue,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setInputValue("");
    }
  };

  const toggleTaskComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const clearCompleted = () => {
    setTasks(tasks.filter((task) => !task.completed));
  };

  const updateTask = (taskId, newText) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, text: newText } : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h1 className={styles.title}>✅ Minha Lista de Tarefas</h1>
          <p className={styles.subtitle}>
            Organize suas tarefas de forma simples e eficiente
          </p>
        </div>

        <TodoInput
          value={inputValue}
          onChange={setInputValue}
          onAdd={handleAddTask}
        />

        <TodoFilters currentFilter={filter} onFilterChange={setFilter} />

        <TodoStats
          totalTasks={tasks.length}
          completedTasks={tasks.filter((t) => t.completed).length}
          hasCompleted={tasks.some((t) => t.completed)}
          onClearCompleted={clearCompleted}
        />

        <TodoList
          tasks={filteredTasks}
          filter={filter}
          onToggleComplete={toggleTaskComplete}
          onDelete={deleteTask}
          onUpdate={updateTask}
        />

        {tasks.length > 0 && (
          <div className={styles.footer}>
            <p>
              💡 <strong>Dica:</strong> Suas tarefas são salvas automaticamente!
              Use os filtros para organizar melhor.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
