import React from 'react';

import { menuOptions } from './menu-options';
import { Link } from 'react-router-dom';

export function HeaderNavigation() {
  return (
    <nav
      className="navbar border-bottom navbar-dark bg-dark navbar-expand-lg"
      style={{ marginTop: '70px' }}
    >
      <div className="container">
        <button
          className="navbar-toggler border"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar_main"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbar_main">
          <ul className="navbar-nav">
            {menuOptions.map(({ name, link }) => (
              <li className="nav-item" key={name}>
                <Link className="nav-link" to={link}>
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
