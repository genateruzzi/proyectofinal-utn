import React from 'react';

function Product({ product }) {
  return (
    <div className="product" >
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.name} width={300} height={400} />
      <div>
        <p>Precio: ${product.price}</p>
        <button>Comprar</button>
      </div>
    </div>
  );
}

export default Product;