import React from "react";
import { MyButton } from "./style";

interface Props{
    text : string,
    onClick?: () => void
}

export default function Button({text, onClick}: Props){

 

        return(
            <MyButton 
                onClick={onClick}
            >
                {text}
            </MyButton>
        )
        
    

}

