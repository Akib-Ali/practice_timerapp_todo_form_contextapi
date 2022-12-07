export const TodoInput=(props)=>{


    return(
        <div>
           <input placeholder="Enter Your Item" onChange={props.handleInput}/> <br></br> <br></br>
           <button style={{backgroundColor: "black", color : "white"}} onClick={props.handleSubmit}>Save Task</button>
        </div>
    )
}