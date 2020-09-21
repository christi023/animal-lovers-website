import React from 'react';
import { useForm } from 'react-hook-form';
// style
import './Register_Login.css';

export default function Register() {
  const { register, handleSubmit, reset, errors } = useForm();
  const onSubmit = (data, e) => {
    e.target.reset(); // reset after form submit
  };

  console.log(errors);

  return (
    <form className="" onSubmit={handleSubmit(onSubmit)}>
      <label>First name</label>
      <input type="text" name="firstName" ref={register({ required: true })} />
      {errors.firstName && <span>This is required</span>}

      <label>Last name</label>
      <input type="text" name="lastName" ref={register} />

      <input type="submit" />
      <input
        style={{ display: 'block', marginTop: 20 }}
        type="reset"
        value="Standard Reset Field Values"
      />
      <input
        style={{ display: 'block', marginTop: 20 }}
        type="button"
        onClick={() => reset()}
        value="Custom Reset Field Values & Errors"
      />
    </form>
  );
}
