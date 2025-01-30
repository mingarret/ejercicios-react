// Importamos React y useState para manejar estados
import React, { useState } from "react";
// Importamos los estilos específicos del componente
import "./Ejercicio9.css";

export default function Counter() {
    const [score, setScore] = useState(0);

    function increment() {
        setScore(score + 1);
    }

    function incrementByThree() {
        setScore(score + 3);
    }

    return (
        <div className="counter">
            <h2>Contador de Puntuación</h2>
            <button onClick={increment}>Incrementar</button>
            <p>Puntuación: {score}</p>
            <button onClick={incrementByThree}>Incrementar por tres</button>
            <p>Puntuación: {score}</p>
        </div>
    )
}