import { ITask } from "../../../Types/Task";


interface Props extends ITask{
    selectTask: (selectedTask : ITask) => void

}

export default function Item({title, time, selected, completed, id, selectTask}: Props){

    const checkMark = '../../Assets/img/check-mark.svg'
    
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