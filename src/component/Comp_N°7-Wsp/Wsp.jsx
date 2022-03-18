//Import React (Librería)
import React from 'react'

//Import Archivo .Css (Los estilos del componentes)
import './Wsp.css'

//Se crea y se exporta el Componente -Wsp-
export const Wsp = () => {
    const abrirWsp = ()=>{

        /*Creamos una variable, con la dirección que 
          redirige al usuario, al grupo de WhatsApp de nuestro Grupo*/
        let
        numero = 'https://chat.whatsapp.com/Ld7qOM31Re62PAS4pF9bwr';
        window.open(`${numero}`)
    }
  return (

    /* Como return
        tenemos la creación de una Etiqueta <button>
        que será a su vez el botón de WhatsApp, donde hacemos
        uso de una función flecha, detectando el evento del click
        por medio del Método onClick
     */ 
    <button className='btn-wsp' onClick={()=> abrirWsp()}>

     {/* Creamos la Etiqueta <img>, se le asigna una clase -className-,
          para luego llamarla desde el archivo .css, se le da la ruta de la imagen -src-,
          y por último se le asigna un Id  */}
     
        <img className="icono-wsp" src="assets/img/wsp.png" alt="icono-wsp" id="btn-wsp"/>
    </button>
  )
}
