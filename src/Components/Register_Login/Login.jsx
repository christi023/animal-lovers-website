import React from 'react';

import { useForm } from 'react-hook-form';
// style
import './Register_Login.css';

export default function Register() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data, e) => {
    e.target.reset(); // reset after form submit
    console.log(data);
    alert('You are now logged in');
  };

  //console.log(errors);

  return (
    <>
      <div className="form-display">
        <form className="" onSubmit={handleSubmit(onSubmit)}>
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

          <input type="submit" />
        </form>
      </div>
      <br />
      <br />
    </>
  );
}
