"use client"; 

import { useState } from "react";
import './Tareas.css'; 

export default function Tareas() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState("");

  const agregarTarea = () => {
    if (nuevaTarea.trim() === "") return;
    const tareaObj = { texto: nuevaTarea, estado: "pendiente" };
    setTareas([...tareas, tareaObj]);
    setNuevaTarea("");
  };

  const cambiarEstadoTarea = (index) => {
    const nuevasTareas = [...tareas];
    if (nuevasTareas[index].estado === "pendiente") {
      nuevasTareas[index].estado = "en progreso";
    } else if (nuevasTareas[index].estado === "en progreso") {
      nuevasTareas[index].estado = "completada";
    }
    setTareas(nuevasTareas);
  };

  const eliminarTarea = (index) => {
    const nuevasTareas = tareas.filter((_, i) => i !== index);
    setTareas(nuevasTareas);
  };

  return (
    <div className="tareas-container">
      <h2>Lista de Tareas</h2>
      <div className="tareas-input">
        <input
          type="text"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          placeholder="Escribe una tarea"
        />
        <button onClick={agregarTarea}>Agregar Tarea</button>
      </div>
      <ul className="tareas-list">
        {tareas.map((tarea, index) => (
          <li key={index} style={{ textDecoration: tarea.estado === "completada" ? "line-through" : "none" }}>
            <span onClick={() => cambiarEstadoTarea(index)}>
              {tarea.texto} - {tarea.estado}
            </span>
            <button onClick={() => eliminarTarea(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
