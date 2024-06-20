import { render, screen } from '@testing-library/react';
import TestInputField from '../Components/TestInputField';


test('Checking field Address',()=>{
    render(<TestInputField/>);
    let address = screen.getByRole('textbox');
    let checkPlaceHolder = screen.getByPlaceholderText('Address')
    expect(address).toBeInTheDocument();
    expect(checkPlaceHolder).toBeInTheDocument();
    expect(address).toHaveAttribute("name","address");
    expect(address).toHaveAttribute("type","text");
    expect(address).toHaveAttribute("id","addressID");
    expect(address).toHaveAttribute("value","Amit Kumar");

    
});