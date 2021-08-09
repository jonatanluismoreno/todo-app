import React, { useState } from 'react'
import './styles.css'

import { ReactComponent as IconCheck } from '../../assets/images/icon-check.svg'
import { ReactComponent as IconCross } from '../../assets/images/icon-cross.svg'

export default function Task(props) {
    // Este State lo utilizo para determinar si se dibuja, o no, el icon-check.svg

    function handleButton() {
        props.funct(props.id)
        console.log(props);
    }

    return (
        <div className="task--container">
            <button className="task--button" onClick={handleButton} >
                {
                    props.active && <IconCheck className="task--check" />
                }     
            </button>
            <h3> {props.text} </h3>
        </div>
    )
}