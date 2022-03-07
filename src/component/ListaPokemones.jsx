import React from "react";
import './ListaPokemones.css'

export const ListaPokemones = () => {
  let opcionesPokemones = [
    "Pokemones más populares",
    "Charmander",
    "Bulbasaur",
    "Squirtle",
    "Chikorita",
    "Cyndaquil",
    "Totodile",
    "Treecko",
    "Torchic",
    "Turtwig",
    "Mudkip",
    "Chimchar",
    "Piplup",
    "Snivy",
    "Tepig",
    "Oshawott",
    "Chespin",
    "Fennekin",
    "Froakie",
    "Rowlet",
    "Litten",
    "Popplio",
  ];

  return (
    <select name="lista-pokemones" className="lista-pokemones">
      {opcionesPokemones ? (
        opcionesPokemones.map((nombre, i) => (
          <option key={i} value={nombre}>
            {nombre}
          </option>
        ))
      ) : (
        <div>No hay opciones</div>
      )}
    </select>
  );
};
