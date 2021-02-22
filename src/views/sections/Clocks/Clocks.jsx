import React from "react";
import "./clock.scss"

function Clocks(props) {
        return(
        <div className="currentCity">
            <p>
                Текущее время в {props.placeName}
            </p>
            <p>
                {props.localDate}
            </p>
        </div>
    )
}
export default Clocks;
