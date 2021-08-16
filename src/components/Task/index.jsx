import React, { useState } from 'react'
import './styles.css'

import { ReactComponent as IconCheck } from '../../assets/images/icon-check.svg'
//import { ReactComponent as IconCross } from '../../assets/images/icon-cross.svg'
// Agregar esto acá, en los hover

export default function Task({ text, toggleStatus, id, active, handleDragStart, handleDragEnter, handleDragOver, handleDragLeave, handleDrop }) {

    function handleButton() {
        toggleStatus(id)
    }

/*     // DRAG & DROP FUNC

    function handleDragStart(e) {
        e.dataTransfer.setData('text/plain', e.target.id);
        setTimeout(() => {
            e.target.classList.add('hide');
        }, 0);
    }

    function handleDragEnter(e) {
        e.preventDefault()
        e.target.classList.add('drag-over');
    }
    function handleDragOver(e) {
        e.preventDefault()
        e.target.classList.add('drag-over');
    }
    function handleDragLeave(e) {
        e.target.classList.remove('drag-over');
    }
    function handleDrop(e) {
        e.target.classList.remove('drag-over');
        
        // get the draggable element
        // Posible solución, un useRef para capturar el elemento en cuestión
        const id = e.dataTransfer.getData('text/plain');
        console.log(id);
        const draggable = document.getElementById(id);
        
        

        // add it to the drop target
        // Podría solucionar esto modificando el Array mediante el setPublications()
        // Buscar otra solución
        props.changeOrderPublications()
        //e.target.appendChild(draggable);

        // display the draggable element
        draggable.classList.remove('hide');        
    }
 */
    return (
        <div className="task--container" draggable="true" onDragStart={handleDragStart} onDragEnter={handleDragEnter} onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}>
            <button className="task--button" onClick={handleButton} >
                {
                    active && <IconCheck className="task--check" />
                }     
            </button>
            <h3> {text} </h3>
        </div>
    )
}