import { render, screen } from '@testing-library/react';
import TestDescribeSkipOnly from "../Components/TestDescribeSkipOnly";


describe('username',()=>{
    test('testing the username',()=>{
        render(<TestDescribeSkipOnly/>)
        let inputUsername = screen.getByPlaceholderText('User Name');
        expect(inputUsername).toBeInTheDocument();
        expect(inputUsername).toHaveAttribute('name','User Name');
        expect(inputUsername).toHaveAttribute('id','idUser');

    })
});
describe.skip('email',()=>{
    test('testing the email',()=>{
        render(<TestDescribeSkipOnly/>)
        let inputEmail = screen.getByPlaceholderText('Email');
        expect(inputEmail).toBeInTheDocument();
        expect(inputEmail).toHaveAttribute('name','Email');
        expect(inputEmail).toHaveAttribute('id','idEmail');
        
    })
});
describe('password',()=>{
    test('testing the password',()=>{
        render(<TestDescribeSkipOnly/>)
        let inputPassword = screen.getByPlaceholderText('Password');
        expect(inputPassword).toBeInTheDocument();
        expect(inputPassword).toHaveAttribute('name','Password');
        expect(inputPassword).toHaveAttribute('id','idPassword');
        
    })
});
describe.only('address',()=>{
    test('testing the address',()=>{
        render(<TestDescribeSkipOnly/>)
        let inputAddress = screen.getByPlaceholderText('Address');
        expect(inputAddress).toBeInTheDocument();
        expect(inputAddress).toHaveAttribute('name','Address');
        expect(inputAddress).toHaveAttribute('id','idAddress');
        
    })
});
describe('checkbox',()=>{
    test('testing the checkbox',()=>{
        render(<TestDescribeSkipOnly/>)
        let inputCheckbox = screen.getByPlaceholderText('CheckBox');
        expect(inputCheckbox).toBeInTheDocument();
        expect(inputCheckbox).toHaveAttribute('name','CheckBox');
        expect(inputCheckbox).toHaveAttribute('id','idCheckbox');
        
    })
});