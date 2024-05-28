import React, { useState, useEffect } from 'react';
import Product from '../componentes/prodHome';
import Navbar from '../componentes/Navbar';

function Home() {
  const [highlightedProducts, setHighlightedProducts] = useState([]);

   useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        // Aquí podrías filtrar los productos destacados de 'data'
        // Por simplicidad, asumimos que los primeros 4 elementos son los destacados
        setHighlightedProducts(data.slice(0, 4));
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <Navbar/>
      <h1>Productos Destacados</h1>
      <div>
        {highlightedProducts.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;