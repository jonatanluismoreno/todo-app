import React, { useState, useEffect } from "react";

import "./styles.css";

import Button from "../Button";
import Task from "../Task";

export default function TaskList({ list, itemsLeft, toggleStatus, showAll, showActive, showCompleted, deleteCompleted }) {

    return (
        <div className="tasklist--container">
            {list.map(({ id, text, active }) => (
                <Task key={id} text={text} toggleStatus={toggleStatus} id={id} active={active} />
            ))}
            <div className="tasklist--footer">
                <Button text={itemsLeft + " items left"} clickeable={false} />
                <Button text="All" clickeable buttonFunction={showAll} />
                <Button text="Ac tive" clickeable buttonFunction={showActive}/>
                <Button text="Completed" clickeable buttonFunction={showCompleted} />
                <Button text="Clear Completed" clickeable buttonFunction={deleteCompleted} />
            </div>
    </div>
    );
}
