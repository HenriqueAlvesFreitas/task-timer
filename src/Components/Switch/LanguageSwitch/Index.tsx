import { useState } from "react";
import { MySwitch } from "./Style";
import { useTranslation } from "react-i18next";


export default function LanguageSwitch(){

    const [language, setLanguage] = useState(localStorage.getItem("language") || "en")

    const [t, i18n] = useTranslation("global")

    const handleChangeLanguage = () =>{
        localStorage.setItem("language", language === "en" ? "pt" : "en")
        setLanguage(language === "en" ? "pt" : "en")
        i18n.changeLanguage(language === "en" ? "pt" : "en")
    }


    return(
        <MySwitch>
            <input 
                type="checkbox"
                checked={language === "en" ? true : false} 
                className="theme-switch__checkbox"
                onChange={()=>handleChangeLanguage()}
            />
            <div className="theme-switch__container">
                <div className="theme-switch__circle-container">
                    <div className="theme-switch__sun-moon-container">
                        <div className="theme-switch__moon">
                        </div>
                    </div>
                </div>
            </div>
        </MySwitch>
    )
}