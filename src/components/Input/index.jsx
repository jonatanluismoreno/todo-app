import React, { useState } from 'react'

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
                <div>
                    <label htmlFor="task">  </label>
                    <input id="textInput" type="text" placeholder="Type something" />
                </div>
            </form>
        </div>
    )
}
