/* 
Import React (Librería)

Adicional los Hooks: useState y useEffect
(Es una sintaxis que nos ofrece React para reemplazar
  las clases a la hora de controla el ciclo de vida
  del componente)

  useState = (Guardar la información componente)
  useEffect = (Ejecutar una acción cuando se recargue toda la Aplicación)
*/
import React, { useState, useEffect } from "react";

// Import axios (Librería), para hacer el consumo de la Api
import axios from "axios";

//Import Archivo .Css (Los estilos del componentes)
import "./Cards.css";

//Se crea y se exporta el Componente -Cards-
export const Cards = () => {
  //Sintaxis (useState)
  const [cards, setCards] = useState([]);
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    traerData(12);
    if (localStorage.getItem("carrito")) {
      let pintarCarro = JSON.parse(localStorage.getItem("carrito"));
      setCarrito(pintarCarro);
    }
  }, []);

  /* Se crean dos Arreglos
  dataPokemon= (Guardar Inf que nos llega de la Api)
  carrtio= (Guardar NFts (Comprados))    
  */
  let dataPokemon = [];
  let carro = [];


  const agregarCarrito = (id) => {
    let nft = {
      ...cards[id - 1],
    };

    carro.push(nft);
    document.getElementById(id).disabled = true;
    alert("NFT Agregado al carritos ;) ");
    document.getElementById(id).style.backgroundColor = "#292";

    if (localStorage.getItem("carrito")) {
      let localS = JSON.parse(localStorage.getItem("carrito"));
      localS.push(nft)
      console.log(localS);
      localStorage.removeItem("carrito");

      localStorage.setItem("carrito", JSON.stringify(localS));
    } else {
      localStorage.setItem("carrito", JSON.stringify(carro));
    }

    let pintarCarro = JSON.parse(localStorage.getItem("carrito"));
    setCarrito(pintarCarro);
  };

  /*
  Para  traer la inf, creamos una función asíncrona 
  de tipo flecha, que espera el parametro n= (Número de Pokemones)
  */
  const traerData = async (n) => {
    for (let i = 1; i <= n; i++) {
      const API = `https://pokeapi.co/api/v2/pokemon/${i}`;
      try {
        let res = await axios.get(API);
        let pokemon = res.data;

        dataPokemon.push({
          id: pokemon.id,
          nombre: pokemon.name,
          tipo: pokemon.types[0].type.name,
          img: pokemon.sprites.front_default,
          precio: Math.round(Math.random() * 1000)
        });
      } catch (error) {
        alert("Ups! -NFTs no encontrado-");
      }
    }
    setCards(dataPokemon);
  };

  const vaciarCarrito = () => {
    localStorage.removeItem("carrito");
    setCarrito([])
  }

  return (
    <>
      <div className="content-cards">
        {/*Operador ternario ( ? ) =  if else slse*/}
        {cards ? (
          //Cards = Es un Arreglo con la data.
          cards.map((pokemon, i) => (
            /*En la Etiqueta <div>
            se pinta la información por cada Pokemon
            */
            <div key={i} className="card">
              <img
                src={pokemon.img}
                alt=""
                className="img-pokemones"
              />
              <p>
                <span>Nombre: </span>
                {pokemon.nombre}
              </p>
              <p>
                <span>Tipo: </span> {pokemon.tipo}
              </p>
              <p>
                <span>Precio: </span>
                <p className={pokemon.id}>{pokemon.precio}</p>
              </p>
              <div className="contenedor-btn-carrito">
                <img
                  className="btn-carrito"
                  onClick={(e) => agregarCarrito(e.target.id)}
                  id={pokemon.id}
                  src="./assets/img/carrito.jpg"
                />
              </div>
            </div>
          ))
        ) : (
          <div>
            <p>No hay data</p>
          </div>
        )}
      </div>
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
              carrito.map((pokemon, index) => (
                <tbody key={index} id="items" style={{ color: "white;" }}>
                  <tr>
                    <th scope="row" className="th-none">
                      {pokemon.id}
                    </th>
                    <td>{pokemon.nombre}</td>
                    <td>$ <span>{pokemon.precio}</span></td>
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
              <td>xxx</td>
              <td className="font-weight-bold">
                $ <span>xxx</span>
              </td>
            </tfoot>
          </table>
        </div>
        <button className="btn-vaciar-carrito" onClick={() => vaciarCarrito()}>vaciar carrito</button>
      </div>
    </>

  );
};
