import React from 'react';

export function ProductsLoading() {
  return (
    <div className="row">
      <article className="col-lg">
        <div className="bg-loading" style={{ height: 150 }} />
        <div className="bg-loading" style={{ width: 200, height: 20 }} />
        <div className="bg-loading" style={{ width: 120, height: 20 }} />
      </article>

      <article className="col-lg">
        <div className="bg-loading" style={{ height: 150 }} />
        <div className="bg-loading" style={{ width: 200, height: 20 }} />
        <div className="bg-loading" style={{ width: 120, height: 20 }} />
      </article>

      <article className="col-lg">
        <div className="bg-loading" style={{ height: 150 }} />
        <div className="bg-loading" style={{ width: 200, height: 20 }} />
        <div className="bg-loading" style={{ width: 120, height: 20 }} />
      </article>

      <article className="col-lg">
        <div className="bg-loading" style={{ height: 150 }} />
        <div className="bg-loading" style={{ width: 200, height: 20 }} />
        <div className="bg-loading" style={{ width: 120, height: 20 }} />
      </article>
    </div>
  );
}
