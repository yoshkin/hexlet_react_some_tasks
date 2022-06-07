// @ts-check

import React, { useState, useEffect } from 'react';

import Product from './Product.jsx';
import getProducts from './utils.js';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [countProducts, setCountProducts] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);

  const handleIncrement = ({ id, price }) => {
    const count = countProducts[id] ?? 0;
    setTotalPrice(totalPrice + price);

    const newCountProducts = { ...countProducts, [id]: count + 1 };
    setCountProducts(newCountProducts);
  };

  const handleDecrement = ({ id, price }) => {
    const count = countProducts[id] ?? 0;
    if (count === 0) {
      return;
    }
    setTotalPrice(totalPrice - price);

    const newCountProducts = { ...countProducts, [id]: count - 1 };
    setCountProducts(newCountProducts);
  };

  // BEGIN (write your solution here)
  useEffect(() => {
    async function fetchData() {
      const response = await getProducts();
      setProducts(response);
    }
    fetchData();
  }, [])
  // END

  return (
    <>
      <ul data-testid="products">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            countProduct={countProducts[product.id]}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
          />
        ))}
      </ul>
      <div>
        {`Итого цена: ${totalPrice}`}
      </div>
    </>
  );
};

export default Products;

//utils.js
// @ts-check

import 'whatwg-fetch';

export default async () => {
  const response = await fetch('/products.json');
  return response.json();
};

//Product.jsx

// @ts-check

import React from 'react';

const Product = (props) => {
  const {
    product,
    countProduct,
    handleIncrement,
    handleDecrement,
  } = props;
  const { name, id, price } = product;

  return (
    <li data-testid={id} key={id}>
      <div className="col-2 ">
        {`${name}. Цена: ${price} р.`}
      </div>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <button className="btn btn-outline-secondary" data-testid={`decrement-${id}`} type="button" onClick={() => handleDecrement(product)}>-</button>
        </div>
        <input type="number" value={countProduct || ''} disabled placeholder="0" className="col-1" />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" data-testid={`increment-${id}`} type="button" onClick={() => handleIncrement(product)}>+</button>
        </div>
      </div>
      <hr />
    </li>
  );
};

export default Product;
