//Import React (Librería)
import React from "react";

//Import Archivo .Css (Los estilos del componentes)
import './ListaPokemones.css'

//Se crea y se exporta el Componente -BtnColor-
export const ListaPokemones = () => {

          /*En el componente ListaPokemones 
          creamos un arreglo  de 20 pocicinoes,
          donde encuentras el nombre de los 20 Pokemones
          más famosos, de esta manera, le estamos brindando 
          información de primera mano a el usuario, en caso 
          de no conocer muchos nombres de pokemones
          */
  let opcionesPokemones = [
    "NFTs más populares",
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

     //Se crea la Etiqueta <select>, para mostrar la lista de los Pokemones
    <select name="lista-pokemones" className="lista-pokemones">
      
      {/*Operador ternario ( ? ) =  if else slse*/}
      {opcionesPokemones ? (
        // Mapeamos el Arreglo "lista-pokemones"
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
