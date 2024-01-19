import { useContext } from "react";
import { ITask } from "../../../Types/Task";
import MyContext from "../../../Context/Context";



export default function Item({title, time, selected, completed, id}: ITask){

    const {selectTask} = useContext(MyContext)
    
    return(
        <li 
            className={`item ${selected && 'itemSelecionado'} ${completed && 'itemCompletado'}`} 
            onClick={()=>{
                if(!completed){
                    selectTask(
                        {
                            title, 
                            time, 
                            selected, 
                            completed, 
                            id
                        }
                    )
                } 
            }}
        >
           
            <h3>{title}</h3>
            
            {completed && 
                <span 
                    className="concluido" 
                    aria-label="completed task"
                />}
            <span>{time}</span>
        </li>
    )
}