// Importamos React y el hook useState para manejar el estado del contador
import React, { useState } from "react";
// Importamos los estilos específicos de este componente
import "./Ejercicio2.css";

const Ejercicio2 = () => {
  // Declaramos el estado `contador` con valor inicial 0, y la función `setContador` para actualizarlo
  const [contador, setContador] = useState(0);

  return (
    // Contenedor principal del ejercicio con una clase para estilos
    <div className="ejercicio2-container">
      {/* Título del ejercicio */}
      <h2 className="ejercicio2-title">Ejercicio 2: Contador</h2>

      {/* Muestra el valor actual del contador */}
      <p className="ejercicio2-counter">Valor actual: <strong>{contador}</strong></p>

      {/* Contenedor de los botones */}
      <div className="ejercicio2-buttons">
        {/* Botón para incrementar el contador */}
        <button
          className="ejercicio2-button"
          onClick={() => setContador(contador + 1)} // Incrementa el valor del contador en 1
        >
          Incrementar ➕
        </button>

        {/* Botón para decrementar el contador */}
        <button
          className="ejercicio2-button"
          onClick={() => setContador(contador - 1)} // Decrementa el valor del contador en 1
        >
          Decrementar ➖
        </button>

        {/* Botón para reiniciar el contador */}
        <button
          className="ejercicio2-button"
          onClick={() => setContador(0)} // Reinicia el contador al valor inicial (0)
        >
          Reiniciar 🔄
        </button>
      </div>
    </div>
  );
};

// Exportamos el componente para que pueda ser utilizado en otras partes del proyecto
export default Ejercicio2;
