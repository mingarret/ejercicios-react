import React, { useState } from "react";

export default function App() {
  // Usamos estados para manejar los valores de los inputs
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // Función para manejar cambios en el input del nombre
  function handleFirstNameChange(e) {
    setFirstName(e.target.value); // Actualizamos el estado con el nuevo valor
  }

  // Función para manejar cambios en el input del apellido
  function handleLastNameChange(e) {
    setLastName(e.target.value); // Actualizamos el estado con el nuevo valor
  }

  // Función para reiniciar los campos
  function handleReset() {
    setFirstName(""); // Reiniciamos el estado del nombre
    setLastName(""); // Reiniciamos el estado del apellido
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      {/* Input para el nombre */}
      <input
        placeholder="Nombre"
        value={firstName} // Vinculamos el valor al estado
        onChange={handleFirstNameChange} // Manejamos el cambio con la función
      />
      {/* Input para el apellido */}
      <input
        placeholder="Apellido"
        value={lastName} // Vinculamos el valor al estado
        onChange={handleLastNameChange} // Manejamos el cambio con la función
      />
      {/* Mostramos un saludo dinámico */}
      <h1>
        Hola, {firstName} {lastName}
      </h1>
      {/* Botón para reiniciar los valores */}
      <button onClick={handleReset}>Reiniciar</button>
    </form>
  );
}
