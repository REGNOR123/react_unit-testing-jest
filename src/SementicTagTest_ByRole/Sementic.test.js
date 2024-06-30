import { render, screen } from "@testing-library/react";
import Sementic from "./Sementic";

test('Testing the Sementic tags - getByRole', () => {
    render(<Sementic/>);
    const inputElement = screen.getByRole('textbox');
    const buttonElement = screen.getByRole('button');
    expect(inputElement).toBeInTheDocument();
    // expect(inputElement).toHaveValue('Hello');
    expect(inputElement).toBeDisabled();
    expect(buttonElement).toBeInTheDocument();
    
})
