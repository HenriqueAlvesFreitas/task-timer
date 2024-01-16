import { createContext, useContext, useState } from "react";


interface Props {
    teste: string,
    color: string,
    theme: string,
    toggleTheme: React.Dispatch<React.SetStateAction<string>>;
}

const Default = {
    teste: '',
    color: '',
    theme: '',
    toggleTheme:()=> {}
}


const MyContext = createContext<Props>(Default)

export default MyContext