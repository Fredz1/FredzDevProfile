import React from 'react';

const products = [
  { id: 1, name: 'simple'},
  { id: 2, name: 'moderate'},
  { id: 3, name: 'complex'},
]

const ProductPage = () => {
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductPage;