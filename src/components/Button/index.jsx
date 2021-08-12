import React from 'react'

import './styles.css'

export default function Button(props) {
    
    function handleClick() {
        props.buttonFunction()
    }

    let buttonClass = ""
    if (!props.clickeable) {
        buttonClass = "clickeable"
    }
    return (
        <>
            <p className={"button--p" + buttonClass} onClick={handleClick} >
                {props.text}
            </p>
        </>
    )
}
