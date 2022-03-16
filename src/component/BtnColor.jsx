import React from "react";
import "./BtnColor.css";

export const BtnColor = () => {
  const cambiarFondo = (e) => {
    e.preventDefault();
    let 
    r1 = Math.round(Math.random() * 6),
    r2 = Math.round(Math.random() * 6),
    r3 = Math.round(Math.random() * 6);
    document.body.style.backgroundColor = `#${r1}${r2}${r3}`;
  };
  return (
    <img alt="Imagen BtnColor" src="assets/img/btn-cambiarColor.ico" className="btn__cambiar-color" onClick={(e) => cambiarFondo(e)} id="btn-colors"/>
  );
};
