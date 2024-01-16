import { useContext, useEffect, useState } from "react";
import { ITask } from "../../Types/Task";
import Button from "../Button/Index";
import { MyStopWatch } from "./Style";
import Watch from "./Watch/Index";
import { timeToSeconds } from "../../Common/Utils/Time";
import MyContext from "../../Context/Context";

interface Props{
    selectedTask?: ITask,
    finishTask: () => void
}



export default function StopWatch({selectedTask, finishTask} :  Props){


    const {theme, toggleTheme} = useContext(MyContext)

    const [time, setTime] = useState<number>(timeToSeconds("00:00:00"))
    useEffect(()=>{
        if(selectedTask?.time){
            setTime(timeToSeconds(selectedTask.time))
        }
    }, [selectedTask])
   
    const startTask = (count : number) => {
       
        setTimeout(()=>{
            if(count > 0){
                setTime(count - 1)
                return startTask(count - 1)
            }else{
                finishTask()
            }
        }, 1000)
                    
    }

    


    return(
        <MyStopWatch>
            <p className="titulo">Escolha um card e inicie o crônometro</p>
            {time}
            <div className="relogioWrapper">
                <Watch time={time}/>
            </div>
            <Button text="começar" onClick={()=>startTask(time)}/>
            <Button text="Swap Theme" onClick={()=> toggleTheme(theme === 'light' ? 'dark' : 'light')}/>          
        </MyStopWatch>
    )

}