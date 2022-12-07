import { useState } from "react"
import { TodoInput } from "./todoinput"
import { TodoList } from "./todolist"

export const TodoMain=()=>{

    const [input, setInput] = useState("")
    const [todo,setTodo] =useState([])

    console.log(todo)



    const handleInput =(e)=>{
        setInput(e.target.value)


    }


    const handleSubmit=()=>{
        setTodo((alltodo)=>{

            return [...alltodo , input]
        })
    }



    const handleDelete=(id)=>{

    let updatedtodo = todo.filter((elem,index)=>{

        return index != id
    })

    setTodo(updatedtodo)

    }



    return(

        <div>
            <h1>Welcome My Todo App</h1>
            <TodoInput  input={input} setInput={setInput} todo={todo} setTodo={setTodo}   
            handleInput={handleInput} handleSubmit={handleSubmit}  />

            {todo.map((elem,index)=> (
                <TodoList elem={elem}  index={index}  id={index} handleDelete={handleDelete}/>
            ))}
        </div>
    )
}