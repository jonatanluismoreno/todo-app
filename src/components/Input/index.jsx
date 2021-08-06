import React, { useState, useRef } from 'react'

import './styles.css'

export default function Input({onSubmitTask}) {
    const inputRef = useRef(null)

    const handleSubmit = event => {
        event.preventDefault()
        console.log(inputRef.current.value)
        onSubmitTask(inputRef.current.value)
        // Preguntarle a 9gu xd
        //onSubmitTask(event.currentTarget.elements.textInput.value)
    }
    return (
        <div className="input--container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="task"></label>
                <input ref={inputRef} className="input" type="text" placeholder="Create a new todo" />
            </form>
        </div>
    )
}
