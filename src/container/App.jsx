
/*          --Componente Principal--

En el componente App, encontraremos el import
de los demás componentes creados en nuestro en proyecto.

Por lo tanto, es considerado el componente más importante;
Se guarda en una carpeta que nombramos: 
        Container, (Contiene los demás contenedores).
*/


// Import de los Componentes:

import { BtnColor } from "../component/Comp_N°1-BtnColor/BtnColor";
import { Cards } from "../component/Comp_N°2-Cards/Cards";
import { Data } from "../component/Comp_N°3-Data/Data";
import { Footer } from "../component/Comp_N°4-Footer/Footer";
import { Header } from "../component/Comp_N°5-Header/Header";
import { ListaPokemones } from "../component/Comp_N°6-ListaPokemones/ListaPokemones";
import { Wsp } from "../component/Comp_N°7-Wsp/Wsp";
/*Creamos una función (Componente), a la cual llamamos
App, dicha función tendrá un return

Este return hará un llamado a cada componente creado
y a su vez nos traerá la información y características
que nos ofrece cada componente:
*/
function App() {
  return (
    <div className="App">
      {/* Componente cabecera */}
      <Header />
      {/* Componente que hace el consumo de la API */}
      <Data />
      {/* Componente que cambia el color de fondo */}
      <BtnColor />
      {/* Componente que muestra una lista con los pokemones más famosos*/}
      <ListaPokemones />
      {/* Componente botón de WhatsApp */}
      <Wsp />
      {/* Componente Cards */}
      <Cards />
      {/* Componente pie de página */}
      <Footer />
    </div>
  );
}
/*Exportamos la Función -App- de tipo componente.
  Como es el único componente que se exporta, 
  lo podemos hacer de manera "default"
*/
export default App;
