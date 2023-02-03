import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import "./ProductCard.css";

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(() => data));
  }, []);

  const productsLoop = products.map((product) => {
    return (
      <ProductCard
        key={product.id}
        id={product.id}
        title={product.title}
        category={product.category}
        price={product.price}
        image={product.image}
      />
    );
  });

  return (
    <div>
      <div className="container mt-5 pt-5 border">
        <div className="row justify-content-between">
          <div className="col-4 mb-3">
            <h1 className="display-6 fw-bolder">Products</h1>
          </div>
          <div className="col-2 ">
            <a class="btn btn-success px-5" href="/addproduct">
              Create new
            </a>
          </div>
        </div>
        <div className="row justify-content-between border py-4">
          <div className="form-group col-4 col-md-4">
            <input type="text" class="form-control" id="inputCity" placeholder="Search"/>
          </div>
          <div className="col-2 col-md-2 ">
            <select class="form-select" aria-label="Default select example">
              <option selected>All Categories</option>
              <option value="1">Electronics</option>
              <option value="2">Jewelery</option>
              <option value="3">Men's Clothing</option>
              <option value="3">Women's Clothing</option>
            </select>
          </div>
        </div>
        <div className="row justify-content-center">{productsLoop}</div>
      </div>
    </div>
  );
}

export default Product;
