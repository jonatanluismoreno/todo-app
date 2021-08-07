import React, { useState } from 'react'
import './styles.css'

import { ReactComponent as IconCheck } from '../../assets/images/icon-check.svg'
import { ReactComponent as IconCross } from '../../assets/images/icon-cross.svg'

export default function Task(props) {
    const [active, setActive] = useState(false);

    let taskClass
    if (!active) {
        taskClass = "task--check task--check--false"
    }
    else {
        taskClass = "task--check"
    }

    function handleButton() {
        setActive(!active)
    }

    return (
        <div className="task--container">
            <button className="task--button" onClick={handleButton} >
                {
                    active && <IconCheck className={taskClass} />
                }     
            </button>
            <h3> {props.text} </h3>
        </div>
    )
}