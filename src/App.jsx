import React, { useState } from "react";
import { nanoid } from "nanoid";

import "./App.css";

import TodoForm from "./components/TodoForm";
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
    ]);
    setShowPublications([
      ...publications,
      {
        id: nanoid(),
        text: t,
        active: false,
      },
    ]);
  }

  const changeActiveStatus = (id) => {
    const newArray = [...publications];
    const currentItem = newArray.find((item) => item.id === id);
    console.log(currentItem);
    currentItem.active = !currentItem.active;
    setPublications(newArray);
    setShowPublications(newArray);
    // Implementar el tachado de texto
  };

  const deleteCompleted = () => {
    const newArray = [...publications].filter((item) => {
      if (!item.active) {
        return item;
      }
    });
    setPublications(newArray);
    setShowPublications(newArray);
  };

  const showAll = () => {
    setShowPublications(publications);
  };

  const showActive = () => {
    const newArray = [...publications].filter((item) => {
      if (!item.active) {
        return item;
      }
    });
    setShowPublications(newArray);
  };

  const showCompleted = () => {
    const newArray = [...publications].filter((item) => {
      if (item.active) {
        return item;
      }
    });
    setShowPublications(newArray);
  };

  const changeOrderPublications = (id1, id2) => {
    let copy1
    let copy2
    [...publications].filter((item) => {
      if (item.id === id1) {
        copy1 = item
      }
      if (item.id === id2) {
        copy2 = item
      }
    });

    [...publications].filter((item) => {
      if (item.id === id1) {
        item = copy2
      }
      if (item.id === id2) {
        item = copy1
      }
    });

  };

  return (
    <div className="app--container">
      <div className="app--header">
        <h1 className="app--title">TODO</h1>
        <TodoForm onSubmitTask={addPublications} />
      </div>
      <div className="app--todos">
        <TaskList
          list={showPublications}
          itemsLeft={publications.length}
          toggleStatus={changeActiveStatus}
          showAll={showAll}
          showActive={showActive}
          showCompleted={showCompleted}
          deleteCompleted={deleteCompleted}
          changeOrderPublications={changeOrderPublications}
        />
      </div>
    </div>
  );
}

export default App;
