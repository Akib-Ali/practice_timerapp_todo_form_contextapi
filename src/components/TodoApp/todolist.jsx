export const TodoList=(props)=>{

 return(

    <div>
    {props.elem}   
     <button style={{backgroundColor:"red" , color:"white"}} onClick={(()=> props.handleDelete(props.index))}>Delete</button>
    </div> 
 )



}