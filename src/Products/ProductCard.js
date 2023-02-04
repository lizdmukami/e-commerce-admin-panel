import React from "react";
import { BsPencil } from 'react-icons/bs';
import { RiDeleteBinLine } from 'react-icons/ri';

function ProductCard({ title, category, price, image }) {
  return (
    <div className="col-sm-4 card">
      <img className="card-img-top" src={image} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text text-danger">{category}</p>
        <h3 className="text-dark">${price}</h3>
        <div className="d-grid gap-2 d-md-flex justify-content-md-center">
          <button type="button" className="btn btn-outline-success px-5">
            <BsPencil />
          </button>
          <button type="button" className="btn btn-outline-danger px-5">
            <RiDeleteBinLine />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
