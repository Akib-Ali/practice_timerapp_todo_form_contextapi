import { useEffect, useState } from "react"

export const TimerApp=()=>{

    const[second,setSecond] = useState(50)
    const [minutes,SetMinutes] = useState(0)
    const[startTimer, setStartTimer] = useState(false)
    const[timerId, setTimerId] = useState(0)
    


    useEffect(()=>{

        let timer=null;

        if(startTimer){
            timer = setInterval(()=>{
               
                setSecond(prev => prev+=1)

                if(second == 59){

                    SetMinutes(minutes+1)
                    setSecond(0)


                }
            },1000)

            setTimerId(timer)

        }else{
            clearInterval(timerId)
        }
    },[startTimer])



   



    return(
        <div> 
          <h1>Timer App</h1>

          <h2>Time :  {minutes} :{second}</h2>

          <button  disabled={startTimer== true} onClick={(()=> setStartTimer(true))}>Start</button>
          <button  disabled={startTimer== false} onClick={()=> setStartTimer(false)}>Pause</button>
          <button>Restart</button>

        </div>
    )
}