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

  const changeActiveStatus = (id) => {
    const newArray = [...publications]
    const currentItem = newArray.find((item) => item.id === id)
    currentItem.active = !currentItem.active
    setPublications(newArray)
  }

  const deleteCompleted = () => {
    const newArray = [...publications].filter(item => {
      if (!item.active) {
        return item
      }
    })
    setPublications(newArray)
  }

  return (
    <div className="app--container">
      <div className="app--header">
        <h1 className="app--title">TODO</h1>
        <Input onSubmitTask={addPublications} />
      </div>
      <div className="app--todos">
        <TaskList list={publications} toggleStatus={changeActiveStatus} deleteCompleted={deleteCompleted} />
      </div>
    </div>
  );
}

export default App;