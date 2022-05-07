import React from 'react';

import { HeaderIcons } from './HeaderIcons';
import { HeaderNavigation } from './HeaderNavigation';
import { HeaderSearch } from './HeaderSearch';
import { Logo } from '../Logo';

export default function Header() {
  return (
    <header className="section-header">
      <section className="navbar navbar-expand-lg navbar-dark bg-light">
        <div className="container">
          <Logo />

          <HeaderSearch />

          <HeaderIcons />
        </div>
      </section>

      <HeaderNavigation />
    </header>
  );
}
