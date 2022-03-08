import React from 'react';
import { render, screen } from '@testing-library/react';

// se importa el componente a testeaer
import { Footer } from './Footer';

// Metodo de testing TDD
// 1) Crear un test que falle (RED)
// 2) Lo minimo para que el test pase (GREEN)
// 3) Refactors (clean code, code smells)

describe('Footer', ()=>{
  it('Debe contener un icono: ©', ()=>{
    render(<Footer/>);
    expect(screen.queryByText(/©/i)).toBeInTheDocument();
  })
})