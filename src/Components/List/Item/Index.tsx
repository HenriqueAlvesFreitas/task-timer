import { ITask } from "../../../Types/Task";

interface Props extends ITask{
    selectTask: (selectedTask : ITask) => void

}

export default function Item({title, time, selected, completed, id, selectTask}: Props){
    
    return(
        <li 
            className={`item ${selected && 'itemSelecionado'}`} 
            onClick={()=> selectTask(
                {
                    title, 
                    time, 
                    selected, 
                    completed, 
                    id
                }
             )}
        >
            <h3>{title}</h3>
            <span>{time}</span>
        </li>
    )
}