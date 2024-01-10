import React from 'react'

import { MyForm } from './style'
import Button from '../Button/Index'

class Form extends React.Component{

    render(){
        return(
            <MyForm>
                <div className='inputContainer'>
                    <label
                        htmlFor='task'>
                            Adicione um novo estudo
                    </label>
                    <input 
                        type='text'
                        id="task"
                        name='task'
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
                        required
                        min='00:00:00'
                        max='1:30:00'
                    />
                </div>
                <Button text='Adicionar'/>
            </MyForm>
        )
    }

}

export default Form