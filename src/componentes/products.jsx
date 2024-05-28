import React, { useState, useEffect } from 'react';


const ProductCatalog = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h4>Nombre: {product.title}</h4>
            <p>Precio: ${product.price}</p>
            <img src={product.image} alt={product.title} width={300} height={400}/>
            <p>Descripción: {product.description}</p>
            <button>Comprar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductCatalog;


