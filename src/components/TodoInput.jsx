import React from "react";
import styles from "../styles/TodoInput.module.css";

export default function TodoInput({ value, onChange, onAdd }) {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onAdd();
    }
  };

  return (
    <div className={styles.inputContainer}>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Digite uma nova tarefa..."
        className={styles.input}
      />
      <button onClick={onAdd} className={styles.addButton}>
        Adicionar
      </button>
    </div>
  );
}
