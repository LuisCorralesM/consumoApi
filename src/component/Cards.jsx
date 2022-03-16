import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Cards.css";

export const Cards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    traerData(20);
  }, []);

  let dataPokemon = [];

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
            <p>{pokemon.name}</p>
            <p> {pokemon.types[0].type.name}</p>
            <p>${Math.round(Math.random() * 100)}</p>
            <button className="btn-carrito">Agregar al carrito</button>
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
