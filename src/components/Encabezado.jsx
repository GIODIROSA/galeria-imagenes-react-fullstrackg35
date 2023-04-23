import React from "react";
import "../assets/css/encabezado.css";

const Encabezado = (props) => {
  return (
    <div className="galeria-encabezado">
      <h1 className="galeria-encabezado__titulo">{props.texto}</h1>
      <p className="galeria-encabezado__parrafo">{props.parrafo}</p>
    </div>
  );
};

export default Encabezado;
