import React from 'react';

export function HeaderSearch() {
  return (
    <div className="col-lg-5 col-md-12 col-12">
      <form action="#">
        <div className="input-group">
          <input
            type="search"
            className="form-control"
            style={{ width: '55%' }}
            placeholder="Buscar produtos..."
          />

          <button className="btn btn-success">
            <i className="fa fa-search" />
          </button>
        </div>
      </form>
    </div>
  );
}
