import React, { useState } from "react";
import { nanoid } from "nanoid";

import "./App.css";

import Input from "./components/Input";
import TaskList from "./components/TasksList";

function App() {
  const [publications, setPublications] = useState([]);
  const [showPublications, setShowPublications] = useState(publications);

  function addPublications(t) {
    setPublications([
      ...publications,
      {
        id: nanoid(),
        text: t,
        active: false,
      },
    ])
    setShowPublications([
      ...publications,
      {
        id: nanoid(),
        text: t,
        active: false,
      },
    ])
  }

  const changeActiveStatus = (id) => {
    const newArray = [...publications]
    const currentItem = newArray.find((item) => item.id === id)
    currentItem.active = !currentItem.active
    setPublications(newArray)
    setShowPublications(newArray)
  }

  const deleteCompleted = () => {
    const newArray = [...publications].filter(item => {
      if (!item.active) {
        return item
      }
    })
    setPublications(newArray)
    setShowPublications(newArray)
  }

  const showAll = () => {
    setShowPublications(publications)
  }

  const showActive = () => {
    const newArray = [...publications].filter(item => {
      if (!item.active) {
        return item
      }
    })
    setShowPublications(newArray)
  }

  const showCompleted = () => {
    const newArray = [...publications].filter(item => {
      if (item.active) {
        return item
      }
    })
    setShowPublications(newArray)
  }

  return (
    <div className="app--container">
      <div className="app--header">
        <h1 className="app--title">TODO</h1>
        <Input onSubmitTask={addPublications} />
      </div>
      <div className="app--todos">
        <TaskList list={showPublications} itemsLeft={publications.length} toggleStatus={changeActiveStatus} showAll={showAll} showActive={showActive} showCompleted={showCompleted} deleteCompleted={deleteCompleted} />
      </div>
    </div>
  );
}

export default App;