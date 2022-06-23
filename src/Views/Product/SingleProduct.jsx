import React, { useContext } from 'react';

import { useParams } from 'react-router-dom';

import ProductCard from '../../components/Product/ProductCard.component';

import { CategoryContext } from '../../context/category.context';

const SingleProduct = () => {
  const { category } = useContext(CategoryContext);

  const { name } = useParams();

  const filter = category.filter((item) => item.title.toLowerCase() === name);

  return (
    <>
      <div className='container'>
        <h1 className='my__3 text__align__center'>{filter[0]?.title}</h1>
        <div className='flex align__items__center flex__wrap space__between'>
          {filter[0].items?.map((product) => {
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
    </>
  );
};

export default SingleProduct;
