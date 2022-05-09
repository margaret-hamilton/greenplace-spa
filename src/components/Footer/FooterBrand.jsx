import React from 'react';

import FiapLogo from '../../assets/images/fiap-logo.svg';

export function FooterBrand() {
  return (
    <aside className="col-lg-6">
      <article className="me-lg-4 mb-4">
        <img src={FiapLogo} className="logo-footer" alt="" />

        <p className="mt-3">
          Trabalho desenvolvido pelos integrantes do Grupo Margaret Hamilton do curso de Sistemas de
          Informação do FIAP - Faculdade de Informática e Administração Paulista.
        </p>
      </article>
    </aside>
  );
}
