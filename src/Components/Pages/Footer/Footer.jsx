import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdPets } from 'react-icons/md';
//styles
import './Footer.css';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="footer-info">
                <h3>Blended</h3>
                <p className="pb-3">
                  <em>Please feel free to connect with us</em>
                </p>
                <p>
                  Carlsvägen 5 <br />
                  Malmö, Sweden
                  <br />
                  <br />
                  <strong>Phone:</strong> +46 876 765616
                  <br />
                  <strong>Email:</strong> info@example.com
                  <br />
                </p>
                <div className="social-links mt-3">
                  <NavLink to="/" className="twitter">
                    <i className="fab fa-twitter"></i>
                  </NavLink>
                  <NavLink to="/" className="facebook">
                    <i className="fab fa-facebook-f"></i>
                  </NavLink>
                  <NavLink to="/" className="instagram">
                    <i className="fab fa-instagram"></i>
                  </NavLink>
                  <NavLink to="/" className="google-plus">
                    <i className="fab fa-google-plus"></i>
                  </NavLink>
                  <NavLink to="/" className="linkedin">
                    <i className="fab fa-linkedin-in"></i>
                  </NavLink>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="fas fa-chevron-right"></i> <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <i className="fas fa-chevron-right"></i>
                  <NavLink to="/about">About us</NavLink>
                </li>
                <li>
                  <i className="fas fa-chevron-right"></i>
                  <NavLink to="/services">Services</NavLink>
                </li>
                <li>
                  <i className="fas fa-chevron-right"></i>
                  <NavLink to="/team">Our Team</NavLink>
                </li>
                <li>
                  <i className="fas fa-chevron-right"></i>
                  <NavLink to="/contact">Contact Us</NavLink>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <i className="fas fa-chevron-right"></i> <NavLink to="/">Support</NavLink>
                </li>
                <li>
                  <i className="fas fa-chevron-right"></i> <NavLink to="/">Testimonials</NavLink>
                </li>
                <li>
                  <i className="fas fa-chevron-right"></i>
                  <NavLink to="/">Careers</NavLink>
                </li>
                <li>
                  <i className="fas fa-chevron-right"></i> <NavLink to="/">Investors</NavLink>
                </li>
                <li>
                  <i className="fas fa-chevron-right"></i> <NavLink to="/">Sponsorships</NavLink>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 footer-newsletter">
              <h4>Our Newsletter</h4>
              <p>You can unsubscribe at any time.</p>
              <form action="" method="post">
                <input type="email" name="email" placeholder="Your Email" />
                <input type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright">
          © 2020 Copyright. | All Rights Reserved | Terms and Conditions
        </div>
        <div className="credits">
          <NavLink to="/" style={{ color: 'red', fontSize: '1.5em' }}>
            <MdPets className="navbar-icon" />
            Blended
          </NavLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
