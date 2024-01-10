import Button from "../Button/Index";
import { MyStopWatch } from "./Style";
import Watch from "./Watch/Index";

export default function StopWatch(){
    return(
        <MyStopWatch>
            <p className="titulo">Escolha um card e inicie o crônometro</p>
            <div className="relogioWrapper">
                <Watch/>
            </div>
            <Button text="começar"/>        
        </MyStopWatch>
    )

}