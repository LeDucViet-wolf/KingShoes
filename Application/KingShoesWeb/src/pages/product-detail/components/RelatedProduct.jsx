import React, { useEffect, useState } from "react";
import axios from "axios";
import useScript from "../../../hooks/useScript";

const RelatedProduct = ({ ...props }) => {
  useScript("../../../../public/js/related-carousel");

  const { setSearchParams, productId } = props;
  const [products, getRelatedProducts] = useState([]);
  
  const fetchData = () => {
    var config = {
      method: "get",
      url: "http://localhost:8080/KingShoesApi/api/products/get-list-product-enable",
    };
    axios(config)
      .then((response) => {
        var config2 = {
          method: "get",
          url:
            `http://localhost:8080/KingShoesApi/api/related-products/get-by-product-id/${productId}`,
        };
        axios(config2)
          .then((res) => {
            var data = [];
            response.data.forEach((e) => {
              res.data.forEach((x) => {
                if (e.entityId == x.relatedProductId) {
                  data.push(e);
                }
              });
            });
            getRelatedProducts(data);
          })
          .catch((err) => { });
      })
      .catch((err) => { });
  };

  useEffect(() => {
    fetchData();
  }, [productId]);

  return (
    <>
      <div className="container-fluid py-5">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
          <span className="bg-secondary pr-3">You May Also Like</span>
        </h2>
        <div className="row px-xl-5">
          {products
            ? products
              .filter((x, index) => index < 4)
              .map((item, i) => (
                <div key={i} className="col-lg-3 col-md-4 col-Fsm-6 pb-1">
                  <div className="product-item bg-light mb-4">
                    <div className="product-img position-relative overflow-hidden">
                      <img
                        className="img-fluid w-100"
                        src={`/img/product-1.jpg`}
                        alt=""
                      />
                      <div className="product-action">
                        <a
                          className="btn btn-outline-dark btn-square"
                          href=""
                        >
                          <i className="fa fa-shopping-cart"></i>
                        </a>
                        <a
                          className="btn btn-outline-dark btn-square"
                          href=""
                        >
                          <i className="far fa-heart"></i>
                        </a>
                      </div>
                    </div>
                    <div className="text-center py-4">
                      <a
                        onClick={(e) => { e.preventDefault(); setSearchParams({ productId: item.entityId }) }}
                        href=""
                        className="h6 text-decoration-none text-truncate"
                      >
                        {item.name}
                      </a>
                      <p><strong>SKU: </strong>{item.sku}</p>
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
    </>
  );
};

export default RelatedProduct;