import React, { useContext } from 'react';

import { Link } from 'react-router-dom';

import ProductCard from '../../components/Product/ProductCard.component';

import { CategoryContext } from '../../context/category.context';

const Product = () => {
  const { category } = useContext(CategoryContext);

  return (
    <div className='container'>
      {category.map((item, i) => {
        return (
          <div key={i}>
            <Link
              to={`/product/single/${item.title.toLowerCase()}`}
              className='text__decoration__none text__color__black'
            >
              <h2 className='mb__5 pl__2'>{item.title.toLocaleUpperCase()}</h2>
            </Link>
            <div className='flex align__items__center flex__wrap space__between'>
              {category[i].items
                .filter((_, idx) => idx < 3)
                .map((product) => {
                  return (
                    <ProductCard
                      key={product.id}
                      id={product.id}
                      img={product.imageUrl}
                      name={product.name}
                      price={product.price}
                    />
                  );
                })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
