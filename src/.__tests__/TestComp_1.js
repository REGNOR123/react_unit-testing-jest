import { render, screen } from '@testing-library/react';
import TestComp_1 from '../Components/TestComp_1';


test('Checking field Username and Password',()=>{
    render(<TestComp_1/>);
    const userName = screen.getByPlaceholderText('User Name');
    const password = screen.getByPlaceholderText('Password');
    expect(userName).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    
});

// test('Checking field UserName',()=>{
//     render(<TestComp_1/>);
//     const userName = screen.getByPlaceholderText('User Name')
//     expect(userName).toBeInTheDocument();
    
// });

// test('Checking field Password',()=>{
//     render(<TestComp_1/>);
//     const password = screen.getByPlaceholderText('Password')
//     expect(password).toBeInTheDocument();
    
// });

// Above all the three cases are valid


 