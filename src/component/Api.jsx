import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

export const Api = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    traerData();
  }, []);

  const traerData = async (BUSQUEDA) => {
    const API = "https://pokeapi.co/api/v2/pokemon";
    // const apiHero = `${API}/${BUSQUEDA}`;
    const apiHero = `${API}/pikachu`;

    try {
      let res = await axios.get(apiHero);
      let pokemon = res.data;
      let dataPokemon = [];

      dataPokemon.push(pokemon);

      setData(dataPokemon);
    } catch (error) {
      console.log("ups  " + error);
    }
  };

  console.log(data);

  return (
    <>
      <h1>Consumiendo la API de pokemon</h1>
      {data ? (
        data.map((pokemon, i) => (
          <div key={i}>
            <h3>datos del pokemon</h3>
            <ul>
              <li><span>Habilidad: </span>{pokemon.abilities[0].ability.name}</li>
            </ul>
          </div>
        ))
      ) : (
        <div>
          {" "}
          <p>no hay data</p>
        </div>
      )}
    </>
  );
};
