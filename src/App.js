import React from 'react';

import { Routes, Route } from 'react-router-dom';

import { Home, Content } from './pages';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-a-greenplace" element={<Content />} />
        <Route path="/sustentabilidade" element={<Content />} />
        <Route path="/frete-e-entregas" element={<Content />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
