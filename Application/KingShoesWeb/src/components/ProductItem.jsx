import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getAllProductImage, getAllProductReview } from "@/stores/actions";

const ProductItem = ({ ...props }) => {
  const { product, grid } = props;
  const dispatch = useDispatch();

  const { productImages, productReviews } = useSelector((state) => ({
    productImages: state.productImageReducer.productImages,
    productReviews: state.productReviewReducer.productReviews,
  }));

  const productImage = productImages.filter(
    (pi) => pi.productId == product.entityId
  );
  const productReview = productReviews.filter(
    (pr) => pr.productId == product.entityId
  );

  const isProductImageEmpty = !(productImage.length === 0);
  const isProductReviewEmpty = !(productReview.length === 0);

  const [productId, setProductId] = useState();
  const [size, setSize] = useState();

  const handleSize = (e) => {
    setProductId(e.target.dataset.id);
    setSize(e.target.value);
  };

  const addToCartPLP = (e) => {
    if (size && productId) {
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
            qty: existProductInCart[0].qty + 1,
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
            qty: 1,
          };
          cart.push(cartItem);
        }

        localStorage.setItem("cart", cart);
      } else {
        var cartItem = {
          productId: parseInt(productId),
          product: product,
          size: parseInt(size),
          qty: 1,
        };

        cart.push(cartItem);
      }
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };

  const productRatingAverage = isProductReviewEmpty
    ? Math.floor(
        parseFloat(
          productReview.reduce((item1, item2) => item1 + item2.point, 0)
        ) / productReview.length
      )
    : 0;

  useEffect(() => {
    dispatch(getAllProductImage());
    dispatch(getAllProductReview());
  }, [dispatch]);

  return (
    <div
      className={`col-lg-${grid.lg} col-md-${grid.md} col-sm-${grid.sm} pb-1`}
    >
      <div className="product-item bg-light mb-4">
        <div className="product-img position-relative overflow-hidden">
          <img
            className="img-fluid w-100"
            src={`${
              isProductImageEmpty ? `/img/product/${productImage[0].value}` : ""
            }`}
          />
          <div className="product-action">
            <a
              className="btn btn-outline-dark btn-square"
              data-toggle="modal"
              data-target={"#modal" + product.entityId}
            >
              <i className="fa fa-shopping-cart"></i>
            </a>
            <a className="btn btn-outline-dark btn-square" href="#">
              <i className="far fa-heart"></i>
            </a>
            <div className="modal" id={"modal" + product.entityId}>
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h4 className="modal-title">{product.name}</h4>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                    >
                      &times;
                    </button>
                  </div>
                  <div className="modal-body">
                    {product.size
                      ? product.size.map((item, i) => (
                          <div
                            key={i}
                            className="custom-control custom-radio custom-control-inline"
                          >
                            <input
                              type="radio"
                              className="custom-control-input"
                              id={`${item.value}${item.productId}`}
                              value={item.value}
                              data-id={item.productId}
                              name={"size" + item.productId}
                              onClick={handleSize}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor={`${item.value}${item.productId}`}
                            >
                              {item.value}
                            </label>
                          </div>
                        ))
                      : ""}
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-danger"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-dismiss="modal"
                      onClick={addToCartPLP}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center py-4">
          <Link
            to={`/product-detail?productId=${product.entityId}`}
            className="h6 text-decoration-none text-truncate"
          >
            {product.name}
          </Link>
          <p>
            <strong>SKU: </strong>
            {product.sku}
          </p>
          <div className="d-flex align-items-center justify-content-center mt-2">
            <h5>
              {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
              VND
            </h5>
          </div>
          <div className="d-flex align-items-center justify-content-center mb-1">
            {[...Array(productRatingAverage)].map((item, i) => (
              <small key={i} className="fas fa-star text-primary mr-1"></small>
            ))}
            {productRatingAverage < 5
              ? [...Array(5 - productRatingAverage)].map((item, i) => (
                  <small
                    key={i}
                    className="far fa-star text-primary mr-1"
                  ></small>
                ))
              : ""}
            <small>{`(${productReview.length})`}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
