import React, { useState } from 'react'

const TestOnChangeEvent = () => {

    const [inputText, setInputText] = useState('')
    return (
        <div>
            <input onChange={(e)=> setInputText(e.target.value)} type='text' placeholder='Type Here Somthing...' name='Text' id = 'idText'/>
            <p>{inputText}</p>
        </div>
    )
}

export default TestOnChangeEvent
