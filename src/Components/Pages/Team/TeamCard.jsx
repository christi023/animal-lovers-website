import React from 'react';
import { NavLink } from 'react-router-dom';
// style
import './Team.css';

const Card = (props) => {
  return (
    <>
      <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
        <div className="">
          <div className="member">
            <div className="member-img">
              <img src={props.imgSrc} className="card-img-top" alt="" />

              <div className="social">
                <NavLink to="/" className="twitter">
                  <i className="fab fa-twitter"></i>
                </NavLink>
                <NavLink to="/" className="facebook">
                  <i className="fab fa-facebook-f"></i>
                </NavLink>
                <NavLink to="/" className="instagram">
                  <i className="fab fa-instagram"></i>
                </NavLink>
                <NavLink to="/" className="linkedin">
                  <i className="fab fa-linkedin-in"></i>
                </NavLink>
              </div>
            </div>
            <div className="member-info">
              <h4 className="card-title font-weight-bold">{props.name}</h4>
              <h6 className="card-title font-weight-bold">{props.title}</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
