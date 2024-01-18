import { useContext, useEffect, useState } from "react";
import { Switch } from "./Style";
import MyContext from "../../../Context/Context";



export default function ThemeSwitch() {
    
  const {theme, toggleTheme} = useContext(MyContext)

    return (
        <Switch>
            <label className="switch-label">
                <input 
                    type="checkbox" 
                    className="checkbox"
                    checked={theme === 'light' ? true : false}
                    onChange={()=>toggleTheme(theme === 'light' ? 'dark' : 'light')}
                />
                <span className="slider"></span>
            </label>
        </Switch>  
    )
}