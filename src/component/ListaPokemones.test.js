import React from 'react';
import { render, screen } from '@testing-library/react';

// se importa el componente a testeaer
import { ListaPokemones } from './ListaPokemones';

// Metodo de testing TDD
// 1) Crear un test que falle (RED)
// 2) Lo minimo para que el test pase (GREEN)
// 3) Refactors (clean code, code smells)

describe('ListaPokemones', ()=>{
  it('Debe contener un texto: Pokemones más populares', ()=>{
    render(<ListaPokemones/>);
    expect(screen.queryByText(/Pokemones más populares/i)).toBeInTheDocument();
  })
})