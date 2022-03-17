import React from 'react';
import { render, screen } from '@testing-library/react';

// se importa el componente a testeaer
import { Data } from './Data';

// Metodo de testing TDD
// 1) Crear un test que falle (RED)
// 2) Lo minimo para que el test pase (GREEN)
// 3) Refactors (clean code, code smells)

describe('Data', ()=>{
  it('Debe contener un texto: buscar', ()=>{
    render(<Data/>);
    expect(screen.queryByText(/buscar/i)).toBeInTheDocument();
  })
})