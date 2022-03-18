//Import React (Librería)
import React from 'react'

//Import Archivo .Css (Los estilos del componentes)
import './Footer.css'

//Se crea y se exporta el Componente -Footer-
export const Footer = () => {
  return (

      /*En el componente -footer-
      se crea una etiqueta <footer>, con los derechos de autor
      donde encontramos los nombres de los integrantes del grupo
      */

    <footer>
        <p className='derechos-de-autor'> <span className='simbolo-copyright'>©</span> Sebastían Yepes | Mateo Cano | Julian Castaño</p>
    </footer>
  )
}
