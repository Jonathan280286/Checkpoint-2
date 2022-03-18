import React from 'react';
import './Header.css'

const Header = (props) => {
    return (
        <div className='header'>
            <h1>Bienvenue sur : {props.name} !</h1>
            <h3>Powered by The Marabrouteur!!!</h3>
        </div>
    );
};

export default Header;