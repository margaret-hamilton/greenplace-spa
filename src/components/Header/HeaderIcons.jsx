import React from 'react';

import MargaretHamilton from '../../assets/images/avatars/margaret-hamilton.png';

export function HeaderIcons() {
  return (
    <div className="order-lg-last flex-shrink-0">
      <div className="icontext widget-header ms-2">
        <img className="icon icon-sm rounded-circle" src={MargaretHamilton} alt="" />
        <div className="text">
          <h6 className="title">Margaret Hamilton</h6>
        </div>
      </div>

      <div className="widget-header  ms-2">
        <button href="/#" className="icon icon-sm rounded-circle border">
          <i className="fa fa-shopping-cart"></i>
          <span className="notify">0</span>
        </button>
      </div>
    </div>
  );
}
