import React from 'react';

export default function Intro() {
  return (
    <section className="section-intro bg-primary padding-y-lg">
      <div className="container">
        <article className="my-5">
          <h1 className="display-4 text-white">
            Best products & <br /> brands in our store
          </h1>

          <p className="lead text-white">Trendy Products, Factory Prices, Excellent Service</p>

          <a href="/#" className="btn btn-warning">
            Purchase now
          </a>

          <a href="/#" className="btn btn-light">
            Learn more
          </a>
        </article>
      </div>
    </section>
  );
}
