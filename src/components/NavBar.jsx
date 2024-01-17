import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
                <Link to="/" className='nav-link' onClick={() => setMobileMenuOpen(false)}>
                    HOME
                </Link>
                <Link to="/about" className='nav-link' onClick={() => setMobileMenuOpen(false)}>
                    ABOUT
                </Link>
                <Link to="/projects" className='nav-link' onClick={() => setMobileMenuOpen(false)}>
                    PROJECTS
                </Link>
                <Link to="/experience" className='nav-link' onClick={() => setMobileMenuOpen(false)}>
                    EXPERIENCE
                </Link>
                <Link to="/contact" className='nav-link' onClick={() => setMobileMenuOpen(false)}>
                    CONTACT
                </Link>
            </div>
            <button id="open-menu-btn" onClick={toggleMobileMenu}>
                <MenuIcon />
            </button>
        </nav>
    );
}
