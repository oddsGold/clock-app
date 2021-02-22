import React, {useEffect} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './libs.scss';
import './App.scss';
import Preloader from "./views/sections/preloader/preloader";
import {initializedSuccessApp} from "./reducers/app-reducer";
import {connect} from "react-redux";
import Index from "./views/pages/Home";


function App(props) {
    useEffect(() => {
        props.initializedSuccessApp();
    }, [])

    if(!props.initialized){
        return <Preloader/>
    }

        return (
        <Router>
            <Route exact path="/" component={Index}/>
        </Router>
    );
}



let mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}

export default connect(mapStateToProps,
    {
        initializedSuccessApp,
    })(App);
