import React from 'react';

import Image from '../../assets/images/items/0.jpg';

export function Product({ data }) {
  const { name = '', seller = '', picture = Image, price = '' } = data;

  return (
    <div className="col-lg-3 col-sm-6 col-12">
      <figure className="card card-product-grid">
        <div className="img-wrap">
          <img src={picture} alt="" />
        </div>
        <figcaption className="info-wrap">
          {seller && <span className="text-warning">{seller}</span>}

          {name && <p className="title">{name}</p>}
        </figcaption>

        <div className="bottom-wrap">
          <a href="/#" className="btn  btn-primary float-end">
            Comprar
          </a>

          <div className="price-wrap lh-sm">
            {price && (
              <>
                <strong className="price">
                  {Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(price)}
                </strong>
                <br />
              </>
            )}

            <small className="text-muted">frete grátis </small>
          </div>
        </div>
      </figure>
    </div>
  );
}
