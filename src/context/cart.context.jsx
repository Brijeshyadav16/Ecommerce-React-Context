import React, { createContext, useEffect, useState } from 'react';

export const CardContext = createContext({
  cart: [],
  addCartItem: () => {},
  removeCartItem: () => {},
  increaseCartQuantity: () => {},
  decreaseCartQuantity: () => {},
  total: 0,
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const addCartItem = (product) => {
    const tempCard = [...cart];
    const find = cart.findIndex((item) => item?.id === product?.id);
    if (find >= 0) {
      tempCard[find].quantity += 1;
    } else {
      tempCard.push({ ...product, quantity: 1 });
    }
    setCart(tempCard);
  };

  const removeCartItem = (id) => {
    const remove = cart.filter((item) => item.id !== id);
    setCart(remove);
  };

  const increaseCartQuantity = (id) => {
    const tempCard = [...cart];
    const find = cart.findIndex((item) => item.id === id);
    if (find >= 0) {
      tempCard[find].quantity += 1;
    }
    setCart(tempCard);
  };

  const decreaseCartQuantity = (id) => {
    let tempCard = [...cart];
    const find = cart.findIndex((item) => item.id === id);
    if (find >= 0 && tempCard[find].quantity > 1) {
      tempCard[find].quantity -= 1;
    } else if (find >= 0 && tempCard[find].quantity === 1) {
      tempCard = tempCard.filter((item) => item.id !== id);
    }
    setCart(tempCard);
  };

  useEffect(() => {
    const total = cart.reduce(
      (pre, item) => pre + item?.quantity * item?.price,
      0
    );
    setCartTotal(total);
  }, [cart]);

  const value = {
    cart,
    cartTotal,
    addCartItem,
    removeCartItem,
    increaseCartQuantity,
    decreaseCartQuantity,
  };
  return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
};
