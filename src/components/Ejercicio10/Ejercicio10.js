import React, { useState } from "react";
import "./Ejercicio10.css";

const Ejercicio10 = () => {
  // Estados del formulario
  const [answer, setAnswer] = useState(""); // Respuesta del usuario
  const [status, setStatus] = useState(null); // Estado de validación (cargando, éxito, error)
  const [error, setError] = useState(null); // Manejo de errores

  // Respuesta correcta esperada (como si viniera del servidor)
  const correctAnswer = "Lima";

  // Función para manejar cambios en el textarea
  const handleTextareaChange = (e) => {
    setAnswer(e.target.value);
    setError(null); // Limpiar errores cuando el usuario empieza a escribir
  };

  // Simula una petición asíncrona a un servidor
  const submitForm = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const userAnswer = answer.trim().toLowerCase();
        const expectedAnswer = correctAnswer.toLowerCase();

        if (userAnswer === expectedAnswer) {
          resolve("✅ ¡Correcto! Lima es la ciudad con un cartel que convierte aire en agua. 🎉");
        } else {
          reject("❌ Respuesta incorrecta. Inténtalo de nuevo.");
        }
      }, 1500); // Simulación de retraso en la respuesta del "servidor"
    });
  };

  // Manejo del formulario con preventDefault y manejo de errores
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevenir recarga de la página
    setStatus("⏳ Enviando respuesta..."); // Estado de carga
    setError(null); // Limpiar errores previos

    try {
      const response = await submitForm(); // Simulamos el envío al "servidor"
      setStatus(response); // Mostramos respuesta exitosa
    } catch (err) {
      setStatus(null);
      setError(err); // Capturamos errores (respuesta incorrecta)
    }
  };

  return (
    <div className="ejercicio10-container">
      <h2>Cuestionario sobre Ciudades</h2>
      <p>¿En qué ciudad hay un cartel publicitario que convierte aire en agua?</p>

      {/* Formulario */}
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Escribe tu respuesta aquí..."
          value={answer}
          onChange={handleTextareaChange}
          rows="3"
        />
        <button type="submit">Enviar</button>
      </form>

      {/* Mensaje de carga, éxito o error */}
      {status && <p className="mensaje">{status}</p>}
      {error && <p className="mensaje error">{error}</p>}
    </div>
  );
};

export default Ejercicio10;
