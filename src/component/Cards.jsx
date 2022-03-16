import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Cards.css";

export const Cards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    traerData(4);
  }, []);

  let dataPokemon = [];
  let carrito = [];

  const agregarCarrito = (id) => {

    let ntf = {
      ...cards[id - 1],
    };
    carrito.push(ntf);
    document.getElementById(id).disabled = true;
    console.log(carrito);

    // localStorage.setItem('carrito', JSON.stringify(carrito))
  };

  const traerData = async (n) => {
    for (let i = 1; i <= n; i++) {
      const API = `https://pokeapi.co/api/v2/pokemon/${i}`;
      try {
        let res = await axios.get(API);
        let pokemon = res.data;

        dataPokemon.push(pokemon);
      } catch (error) {
        console.log("POKEMON NO ENCONTRADO" + error);
        alert("nombre de pokemon no valido");
      }
    }
    setCards(dataPokemon);
  };
  // console.log(cards);
  return (
    <div className="content-cards">
      {cards ? (
        cards.map((pokemon, i) => (
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
          <p>no hay data</p>
        </div>
      )}
    </div>
  );
};
