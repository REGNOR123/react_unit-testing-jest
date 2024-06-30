import React, { useState } from 'react'

function FunctionalCompMethodTest() {
    const [data, setData] = useState('');

    const handleClick=()=>{
        setData('I Am Functional Component');
    }
    return (
        <div>
            <h3>Methods testing in the functional component</h3>
            <button data-testid = 'Test' onClick={handleClick}>Test</button>
            <h2>{data}</h2>
            
        </div>
    )
}

export default FunctionalCompMethodTest
