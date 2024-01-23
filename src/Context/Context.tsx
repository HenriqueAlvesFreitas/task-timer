import { createContext} from "react";
import { ITask } from "../Types/Task";


interface Props {
    taskList: ITask[],
    setTaskList: React.Dispatch<React.SetStateAction<ITask[] | []>>,
    selectedTask: ITask | undefined,
    setSelected:  React.Dispatch<React.SetStateAction<ITask | undefined>>,
    theme: string,
    toggleTheme: ()=>void,
    selectTask: (selectedTask : ITask)=>void;
}

const Default = {
    taskList: [],
    setTaskList: ()=>{},
    selectedTask: undefined,
    setSelected: ()=>{},
    theme: '',
    toggleTheme:()=> {},
    selectTask: (selectedTask : ITask)=>{}
}


const MyContext = createContext<Props>(Default)

export default MyContext