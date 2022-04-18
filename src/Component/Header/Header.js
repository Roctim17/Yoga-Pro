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
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <div className="logo">
                        <img src="image/logo/yoga.png" alt="" />
                        <h3 className=''>Yoga Pro</h3>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse menu" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link to="/" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" >About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/blog" >Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/class" >Premium Class</Link>
                            </li>
                            <li className="nav-item">
                                {
                                    user ?
                                        <button onClick={handleSignOut} className='singout'>Sign out</button>
                                        :
                                        <Link to="/signin" >Sign in</Link>}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div >
    );
};

export default Header;