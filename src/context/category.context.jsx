import { createContext } from 'react';

import { SHOP_DATA } from '../utils/data/AppData';

export const CategoryContext = createContext({
  category: {},
});

export const CategoryProvider = ({ children }) => {
  const category = SHOP_DATA;
  const value = { category };
  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
};
