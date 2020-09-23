import React from 'react';
import './SignUp.css';
import Button from '../../button/Button';

const SignUp = () => {
  return (
    <div className='signup__container'>
      <h1>Sign Up</h1>
      <form className='signup__form'>
        <div className='form-control'>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' />
        </div>
        <div className='form-control'>
          <label htmlFor='lastname'>LastName</label>
          <input type='text' id='lastname'/>
        </div>
        <div className='form-control'>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' />
        </div>
        <div className='form-btn'>
          <Button buttonSize='btn--wide' buttonColor='blue'>Sign Up</Button>
        </div>
      </form>
    </div>
  )
}

export default SignUp