import React from "react";
import "./BtnColor.css";

export const BtnColor = () => {
  const cambiarFondo = (e) => {
      e.preventDefault();
      console.log('oe nea');
        let 
          r1 = Math.round(Math.random() * 6),
          r2 = Math.round(Math.random() * 6),
          r3 = Math.round(Math.random() * 6);
        document.body.style.backgroundColor = `#${r1}${r2}${r3}`;
  };
  return (
    <button className="btn__cambiar-color" onClick={(e) => cambiarFondo(e)}>
      ☻
    </button>
  );
};
