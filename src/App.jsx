import React, { useState } from 'react'
import './App.css'
import Task from './Components/Task'
import UseContext from './Components/UseContext'

export const ToggleTheme = React.createContext()

function App() {
  const [state, setState] = useState(false)

  const handleToggle = () => {
    setState(state => !state)
  }

  return (
    <ToggleTheme.Provider value={state}>
      <button onClick={handleToggle}>Toggle</button>
      <UseContext/>
    </ToggleTheme.Provider>
  )
}

export default App
