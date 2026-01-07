import React from "react";
import styles from "../styles/TodoStats.module.css";

export default function TodoStats({
  totalTasks,
  completedTasks,
  hasCompleted,
  onClearCompleted,
}) {
  return (
    <div className={styles.statsContainer}>
      <div className={styles.stats}>
        <strong>{totalTasks}</strong> {totalTasks === 1 ? "tarefa" : "tarefas"}{" "}
        •<strong> {completedTasks}</strong> concluída
        {completedTasks !== 1 ? "s" : ""}
      </div>
      {hasCompleted && (
        <button onClick={onClearCompleted} className={styles.clearButton}>
          Limpar concluídas
        </button>
      )}
    </div>
  );
}
