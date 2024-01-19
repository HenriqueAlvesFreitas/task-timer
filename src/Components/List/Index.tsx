import React, { useContext } from 'react'
import { MyList } from './style'
import Item from './Item/Index'
import { useTranslation } from 'react-i18next'
import MyContext from '../../Context/Context'

export default function List(){

    const {taskList} = useContext(MyContext)

    const [t] = useTranslation("global")

    return(
        <MyList>
            
            <h2>{t("list.title")}</h2>
            <ul>
                {taskList.map((item, idx)=>(
                    <Item 
                        key={item.id}
                        {...item}
                    />
                ))}

            </ul>
        </MyList>
    )
}