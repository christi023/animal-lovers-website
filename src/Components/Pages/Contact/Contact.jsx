import React, { useState } from 'react';
// style
import './Contact.css';

export default function Contact() {
  // state
  const [data, setData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  // form submit method
  const formSubmit = (e) => {
    e.preventDefault();
    alert(`My name is ${data.fullName}. My email is ${data.email}. Subject is ${data.subject}. `);
  };
  return (
    <>
      <section id="contact" className="contact section-bg">
        <div className="container">
          <div className="section-title" style={{ paddingTop: '50px' }}>
            <h2 className="text-center">CONTACT US</h2>
          </div>
          <br />

          <div className="row">
            <div className="col-lg-6">
              <div className="info-box mb-4">
                <i className="fas fa-map-marker-alt"></i>
                <h3>Location:</h3>
                <p>Carlsvägen 5, Malmö. Sweden</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="info-box  mb-4">
                <i className="fas fa-envelope"></i>
                <h3>Email Us:</h3>
                <p>info@example.com</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="info-box  mb-4">
                <i className="fas fa-phone"></i>
                <h3>Call Us:</h3>
                <p>+46 876 765616</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 ">
              <iframe
                title="google location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4507.474260477943!2d13.057881679997548!3d55.60658848248515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4653a22d7772bae7%3A0xcd37675bf6f9af1f!2sBulltofta%2C%20Kirseberg%2C%20Malm%C3%B6!5e0!3m2!1ssv!2sse!4v1598208002562!5m2!1ssv!2sse"
                frameBorder="0"
                style={{ border: '0', width: '100%', height: '350px' }}
                allowFullScreen
              ></iframe>
            </div>

            <div className="col-lg-6">
              <form onSubmit={formSubmit} className="email-form">
                <div className="form-row">
                  <div className="col form-group">
                    <input
                      type="text"
                      name="fullName"
                      className="form-control"
                      id="name"
                      placeholder="Full Name"
                      value={data.fullName}
                      onChange={InputEvent}
                    />
                    <div className="validate"></div>
                  </div>

                  <div className="col form-group">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      value={data.email}
                      onChange={InputEvent}
                      placeholder="info@example.com"
                    />
                    <div className="validate"></div>
                  </div>
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    value={data.subject}
                    onChange={InputEvent}
                  />
                  <div className="validate"></div>
                </div>

                <div className="form-group">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="5"
                    data-rule="required"
                    data-msg="Please write something for us"
                    placeholder="Message"
                    value={data.message}
                    onChange={InputEvent}
                  ></textarea>
                  <div className="validate"></div>
                </div>

                <div className="mb-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <br />
      </section>
    </>
  );
}
