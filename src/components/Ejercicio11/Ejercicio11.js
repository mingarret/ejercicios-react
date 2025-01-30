import React, { useReducer, useState } from "react";
import "./Ejercicio11.css";

// Estado inicial de la lista de tareas
const initialState = [];

// Definimos los tipos de acciones
const actionTypes = {
  ADD: "ADD_TASK",
  DELETE: "DELETE_TASK",
  TOGGLE: "TOGGLE_TASK",
  EDIT: "EDIT_TASK",
};

// Función reductora para manejar los cambios de estado
const taskReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD:
      return [...state, { id: Date.now(), text: action.payload, completed: false }];

    case actionTypes.DELETE:
      return state.filter((task) => task.id !== action.payload);

    case actionTypes.TOGGLE:
      return state.map((task) =>
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );

    case actionTypes.EDIT:
      return state.map((task) =>
        task.id === action.payload.id ? { ...task, text: action.payload.text } : task
      );

    default:
      return state;
  }
};

const Ejercicio11 = () => {
  const [tasks, dispatch] = useReducer(taskReducer, initialState); // Hook useReducer
  const [taskInput, setTaskInput] = useState(""); // Estado para manejar el input
  const [editTask, setEditTask] = useState(null); // Estado para manejar la edición

  // Maneja el envío del formulario para agregar o editar una tarea
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskInput.trim()) return;

    if (editTask) {
      dispatch({ type: actionTypes.EDIT, payload: { id: editTask.id, text: taskInput } });
      setEditTask(null);
    } else {
      dispatch({ type: actionTypes.ADD, payload: taskInput });
    }

    setTaskInput(""); // Limpiar input
  };

  return (
    <div className="ejercicio11-container">
      <h2>Lista de Tareas con useReducer</h2>

      {/* Formulario para añadir o editar tarea */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Escribe una tarea..."
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <button type="submit">{editTask ? "Editar Tarea" : "Agregar Tarea"}</button>
      </form>

      {/* Lista de tareas */}
      <ul className="task-list">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <li key={task.id} className={task.completed ? "completed" : ""}>
              <span onClick={() => dispatch({ type: actionTypes.TOGGLE, payload: task.id })}>
                {task.text}
              </span>
              <div>
                <button onClick={() => setEditTask(task)}>✏ Editar</button>
                <button onClick={() => dispatch({ type: actionTypes.DELETE, payload: task.id })}>
                  ❌ Eliminar
                </button>
              </div>
            </li>
          ))
        ) : (
          <p>No hay tareas aún.</p>
        )}
      </ul>
    </div>
  );
};

export default Ejercicio11;
