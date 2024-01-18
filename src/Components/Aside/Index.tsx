import LanguageSwitch from "../Switch/LanguageSwitch/Index";
import ThemeSwitch from "../Switch/ThemeSwitch/Index";
import { MyAside } from "./Style";


export default function Aside(){

    return(
        <MyAside>
            <ThemeSwitch/>
            <LanguageSwitch/>
        </MyAside>
    )
}