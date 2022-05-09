import React, { useState, useEffect } from 'react';

import { spliceIntoChunks } from './helpers';

import { Product } from './Product';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://6277ecd908221c96846ae116.mockapi.io/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  useEffect(() => {
    setRows(spliceIntoChunks(products, 4));
    setLoading(false);
  }, [products]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="bg-light border-bottom">
      <div className="container">
        {rows.map((row, index) => (
          <div className="row" key={`row-${index}`}>
            {row.map((item, itemIndex) => (
              <Product data={item} key={`product-${itemIndex}`} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
