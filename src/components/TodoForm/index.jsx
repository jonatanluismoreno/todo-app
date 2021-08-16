import React, { useRef } from 'react'

import './styles.css'

export default function TodoForm({ onSubmitTask }) {
    const inputRef = useRef(null)

    const handleSubmit = event => {
        event.preventDefault()
        onSubmitTask(inputRef.current.value)
        inputRef.current.value = ""
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
