import React from 'react';
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
// style
import './Register_Login.css';

export default function Register() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data, e) => {
    e.target.reset(); // reset after form submit
    console.log(data);
    alert('You are now registered');
  };

  //console.log(errors);

  return (
    <>
      <div className="form-display">
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <label className="form-label">First name</label>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            ref={register({ required: true })}
          />

          {errors.firstName && <span>This is required</span>}
          <label className="form-label">Last name</label>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            ref={register({ required: true })}
          />

          <label className="form-label">Email</label>
          {errors.email && <span>This is required</span>}
          <input
            type="email"
            name="email"
            placeholder="info@example.com"
            ref={register({ required: true })}
          />

          <label className="form-label">Password</label>
          {errors.password && <span>This is required</span>}
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            ref={register({ required: true })}
          />
          {errors.password && <span>This is required</span>}

          <label className="form-label">Confirm Password</label>
          {errors.password && <span>This is required</span>}
          <input
            type="password"
            name="password1"
            placeholder="Enter password"
            ref={register({ required: true })}
          />
          {errors.password1 && <span>This is required</span>}

          <input type="submit" />
        </form>
        <h6 className="form-input-login">
          Already have an account? Login
          <NavLink className="link" to="/login">
            Click
          </NavLink>
        </h6>
      </div>
      <br />
      <br />
    </>
  );
}
