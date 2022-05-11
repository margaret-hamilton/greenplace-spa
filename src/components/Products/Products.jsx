import React, { useReducer, useEffect } from 'react';
import urlSlug from 'url-slug';

import { Heading } from '../Heading';

import { Product } from './Product';
import { ProductsLoading } from './ProductsLoading';

import { spliceIntoChunks } from './helpers';

const initialState = {
  filter: [],
  isLoading: true,
  products: [],
  searchTerm: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS': {
      const products = action.payload;
      const chunks = spliceIntoChunks(products, 4);

      console.log(chunks);
      return {
        ...state,
        isLoading: false,
        rows: spliceIntoChunks(products, 4),
        products,
      };
    }

    case 'SET_SEARCH_TERM': {
      const searchTerm = action.payload;

      return {
        ...state,
        searchTerm: action.payload,
        filter: state.products.filter(({ name }) => urlSlug(name).startsWith(urlSlug(searchTerm))),
      };
    }

    default: {
      return state;
    }
  }
};

export default function Products() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { rows, isLoading } = state;

  // function handleSearchTerm(event) {
  //   dispatch({ type: 'SET_SEARCH_TERM', payload: event.target?.value || '' });
  // }

  useEffect(
    () => {
      fetch('https://6277ecd908221c96846ae116.mockapi.io/products')
        .then((response) => response.json())
        .then((data) => {
          dispatch({ type: 'SET_PRODUCTS', payload: data });
        });
    },
    // eslint-disable-next-line
    [],
  );

  return (
    <section id="produtos" className="bg-white border-bottom">
      <div className="container">
        <Heading text="Produtos" />

        {isLoading ? (
          <ProductsLoading />
        ) : (
          rows.map((row, index) => (
            <div className="row" key={`row-${index}`}>
              {row.map((item, itemIndex) => (
                <Product data={item} key={`product-${itemIndex}`} />
              ))}
            </div>
          ))
        )}
      </div>
    </section>
  );
}
