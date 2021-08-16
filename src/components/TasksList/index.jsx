import React from "react";

import "./styles.css";

import Button from "../Button";
import Task from "../Task";

export default function TaskList({ list, itemsLeft, toggleStatus, showAll, showActive, showCompleted, deleteCompleted, changeOrderPublications }) {

    // DRAG & DROP FUNC

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


    return (
        <section className="tasklist--section">
            <ul className="tasklist--container">
                {list.map(({ id, text, active }) => (
                    <li key={id} className="tasklist--item" >
                        <Task text={text} toggleStatus={toggleStatus} id={id} active={active} changeOrderPublications={changeOrderPublications} handleDragStart={handleDragStart} handleDragEnter={handleDragEnter} handleDragOver={handleDragOver} handleDragLeave={handleDragLeave} handleDrop={handleDrop} />
                    </li>
                ))}
            </ul>
            <div className="tasklist--footer">
                <Button text={itemsLeft + " items left"} clickeable={false} />
                <Button text="All" clickeable buttonFunction={showAll} />
                <Button text="Active" clickeable buttonFunction={showActive}/>
                <Button text="Completed" clickeable buttonFunction={showCompleted} />
                <Button text="Clear Completed" clickeable buttonFunction={deleteCompleted} />
            </div>
        </section>
    );
}
