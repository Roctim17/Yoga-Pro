import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    return (
        <div className='header'>
            <div className="logo">
                <img src="image/logo/yoga.png" alt="" />
                <h3 className=''>Yoga Pro</h3>
            </div>
            <div className="menu">
                <ul>
                    <Link to="/" >Home</Link>
                    <Link to="/about" >About</Link>
                    <Link to="/blog" >Blog</Link>
                    <Link to="/class" >Classes</Link>
                    <Link to="/signin" >Sign in</Link>
                </ul>
            </div>
        </div>
    );
};

export default Header;