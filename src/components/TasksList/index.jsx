import React from "react";

import "./styles.css";


import Task from "../Task";

export default function TaskList(props) {
    return (
        <div className="tasklist--container">
            {props.list.map((item) => (
                <Task key={item.id} text={item.text} />
            ))}
            <div className="tasklist--footer">
                
            </div>
    </div>
    );
}
