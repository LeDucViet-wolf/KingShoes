import React, { useEffect, useState } from "react";
import axios from "axios";
import RelatedProduct from "./components/RelatedProduct";
import { Breadcrumb } from "@/components";
import useScript from "@/hooks/useScript";
import { useSearchParams, useNavigate } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "@/assets/css/product-detail.css";
// Import required modules
import { Navigation } from "swiper";

const ProductDetail = () => {
  useScript("public/js/product-quantity");
  useScript("public/js/tab");

  const navigate = useNavigate()

  // Param url
  const [searchParams, setSearchParams] = useSearchParams();
  const productId = searchParams.get("productId");
  const [product, getProduct] = useState([]);
  const [productSize, getProductSize] = useState([]);
  const [productReview, getProductReview] = useState([]);
  const [productReviewCount, getProductReviewCount] = useState([]);
  const [overallReview, getOverallReview] = useState([]);
  const [qty, setQty] = useState();
  const [isQtyValid, setIsQtyValid] = useState(true);
  const qtyMessage = "Please enter a valid number in this field.";

  const handleQty = (e) => {
    var qty = e.target.value;
    if (Math.floor(qty) == qty && $.isNumeric(qty) && Math.floor(qty) > 0) {
      setQty(parseInt(e.target.value));
      setIsQtyValid(true);
    } else {
      setIsQtyValid(false);
    }
  };

  const fetchData = () => {
    var configGetProductData = {
      method: "get",
      url: `http://localhost:8080/KingShoesApi/api/products/get-by-id/${productId}`,
    },
      configGetProductSizeData = {
        method: "get",
        url: `http://localhost:8080/KingShoesApi/api/product-sizes/get-by-product-id/${productId}`,
      },
      configGetProductReviewData = {
        method: "get",
        url: `http://localhost:8080/KingShoesApi/api/product-reviews/get-by-product-id/${productId}`,
      };
    axios(configGetProductData)
      .then(function (response) {
        getProduct(response.data);
      })
      .catch((err) => { navigate('/product-list') });
    axios(configGetProductSizeData)
      .then(function (response) {
        getProductSize(response.data);
      })
      .catch((err) => { });
    axios(configGetProductReviewData)
      .then((response) => {
        var configGetCustomerData = {
          method: "get",
          url: `http://localhost:8080/KingShoesApi/api/customers/get-all`,
        };
        axios(configGetCustomerData)
          .then(function (res) {
            var data = [],
              overall = 0;
            response.data.forEach((e) => {
              overall += parseInt(e.point);
              data.push({
                entityId: e.entityId,
                productId: e.productId,
                customerId: e.customerId,
                comment: e.comment,
                point: e.point,
                customer: res.data.filter((x) => x.entityId == e.customerId)[0],
              });
            });
            getOverallReview(Number((overall / data.length).toFixed(0)));
            getProductReview(data);
            getProductReviewCount(data.length);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, [productId]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

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
            <Swiper navigation={true} modules={[Navigation]} className="bg-light mySwiper">
              <SwiperSlide><img className="w-100 h-100" src="img/product-1.jpg" /></SwiperSlide>
              <SwiperSlide><img className="w-100 h-100" src="img/product-2.jpg" /></SwiperSlide>
            </Swiper>
          </div>

          <div className="col-lg-7 h-auto mb-30">
            <div className="h-100 bg-light p-30">
              <h3>{product.name}</h3>
              <div className="d-flex mb-3">
                <div className="text-primary mr-2">
                  {[...Array(overallReview)].map((item, i) => (
                    <small key={i} className="fas fa-star"></small>
                  ))}
                  {overallReview < 5
                    ? [...Array(5 - overallReview)].map((item, i) => (
                      <small key={i} className="far fa-star"></small>
                    ))
                    : ""}
                </div>
                <small className="pt-1">({productReviewCount} Reviews)</small>
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
                      <div
                        key={i}
                        className="custom-control custom-radio custom-control-inline"
                      >
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
                    onChange={handleQty}
                    className={`form-control bg-secondary border-0 text-center ${isQtyValid ? "" : "is-invalid"
                      }`}
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
              <div
                className={`invalid-feedback ${isQtyValid ? "" : "d-block"}`}
              >
                {qtyMessage}
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
                  Reviews ({productReviewCount})
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
                      <h4 className="mb-4">
                        {productReviewCount} review for "{product.name}"
                      </h4>
                      {productReview
                        ? productReview.map((item, i) => (
                          <div key={i} className="media mb-4">
                            <img src="img/user.jpg" className="img-fluid mr-3 mt-1" style={{ width: "45px" }} />
                            <div className="media-body">
                              <h6>{`${item.customer.firstName} ${item.customer.lastName}`}</h6>
                              <div className="text-primary mb-2">
                                {[...Array(parseInt(item.point))].map(
                                  (item, i) => (
                                    <i key={i} className="fas fa-star"></i>
                                  )
                                )}
                                {parseInt(item.point) < 5
                                  ? [...Array(5 - parseInt(item.point))].map(
                                    (item, i) => (
                                      <i
                                        key={i}
                                        className="far fa-star"
                                      ></i>
                                    )
                                  )
                                  : ""}
                              </div>
                              <p>{item.comment}</p>
                            </div>
                          </div>
                        ))
                        : ""}
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
                          <i className="fas fa-star"></i>
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
