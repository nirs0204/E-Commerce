import './Header.css';

import React from 'react';
import images from './images.png'

const Header = (props) => {
    return (
        <header className='head'>
            <img className='logo' src={images} alt='logo'/>
            <div className='search'>
                <input type='text' placeholder='To search...'/>
                <input type='submit' value='Search'/>
            </div>
        </header>
    );
};

export default Header;