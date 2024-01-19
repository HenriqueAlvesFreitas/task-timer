import React, { useContext, useState } from 'react'

import { MyForm } from './style'
import Button from '../Button/Index'
import {v4 as uuidv4} from 'uuid';
import { useTranslation } from 'react-i18next';
import MyContext from '../../Context/Context';

export default function Form(){

    const [state, setState] = useState({title: "", time: "00:00:00"})

    const {setTaskList} = useContext(MyContext)

    const [t] = useTranslation("global")

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
                            {t("form.titleLabel")}
                    </label>
                    <input 
                        type='text'
                        id="task"
                        name='task'
                        value={state.title}
                        onChange={e => setState({...state, title: e.target.value})}
                        placeholder={t("form.placeholder")}
                    />
                </div>
                <div className='inputContainer'>
                <label>{t("form.timeLabel")}</label>
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
                <Button text={t("form.button")}/>
            </MyForm>
        )
    

}
