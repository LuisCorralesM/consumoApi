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
  const [cards, setCards] = useState([ ]);

  useEffect(() => {
    traerData(4);
  }, []);


  /* Se crean dos Arreglos
  dataPokemon= (Guardar Inf que nos llega de la Api)
  carrtio= (Guardar NFts (Comprados))    
  */
  let dataPokemon = [];
  let carrito = [];

  const agregarCarrito = (id) => {

    let nft = {
      ...cards[id - 1],
    };
    carrito.push(nft);
    document.getElementById(id).disabled = true;
    alert("NFT Agregado al carritos ;) ")

    // localStorage.setItem('carrito', JSON.stringify(carrito))
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

        dataPokemon.push(pokemon);
      } catch (error) {
        alert("Ups! -NFTs no encontrado-");
      }
    }                                                       
    setCards(dataPokemon);
  };
  return (
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
              src={pokemon.sprites.front_default}
              alt=""
              className="img-pokemones"
            />
            <p>
              <span>Nombre: </span>
              {pokemon.name}
            </p>
            <p>
              <span>Tipo: </span> {pokemon.types[0].type.name}
            </p>
            <p>
              <span>Precio: </span>$ {Math.round(Math.random() * 1000)}
            </p>
            <button
              className="btn-carrito"
              onClick={(e) => agregarCarrito(e.target.id)}
              id={pokemon.id}
            >
              Agregar al carrito
            </button>
          </div>
        ))
      ) : (
        <div>
          <p>No hay data</p>
        </div>
      )}
    </div>
  );
};
