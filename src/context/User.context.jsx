import { createContext, useEffect, useState } from 'react';

import { APP_USER_DATA } from '../utils/data/AppData';

export const UserContext = createContext({
  currentUser: null,
  isAuth: false,
  findUser: () => null,
  addUser: () => null,
  logout: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [isAuth, setIsAuth] = useState(false);

  const user = APP_USER_DATA;

  const findUser = ({ email, password }) => {
    const check = user.find(
      (item) => item.email === email && item.password === password
    );
    if (check) {
      setCurrentUser(check);
      setIsAuth(true);
      localStorage.setItem('user', JSON.stringify(check));
      return {
        status: 1,
        message: 'User login successfull !',
      };
    } else {
      return {
        status: 0,
        message: 'User is not authorized !',
      };
    }
  };

  const addUser = ({ email, password }) => {
    const check = user.find(
      (item) => item.email === email && item.password === password
    );
    if (check) {
      return {
        status: 1,
        message: 'This user is already exist !',
      };
    } else {
      localStorage.setItem('user', JSON.stringify({ email, password }));
      setIsAuth(true);
      setCurrentUser({ email, password });
      return {
        status: 1,
        message: 'User create successfully !',
      };
    }
  };

  const logout = () => {
    setCurrentUser({});
    setIsAuth(false);
    localStorage.clear();
    return {
      status: 1,
      message: 'User logout successfull !',
    };
  };

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData) {
      setCurrentUser(userData);
      setIsAuth(true);
    }
  }, []);

  const value = { currentUser, isAuth, findUser, addUser, logout };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
