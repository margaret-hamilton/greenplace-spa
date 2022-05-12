import React from 'react';

export function HeaderSearch({ onChangeHandler = () => {} }) {
  function handleClickInput(event) {
    event.preventDefault();
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="ms-auto">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="search"
            className="form-control"
            style={{ width: '55%' }}
            placeholder="Buscar produtos..."
            onFocus={handleClickInput}
            onChange={onChangeHandler}
          />

          <button className="btn btn-success">
            <i className="fa fa-search" />
          </button>
        </div>
      </form>
    </div>
  );
}
