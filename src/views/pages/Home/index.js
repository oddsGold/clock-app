import React, {useState} from "react";
import Wrapper from "../../Layout/Wrapper";
import ClockContainer from "../../sections/Clocks/ClockContainer";
import cookie from "js-cookie";
import TimePicker from "react-time-picker";
import {compose} from "redux";
import {connect} from "react-redux";
import {getUsersData} from "../../../reducers/app-reducer";

function Index(props) {

    const [difference, setDifference] = useState(+cookie.get("currentDate") || 0)

    const [value, onChangeValue] = useState(new Date());

    const timestampToCookie = (currentDate) => {
        let date = new Date();
        date.setTime(date.getTime() + (180 * 60 * 1000));
        cookie.set("currentDate", currentDate, {expires: date});
    }
    const resetTimeFromCookie = () => {
        cookie.remove('currentDate');
        setDifference('');
        onChangeValue(new Date());
    }

    const handleChange = (value) => {
        props.getUsersData();
        let timeStr = value.split(':');
        let date = new Date();
        date.setHours(timeStr[0]);
        date.setMinutes(timeStr[1]);
        date = Math.floor((date.getTime()) / 1000);
        let currentDate = (date-(Math.floor((new Date().getTime()) / 1000)));
        timestampToCookie(currentDate);
        setDifference(currentDate);
    }


    return (
        <Wrapper>
            <div className="clocks">
                <div className="container-fluid">
                    <div className="row">

                        <div className="col-md-4">
                            <ClockContainer placeName="Lonlon" offset={difference}/>
                        </div>
                        <div className="col-md-4">
                            <ClockContainer placeName="Kyiv" offset={difference+7200}/>
                            <div className="timePiker">
                                <p className='clock-label'>
                                    Select your time:
                                </p>
                                <TimePicker
                                    disableClock={true}
                                    clockIcon={null}
                                    format="HH:mm:ss"
                                    onChange={handleChange}
                                    value={value}
                                    name="myCustomInput"
                                />
                                <button className="btn btn-danger" onClick={resetTimeFromCookie}>Reset</button>
                            </div>

                        </div>
                        <div className="col-md-4">
                            <ClockContainer placeName="New-York" offset={difference+(-18000)}/>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

let mapStateToProps = (state) => {
    return {
        users: state.app.users

    }
}

export default compose(
    connect(mapStateToProps,
        {
            getUsersData
        })
)(Index);
