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
                <li className="navbar-item"><Link to="/realizations">Mes réalisations</Link></li>
                <li className="navbar-item"><Link to="/models">Modèles proposés</Link></li>
                <li className="navbar-item"><Link to="/appointment">Prise de rendez-vous</Link></li>
                <li className="navbar-item"><Link to="/testimonials">Témoignages</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
