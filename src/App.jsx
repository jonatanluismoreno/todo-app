import React, { useState } from 'react'

import './App.css'
import { data } from '../src/Example/fakeData.json'

import Input from './components/Input'
import TaskList from './components/TasksList'

function App() {
  const [publications, setPublications] = useState([])
  console.log(publications);
  return (
    <div className="App">
      <Input onSubmitTask={setPublications} />
      <TaskList/>
    </div>
  )
}

export default App
