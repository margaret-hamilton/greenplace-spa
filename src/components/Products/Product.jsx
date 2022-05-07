import React from 'react';

import Image from '../../assets/images/items/7.jpg';

export function Product() {
  return (
    <div className="col-lg-3 col-sm-6 col-12">
      <figure className="card card-product-grid">
        <div className="img-wrap">
          <img src={Image} alt="" />
        </div>
        <figcaption className="info-wrap">
          <span className="text-warning">Bestseller</span>
          <p className="title">Apple iPhone 13 Pro max 7.1" RAM 6GB 512GB Global</p>

          <div className="rating-wrap">
            <ul className="rating-stars">
              <li className="stars-active" style={{ width: '90%' }}>
                <img src="../images/misc/stars-active.svg" alt="" />
              </li>
              <li>
                <img src="../images/misc/starts-disable.svg" alt="" />
              </li>
            </ul>
            <span className="label-rating text-warning">4.5</span>
          </div>
        </figcaption>

        <div className="bottom-wrap">
          <a href="/#" className="btn  btn-primary float-end">
            Add to cart
          </a>
          <div className="price-wrap lh-sm">
            <strong className="price"> $399.50 </strong> <br />
            <small className="text-muted">$10 / per month </small>
          </div>
        </div>
      </figure>
    </div>
  );
}
