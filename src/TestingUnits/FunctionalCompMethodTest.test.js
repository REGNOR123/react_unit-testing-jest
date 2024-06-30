import { fireEvent, render, screen } from "@testing-library/react";
import FunctionalCompMethodTest from "../Components/FunctionalCompMethodTest";

test('Testing functionalComponent Methods', () => {

    render(<FunctionalCompMethodTest/>);
    const testButton = screen.getByTestId('Test');
    fireEvent.click(testButton);
    const data = screen.getByText('I Am Functional Component');

    expect(data).toBeInTheDocument();
    


    

});
