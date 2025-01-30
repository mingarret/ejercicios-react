import React, { useState } from "react";
import Ejercicio1 from "./components/Ejercicio1/Ejercicio1";
import Ejercicio2 from "./components/Ejercicio2/Ejercicio2";
import Ejercicio3 from "./components/Ejercicio3/Ejercicio3";
import Ejercicio4 from "./components/Ejercicio4/Ejercicio4";
import Ejercicio5 from "./components/Ejercicio5/Ejercicio5";
import Ejercicio6 from "./components/Ejercicio6/Ejercicio6";
import Ejercicio7 from "./components/Ejercicio7/Ejercicio7"; 
import Ejercicio8 from "./components/Ejercicio8/Ejercicio8";
import Ejercicio9 from "./components/Ejercicio9/Ejercicio9";
import Ejercicio10 from "./components/Ejercicio10/Ejercicio10";
import Ejercicio11 from "./components/Ejercicio11/Ejercicio11"; 

const App = () => {
  const [ejercicioActual, setEjercicioActual] = useState(1); // Estado para rastrear el ejercicio actual

  // Mapeo de ejercicios por número
  const ejercicios = {
    1: <Ejercicio1 />,
    2: <Ejercicio2 />,
    3: <Ejercicio3 />,
    4: <Ejercicio4 />,
    5: <Ejercicio5 />,
    6: <Ejercicio6 />,
    7: <Ejercicio7 />,
    8: <Ejercicio8 />,
    9: <Ejercicio9 />,
    10: <Ejercicio10 />,
    11: <Ejercicio11 />, // ¡Añadimos el Tres en Raya aquí!
  };
  return (
    <div>
      <header>
        <h1>Mis Ejercicios en React</h1>
        {/* Menú de botones para seleccionar ejercicios */}
        <nav>
          {Object.keys(ejercicios).map((key) => (
            <button
              key={key}
              onClick={() => setEjercicioActual(Number(key))} // Cambiar al ejercicio correspondiente
              style={{
                padding: "10px 20px",
                margin: "5px",
                borderRadius: "5px",
                backgroundColor: ejercicioActual === Number(key) ? "#2575fc" : "#ccc",
                color: ejercicioActual === Number(key) ? "white" : "black",
                border: "none",
                cursor: "pointer",
              }}
            >
              Ejercicio {key}
            </button>
          ))}
        </nav>
      </header>

      <main>
        {/* Renderiza el ejercicio seleccionado desde el mapeo */}
        {ejercicios[ejercicioActual] || <p>Selecciona un ejercicio</p>}
      </main>
    </div>
  );
};

export default App;
