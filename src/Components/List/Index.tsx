import React from 'react'
import { MyList } from './style'
import Item from './Item/Index'

export default function List(){

    const taskList = [{title: 'nome da tarefa', time: '02:00:00'}, {title: 'nome da tarefa 2', time: '00:30:00'}]

    return(
        <MyList>
            
            <h2>Day tasks</h2>
            <ul>
                {taskList.map((item, idx)=>(
                    <Item 
                        key={idx}
                        {...item}
                    />
                ))}

            </ul>
        </MyList>
    )
}