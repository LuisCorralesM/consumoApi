//Import React (Librería)
import React from 'react'

//Import Archivo .Css (Los estilos del componentes)
import './Header.css'

//Se crea y se exporta el Componente -Header-
export const Header = () => {
  return (

      /*En el componente Header, como su nombre lo indica
      creamos un <h1> con el titulo principal de nuestro proyecto

            -> Consumiento la API de pokemon<-
      */

    <header>
        <h1 className="titulo-principal">Ditroy Technology NFTs</h1>
    </header>
  )
}
