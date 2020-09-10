import React from 'react';
import { NavLink } from 'react-router-dom';

//styles

const Common = (props) => {
  return (
    <>
      <section
        id="about"
        className="d-flex align-items-left"
        style={{ backgroundColor: 'lightgrey' }}
      >
        <div className="container">
          <div className="section-title">
            <h1 className="text-center" style={{ paddingTop: '50px', fontSize: '3em' }}>
              {props.name}
            </h1>
          </div>
          <br />
          <div className="row">
            <div className="col-lg-6">
              <img
                src={props.imgSrc}
                className="img-fluid "
                alt="About-img"
                style={props.imgStyle}
              />
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 content">
              <h3>We're Pet Lovers Trying to Make a Difference</h3>
              <br />
              <p>
                We help over 21,000 animal shelters, humane societies, SPCAs, pet rescue groups, and
                pet adoption agencies advertise their homeless pets to millions of adopters a month,
                for free. We're all about getting homeless pets into homes.
              </p>
              <br />
            </div>
          </div>

          <br />
          <div className="row">
            <div className="col-lg-6">
              <img
                src={props.imgSrc1}
                className="img-fluid "
                alt="About-img"
                style={props.imgStyle}
              />
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 content">
              <h3> We're all about getting homeless pets into homes</h3>
              <br />
              <p>
                We use the power of the Internet to connect adopters with shelter pets and help pets
                go from alone to adopted. We're working to help the good people at shelters and
                rescue groups find homes for their pets. But we don't stop there. We also provide
                useful and informative information on the human/companion animal relationship to
                help keep pets healthy and permanently in their loving homes.
              </p>
              <br />
            </div>
          </div>
          <br />

          <div className="row">
            <div className="col-lg-6">
              <img
                src={props.imgSrc2}
                className="img-fluid "
                alt="About-img"
                style={props.imgStyle}
              />
              <br /> <br />
            </div>

            <div className="col-lg-6 pt-4 pt-lg-0 content">
              <h3>
                Our small staff answered the call to volunteer in the massive effort to save pets
              </h3>
              <br />
              <p>
                We have also helped in the other emergency pet rescue efforts, most recently
                providing coordination and new technologies to help people and their animals
              </p>
              <br />
              <NavLink to={props.visit} className="btn btn-secondary">
                {props.btName}
              </NavLink>
              <br />
              <br />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Common;
