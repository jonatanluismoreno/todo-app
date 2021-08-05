import React, { useState } from 'react'

import './styles.css'

export default function Input({onSubmitTask}) {

    const handleSubmit = event => {
        event.preventDefault()
        //console.log(event.target.value)
        // Preguntarle a 9gu xd
        onSubmitTask(event.currentTarget.elements.textInput.value)
    }
    return (
        <div className="input--container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="task"></label>
                <input className="input" id="textInput" type="text" placeholder="Create a new todo" />
            </form>
        </div>
    )
}
