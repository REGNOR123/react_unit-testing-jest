import React from 'react'

function TestDescribeSkipOnly() {
    return (
        <div>
        <input type='text' placeholder='User Name' name='User Name' id = 'idUser'/>
        <input type='email'  placeholder='Email' name='Email' id = 'idEmail'/>
        <input type='password'  placeholder='Password' name='Password' id = 'idPassword'/>
        <input type='address'  placeholder='Address' name='Address' id = 'idAddress'/>
        <input type='checkbox'  placeholder='CheckBox' name='CheckBox' id = 'idCheckbox'/>
        <button>Save</button>
        </div>
    )
}

export default TestDescribeSkipOnly;
