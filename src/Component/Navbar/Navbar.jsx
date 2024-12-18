import React, { useState } from "react";
import '../Navbar/Navbar.css';
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className='nav'>
            <div className="nav-logo">Calorie-Count</div>
            <button className="nav-toggle">☰</button>
            <ul className="nav-menu">
                <li><Link to='/'><p>Home</p></Link></li>
                <li><Link to='/about'><p>About Us</p></Link></li>
                <li><Link to='/contact'><p>Contact</p></Link></li>
            </ul>
        </div>
    );
};

export default Navbar;
