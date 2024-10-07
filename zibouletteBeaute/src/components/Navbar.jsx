import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <nav>
            <h1 className="navbar-title">Ziboulette Beauté</h1>
            <div className="menu-toggle" onClick={toggleMenu}>
                <div />
                <div />
                <div />
            </div>
            <ul className={`navbar-list ${isMenuOpen ? 'active' : ''}`}>
                <li className="navbar-item"><Link to="/">Accueil</Link></li>
                <li className="navbar-item"><Link to="/realizations">Réalisations</Link></li>
                <li className="navbar-item"><Link to="/models">Modèles</Link></li>
                <li className="navbar-item"><Link to="/appointment">Rendez-vous</Link></li>
                <li className="navbar-item"><Link to="/testimonials">Témoignages</Link></li>
                <li className="navbar-item"><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
