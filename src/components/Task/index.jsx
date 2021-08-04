import React from 'react'

import './styles.css'

export default function Task(props) {
    return (
        <div className="task--container">
            <h3> {props.text} </h3>
        </div>
    )
}