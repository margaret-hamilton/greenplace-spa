import React from 'react';

import { featuresList } from './features-list';

export default function Features() {
  return (
    <section className="padding-y bg-light">
      <div className="container">
        <article className="card p-3 p-lg-5">
          <div className="row g-3">
            {featuresList.map(({ title = '', description = '', icon = '' }, index) => (
              <div className="col-lg-3 col-md-6" key={`icon-${index}`}>
                <figure className="icontext">
                  <div className="icon">
                    <span className="icon-sm bg-primary-light text-primary rounded">
                      <i className={`fa ${icon ? icon : ''}`} />
                    </span>
                  </div>

                  <figcaption className="text">
                    <h6 className="title">{title}</h6>
                    <p>{description}</p>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
