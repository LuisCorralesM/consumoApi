import React from 'react';
import { render, screen } from '@testing-library/react';

// se importa el componente a testeaer
import { Header } from './Header';

// Metodo de testing TDD
// 1) Crear un test que falle (RED)
// 2) Lo minimo para que el test pase (GREEN)
// 3) Refactors (clean code, code smells)

describe('Header', ()=>{
  it('Debe contener un titulo: Ditroy Technology NFTs', ()=>{
    render(<Header/>);
    expect(screen.queryByText(/Ditroy Technology NFTs/i)).toBeInTheDocument();
  })
})