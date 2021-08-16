import React from 'react'

import './styles.css'

export default function Button({ text, clickeable, buttonFunction }) {
    
    function handleClick() {
        buttonFunction()
    }
    
    return (
        <button disabled className="button--container">
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
        </button>
    )
}