import React from 'react';

export default function Heading({ text = '' }) {
  return (
    <section className="padding-y">
      <div className="container">
        <header className="section-heading">
          <h3 className="section-title">{text}</h3>
        </header>
      </div>
    </section>
  );
}
