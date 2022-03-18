/* 
Import React (Librería)

Adicional los Hooks: useState y useEffect
(Es una sintaxis que nos ofrece React para reemplazar
  las clases a la hora de controla el ciclo de vida
  del componente)

  useState = (Guardar la información componente)
  useEffect = (Ejecutar una acción cuando se recargue toda la Aplicación)
*/
import React from "react";

// Import axios (Librería), para hacer el consumo de la Api
import axios from "axios";
import { useEffect, useState } from "react";

//Import Archivo .Css (Los estilos del componentes)
import "./Data.css";

//Se crea y se exporta el Componente -Data-
export const Data = () => {
 
 //Se hace uso del useState pra guardadar la Información
 //En el estado del Componenete
  const [data, setData] = useState([]);

  useEffect(() => {
    traerData();
  }, []);


              //Caja Input -busqueda-

  /*Creamos una Función Asíncrona,
  llamada -traerData-, le pasamos como
  parametro (BUSQUEDA)
  */
  const traerData = async (BUSQUEDA) => {
    //Guardamos en la constante API, un Endpoint de la Api
    const API = "https://pokeapi.co/api/v2/pokemon";

    //Luego creamos otra constante -apipokemon-,
    //en ella concatenamos el Endpoint y la Busqueda o Pikachu
    const apiPokemon = `${API}/${BUSQUEDA || "pikachu"}`;

    
    //Intentar
    try {
      let res = await axios.get(apiPokemon);
      
            // -.data-  (Valor del objeto)
      let pokemon = res.data;
      
      //Creamos un Métod Vació
      let dataPokemon = [];

     //Hacemos Uso del Método Push
     // (Que nos permite guardar un elemento en la última posición)      
      dataPokemon.push(pokemon);

      //Guardamos el Arreglo en un Estado
      setData(dataPokemon);

      //Capturar
    } catch (error) {
      console.log("POKEMON NO ENCONTRADO" + error);
      alert("Nombre de NFts no valido");
      
      /*Solo en caso de Error (Si el Nombre del NFTs, no es valido)
      La Caja de Texto -input- quedará vaciá, por facilidada para el usuario*/
      document.getElementById("input-pokemon").value = "";
    }
  };

  /*Creamos Variable de tipo String vacío
  Donde guardamos la entrada de texto de parte del usuario
  cuando hace una busqueda de un Pokemon*/
  let nombrePokemon = "";

  /*Creamos una Constante, donde guardams una Función
  -guardarNombre-  _Capturando el evento
  */
  const guardarNombre = (e) => {

    /*Guardamos en la Variable vacía -nombrePokemon-
    El evento con el target y el valor de lo que está ingresando el usuario
    y aplicamos el Metodo toLowerCase, para convertir todo en Minuscula  */
    nombrePokemon = e.target.value.toLowerCase();
  };

  //Función buscarPokemon
  const buscarPokemon = (e) => {

    //Quitamos los valores por defecto, por hacer uso de la captura del evento
    e.preventDefault();

    //Llamamos a la función -traerData-, para realizar la busqueda
    traerData(nombrePokemon);
  };

  return (

        /* En el Return tenemos el llamado a las
        funciones, creadas anteriormente, y se pinta la 
        Data de los Pokemones que se buscan
        */

    <>
      <div className="contenedor-data">
        <div>
          <input
            type="text"
            placeholder="Nombre del NFTs"
            id="input-pokemon"
            className="input-buscar"
            onChange={(e) => guardarNombre(e)}
          />
          <button onClick={(e) => buscarPokemon(e)} className="button-buscar">
            Buscar
          </button>
        </div>
        <div></div>
        {data ? (
          data.map((pokemon, i) => (
            <div key={i} className="contenedor-data-pokemon">
              <h3 className="titulo-datos">Datos del NFTs</h3>
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
                  <span>Nombre del NFTs: </span>
                  {pokemon.name}
                </li>
                <li>
                  <span>Tipo de NFTs: </span>
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
