import React, { useState } from 'react'

import { MyForm } from './style'
import Button from '../Button/Index'
import { ITask } from '../../Types/Task'
import {v4 as uuidv4} from 'uuid';

export default function Form({setTaskList}: {setTaskList : React.Dispatch<React.SetStateAction<ITask[]>>}){

    const [state, setState] = useState({title: "", time: "00:00:00"})

    const addTask = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        setTaskList(e=>[...e, {...state, selected: false, completed: false, id: uuidv4()}])
        setState({title: "", time: "00:00:00"})
    }

        return(
            <MyForm onSubmit={addTask}>
                <div className='inputContainer'>
                    <label
                        htmlFor='task'>
                            Adicione um novo estudo
                    </label>
                    <input 
                        type='text'
                        id="task"
                        name='task'
                        value={state.title}
                        onChange={e => setState({...state, title: e.target.value})}
                        placeholder='Qual tarefa deseja realizar ?'
                    />
                </div>
                <div className='inputContainer'>
                <label>Tempo</label>
                    <input 
                        type='time'
                        step='1'
                        name='time'
                        id='time'
                        value={state.time}
                        onChange={e => setState({...state, time: e.target.value})}
                        required
                        min='00:00:00'
                        max='1:30:00'
                    />
                </div>
                <Button text='Adicionar'/>
            </MyForm>
        )
    

}
