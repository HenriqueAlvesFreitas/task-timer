import { ITask } from "../../../Types/Task";


export default function Item({title, time, selected, completed, id}: ITask){
    
    return(
        <li className='item'>
            <h3>{title}</h3>
            <span>{time}</span>
        </li>
    )
}