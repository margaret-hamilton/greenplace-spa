import React from 'react';
import { Link } from 'react-router-dom';

import IntroImage from '../../assets/images/intro/delivery-2.png';

export default function Intro() {
  return (
    <section className="bg-light">
      <div className="container">
        <div className="row align-items-center" style={{ minHeight: 520 }}>
          <div className="col-lg-6 col-xl-6 col-xxl-5">
            <article className="my-5">
              <h1 className="display-4">
                O Marketplace do <br /> futuro sustentável
              </h1>

              <p className="lead">
                Nossos centros de distribuição funcionam como ponto de coleta para reciclagem.
              </p>

              <Link to="/sobre-a-greenplace" className="btn btn-success btn-lg">
                Saiba mais
              </Link>
            </article>
          </div>

          <div className="col-lg-6 col-xl-6 col-xxl-7">
            <img src={IntroImage} className="mw-100" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
