// Importamos React y useState para manejar estados
import React, { useState } from "react";
// Importamos los estilos específicos del componente
import "./Ejercicio5.css";

const Ejercicio5 = () => {
  // Lista de objetos, cada uno representará un botón interactivo
  const listaObjetos = [
    { id: 1, nombre: "Botón Rojo", color: "red" },
    { id: 2, nombre: "Botón Verde", color: "green" },
    { id: 3, nombre: "Botón Azul", color: "blue" },
    { id: 4, nombre: "Botón Amarillo", color: "yellow" },
  ];

  // Estado para manejar el mensaje dinámico
  const [mensaje, setMensaje] = useState("");

  // Función que se ejecuta al hacer clic en un botón
  const handleClick = (objeto) => {
    // Mostramos un mensaje dinámico en pantalla
    setMensaje(`¡Hiciste clic en ${objeto.nombre}! 🎉`);
    // Mostramos un alert con el color del botón
    alert(`El color del botón es: ${objeto.color}`);
    // Limpiamos el mensaje después de 3 segundos
    setTimeout(() => setMensaje(""), 3000);
  };

  return (
    <div className="ejercicio5-container">
      {/* Título del ejercicio */}
      <h2 className="ejercicio5-title">Ejercicio 5: Lista de Botones</h2>

      {/* Renderizamos un botón por cada objeto de la lista */}
      <div className="ejercicio5-buttons">
        {listaObjetos.map((objeto) => (
          <button
            key={objeto.id} // Asignamos una clave única para cada botón
            className="ejercicio5-button" // Clase CSS para estilos
            style={{ backgroundColor: objeto.color }} // Estilo dinámico basado en el color del objeto
            onClick={() => handleClick(objeto)} // Evento onClick que pasa el objeto actual
          >
            {objeto.nombre} {/* Texto del botón basado en el nombre del objeto */}
          </button>
        ))}
      </div>

      {/* Mensaje dinámico mostrado al usuario */}
      {mensaje && <p className="ejercicio5-message">{mensaje}</p>}
    </div>
  );
};

// Exportamos el componente
export default Ejercicio5;
