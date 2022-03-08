// Componentes
import { Header } from "../component/Header";
import { Data } from "../component/Data";
import { BtnColor } from "../component/BtnColor";
import { ListaPokemones } from "../component/ListaPokemones";
import { Wsp } from "../component/Wsp";
import { Footer } from "../component/Footer";

function App() {
  return (
    <div className="App">
      {/* Componente cabecera */}
      <Header/>
      {/* Componente que hace el consumo de la API */}
      <Data/>
      {/* Componente que cambia el color de fondo */}
      <BtnColor/>
      {/* Componente que muestra una lista con los pokemones más famosos*/}
      <ListaPokemones/>
      {/* Componente botón de WhatsApp */}
      <Wsp/>
      {/* Componente pie de página */}
      <Footer/>
    </div>
  );
}

export default App;
