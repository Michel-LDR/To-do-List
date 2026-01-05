import React, { useState } from "react";

export default function App() {
  // Estado para armazenar o texto digitado no input
  const [inputValue, setInputValue] = useState("");

  // Função para lidar com mudanças no input
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Função para adicionar tarefa (por enquanto só limpa o input)
  const handleAddTask = () => {
    if (inputValue.trim() !== "") {
      alert(`Tarefa adicionada: ${inputValue}`);
      setInputValue(""); // Limpa o input
    }
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "50px auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Minha Lista de Tarefas</h1>

      {/* Formulário de entrada */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Digite uma nova tarefa..."
          style={{
            padding: "10px",
            fontSize: "16px",
            width: "70%",
            border: "2px solid #ddd",
            borderRadius: "4px",
          }}
        />
        <button
          onClick={handleAddTask}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            marginLeft: "10px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Adicionar
        </button>
      </div>

      <p>Digite algo no campo acima e clique em Adicionar! 📝</p>
    </div>
  );
}
