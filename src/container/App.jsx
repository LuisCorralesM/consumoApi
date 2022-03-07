// Componentes
import { Data } from "../component/Data";
import { BtnColor } from "../component/BtnColor";
import { ListaPokemones } from "../component/ListaPokemones";

function App() {
  return (
    <div className="App">
      <h1 className="titulo-principal">Consumiendo la API de pokemon</h1>
      {/* Componente que hace el consumo de la API */}
      <Data></Data>
      {/* Componente que cambia el color de fondo */}
      <BtnColor></BtnColor>
      {/* Componente que muestra una lista con los pokemones más famosos*/}
      <ListaPokemones></ListaPokemones>
    </div>
  );
}

export default App;
