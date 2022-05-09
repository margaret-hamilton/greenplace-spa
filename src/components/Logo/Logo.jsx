import React from 'react';

import GreenplaceLogo from './greenplace-logo.svg';

export default function Logo({ linkTo = '/#' }) {
  return (
    <a className="navbar-brand" href={linkTo}>
      <img src={GreenplaceLogo} height={40} className="logo" alt="" />
    </a>
  );
}
