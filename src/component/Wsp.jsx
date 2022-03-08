import React from 'react'
import './Wsp.css'

export const Wsp = () => {

    const abrirWsp = ()=>{
        let
        numero = 'https://chat.whatsapp.com/Ld7qOM31Re62PAS4pF9bwr';
        window.open(`${numero}`)
    }
  return (
    <button className='btn-wsp' onClick={()=> abrirWsp()}>
        <img className="icono-wsp" src="assets/img/wsp.png" alt="icono-wsp" />
    </button>
  )
}
