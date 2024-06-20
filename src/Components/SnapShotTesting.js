import React, { useState } from 'react'

function SnapShotTesting() {
    const [click, setclick] = useState('Click the below button and see the magic !')
    return (
        <div>
            <h2>Snapshot Testing</h2>
            <button onClick={()=> setclick('Snapshot has created inside folder :__snapshot__')}>Click Me</button>
            <click/>

        </div>
    )
}
export default SnapShotTesting;
