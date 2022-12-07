import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { TimerApp } from './components/timerapp/timeraapp'
import { TodoMain } from './components/TodoApp/todomain'
import { FormMain } from './components/form/formmain'

function App() {


  return (
    <div className="App">
       <TimerApp/>
       <TodoMain/>
       <FormMain/>
    </div>
  )
}

export default App
