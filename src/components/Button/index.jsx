import React from 'react'

import './styles.css'

export default function Button({ text, clickeable, buttonFunction }) {
    
    function handleClick() {
        buttonFunction()
    }

    let buttonClass = ""
    if (!clickeable) {
        buttonClass = "clickeable"
    }
    return (
        <>
            {
                clickeable 
                ? 
                    <p className="button--p clickeable" onClick={handleClick} >
                    {text} 
                    </p>
                : 
                    <p className="button--p" >
                    {text} 
                    </p>
            }
        </>
    )
}