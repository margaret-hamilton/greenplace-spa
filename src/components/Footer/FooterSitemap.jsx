import React from 'react';
import { Link } from 'react-router-dom';

export function FooterSitemap() {
  return (
    <aside className="col-lg-3">
      <h6 className="title">Greenplace</h6>

      <ul className="list-menu mb-4">
        <li>
          <Link to="/sobre-a-greenplace"> Sobre a Greenplace </Link>
        </li>
        <li>
          <Link to="/sustentabilidade"> Sustentabilidade </Link>
        </li>
        <li>
          <Link to="/frete-e-entregas"> Frete e Entregas </Link>
        </li>
      </ul>
    </aside>
  );
}
