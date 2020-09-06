import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdPets } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

// Component
import { Button } from '../Button/Button';

// style
import './Navbar.css';

export default function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  // method hamburger menu - mobile
  const handleClick = () => setClick(!click);

  // button menu for mobile devices
  const closeMobileMenu = () => setClick(false);

  // show button on different screen sizes
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <MdPets className="navbar-icon" />
              BLENDED
            </Link>

            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/work" className="nav-links" onClick={closeMobileMenu}>
                  Our Work
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/team" className="nav-links" onClick={closeMobileMenu}>
                  Team
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
                  Contact
                </Link>
              </li>
              <li className="nav-btn">
                {button ? (
                  <Link to="/sign-up" className="btn-link">
                    <Button buttonStyle="btn--outline"> SIGN UP </Button>
                  </Link>
                ) : (
                  <Link to="/sign-up" className="btn-link" onClick={closeMobileMenu}>
                    <Button buttonStyle="btn--outline" buttonSize="btn--mobile">
                      SIGN UP
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}
