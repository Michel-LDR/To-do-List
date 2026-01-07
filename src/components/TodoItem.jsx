import React, { useState } from 'react';
import styles from '../styles/TodoItem.module.css';

export default function TodoItem({ task, onToggleComplete, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(task.text);

  const handleSave = () => {
    if (editValue.trim() !== '') {
      onUpdate(task.id, editValue);
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditValue(task.text);
    setIsEditing(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  if (isEditing) {
    return (
      <li className={styles.todoItem}>
        <input
          type="text"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onKeyDown={handleKeyPress}
          className={styles.editInput}
          autoFocus
        />
        <button onClick={handleSave} className={styles.saveButton}>
          ✓
        </button>
        <button onClick={handleCancel} className={styles.cancelButton}>
          ✕
        </button>
      </li>
    );
  }

  return (
    <li className={`${styles.todoItem} ${task.completed ? styles.completed : ''}`}>
      <div 
        onClick={() => onToggleComplete(task.id)}
        className={styles.taskContent}
      >
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => {}}
          className={styles.checkbox}
        />
        <span className={styles.taskText}>{task.text}</span>
      </div>
      
      <div className={styles.actions}>
        <button 
          onClick={() => setIsEditing(true)} 
          className={styles.editButton}
        >
          ✏️
        </button>
        <button 
          onClick={() => onDelete(task.id)} 
          className={styles.deleteButton}
        >
          🗑️
        </button>
      </div>
    </li>
  );
}