import { screen, render, configure } from "@testing-library/react";
import OverRidingIdAttribute from "../Components/OverRidingIdAttribute";
configure({testIdAttribute:'id'})

test('Test id attribute',()=>{
    render(<OverRidingIdAttribute/>);
    const inputElement = screen.getByTestId('username');
    expect(inputElement).toBeInTheDocument();
})