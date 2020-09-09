import React from 'react';
//style
import './Services.css';

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-title">
          <h2 className="text-center" style={{ paddingTop: '50px', fontSize: '3em' }}>
            Services
          </h2>
          <br />
          <p className="text-center" style={{ color: 'red', fontSize: '1.5em' }}>
            STUNNING POSSIBILITIES
          </p>
        </div>
        <br />

        <div className="row">
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up">
            <div className="icon-box">
              <div className="icon">
                <i className="fas fa-shield-alt fa-5x"></i>
              </div>
              <h4 className="text-dark">MULTI-LANGUAGE SUPPORT</h4>
              <br />
              <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <div className="icon-box">
              <div className="icon">
                <i className="fas fa-hands-helping fa-5x"></i>
              </div>

              <h4 className="text-dark">SUPPORT THE ANIMALS</h4>

              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="icon-box">
              <div className="icon">
                <i className="fas fa-dog fa-5x"></i>
              </div>
              <h4 className="text-dark">ADORABLE ANIMALS</h4>
              <br />
              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
            data-aos="fade-up"
            data-aos-delay="450"
          >
            <div className="icon-box">
              <div className="icon">
                <i className="fas fa-paw fa-5x"></i>
              </div>
              <h4 className="text-dark">WE LOVE ANIMALS</h4>
              <br />
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="icon-box">
              <div className="icon">
                <i className="fas fa-photo-video fa-5x"></i>
              </div>
              <h4 className="text-dark">AMAZING PHOTOS</h4>
              <br />
              <p>Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur</p>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
            data-aos="fade-up"
            data-aos-delay="750"
          >
            <div className="icon-box">
              <div className="icon">
                <i className="fas fa-cogs fa-5x"></i>
              </div>
              <h4 className="text-dark">FULLY CUSTOMIZABLE THEME</h4>
              <br />
              <p>Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
