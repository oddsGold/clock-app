import React from "react";
import {NavLink} from "react-router-dom";

function HeaderNavigation(props) {
    return (
        <nav className="navbar navbar-inverse">
            <div className="navbar-header">
                <button type="button" data-target="#navbarCollapse" data-toggle="collapse" className="navbar-toggle">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"> </span>
                    <span className="icon-bar"> </span>
                    <span className="icon-bar"> </span>
                </button>
                <NavLink to="#" className="navbar-brand">Brand</NavLink>
            </div>
            <div id="navbarCollapse" className="collapse navbar-collapse">
                <ul className="nav navbar-nav">
                    <li className="active"><NavLink to="#">Home</NavLink></li>
                    <li><NavLink to="#">Profile</NavLink></li>
                    <li className="dropdown">
                        <NavLink data-toggle="dropdown" className="dropdown-toggle" to="#">
                            Messages 
                            <b className="caret"> </b></NavLink>
                        <ul className="dropdown-menu">
                            <li><NavLink to="#">Inbox</NavLink></li>
                            <li><NavLink to="#">Drafts</NavLink></li>
                            <li><NavLink to="#">Sent Items</NavLink></li>
                            <li className="divider"> </li>
                            <li><NavLink to="#">Trash</NavLink></li>
                        </ul>
                    </li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li><NavLink to="#">Login</NavLink></li>
                </ul>
            </div>
        </nav>
)
}

export default HeaderNavigation;
