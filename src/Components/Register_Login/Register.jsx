import React from 'react';
import { useForm } from 'react-hook-form';
// style
import './Register_Login.css';

export default function Register() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data, e) => {
    e.target.reset(); // reset after form submit
  };

  console.log(errors);

  return (
    <>
      <div className="form-display">
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <label>First name</label>
          <input type="text" name="firstName" ref={register({ required: true })} />
          {errors.firstName && <span>This is required</span>}
          <label>Last name</label>
          <input type="text" name="lastName" ref={register} />
          {errors.lastName && <span>This is required</span>}
          <input type="submit" />
        </form>
      </div>
    </>
  );
}
