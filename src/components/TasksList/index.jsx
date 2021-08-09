import React, { useState, useEffect } from "react";

import "./styles.css";

import Button from "../Button";
import Task from "../Task";

export default function TaskList(props) {

    return (
        <div className="tasklist--container">
            {props.list.map((item) => (
                <Task key={item.id} text={item.text} funct={props.funct} id={item.id} active={item.active} />
            ))}
            <div className="tasklist--footer">
                <Button text={props.list.length + " items left"} />
                <Button text="All"/>
                <Button text="Active"/>
                <Button text="Completed"/>
                <Button text="Clear Completed"/>         
            </div>
    </div>
    );
}
