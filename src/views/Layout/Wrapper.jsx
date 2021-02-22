import React from "react";
import Header from "../sections/header/Header";
import FooterContainer from "../sections/footer/FooterContainer";

function Wrapper(props) {

    return (
        <>
            <Header/>

            <div className="content-wrapper">

                <div className="content">
                    {props.children}
                </div>

            </div>

            <FooterContainer />
        </>
    )
}

export default Wrapper;
