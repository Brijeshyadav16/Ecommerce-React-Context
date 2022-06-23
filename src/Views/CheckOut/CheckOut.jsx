import React from 'react';

import { useContext } from 'react';
import CheckOutItem from '../../components/CheckOut/CheckOutItem.component';

import { CardContext } from '../../context/cart.context';

const CheckOut = () => {
  const {
    cart,
    cartTotal,
    removeCartItem,
    increaseCartQuantity,
    decreaseCartQuantity,
  } = useContext(CardContext);

  const removeItem = (id) => removeCartItem(id);

  const increaseQuantity = (id) => increaseCartQuantity(id);

  const decreaseQuantity = (id) => decreaseCartQuantity(id);

  return (
    <div className='container'>
      <div className='checkout flex justify__center flex__direction__column'>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Descrition</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {cart?.map((item) => {
              return (
                <CheckOutItem
                  id={item.id}
                  img={item.img}
                  name={item.name}
                  quantity={item.quantity}
                  price={item.price}
                  removeItem={removeItem}
                  increaseQuantity={increaseQuantity}
                  decreaseQuantity={decreaseQuantity}
                />
              );
            })}
          </tbody>
        </table>
        <hr className='my__2' />
        <div className='flex justify__end pb__5'>
          <h2>Total : ₹{cartTotal}</h2>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
