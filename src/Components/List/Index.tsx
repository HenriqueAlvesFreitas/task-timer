import React, { useState } from 'react'
import { MyList } from './style'
import Item from './Item/Index'
import { ITask } from '../../Types/Task'

interface Props{
    taskList : ITask[],
    selectTask: (selectedTask : ITask) => void

}

export default function List({taskList, selectTask}: Props){



    return(
        <MyList>
            
            <h2>Day tasks</h2>
            <ul>
                {taskList.map((item, idx)=>(
                    <Item
                        selectTask={selectTask} 
                        key={item.id}
                        {...item}
                    />
                ))}

            </ul>
        </MyList>
    )
}