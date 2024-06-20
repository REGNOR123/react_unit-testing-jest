import { screen, render, fireEvent } from "@testing-library/react";
import TestOnClickEvent from "../Components/TestOnClickEvent";

test('Click Event Testing',()=>{
    render(<TestOnClickEvent/>);
    const btn = screen.getByRole('button');
    fireEvent.click(btn);
    const clickOutput = screen.getByText('You Hit Me ?');  // it will be post click event fire.
    expect(clickOutput).toBeInTheDocument();
});