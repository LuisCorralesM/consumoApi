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
    const apiHero = `${API}/${BUSQUEDA || 'pikachu'}`;
    // const apiHero = `${API}/pikachu`;

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

  const buscarPokemon = (e)=>{
    let nombrePokemon = e.target.value.toLowerCase()
    console.log(nombrePokemon);
    traerData(nombrePokemon)
  }

  console.log(data);

  return (
    <>
      <h1>Consumiendo la API de pokemon</h1>

      <input type="text" placeholder="Nombre del pokemon" className="input-pokemon" onChange={(e)=>buscarPokemon(e)}/>
      {data ? (
        data.map((pokemon, i) => (
          <div key={i}>
            <h3>datos del pokemon</h3>
            <ul>
              <li><span>Nombre del pokemon: </span>{pokemon.name}</li>
              <li><span>Id: </span>{pokemon.id}</li>
              <li><span>Order: </span>{pokemon.order}</li>
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
