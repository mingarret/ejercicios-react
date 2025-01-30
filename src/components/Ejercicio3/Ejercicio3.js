// Importamos React y el hook useState para manejar el estado del input
import React, { useState } from "react";
// Importamos los estilos específicos para este componente
import "./Ejercicio3.css";

const Ejercicio3 = () => {
  // Declaramos el estado `texto` para almacenar el valor ingresado en el input
  const [texto, setTexto] = useState("");

  return (
    // Contenedor principal del ejercicio con una clase CSS para estilos
    <div className="ejercicio3-container">
      {/* Título del ejercicio */}
      <h2 className="ejercicio3-title">Ejercicio 3: Input Dinámico</h2>

      {/* Campo de entrada para que el usuario escriba texto */}
      <input
        className="ejercicio3-input" // Clase CSS para estilos
        type="text" // Tipo de campo: texto
        placeholder="Escribe algo aquí..." // Texto que aparece cuando el campo está vacío
        value={texto} // Vinculamos el valor del input al estado `texto`
        onChange={(e) => setTexto(e.target.value)} // Actualizamos el estado con el valor ingresado
      />

      {/* Muestra el texto ingresado dinámicamente o un mensaje si está vacío */}
      <p className="ejercicio3-output">
        {texto ? `Tu texto: "${texto}"` : "Escribe algo para mostrarlo aquí 👆"}
      </p>
    </div>
  );
};

// Exportamos el componente para usarlo en otras partes del proyecto
export default Ejercicio3;
