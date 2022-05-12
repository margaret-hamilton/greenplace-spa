import React, { useState } from 'react';
import urlSlug from 'url-slug';

import { Heading } from '../Heading';

import { Product } from './Product';
import { HeaderSearch } from './HeaderSearch';

const data = [
  {
    picture: 'https://greenplace-fiap.netlify.app/assets/images/products/items/1.jpg',
    name: 'Câmera Digital GoPro Hero 9 Black',
    seller: 'Fiap Store',
    price: 3529,
    id: '1',
  },
  {
    picture: 'https://greenplace-fiap.netlify.app/assets/images/products/items/2.jpg',
    name: 'Câmera EOS M200',
    seller: 'Cannon Brasil',
    price: 4999,
    id: '2',
  },
  {
    picture: 'https://greenplace-fiap.netlify.app/assets/images/products/items/3.jpg',
    name: 'Celular Redmi 10 64 branco',
    seller: 'Amazon',
    price: 1300,
    id: '3',
  },
  {
    picture: 'https://greenplace-fiap.netlify.app/assets/images/products/items/4.jpg',
    name: 'iPhone XR Apple 64GB Preto',
    seller: 'FastShop',
    price: 3419.05,
    id: '4',
  },
  {
    picture: 'https://greenplace-fiap.netlify.app/assets/images/products/items/5.jpg',
    name: 'Galaxy Watch4 BT 40mm',
    seller: 'Americanas',
    price: 1198.99,
    id: '5',
  },
  {
    picture: 'https://greenplace-fiap.netlify.app/assets/images/products/items/6.jpg',
    name: 'Mi Watch Lite 2',
    seller: 'Xiami',
    price: 499.99,
    id: '6',
  },
  {
    picture: 'https://greenplace-fiap.netlify.app/assets/images/products/items/7.jpg',
    name: 'Headset Gamer Kotion Each G2000',
    seller: 'Amazon',
    price: 119.99,
    id: '7',
  },
  {
    picture: 'https://greenplace-fiap.netlify.app/assets/images/products/items/8.jpg',
    name: 'Mochila Classic Azul',
    seller: 'Zee Dog',
    price: 79.99,
    id: '8',
  },
  {
    picture: 'https://greenplace-fiap.netlify.app/assets/images/products/items/9.jpg',
    name: 'Bermuda Jeans Azul Escuro',
    seller: 'Aramis',
    price: 299.99,
    id: '9',
  },
  {
    picture: 'https://greenplace-fiap.netlify.app/assets/images/products/items/10.jpg',
    name: 'Polo Lisa Outlet',
    seller: 'Hering',
    price: 99.99,
    id: '10',
  },
  {
    picture: 'https://greenplace-fiap.netlify.app/assets/images/products/items/11.jpg',
    name: 'Jacketa Treking Mostarda',
    seller: 'Dafiti',
    price: 399,
    id: '11',
  },
  {
    picture: 'https://greenplace-fiap.netlify.app/assets/images/products/items/12.jpg',
    name: 'Tech T-Shirt',
    seller: 'Reserva',
    price: 145.99,
    id: '12',
  },
  {
    picture: 'https://greenplace-fiap.netlify.app/assets/images/products/items/13.jpg',
    name: 'Blazer Azul Royale',
    seller: 'Aramis',
    price: 699.99,
    id: '13',
  },
  {
    picture: 'https://greenplace-fiap.netlify.app/assets/images/products/items/14.jpg',
    name: 'Carteira Jouse Série 1',
    seller: 'Fiap Store ',
    price: 99.99,
    id: '14',
  },
];

export function Products() {
  const [searchTerm, setSearchTerm] = useState(data);
  const [searchResults, setSearchResults] = useState([]);

  function onChangeHandler(event) {
    const { value = '' } = event.target;

    setSearchTerm(value);
  }

  React.useEffect(() => {
    setSearchResults(data.filter((item) => urlSlug(item.name).startsWith(urlSlug(searchTerm))));
  }, [searchTerm]);

  return (
    <section id="produtos" className="bg-white border-bottom">
      <div className="container">
        <div className="d-lg-flex align-items-center">
          <Heading text="Produtos" />

          <HeaderSearch onChangeHandler={onChangeHandler} />
        </div>

        <div className="row">
          {searchResults.length > 0
            ? searchResults.map((item, index) => <Product data={item} key={`product-${index}`} />)
            : data.map((item, index) => <Product data={item} key={`product-${index}`} />)}
        </div>
      </div>
    </section>
  );
}
