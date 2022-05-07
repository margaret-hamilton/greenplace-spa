import React from 'react';

import GreenplaceLogo from './greenplace-logo.svg';

export default function Logo({ linkTo = '/#' }) {
  return (
    <a classname="navbar-brand" href={linkTo}>
      <img src={GreenplaceLogo} height={40} classname="logo" alt="" />
    </a>
  );
}
