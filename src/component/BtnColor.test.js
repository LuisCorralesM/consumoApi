import React from 'react';
import { render, screen } from '@testing-library/react';

// se importa el componente a testeaer
import { BtnColor } from './BtnColor';

it("renders el texto Imagen BtnColor", () =>{
    render(<BtnColor/>);
    const textimage = screen.getByText("Imagen BtnColor");
    expect (textimage).toBeInTheDocument();
}
) 
