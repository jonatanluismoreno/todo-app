import React, { useState, useEffect } from "react";

import "./styles.css";

import Button from "../Button";
import Task from "../Task";

export default function TaskList(props) {

    return (
        <div className="tasklist--container">
            {props.list.map((item) => (
                <Task key={item.id} text={item.text} toggleStatus={props.toggleStatus} id={item.id} active={item.active} />
            ))}
            <div className="tasklist--footer">
                <Button text={props.list.length + " items left"} clickeable={false} />
                <Button text="All" clickeable buttonFunction={props.showAll} />
{/*                 <Button text="Active" clickeable showActive={props.showActive}/>
                <Button text="Completed" clickeable showCompleted={props.showCompleted} /> */}
                <Button text="Clear Completed" clickeable buttonFunction={props.deleteCompleted} />         
            </div>
    </div>
    );
}
