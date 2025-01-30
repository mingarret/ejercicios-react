// Importamos React y el hook useState para manejar el estado del color de fondo
import React, { useState } from "react";
// Importamos los estilos desde el archivo CSS
import "./Ejercicio4.css";

const Ejercicio4 = () => {
  // Declaramos el estado `color` para almacenar el color actual del fondo
  const [color, setColor] = useState("white");

  // Función para cambiar el color del fondo
  const cambiarColor = (nuevoColor) => {
    setColor(nuevoColor); // Actualizamos el estado con el nuevo color
  };

  return (
    // Contenedor principal con estilo dinámico basado en el color de fondo
    <div className="ejercicio4-container" style={{ backgroundColor: color }}>
      {/* Título del ejercicio */}
      <h2 className="ejercicio4-title">Ejercicio 4: Cambiador de Color</h2>

      {/* Descripción del ejercicio */}
      <p className="ejercicio4-description">
        Haz clic en los botones para cambiar el color del fondo:
      </p>

      {/* Botones para seleccionar diferentes colores */}
      <div className="ejercicio4-buttons">
        {/* Botón para cambiar a rojo */}
        <button
          className="ejercicio4-button"
          style={{ backgroundColor: "red" }}
          onClick={() => cambiarColor("red")}
        >
          Rojo 🔴
        </button>

        {/* Botón para cambiar a verde */}
        <button
          className="ejercicio4-button"
          style={{ backgroundColor: "green" }}
          onClick={() => cambiarColor("green")}
        >
          Verde 🟢
        </button>

        {/* Botón para cambiar a azul */}
        <button
          className="ejercicio4-button"
          style={{ backgroundColor: "blue" }}
          onClick={() => cambiarColor("blue")}
        >
          Azul 🔵
        </button>

        {/* Botón para resetear el color a blanco */}
        <button
          className="ejercicio4-button"
          style={{ backgroundColor: "white", color: "black" }}
          onClick={() => cambiarColor("white")}
        >
          Reset ⚪
        </button>
      </div>
    </div>
  );
};

// Exportamos el componente para usarlo en otras partes de la aplicación
export default Ejercicio4;
