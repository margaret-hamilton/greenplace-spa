import React from 'react';

import { spliceIntoChunks } from './helpers';

import { Product } from './Product';

export default function Products() {
  const items = Array.from({ length: 12 }, (v, k) => k);
  const rows = spliceIntoChunks(items, 4);

  return (
    <section className="bg-light">
      <div className="container">
        {rows.map((row, index) => (
          <div className="row" key={`row-${index}`}>
            {row.map((item, itemIndex) => (
              <Product key={`product-${itemIndex}`} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
