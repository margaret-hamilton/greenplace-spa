import React from 'react';
import { Link } from 'react-router-dom';

import GreenplaceLogo from './greenplace-logo.svg';

export default function Logo({ linkTo = '/#' }) {
  return (
    <Link className="navbar-brand" to={linkTo}>
      <img src={GreenplaceLogo} height={40} className="logo" alt="" />
    </Link>
  );
}
