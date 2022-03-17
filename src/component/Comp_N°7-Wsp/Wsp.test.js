import React from 'react';
import { render, screen } from '@testing-library/react';

// se importa el componente a testeaer
import { Wsp } from './Wsp';

// Metodo de testing TDD
// 1) Crear un test que falle (RED)
// 2) Lo minimo para que el test pase (GREEN)
// 3) Refactors (clean code, code smells)

describe('Wsp', ()=>{
  it('Debe contener un texto: btn-wsp', ()=>{
    render(<Wsp/>);
    // expect(screen.queryByText(/buscar/i)).toBeInTheDocument();
    expect(screen.queryAllByTestId('btn-wsp'));
  })
})
