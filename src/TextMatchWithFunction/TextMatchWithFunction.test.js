import { screen, render } from "@testing-library/react";
import TextMatchWithFunction from "./TextMatchWithFunction";

test('start Text match with arrowFunction()', () => {
    render(<TextMatchWithFunction/>);

    const inputElement = screen.getByText((content)=> 
        content.startsWith('Text'));
    expect(inputElement).toBeInTheDocument();
});

test('end Text match with arrowFunction()', () => {
    render(<TextMatchWithFunction/>);

    const inputElement = screen.getByText((content)=> 
        content.endsWith('code'));
    expect(inputElement).toBeInTheDocument();
});
