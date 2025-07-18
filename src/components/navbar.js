import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <div>
            <nav className="Navbar">
                <img className="Nav-logo" src="https://demoxml.com/html/restaurant/assets/images/logo.png" alt="logo" />

                <div className={`Nav-name ${menuOpen ? 'open' : ''}`}>
                    <Link className='linked' to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link className='linked' to="/About" onClick={() => setMenuOpen(false)}>About</Link>
                    <Link className='linked' to="/Auth" onClick={() => setMenuOpen(false)}>Auth</Link>
                    <Link className='linked' to="/Account" onClick={() => setMenuOpen(false)}>Account</Link>
                </div>

                <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>

            <ScrollToTop /> 
        </div>
    );
};

export default Navbar;
