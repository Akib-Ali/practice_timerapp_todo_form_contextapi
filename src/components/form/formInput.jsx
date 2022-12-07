export const FormInput=(props)=>{



    return(


        <div>
            <form>
                Name : {}
                <input placeholder="Enter Name" name="name" value={props.inputval.name} onChange={props.handleInput}/> <br></br> <br></br>
                 FatherName:{}
                <input placeholder="Father Name" name="fathername" value={props.inputval.fathername} onChange={props.handleInput}  />  <br></br> <br></br>

                Address :{}
                <input placeholder="Enter Address" name="address" value={props.inputval.address} onChange={props.handleInput}/> <br></br> <br></br>

                <button onClick={props.handleSubmit}>Submit</button>
            </form>
        </div>
    )
}
