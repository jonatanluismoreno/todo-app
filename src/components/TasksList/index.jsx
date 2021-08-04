import React from "react";

import "./styles.css";

import { data } from "../../Example/fakeData.json";
import Task from "../Task";

export default function TaskList() {
    return (
        <div className="tasklist--container">
            {data.map((item) => (
                <Task key={item.id} text={item.text} />
            ))}
    </div>
    );
}
