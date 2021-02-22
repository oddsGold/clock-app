import React, {useEffect, useState} from "react";
import Clocks from "./Clocks";


function ClockContainer(props) {

    const toOffsetDate = (offset) => {
        let d = new Date(new Date().getTime() + (offset * 1000));
        let hrs = d.getUTCHours();
        let mins = d.getUTCMinutes();
        let secs = d.getUTCSeconds();
        return `${hrs}:${mins}:${secs}`;
    }

    const [localDate, setStartDate] = useState(toOffsetDate(props.offset));

    useEffect(()=> {
        const interval = setInterval(() => {
            tick();
        }, 1000)
        return () => clearInterval(interval);
    },[props.offset])

    const tick = () => {
        setStartDate(toOffsetDate(props.offset));
    }


    return(
        <>
            <Clocks
                localDate={localDate}
                placeName={props.placeName}
            />
        </>
    )
}
export default ClockContainer;