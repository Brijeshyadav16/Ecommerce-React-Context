import React, { useContext } from 'react';

import CartIcon from '../../assets/images/shopping-cart.png';
import Logo from '../Icon/Logo';

import { UserContext } from '../../context/User.context';
import { CardContext } from '../../context/cart.context';

import { Link } from 'react-router-dom';

import { toast } from 'react-toastify';

const Header = () => {
  const { isAuth, logout } = useContext(UserContext);
  const { cart } = useContext(CardContext);

  const handleLogout = () => {
    const res = logout();
    if (res.status === 1 || res.status === '1') {
      toast.success(res.message);
    }
  };

  return (
    <>
      <header className='container__fluid'>
        <nav className='container flex space__between align__items__center'>
          <div>
            <Link to='/'>
              <Logo />
            </Link>
          </div>
          <div>
            <ul className='flex align__items__center'>
              <li className='list__style__none mx__2 '>
                <Link
                  to='/product'
                  className='text__decoration__none text__color__black'
                >
                  PRODUCT
                </Link>
              </li>
              {isAuth ? (
                <li className='list__style__none mx__2'>
                  <button className='p__1' onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              ) : (
                <li className='list__style__none mx__2'>
                  <Link
                    to='/login'
                    className='text__decoration__none text__color__black'
                  >
                    LOGIN
                  </Link>
                </li>
              )}
              <li className='list__style__none mx__2'>
                <Link
                  to='/checkout'
                  className='text__decoration__none text__color__black'
                >
                  <div className='flex align__items__center'>
                    <img
                      src={CartIcon}
                      alt='CartIcon'
                      width='24px'
                      className='cursor__pointer'
                    />
                    <h5 className='m__1'>{cart.length}</h5>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
