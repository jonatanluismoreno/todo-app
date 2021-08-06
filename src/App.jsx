import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";

import "./App.css";
import { data } from "../src/Example/fakeData.json";

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
      },
    ]);
  }

  // useEffect((p) => {
  //   setPublications(publications.concat([p]))
  // }, [publicatiozzns])

  //console.log(publications);
  return (
    <div className="app--container">
      <div className="app--header">
        <h1 className="app--title">TODO</h1>
        <Input onSubmitTask={addPublications} />
      </div>
      <div className="app--todos">
        <TaskList list={publications} />
      </div>
    </div>
  );
}

export default App;
