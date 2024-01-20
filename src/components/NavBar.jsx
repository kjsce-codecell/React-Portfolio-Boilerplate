import React, { useState } from 'react';
import '../css/NavBar.css';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className='nav'>
            <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
                <a href='#home' className='nav-link' onClick={() => setMobileMenuOpen(false)}>
                    HOME
                </a>
                <a href="#about" className='nav-link' onClick={() => setMobileMenuOpen(false)}>
                    ABOUT
                </a>
                <a href="#projects" className='nav-link' onClick={() => setMobileMenuOpen(false)}>
                    PROJECTS
                </a>
                <a href="#experience" className='nav-link' onClick={() => setMobileMenuOpen(false)}>
                    EXPERIENCE
                </a>
                <a href="#contact" className='nav-link' onClick={() => setMobileMenuOpen(false)}>
                    CONTACT
                </a>
            </div>
            <button id="open-menu-btn" onClick={toggleMobileMenu}>
                <MenuIcon />
            </button>
        </nav>
    );
}
