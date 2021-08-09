import React, { useState } from "react";
import { nanoid } from "nanoid";

import "./App.css";

import Input from "./components/Input";
import TaskList from "./components/TasksList";

function App() {
  const [publications, setPublications] = useState([]);

  function addPublications(p) {
    setPublications([
      ...publications,
      {
        id: nanoid(),
        text: p,
        active: false,
      },
    ]);
  }

  function changeActiveStatus(key) {
    publications.forEach((element) => {
      if (element.id === key) {
        console.log(element.active);
      }
    });
  }

  return (
    <div className="app--container">
      <div className="app--header">
        <h1 className="app--title">TODO</h1>
        <Input onSubmitTask={addPublications} />
      </div>
      <div className="app--todos">
        <TaskList list={publications} funct={changeActiveStatus} />
      </div>
    </div>
  );
}

export default App;
