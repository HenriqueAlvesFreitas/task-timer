import { createContext } from "react";


interface Props {
    teste: string,
    color: string
}

export const defaultContextValue = {
    teste: "meu teste 2",
    color: "#ffff"
}


const MyContext = createContext<Props>(defaultContextValue)

export default MyContext