import React from 'react';

import andreImage from './../../assets/images/avatars/andre.jpeg';
import icaroImage from '../../assets/images/avatars/icaro.jpeg';
import renanImage from './../../assets/images/avatars/renan.jpeg';
import viniciusImage from './../../assets/images/avatars/vinicius.jpeg';
import vitorImage from './../../assets/images/avatars/vitor.jpeg';

export function FooterTeamMembers() {
  return (
    <aside className="col-lg-3">
      <h6 className="title">Integrantes</h6>
      <ul className="list-menu mb-4">
        <li className="icontext widget-header">
          <img className="icon icon-sm rounded-circle" src={vitorImage} alt="" />

          <div className="text">
            <a href="https://www.linkedin.com/in/vitorfbs/" target="_blank" rel="noreferrer">
              Vítor Ferreira Bem Silva
            </a>
          </div>
        </li>

        <li className="icontext widget-header">
          <img className="icon icon-sm rounded-circle" src={icaroImage} alt="" />

          <div className="text">
            <a
              href="https://www.linkedin.com/in/icaro-ferreira-63357994/"
              target="_blank"
              rel="noreferrer"
            >
              Ícaro Ferreira do Amaral
            </a>
          </div>
        </li>

        <li className="icontext widget-header">
          <img className="icon icon-sm rounded-circle" src={renanImage} alt="" />

          <div className="text">
            <a href="https://www.linkedin.com/in/renanjsilvaa/" target="_blank" rel="noreferrer">
              Renan José da Silva
            </a>
          </div>
        </li>

        <li className="icontext widget-header">
          <img className="icon icon-sm rounded-circle" src={andreImage} alt="" />

          <div className="text">
            <a
              href="https://www.linkedin.com/in/andre-luis-a4a870183/"
              target="_blank"
              rel="noreferrer"
            >
              Andre Luis da Silva
            </a>
          </div>
        </li>

        <li className="icontext widget-header">
          <img className="icon icon-sm rounded-circle" src={viniciusImage} alt="" />

          <div className="text">
            <a href="https://www.linkedin.com/in/viniciusvinna/" target="_blank" rel="noreferrer">
              Vinícius Ribeiro Fernandes
            </a>
          </div>
        </li>
      </ul>
    </aside>
  );
}
