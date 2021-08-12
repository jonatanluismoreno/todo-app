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
            <p className={"button--p" + buttonClass} onClick={handleClick} >
                {text}
            </p>
        </>
    )
}
