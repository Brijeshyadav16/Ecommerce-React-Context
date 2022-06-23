import React, { useContext } from 'react';

import Button from '../Button/Button.component';

import { CardContext } from '../../context/cart.context';

const ProductCard = ({ name, price, img, id }) => {
  const { addCartItem } = useContext(CardContext);

  return (
    <div className='card'>
      <div className='card__body' style={{ backgroundImage: `url(${img})` }}>
        <div className='button__center'>
          <Button
            buttonType='inverted'
            onClick={() => addCartItem({ name, price, img, id })}
          >
            ADD TO CART
          </Button>
        </div>
      </div>
      <div className='flex space__between align__items__center card__footer mt__2'>
        <h4>{name}</h4>
        <h4>{price}</h4>
      </div>
    </div>
  );
};

export default ProductCard;
