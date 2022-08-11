import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Products = () => {
  const [products, getProducts] = useState([]);
  const fetchData = () => {
    var config = {
      method: "get",
      url: "http://localhost:8080/KingShoesApi/api/products/get-list-product-enable",
    };
    axios(config)
      .then(function (response) {
        getProducts(response.data);
      })
      .catch((err) => { });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container-fluid pt-5 pb-3">
      <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
        <span className="bg-secondary pr-3">Featured Products</span>
      </h2>
      <div className="row px-xl-5">
        {products
          ? products
            .filter((x) => x.entityId <= 8)
            .map((item, i) => (
              <div key={i} className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <div className="product-item bg-light mb-4">
                  <div className="product-img position-relative overflow-hidden">
                    <img
                      className="img-fluid w-100"
                      src="img/product-1.jpg"
                      alt=""
                    />
                    <div className="product-action">
                      <a className="btn btn-outline-dark btn-square" href="">
                        <i className="fa fa-shopping-cart"></i>
                      </a>
                      <a className="btn btn-outline-dark btn-square" href="">
                        <i className="far fa-heart"></i>
                      </a>
                    </div>
                  </div>
                  <div className="text-center py-4">
                    <Link
                      to={`/product-detail/${item.entityId}`}
                      className="h6 text-decoration-none text-truncate"
                    >
                      {item.name}
                    </Link>
                    <p>
                      <strong>SKU: </strong>
                      {item.sku}
                    </p>
                    <div className="d-flex align-items-center justify-content-center mt-2">
                      <h5>{item.price} VND</h5>
                    </div>
                    <div className="d-flex align-items-center justify-content-center mb-1">
                      <small className="fa fa-star text-primary mr-1"></small>
                      <small className="fa fa-star text-primary mr-1"></small>
                      <small className="fa fa-star text-primary mr-1"></small>
                      <small className="fa fa-star text-primary mr-1"></small>
                      <small className="fa fa-star text-primary mr-1"></small>
                      <small>(99)</small>
                    </div>
                  </div>
                </div>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
};

export default Products;
