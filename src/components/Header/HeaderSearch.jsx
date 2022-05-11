import React from 'react';

export function HeaderSearch({ onFilterHandler = () => {} }) {
  function handleClickInput(event) {
    event.preventDefault();

    document.getElementById('produtos').scrollIntoView();
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="col-lg-5 col-md-12 col-12">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="search"
            className="form-control"
            style={{ width: '55%' }}
            placeholder="Buscar produtos..."
            onFocus={handleClickInput}
            onChange={onFilterHandler}
          />

          <button className="btn btn-success">
            <i className="fa fa-search" />
          </button>
        </div>
      </form>
    </div>
  );
}
