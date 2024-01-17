import { useContext, useEffect, useState } from "react";
import { ITask } from "../../Types/Task";
import Button from "../Button/Index";
import { MyStopWatch } from "./Style";
import Watch from "./Watch/Index";
import { timeToSeconds } from "../../Common/Utils/Time";
import MyContext from "../../Context/Context";
import { useTranslation } from "react-i18next";

interface Props{
    selectedTask?: ITask,
    finishTask: () => void
}


export default function StopWatch({selectedTask, finishTask} :  Props){

    const [t, i18n] = useTranslation("global")

    const [language, setLanguage] = useState("en")

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

    const handleChangeLanguage = () =>{
        setLanguage(language === "en" ? "pt" : "en")
        i18n.changeLanguage(language === "en" ? "pt" : "en")
    }

    
    return(
        <MyStopWatch>
            <p className="titulo">{t("stopWatch.title")}</p>
            <div className="relogioWrapper">
                <Watch time={time}/>
            </div>
            <Button text={t("stopWatch.button")} onClick={()=>startTask(time)}/>
            <Button text={t("stopWatch.themeButton")} onClick={()=> toggleTheme(theme === 'light' ? 'dark' : 'light')}/>          
            <Button text={t("stopWatch.languageButton")} onClick={()=> handleChangeLanguage()}/>          
        </MyStopWatch>
    )

}