import React, { useState, useContext } from 'react';

import FormInput from '../../components/FormInput/FormInput.component';
import Button from '../../components/Button/Button.component';

import { Link } from 'react-router-dom';

import { UserContext } from '../../context/User.context';

import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';

const payloadValue = {
  displayName: '',
  email: '',
  password: '',
};

const SignUp = () => {
  const [payload, setPayload] = useState(payloadValue);

  const navigate = useNavigate();

  const { addUser } = useContext(UserContext);

  const onChange = (e) => {
    const { name, value } = e.target;
    setPayload({ ...payload, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = addUser(payload);
    if (res.status === 1 || res.status === '1') {
      resetFormField();
      navigate('/');
      toast.success(res?.message);
    } else {
      toast.error(res.message);
    }
    resetFormField();
  };

  const resetFormField = () => {
    setPayload(payloadValue);
  };

  return (
    <>
      <div className='signup__style'>
        <div>
          <h2>I do not have a account</h2>
          <p className='mt__1'>Sign up with your email and password</p>
        </div>
        <div className='mt__4'>
          <form method='get' onSubmit={handleSubmit}>
            <div className='my__9'>
              <FormInput
                type='text'
                placeholder='Display Name'
                name='displayName'
                required
                value={payload.displayName}
                onChange={onChange}
              />
            </div>
            <div className='my__9'>
              <FormInput
                type='email'
                placeholder='Email'
                name='email'
                required
                value={payload.email}
                onChange={onChange}
              />
            </div>
            <div className='my__9'>
              <FormInput
                type='password'
                placeholder='Password'
                name='password'
                required
                value={payload.password}
                onChange={onChange}
              />
            </div>
            <div className='mt__10'>
              <Button type='submit'>SIGNUP</Button>
            </div>
            <div className='mt__5'>
              <Link to='/login'>Already have a account.</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
