import React from "react"; // Importa React, necesario para crear componentes.
import "./Ejercicio1.css"; // Importa los estilos específicos para este componente.

const Ejercicio1 = () => {
  // Definimos un componente funcional llamado `Ejercicio1`.
  return (
    // Contenedor principal del ejercicio con clase CSS `ejercicio1-container`.
    <div className="ejercicio1-container">
      {/* Título principal con estilo llamativo */}
      <h1 className="ejercicio1-title">¡Hola Mundo! 🌎</h1>

      {/* Descripción o subtítulo con un mensaje adicional */}
      <p className="ejercicio1-description">
        Bienvenido al primer ejercicio en React. ¡Espero que te guste! 🎉
      </p>
    </div>
  );
};

export default Ejercicio1; // Exporta el componente para usarlo en otras partes de la app.
