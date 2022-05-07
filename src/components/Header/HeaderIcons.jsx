import React from 'react';

export function HeaderIcons() {
  return (
    <div class="order-lg-last flex-shrink-0">
      <div className="widget-header  ms-2">
        <button className="btn btn-icon btn-light icon icon-sm rounded-circle bg-light">
          <i className="fa fa-shopping-cart"></i>
          <span className="notify">0</span>
        </button>
      </div>
    </div>
  );
}
