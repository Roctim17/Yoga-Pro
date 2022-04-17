import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="logo">
                <img src="image/logo/yoga-w.png" alt="" />
                <h3 className=''>Yoga Pro</h3>
            </div>
            <div className="copy">
                <p>Copyright &copy; 2021 yoga pro</p>
            </div>
            <div className="social">
                <i className="fab fa-facebook"></i>
                <i className="fab fa-github"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-linkedin"></i>
            </div>

        </div>
    );
};

export default Footer;