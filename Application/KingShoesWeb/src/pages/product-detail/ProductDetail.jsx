import React, { useEffect, useState } from "react";
import axios from "axios";
import RelatedProduct from "./components/RelatedProduct";
import { Breadcrumb } from "@/components";
import useScript from "@/hooks/useScript";
import { useSearchParams } from "react-router-dom";

const ProductDetail = () => {
  useScript("public/js/product-quantity");
  useScript("public/js/tab");

  // Param url
  const [searchParams, setSearchParams] = useSearchParams();
  const productId = searchParams.get('productId')
  const [product, getProduct] = useState([]);
  const [productSize, getProductSize] = useState([]);

  const fetchData = () => {
    var configGetProductData = {
      method: "get",
      url: `http://localhost:8080/KingShoesApi/api/products/get-by-id/${productId}`,
    },
      configGetProductSizeData = {
        method: "get",
        url:
          `http://localhost:8080/KingShoesApi/api/productSizes/get-by-product-id/${productId}`,
      };
    axios(configGetProductData)
      .then(function (response) {
        getProduct(response.data);
      })
      .catch((err) => { });
    axios(configGetProductSizeData)
      .then(function (response) {
        getProductSize(response.data);
      })
      .catch((err) => { });
  };

  useEffect(() => {
    fetchData();
  }, [productId]);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [productId])

  return (
    <>
      <Breadcrumb
        pageUrl="/product-list"
        pageName="Shop"
        pageNameChild="Shop Detail"
      />
      <div className="container-fluid pb-5">
        <div className="row px-xl-5">
          <div className="col-lg-5 mb-30">
            <div
              id="product-carousel"
              className="carousel slide"
              dataride="carousel"
            >
              <div className="carousel-inner bg-light">
                <div className="carousel-item active">
                  <img
                    className="w-100 h-100"
                    src="../../../public/img/product-1.jpg"
                    alt="Image"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="w-100 h-100"
                    src="../../../public/img/product-2.jpg"
                    alt="Image"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="w-100 h-100"
                    src="../../../public/img/product-3.jpg"
                    alt="Image"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="w-100 h-100"
                    src="../../../public/img/product-4.jpg"
                    alt="Image"
                  />
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#product-carousel"
                dataslide="prev"
              >
                <i className="fa fa-2x fa-angle-left text-dark"></i>
              </a>
              <a
                className="carousel-control-next"
                href="#product-carousel"
                dataslide="next"
              >
                <i className="fa fa-2x fa-angle-right text-dark"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-7 h-auto mb-30">
            <div className="h-100 bg-light p-30">
              <h3>{product.name}</h3>
              <div className="d-flex mb-3">
                <div className="text-primary mr-2">
                  <small className="fas fa-star"></small>
                  <small className="fas fa-star"></small>
                  <small className="fas fa-star"></small>
                  <small className="fas fa-star-half-alt"></small>
                  <small className="far fa-star"></small>
                </div>
                <small className="pt-1">(99 Reviews)</small>
              </div>
              <h3 className="font-weight-semi-bold mb-4">
                {product.price} VND
              </h3>
              <p className="mb-4">SKU: {product.sku}</p>
              <div className="d-flex mb-3">
                <strong className="text-dark mr-3">Sizes:</strong>
                <form>
                  {productSize
                    ? productSize.map((item, i) => (
                      <div key={i} className="custom-control custom-radio custom-control-inline">
                        <input
                          type="radio"
                          className="custom-control-input"
                          id={item.value}
                          name="size"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor={item.value}
                        >
                          {item.value}
                        </label>
                      </div>
                    ))
                    : ""}
                </form>
              </div>
              <div className="d-flex align-items-center mb-4 pt-2">
                <div
                  className="input-group quantity mr-3"
                  style={{ width: "130px" }}
                >
                  <div className="input-group-btn">
                    <button className="btn btn-primary btn-minus">
                      <i className="fa fa-minus"></i>
                    </button>
                  </div>
                  <input
                    type="text"
                    className="form-control bg-secondary border-0 text-center"
                    defaultValue="1"
                  />
                  <div className="input-group-btn">
                    <button className="btn btn-primary btn-plus">
                      <i className="fa fa-plus"></i>
                    </button>
                  </div>
                </div>
                <button className="btn btn-primary px-3">
                  <i className="fa fa-shopping-cart mr-1"></i> Add To Cart
                </button>
              </div>
              <div className="d-flex pt-2">
                <strong className="text-dark mr-2">Share on:</strong>
                <div className="d-inline-flex">
                  <a className="text-dark px-2" href="">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="text-dark px-2" href="">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="text-dark px-2" href="">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a className="text-dark px-2" href="">
                    <i className="fab fa-pinterest"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row px-xl-5">
          <div className="col">
            <div className="bg-light p-30">
              <div className="nav nav-tabs mb-4">
                <a
                  className="nav-item nav-link text-dark active"
                  datatoggle="tab"
                  href="#tab-pane-1"
                >
                  Description
                </a>
                <a
                  className="nav-item nav-link text-dark"
                  datatoggle="tab"
                  href="#tab-pane-2"
                >
                  Reviews (0)
                </a>
              </div>
              <div className="tab-content">
                <div className="tab-pane fade show active" id="tab-pane-1">
                  <h4 className="mb-3">Product Description</h4>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: product.description,
                    }}
                  ></div>
                </div>
                <div className="tab-pane fade" id="tab-pane-2">
                  <div className="row">
                    <div className="col-md-6">
                      <h4 className="mb-4">1 review for "Product Name"</h4>
                      <div className="media mb-4">
                        <img
                          src="../../../public/img/user.jpg"
                          alt="Image"
                          className="img-fluid mr-3 mt-1"
                          style={{ width: "45px" }}
                        />
                        <div className="media-body">
                          <h6>
                            John Doe
                            <small>
                              {" "}
                              - <i>01 Jan 2045</i>
                            </small>
                          </h6>
                          <div className="text-primary mb-2">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                            <i className="far fa-star"></i>
                          </div>
                          <p>
                            Diam amet duo labore stet elitr ea clita ipsum,
                            tempor labore accusam ipsum et no at. Kasd diam
                            tempor rebum magna dolores sed sed eirmod ipsum.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h4 className="mb-4">Leave a review</h4>
                      <small>
                        Your email address will not be published. Required
                        fields are marked *
                      </small>
                      <div className="d-flex my-3">
                        <p className="mb-0 mr-2">Your Rating * :</p>
                        <div className="text-primary">
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                        </div>
                      </div>
                      <form>
                        <div className="form-group">
                          <label htmlFor="message">Your Review *</label>
                          <textarea
                            id="message"
                            cols="30"
                            rows="5"
                            className="form-control"
                          ></textarea>
                        </div>
                        <div className="form-group">
                          <label htmlFor="name">Your Name *</label>
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="email">Your Email *</label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                          />
                        </div>
                        <div className="form-group mb-0">
                          <input
                            type="submit"
                            defaultValue="Leave Your Review"
                            className="btn btn-primary px-3"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RelatedProduct productId={productId} />
    </>
  );
};

export default ProductDetail;