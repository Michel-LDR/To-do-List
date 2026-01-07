import React from "react";
import styles from "../styles/TodoFilters.module.css";

export default function TodoFilters({ currentFilter, onFilterChange }) {
  const filters = [
    { id: "all", label: "📋 Todas" },
    { id: "active", label: "⚡ Ativas" },
    { id: "completed", label: "✅ Concluídas" },
  ];

  return (
    <div className={styles.filtersContainer}>
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => onFilterChange(filter.id)}
          className={`${styles.filterButton} ${
            currentFilter === filter.id ? styles.active : ""
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
