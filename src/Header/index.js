import React from 'react';
import { BsPerson } from "react-icons/bs";
import './styles.css';




function Header(props) {
    return (
        <div className='container-header'>
            <p className='logo'>Font Sign</p>
            <BsPerson className='user-icon' />

        </div>
    );
}

export default Header;