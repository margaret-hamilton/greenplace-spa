import React from 'react';

export function FooterCopyright() {
  return (
    <section className="footer-bottom d-flex justify-content-between border-top">
      <p className="text-muted mb-0"> © 2022 Grupo Margaret Hamilton</p>

      <div>
        <i className="fab fa-lg fa-cc-visa me-1" />
        <i className="fab fa-lg fa-cc-amex me-1" />
        <i className="fab fa-lg fa-cc-mastercard me-1" />
        <i className="fab fa-lg fa-cc-paypal me-1" />
      </div>
    </section>
  );
}
