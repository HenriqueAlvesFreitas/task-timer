import { useEffect, useState } from "react";
import { ITask } from "../../Types/Task";
import Button from "../Button/Index";
import { MyStopWatch } from "./Style";
import Watch from "./Watch/Index";
import { timeToSeconds } from "../../Common/Utils/Time";

interface Props{
    selectedTask?: ITask
}

export default function StopWatch({selectedTask} :  Props){

    const [time, setTime] = useState<number>(timeToSeconds("00:00:00"))
    useEffect(()=>{
        if(selectedTask?.time){
            setTime(timeToSeconds(selectedTask.time))
        }
    }, [selectedTask])
   

    return(
        <MyStopWatch>
            <p className="titulo">Escolha um card e inicie o crônometro</p>
            {time}
            <div className="relogioWrapper">
                <Watch time={time}/>
            </div>
            <Button text="começar"/>        
        </MyStopWatch>
    )

}