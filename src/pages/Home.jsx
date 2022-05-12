import React from 'react';

import { Features } from '../components/Features';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Intro } from '../components/Intro';
import { Products } from '../components/Products/Products';

export default function Home() {
  return (
    <>
      <Header />

      <Intro />

      <Features />

      <Products />

      <Footer />
    </>
  );
}
