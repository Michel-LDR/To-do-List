import React from "react";
import TodoItem from "./TodoItem";
import styles from "../styles/TodoList.module.css";

export default function TodoList({
  tasks,
  filter,
  onToggleComplete,
  onDelete,
  onUpdate,
}) {
  if (tasks.length === 0) {
    const emptyMessages = {
      all: { emoji: "📝", text: "Nenhuma tarefa ainda." },
      active: { emoji: "⚡", text: "Nenhuma tarefa ativa!" },
      completed: { emoji: "✅", text: "Nenhuma tarefa concluída ainda." },
    };

    const message = emptyMessages[filter];

    return (
      <div className={styles.emptyState}>
        <div className={styles.emptyEmoji}>{message.emoji}</div>
        <p className={styles.emptyText}>{message.text}</p>
      </div>
    );
  }

  return (
    <ul className={styles.todoList}>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          onToggleComplete={onToggleComplete}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </ul>
  );
}
