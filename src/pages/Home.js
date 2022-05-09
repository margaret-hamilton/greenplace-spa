import React from 'react';
import { Intro, Products, Heading, Features, Footer } from '../components';

export default function Home() {
  return (
    <>
      <Intro />

      <Features />

      <Heading text="Produtos" />

      <Products />

      <Footer />
    </>
  );
}
