import React from 'react';
import {Link} from 'react-router-dom';
import './styles.scss';

const Navbar = () => (
    <nav className="main-nav">
        <div>
            <Link to="/" className="nav-logo-text">
                <h4>BootCamp DevSuperior</h4>
            </Link>
        </div>
    </nav>
);

export default Navbar;