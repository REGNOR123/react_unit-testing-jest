import { screen, render } from "@testing-library/react";
import DefaultValue from "./DefaultValue";

test('testing elements with default value', () => {
    render(<DefaultValue/>);
    const inputFields = screen.getByDisplayValue('Ram');
    const inputField = screen.getByDisplayValue('Sayam');

    expect(inputFields).toBeInTheDocument();
    expect(inputField).toBeInTheDocument();
});
