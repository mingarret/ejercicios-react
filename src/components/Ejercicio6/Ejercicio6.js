import React, { useState } from "react";
import { sculptureList } from "../../data";
import "./Ejercicio6.css";

const Ejercicio6 = () => {
  const [indice, setIndice] = useState(0); // Índice de la escultura actual
  const [showMore, setShowMore] = useState(false); // Estado para mostrar/ocultar descripción

  // Función para avanzar a la siguiente escultura
  const avanzar = () => {
    setIndice((prevIndice) => (prevIndice + 1) % sculptureList.length); // Vuelve al inicio al llegar al final
    setShowMore(false); // Resetea el estado de la descripción
  };

  // Alternar mostrar/ocultar descripción
  const handleShowMoreClick = () => {
    setShowMore((prev) => !prev); // Alterna entre true/false
  };

  const esculturaActual = sculptureList[indice]; // Escultura actual basada en el índice

  return (
    <div className="ejercicio6-container">
      {/* Título del ejercicio */}
      <h2 className="ejercicio6-title">Explorador de Esculturas</h2>

      {/* Información de la escultura actual */}
      <div className="escultura-info">
        {/* Mostrar numeración: Ejemplo "Escultura 1 de 12" */}
        <p className="escultura-numero">
          Escultura {indice + 1} de {sculptureList.length}
        </p>
        <h3 className="escultura-nombre">{esculturaActual.name}</h3>
        <p className="escultura-artista">
          <strong>Artista:</strong> {esculturaActual.artist}
        </p>
        <img
          className="escultura-imagen"
          src={esculturaActual.url}
          alt={esculturaActual.alt}
        />
      </div>

      {/* Botón para mostrar/ocultar descripción */}
      <button className="ejercicio6-button" onClick={handleShowMoreClick}>
        {showMore ? "Ocultar Descripción" : "Mostrar Descripción"}
      </button>

      {/* Descripción mostrada si `showMore` es true */}
      {showMore && (
        <p className="escultura-descripcion">
          <strong>Descripción:</strong> {esculturaActual.description}
        </p>
      )}

      {/* Botón para avanzar a la siguiente escultura */}
      <button className="ejercicio6-button" onClick={avanzar}>
        Ver Siguiente
      </button>
    </div>
  );
};

export default Ejercicio6;
