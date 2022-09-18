import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import RelatedProduct from "./components/RelatedProduct";
import ReviewItem from "./components/ReviewItem";
import { Breadcrumb } from "@/components";
import useScript from "@/hooks/useScript";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllProductImage } from "@/stores/actions";
import { useAlert } from 'react-alert'

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

  const dispatch = useDispatch();
  const alert = useAlert()

  const { productImages, resultProductReview } = useSelector((state) => ({
    productImages: state.productImageReducer.productImages,
    resultProductReview: state.productReviewReducer.resultProductReview
  }));

  const navigate = useNavigate();
  const customer = localStorage.getItem("customer-login");

  // Param url
  const [searchParams, setSearchParams] = useSearchParams();
  const productId = searchParams.get("productId");

  const [product, getProduct] = useState([]);
  const [productSize, getProductSize] = useState([]);
  const [productReview, getProductReview] = useState([]);
  const [productReviewCount, getProductReviewCount] = useState([]);
  const [overallReview, getOverallReview] = useState([]);
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState();
  const [review, setReview] = useState("");
  const [isQtyValid, setIsQtyValid] = useState(true);
  const [isReviewValid, setIsReviewValid] = useState(true);
  const [isPointValid, setIsPointValid] = useState(true);
  const [isSizeValid, setIsSizeValid] = useState(true);
  const qtyMessage =
    "Please enter a valid number in this field and quantity must bigger than 0.";

  const productImage = productImages.filter(
    (pi) => pi.productId == product.entityId
  );
  const [waitResultProductReview, setWaitResultProductReview] = useState(resultProductReview)

  // #region Rating
  const stars = 5;
  const [objRating, setObjRating] = useState({
    stars: 5,
    rating: 0,
    hovered: 0,
    selectedClass: "fas",
    deselectedClass: "far",
  });

  const hoverRating = (rating) => {
    setObjRating({ ...objRating, hovered: rating });
  };

  const changeRating = (rating) => {
    setIsPointValid(true);
    setObjRating({ ...objRating, rating: rating });
  };
  //  #endregion

  const inputReview = useRef();

  const handleReviewChange = (e) => {
    if (e.target.value) {
      setReview(e.target.value);
      setIsReviewValid(true);
    } else {
      setIsReviewValid(false);
    }
  };

  const addToCart = (e) => {
    e.preventDefault();
    var valid = true;
    if (!size) {
      setIsSizeValid(false);
      valid = false;
    } else {
      setIsSizeValid(true);
    }

    if (!qty) {
      setIsQtyValid(false);
      valid = false;
    } else {
      setIsQtyValid(true);
    }

    if (valid) {
      var cart = localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : [];
      if (cart.length > 0) {
        var existProductInCart = cart.filter(
          (x) => x.productId == productId && x.size == parseInt(size)
        );
        if (existProductInCart.length > 0) {
          var cartItem = {
            productId: parseInt(productId),
            product: product,
            size: parseInt(size),
            qty: existProductInCart[0].qty + parseInt(qty),
          };

          cart.forEach((item, index) => {
            if (
              item.productId === parseInt(productId) &&
              item.size === parseInt(size)
            ) {
              cart[index] = cartItem;
            }
          });
        } else {
          var cartItem = {
            productId: parseInt(productId),
            product: product,
            size: parseInt(size),
            qty: parseInt(qty),
          };
          cart.push(cartItem);
        }

        localStorage.setItem("cart", cart);
      } else {
        var cartItem = {
          productId: parseInt(productId),
          product: product,
          size: parseInt(size),
          qty: parseInt(qty),
        };

        cart.push(cartItem);
      }
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };

  const addToWishlist = (e) => {
    e.preventDefault();
    var valid = true;
    if (!size) {
      setIsSizeValid(false);
      valid = false;
    } else {
      setIsSizeValid(true);
    }

    if (!qty) {
      setIsQtyValid(false);
      valid = false;
    } else {
      setIsQtyValid(true);
    }

    if (valid) {
      var wishlist = localStorage.getItem("wishlist")
        ? JSON.parse(localStorage.getItem("wishlist"))
        : [];
      if (wishlist.length > 0) {
        var existProductInWishlist = wishlist.filter(
          (x) => x.productId == productId && x.size == parseInt(size)
        );
        if (existProductInWishlist.length > 0) {
          var wishlistItem = {
            productId: parseInt(productId),
            product: product,
            size: parseInt(size),
            qty: existProductInWishlist[0].qty + parseInt(qty),
          };

          wishlist.forEach((item, index) => {
            if (
              item.productId === parseInt(productId) &&
              item.size === parseInt(size)
            ) {
              wishlist[index] = wishlistItem;
            }
          });
        } else {
          var wishlistItem = {
            productId: parseInt(productId),
            product: product,
            size: parseInt(size),
            qty: parseInt(qty),
          };
          wishlist.push(wishlistItem);
        }

        localStorage.setItem("wishlist", wishlist);
      } else {
        var wishlistItem = {
          productId: parseInt(productId),
          product: product,
          size: parseInt(size),
          qty: parseInt(qty),
        };

        wishlist.push(wishlistItem);
      }
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }
  };

  const handleSizeChange = (e) => {
    setSize(e.target.value);
    setIsSizeValid(true);
  };

  const minusQty = (e) => {
    if (qty > 0) {
      setQty(qty - 1);
    }
  };

  const plusQty = (e) => {
    setQty(qty + 1);
  };

  const submitReview = (e) => {
    e.preventDefault();
    let valid = true;
    if (objRating.rating < 1) {
      setIsPointValid(false);
      valid = false;
    }

    if (!review) {
      setIsReviewValid(false);
      valid = false;
    }

    if (valid) {
      var customerData = JSON.parse(customer)[0];

      const productReview = {
        productId: parseInt(productId),
        customerId: customerData.entityId,
        comment: review,
        point: objRating.rating,
      };

      axios
        .post(
          "http://localhost:8080/KingShoesApi/api/product-reviews/insert",
          productReview
        )
        .then(function (response) {
          if ((response.status = 200 && response.data)) {
            fetchData();
            changeRating(0);
            inputReview.current.value = "";
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

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
      .catch((err) => {
        console.log(err);
      });
    axios(configGetProductSizeData)
      .then(function (response) {
        getProductSize(response.data);
      })
      .catch((err) => {});
    axios(configGetProductReviewData)
      .then((response) => {
        if (response.data.length > 0) {
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
                  reply: e.reply,
                  customer: res.data.filter(
                    (x) => x.entityId == e.customerId
                  )[0],
                });
              });
              getOverallReview(Number((overall / data.length).toFixed(0)));
              getProductReview(data);
              getProductReviewCount(data.length);
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          var data = [];
          getOverallReview(0);
          getProductReview(data);
          getProductReviewCount(data.length);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    debugger
    setWaitResultProductReview(resultProductReview)
  },[resultProductReview])

  useEffect(() => {
    // debugger
    if(waitResultProductReview === 1){
      fetchData()
      alert.show("Delete Review Success!", { type: 'success' })
    }else{
      alert.show("Delete Reply Fail!", { type: 'error' })
    }
  }, [waitResultProductReview])

  useEffect(() => {
    dispatch(getAllProductImage());
  }, [dispatch]);

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
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="bg-light mySwiper"
            >
              {productImage != null && productImage.length != 0
                ? productImage.map((item) => (
                    <SwiperSlide key={item.entityId}>
                      <img
                        className="w-100 h-100"
                        src={`img/product/${item.value}`}
                      />
                    </SwiperSlide>
                  ))
                : ""}
            </Swiper>
          </div>
          <div className="col-lg-7 h-auto mb-30">
            <div className="h-100 bg-light p-30">
              <h3>{product.name ? product.name : null}</h3>
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
                {product.price
                  ? product.price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  : null}{" "}
                VND
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
                            value={item.value}
                            name="size"
                            onChange={handleSizeChange}
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
              <div
                className={`invalid-feedback ${isSizeValid ? "" : "d-block"}`}
              >
                Please choose your size.
              </div>
              <div className="d-flex align-items-center mb-4 pt-2">
                <div
                  className="input-group quantity mr-3"
                  style={{ width: "130px" }}
                >
                  <div className="input-group-btn">
                    <button
                      className="btn btn-primary btn-minus"
                      onClick={minusQty}
                    >
                      <i className="fa fa-minus"></i>
                    </button>
                  </div>
                  <input
                    type="text"
                    onChange={handleQty}
                    className={`form-control bg-secondary border-0 text-center ${
                      isQtyValid ? "" : "is-invalid"
                    }`}
                    defaultValue="1"
                  />
                  <div className="input-group-btn">
                    <button
                      className="btn btn-primary btn-plus"
                      onClick={plusQty}
                    >
                      <i className="fa fa-plus"></i>
                    </button>
                  </div>
                </div>
                <button className="btn btn-primary px-3" onClick={addToCart}>
                  <i className="fa fa-shopping-cart mr-1"></i> Add To Cart
                </button>
                <button
                  className="btn btn-primary px-3"
                  onClick={addToWishlist}
                  style={{ marginLeft: "10px" }}
                >
                  <i className="fa fa-heart mr-1"></i> Add To Wishlist
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
                    dangerouslySetInnerHTML={{ __html: product.description }}
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
                            <ReviewItem
                              key={item.entityId}
                              customer={customer}
                              review={item}
                            />
                          ))
                        : ""}
                    </div>
                    {customer ? (
                      <div className="col-md-6">
                        <h4 className="mb-4">Leave a review</h4>
                        <small>
                          Your email address will not be published. Required
                          fields are marked *
                        </small>
                        <div className="d-flex my-3">
                          <p className="mb-0 mr-2">Your Rating * :</p>
                          <div className="text-primary">
                            {[...Array(objRating.stars)].map((item, index) => {
                              let star = index + 1;
                              return (
                                <i
                                  onClick={() => changeRating(star)}
                                  onMouseEnter={() => hoverRating(star)}
                                  onMouseLeave={() => hoverRating(0)}
                                  key={index + 1}
                                  className={`${
                                    objRating.rating < star
                                      ? objRating.hovered < star
                                        ? objRating.deselectedClass
                                        : objRating.selectedClass
                                      : objRating.selectedClass
                                  } 
                                  fa-star`}
                                ></i>
                              );
                            })}
                          </div>
                        </div>
                        <div
                          className={`invalid-feedback ${
                            isPointValid ? "" : "d-block"
                          }`}
                        >
                          Please choose your rating.
                        </div>
                        <form>
                          <div className="form-group">
                            <label htmlFor="message">Your Review *</label>
                            <textarea
                              ref={inputReview}
                              onChange={handleReviewChange}
                              id="message"
                              cols="30"
                              rows="5"
                              className={`form-control ${
                                isReviewValid ? "" : "is-invalid"
                              }`}
                            ></textarea>
                            <div className="invalid-feedback">
                              Please enter your review.
                            </div>
                          </div>
                          <div className="form-group mb-0">
                            <input
                              onClick={submitReview}
                              type="submit"
                              defaultValue="Leave Your Review"
                              className="btn btn-primary px-3"
                            />
                          </div>
                        </form>
                      </div>
                    ) : (
                      <div>
                        Please <Link to={"/login"}>Login</Link> or{" "}
                        <Link to={"/register"}>Register</Link> to review
                      </div>
                    )}
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
