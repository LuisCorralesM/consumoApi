import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

// estilos
import "../styles/styles.css";

export const Api = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    traerData();
  }, []);

  const traerData = async (BUSQUEDA) => {
    const API = "https://pokeapi.co/api/v2/pokemon";
    const apiPokemon = `${API}/${BUSQUEDA || "pikachu"}`;

    try {
      let res = await axios.get(apiPokemon);
      let pokemon = res.data;
      console.log(res.data);
      let dataPokemon = [];

      dataPokemon.push(pokemon);

      setData(dataPokemon);
    } catch (error) {
      console.log("POKEMON NO ENCONTRADO" + error);
      alert("nombre de pokemon no valido");
      document.getElementById("input-pokemon").value = "";
    }

  };

  let nombrePokemon = "";
  let opcionesPokemones = [
    'Pokemones más populares',
    'Charmander',
    'Bulbasaur',
    'Squirtle',
    'Chikorita',
    'Cyndaquil',
    'Totodile',
    'Treecko',
    'Torchic',
    'Turtwig',
    'Mudkip',
    'Chimchar',
    'Piplup',
    'Snivy',
    'Tepig',
    'Oshawott',
    'Chespin',
    'Fennekin',
    'Froakie',
    'Rowlet',
    'Litten',
    'Popplio',
  ];

  const guardarNombre = (e) => {
    nombrePokemon = e.target.value.toLowerCase();
  };

  const buscarPokemon = (e) => {
    e.preventDefault();
    traerData(nombrePokemon);
  };

  const inputNombre = document.getElementById('input-pokemon')

  return (
    <>
      <h1 className="titulo-principal">Consumiendo la API de pokemon</h1>
      <div className="contenedor-data">
        <div>
          <input
            type="text"
            placeholder="Nombre del pokemon"
            id="input-pokemon"
            className="input-buscar"
            onChange={(e) => guardarNombre(e)}
          />
          <button onClick={(e) => buscarPokemon(e)} className="button-buscar">
            Buscar
          </button>
        </div>
        <div>
          <select name="lista-pokemones" className="lista-pokemones">
            {
              opcionesPokemones ?(
                opcionesPokemones.map((nombre, i) => (
                    <option key={i} value={nombre}>{nombre}</option>
                ))
              ): (<div>No hay opciones</div>)
            }
          </select>
        </div>
        {data ? (
          data.map((pokemon, i) => (
            <div key={i} className="contenedor-data-pokemon">
              <h3 className="titulo-datos">Datos del pokemon</h3>
              <ul>
                <li className="gird-img">
                  <img
                    src={pokemon.sprites.front_default}
                    alt=""
                    className="img-pokemones"
                  />
                  <img
                    src={pokemon.sprites.back_default}
                    alt=""
                    className="img-pokemones"
                  />
                  <img
                    src={pokemon.sprites.front_default}
                    alt=""
                    className="img-pokemones"
                  />
                </li>
                <li>
                  <span>Nombre del pokemon: </span>
                  {pokemon.name}
                </li>
                <li>
                  <span>Tipo de pokemón: </span>
                  {pokemon.types[i].type.name}
                </li>
                <li>
                  <span>Id: </span>
                  {pokemon.id}
                </li>
                <li>
                  <span>Order: </span>
                  {pokemon.order}
                </li>
              </ul>
            </div>
          ))
        ) : (
          <div>
            <p>no hay data</p>
          </div>
        )}
      </div>
    </>
  );
};
