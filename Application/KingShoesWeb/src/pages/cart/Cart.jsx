import React from "react";
import { NavLink } from "react-router-dom";
import { Breadcrumb } from "@/components";
import useScript from "@/hooks/useScript";

const Cart = () => {
  useScript("public/js/product-quantity");
  var cart = localStorage.getItem("cart");
  cart = JSON.parse(cart);
  var subtotal = 0;
  var shipping = 0;
  var total = 0;
  cart.forEach((element) => {
    subtotal += parseInt(element.product.price) * parseInt(element.qty);
  });

  total = subtotal + shipping;

  return (
    <>
      <Breadcrumb
        pageUrl="/product-list"
        pageName="Shop"
        pageNameChild="Shopping Cart"
      />
      <div className="container-fluid">
        <div className="row px-xl-5">
          <div className="col-lg-8 table-responsive mb-5">
            <table className="table table-light table-borderless table-hover text-center mb-0">
              <thead className="thead-dark">
                <tr>
                  <th>Products</th>
                  <th>Size</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody className="align-middle">
                {cart
                  ? cart.map((item, i) => (
                      <tr key={i}>
                        <td className="align-middle">
                          <img
                            src="img/product-1.jpg"
                            alt=""
                            style={{ width: "50px" }}
                          />{" "}
                          {item.product.name}
                        </td>
                        <td className="align-middle">{item.size}</td>
                        <td className="align-middle">
                          {item.product.price
                            ? item.product.price
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                            : null}{" "}
                          VND
                        </td>
                        <td className="align-middle">
                          <div
                            className="input-group quantity mx-auto"
                            style={{ width: "100px" }}
                          >
                            <div className="input-group-btn">
                              <button className="btn btn-sm btn-primary btn-minus">
                                <i className="fa fa-minus"></i>
                              </button>
                            </div>
                            <input
                              type="text"
                              className="form-control form-control-sm bg-secondary border-0 text-center"
                              defaultValue={item.qty}
                            />
                            <div className="input-group-btn">
                              <button className="btn btn-sm btn-primary btn-plus">
                                <i className="fa fa-plus"></i>
                              </button>
                            </div>
                          </div>
                        </td>
                        <td className="align-middle">
                          {item.product.price && item.qty
                            ? (item.product.price * item.qty)
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                            : null}{" "}
                          VND
                        </td>
                        <td className="align-middle">
                          <button className="btn btn-sm btn-danger">
                            <i className="fa fa-times"></i>
                          </button>
                        </td>
                      </tr>
                    ))
                  : "These is no item in cart"}
              </tbody>
            </table>
          </div>
          <div className="col-lg-4">
            <form className="mb-30" action="">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control border-0 p-4"
                  placeholder="Coupon Code"
                />
                <div className="input-group-append">
                  <button className="btn btn-primary">Apply Coupon</button>
                </div>
              </div>
            </form>
            <h5 className="section-title position-relative text-uppercase mb-3">
              <span className="bg-secondary pr-3">Cart Summary</span>
            </h5>
            <div className="bg-light p-30 mb-5">
              <div className="border-bottom pb-2">
                <div className="d-flex justify-content-between mb-3">
                  <h6>Subtotal</h6>
                  <h6>
                    {subtotal
                      ? subtotal
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                      : null}{" "}
                    VND
                  </h6>
                </div>
                <div className="d-flex justify-content-between">
                  <h6 className="font-weight-medium">Shipping</h6>
                  <h6 className="font-weight-medium">
                    {shipping
                      ? shipping
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                      : null}{"0 "}
                    VND
                  </h6>
                </div>
              </div>
              <div className="pt-2">
                <div className="d-flex justify-content-between mt-2">
                  <h5>Total</h5>
                  <h5>
                    {total
                      ? total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                      : null}{" "}
                    VND
                  </h5>
                </div>
                <NavLink
                  activeclassname="active"
                  to="/checkout"
                  className="btn btn-block btn-primary font-weight-bold my-3 py-3"
                >
                  Proceed To Checkout
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
