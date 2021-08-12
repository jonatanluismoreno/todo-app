import React, { useState, useEffect } from "react";

import "./styles.css";

import Button from "../Button";
import Task from "../Task";

export default function TaskList({ list, toggleStatus, showAll, showActive, showCompleted, deleteCompleted }) {

    return (
        <div className="tasklist--container">
            {list.map((item) => (
                <Task key={item.id} text={item.text} toggleStatus={toggleStatus} id={item.id} active={item.active} />
            ))}
            <div className="tasklist--footer">
                <Button text={list.length + " items left"} clickeable={false} />
                <Button text="All" clickeable buttonFunction={showAll} />
                <Button text="Active" clickeable buttonFunction={showActive}/>
                <Button text="Completed" clickeable buttonFunction={showCompleted} />
                <Button text="Clear Completed" clickeable buttonFunction={deleteCompleted} />
            </div>
    </div>
    );
}
