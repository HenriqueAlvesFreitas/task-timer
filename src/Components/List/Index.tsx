import React, { useState } from 'react'
import { MyList } from './style'
import Item from './Item/Index'
import { ITask } from '../../Types/Task'
import { useTranslation } from 'react-i18next'

interface Props{
    taskList : ITask[],
    selectTask: (selectedTask : ITask) => void

}

export default function List({taskList, selectTask}: Props){

    const [t] = useTranslation("global")

    return(
        <MyList>
            
            <h2>{t("list.title")}</h2>
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