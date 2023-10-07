import './Footer.css';

import React from 'react';

const Footer = (props) => {
    return (
        <footer className='foot'>
            <div className='lien1'>
                <p><a href='#'>Contact us</a> </p>
                <p><a href='#'>About us</a> </p>
            </div>
            <div className='lien2'>
                <h2>Social Media</h2>
                <p><a href='#'>Facebook</a> </p>
                <p><a href='#'>Instagram</a> </p>
            </div>
        </footer>
    );
};

export default Footer;