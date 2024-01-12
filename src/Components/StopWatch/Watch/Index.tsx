
export default function Watch({time = 0}: {time: number | undefined}){
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    const [minuteTens, minuteUnity] = String(minutes).padStart(2, "0")
    const [secondTens, secondUnity] = String(seconds).padStart(2, "0")

    return(

        <>
            <span className="number">{minuteTens}</span>
            <span className="number">{minuteUnity}</span>
            <span className="division">:</span>
            <span className="number">{secondTens}</span>
            <span className="number">{secondUnity}</span>
        </>
    )
}