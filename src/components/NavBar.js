import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';
import logo from '../assets/logo.png'; 

const NavBar = () => {
    const location = useLocation(); // Get the current path
    const [activeLink, setActiveLink] = useState(location.pathname);

    // Update active link when the path changes
    React.useEffect(() => {
        setActiveLink(location.pathname);
    }, [location.pathname]);

    return (
        <nav>
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <ul>
                <li>
                    <Link 
                        to="/" 
                        className={activeLink === "/" ? "active" : ""}
                        onClick={() => setActiveLink("/")}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/about" 
                        className={activeLink === "/about" ? "active" : ""}
                        onClick={() => setActiveLink("/about")}
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/services" 
                        className={activeLink === "/services" ? "active" : ""}
                        onClick={() => setActiveLink("/services")}
                    >
                        Services
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/contact" 
                        className={activeLink === "/contact" ? "active" : ""}
                        onClick={() => setActiveLink("/contact")}
                    >
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
