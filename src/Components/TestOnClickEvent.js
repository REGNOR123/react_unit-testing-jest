import React, { useState } from 'react'

const TestOnClickEvent = () => {
    const [click, setclick] = useState('Click the below button and see the magic !')
    return (
        <div>
            <h2>{click}</h2>
            <button onClick={()=> setclick('You Hit Me ?')}>Click Me</button>

        </div>
    )
}
export default TestOnClickEvent
