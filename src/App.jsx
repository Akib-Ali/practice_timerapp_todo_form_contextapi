import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { TimerApp } from './components/timerapp/timeraapp'
import { TodoMain } from './components/TodoApp/todomain'

function App() {


  return (
    <div className="App">
       <TimerApp/>
       <TodoMain/>
    </div>
  )
}

export default App
