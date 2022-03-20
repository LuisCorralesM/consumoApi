import React, { useState, useEffect } from "react";
import "./Carrito.css";
export const Carrito = () => {
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("carrito")) {
      let carro = JSON.parse(localStorage.getItem("carrito"));
      setCarrito(carro);
    }
  }, []);
  
  return (
    <div className="contenedor-carrito">
      <div>
        <div className="btn-whatsapp-domiciliario"></div>
        <h1 className="titulo-carrito"> Carrito de compras </h1>
        <table className="table">
          <thead style={{ color: "white;" }}>
            <tr>
              <th scope="col" className="th-none">
                Id
              </th>
              <th scope="col">Producto</th>
              <th scope="col">Precio unidad</th>
            </tr>
          </thead>
          {carrito ? (
            carrito.map((element, index) => (
              <tbody key={index} id="items" style={{ color: "white;" }}>
                <tr>
                  <th scope="row" className="th-none">
                    {element.id}
                  </th>
                  <td>{element.name}</td>
                  <td>xxx</td>
                </tr>
              </tbody>
            ))
          ) : (
            <tr id="footer">
              <th scope="row" colspan="4">
                Carrito vacío - comience a comprar!
              </th>
            </tr>
          )}

          <tfoot>
            <th scope="row" colspan="1" id="th-total">
              Total productos
            </th>
            <td>xxxx</td>
            <td className="font-weight-bold">
              $ <span>xxxxx</span>
            </td>
          </tfoot>
        </table>
      </div>
    </div>
  );
};
