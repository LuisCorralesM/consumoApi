
//Import React (Librería)
import React from 'react';

//Import (Componente de React (Objeto Modelo Documento))
import ReactDOM from 'react-dom';

//Import App (Componente Principal)
// (Se encarga de agrupar los demás Contenedores)
import App from './container/App';

        //(Método .render)
ReactDOM.render(
  //Parametro N°1
  <React.StrictMode> <App /> </React.StrictMode>,
  //Parametro N°2
  document.getElementById('root')
);
