import { fireEvent, render, screen } from "@testing-library/react";
import TestOnChangeEvent from "../Components/TestOnChangeEvent";


beforeAll(()=>{
    console.log('Clean the DB before all tests');
});
beforeEach(()=>{
    console.log('Clean the DB before each test');
})

test('Testing the Onchange Event -1',()=>{
    render(<TestOnChangeEvent/>);
    const  inputBox = screen.getByRole('textbox');
    fireEvent.change(inputBox,{target:{value: 'abcdxuz'}});
    expect(inputBox.value).toBe('abcdxuz');
});

test('Testing the Onchange Event -2',()=>{
    render(<TestOnChangeEvent/>);
    const  inputBox = screen.getByRole('textbox');
    fireEvent.change(inputBox,{target:{value: 'abcdxuz'}});
    expect(inputBox.value).toBe('abcdxuz');
});

test('Testing the Onchange Event -2',()=>{
    render(<TestOnChangeEvent/>);
    const  inputBox = screen.getByRole('textbox');
    fireEvent.change(inputBox,{target:{value: 'abcdxuz'}});
    expect(inputBox.value).toBe('abcdxuz');
});

test('Testing the Onchange Event -4',()=>{
    render(<TestOnChangeEvent/>);
    const  inputBox = screen.getByRole('textbox');
    fireEvent.change(inputBox,{target:{value: 'abcdxuz'}});
    expect(inputBox.value).toBe('abcdxuz');
});

afterAll(()=>{
    console.log('clean DB after all tests executed');

});

afterEach(()=>{

    console.log('clean DB after Each tests executed');

});