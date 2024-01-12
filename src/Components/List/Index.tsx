import React, { useState } from 'react'
import { MyList } from './style'
import Item from './Item/Index'
import { ITask } from '../../Types/Task'



export default function List({taskList}: {taskList: ITask[]}){



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