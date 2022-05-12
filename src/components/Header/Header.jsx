import React from 'react';

import { HeaderIcons } from './HeaderIcons';
import { HeaderNavigation } from './HeaderNavigation';
import { Logo } from '../Logo';

export default function Header({ onFilterHandler }) {
  return (
    <header className="section-header">
      <section className="navbar navbar-expand-lg navbar-dark bg-light fixed-top shadow border-bottom">
        <div className="container">
          <Logo />

          <HeaderIcons />
        </div>
      </section>

      <HeaderNavigation />
    </header>
  );
}
