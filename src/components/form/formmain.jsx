import { useState } from "react"
import { FormInput } from "./formInput"
import { UserList } from "./formlist"

export const FormMain=()=>{

    const[inputval, setInputVal] = useState({
        name:"",
        fathername: "",
        address:""
    })

    const [data, setData] = useState([])


    const handleInput=(e)=>{

        const name = e.target.name;
        const value = e.target.value;

        setInputVal({...inputval , [name] : value})

    }



    const handleSubmit=(e)=>{

        e.preventDefault()
        setData((alldata)=>{

            return ([...alldata,inputval])
        })


    }
 

     console.log(data)
    return(
        <div>
            <h1>User Form</h1>
       <FormInput  inputval={inputval} setInputVal={setInputVal} handleInput={handleInput}  handleSubmit={handleSubmit}/>



       {data.map((elem,index)=>(
         
         <UserList elem={elem} index={index}/>
       ))}
        </div>
    )
}