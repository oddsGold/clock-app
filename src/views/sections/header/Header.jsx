import React from 'react';
import './header.scss';
import HeaderNavigation from "./HeaderNavigation";


function Header(props) {


    return (
        <header className="main-header">
            <HeaderNavigation />
        </header>
    );
}

export default Header;
