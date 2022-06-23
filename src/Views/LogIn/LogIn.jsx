import React, { useState, useContext } from 'react';

import Button from '../../components/Button/Button.component';
import FormInput from '../../components/FormInput/FormInput.component';

import { Link } from 'react-router-dom';

import { UserContext } from '../../context/User.context';

import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';

const payloadValue = {
  email: '',
  password: '',
};

const Login = () => {
  const [payload, setPayload] = useState(payloadValue);

  const navigate = useNavigate();

  const { findUser } = useContext(UserContext);

  const onChange = (e) => {
    const { name, value } = e.target;
    setPayload({ ...payload, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = findUser(payload);
    if (res.status === 1 || res.status === '1') {
      resetFormField();
      navigate('/');
      toast.success(res?.message);
    } else {
      toast.error(res.message);
    }
  };

  const resetFormField = () => {
    setPayload(payloadValue);
  };

  return (
    <div className='signup__style'>
      <div>
        <h2>Already have a account</h2>
        <p className='mt__1'>Sign in with your email and password</p>
      </div>
      <div className='mt__4'>
        <form method='get' onSubmit={handleSubmit}>
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
          <div className='mt__10 flex align__items__center'>
            <Button type='submit' className='mr__3'>
              SIGNIN
            </Button>
          </div>
          <div className='mt__5'>
            <Link to='/signup'>Don't have a account.</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
