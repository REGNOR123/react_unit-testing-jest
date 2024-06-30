import { render, screen } from "@testing-library/react";
import MultipleSementicElements from "./MultipleSementicElements";

test('Testing multiple same elements', () => {
    render(<MultipleSementicElements/>);

    const input1 = screen.getByRole('textbox',{name:'First Name'});
    const input2 = screen.getByRole('textbox',{name:'Last Name'});
    
    const btn1 = screen.getByRole('button',{name:'Save'});
    const btn2 = screen.getByRole('button',{name:'Cancel'});

    const div1 = screen.getByRole('dummyData-1');
    const div2 = screen.getByRole('dummyData-2');

    expect(input1).toBeInTheDocument();
    expect(input2).toBeInTheDocument();

    expect(btn1).toBeInTheDocument();
    expect(btn2).toBeInTheDocument();

    expect(div1).toBeInTheDocument();
    expect(div2).toBeInTheDocument();

});
