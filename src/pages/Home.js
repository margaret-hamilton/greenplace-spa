import React from 'react';
import { Intro, Products, Heading, Features } from '../components';

export default function Home() {
  return (
    <>
      <Intro />

      <Heading text="Produtos" />
      <Products />
      <Features />
    </>
  );
}
