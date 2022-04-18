import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Firebase.inti';
import "./Header.css"

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <div className='header'>
            <div className="logo">
                <img src="image/logo/yoga.png" alt="" />
                <h3 className=''>Yoga Pro</h3>
            </div>

            <div className="menu ">
                <ul>
                    <Link to="/" >Home</Link>
                    <Link to="/about" >About</Link>
                    <Link to="/blog" >Blog</Link>
                    <Link to="/class" >Class</Link>
                    {
                        user ?
                            <button onClick={handleSignOut} className=' '>Sign out</button>
                            :
                            <Link to="/signin" >Sign in</Link>}
                </ul>
            </div>
        </div >
    );
};

export default Header;