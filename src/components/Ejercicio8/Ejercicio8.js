import React, { useState } from "react";
import "./Ejercicio8.css";

const Ejercicio8 = () => {
  // Estado del tablero: array de 9 posiciones (vacío al inicio)
  const [tablero, setTablero] = useState(Array(9).fill(null));
  // Estado para manejar el turno: true -> "X", false -> "O"
  const [turnoX, setTurnoX] = useState(true);
  // Historial de jugadas
  const [historial, setHistorial] = useState([]);

  // Combinaciones ganadoras del Tres en Raya
  const combinacionesGanadoras = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Filas
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columnas
    [0, 4, 8], [2, 4, 6], // Diagonales
  ];

  // Función para determinar si hay un ganador
  const determinarGanador = () => {
    for (let combinacion of combinacionesGanadoras) {
      const [a, b, c] = combinacion;
      if (tablero[a] && tablero[a] === tablero[b] && tablero[a] === tablero[c]) {
        return tablero[a]; // Devuelve "X" o "O" si hay ganador
      }
    }
    return null; // No hay ganador aún
  };

  // Función para manejar el clic en una celda
  const manejarClick = (indice) => {
    // Si la celda ya tiene un valor o hay un ganador, no hacemos nada
    if (tablero[indice] || determinarGanador()) return;

    // Copiamos el estado actual del tablero
    const nuevoTablero = [...tablero];
    nuevoTablero[indice] = turnoX ? "X" : "O"; // Asignamos "X" o "O"

    // Guardamos el nuevo tablero en el estado
    setTablero(nuevoTablero);
    // Cambiamos el turno
    setTurnoX(!turnoX);

    // Guardamos la jugada en el historial
    setHistorial([...historial, `Turno ${turnoX ? "X" : "O"} en casilla ${indice + 1}`]);
  };

  // Función para reiniciar el juego
  const reiniciarJuego = () => {
    setTablero(Array(9).fill(null)); // Restablecemos el tablero
    setTurnoX(true); // Reiniciamos el turno a "X"
    setHistorial([]); // Limpiamos el historial de jugadas
  };

  const ganador = determinarGanador();
  const empate = !ganador && tablero.every((celda) => celda !== null); // Si el tablero está lleno y no hay ganador

  return (
    <div className="ejercicio8-container">
      <h2>Juego Tres en Raya</h2>

      {/* Mensaje de estado */}
      <p className="estado-juego">
        {ganador
          ? `¡Ganador: ${ganador}! 🎉`
          : empate
          ? "¡Es un empate! 😲"
          : `Turno de: ${turnoX ? "X" : "O"}`}
      </p>

      {/* Tablero del juego */}
      <div className="tablero">
        {tablero.map((valor, indice) => (
          <button key={indice} className="celda" onClick={() => manejarClick(indice)}>
            {valor}
          </button>
        ))}
      </div>

      {/* Botón de reinicio */}
      <button className="reiniciar-boton" onClick={reiniciarJuego}>
        Reiniciar Juego 🔄
      </button>

      {/* Historial de jugadas */}
      <h3>Historial de Jugadas</h3>
      <ul className="historial">
        {historial.length > 0 ? historial.map((jugada, index) => <li key={index}>{jugada}</li>) : <p>No hay jugadas aún.</p>}
      </ul>
    </div>
  );
};

export default Ejercicio8;
