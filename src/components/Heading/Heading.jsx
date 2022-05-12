import React from 'react';

export default function Heading({ text = '' }) {
  return (
    <section className="padding-y">
      <div className="container">
        <h3 className="section-title">{text}</h3>
      </div>
    </section>
  );
}
