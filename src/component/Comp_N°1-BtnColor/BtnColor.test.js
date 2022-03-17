//Import React (Librería)
import React from 'react';

//Import Medoto -render- y -screen-
import { render, screen } from '@testing-library/react';

// se importa el componente a testeaer
import { BtnColor } from './BtnColor';

// Metodo de testing TDD
// 1) Crear un test que falle (RED)
// 2) Lo minimo para que el test pase (GREEN)
// 3) Refactors (clean code, code smells)

describe('BtnColor', ()=>{
  it('Debe contener un texto: btn-colors', ()=>{
    render(<BtnColor/>);
    // expect(screen.queryByText(/buscar/i)).toBeInTheDocument();
    expect(screen.queryAllByTestId('btn-colors'));
  })
})
