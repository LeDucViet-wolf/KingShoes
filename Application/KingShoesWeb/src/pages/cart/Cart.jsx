import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Breadcrumb } from "@/components";
import useScript from "@/hooks/useScript";
import { useState, useEffect } from "react";
import { useAlert } from 'react-alert';


const Cart = () => {
  const navigate = useNavigate();
  const alert = useAlert();

  useScript("public/js/product-quantity");
  const [cart, setCart] = useState([]);

  const fetchData = () => {
    setCart(JSON.parse(localStorage.getItem("cart")));
  };

  useEffect(() => {
    fetchData();
  }, []);

  var subtotal = 0;
  var shipping = 0;
  var total = 0;
  if (cart) {
    cart.forEach((element) => {
      subtotal += parseInt(element.product.price) * parseInt(element.qty);
    });
  }

  total = subtotal + shipping;

  const updateCartItem = (qty) => {
    const cartCur = document.querySelector(".dat__cart-item");
    if (cartCur) {
      cartCur.innerText = qty;
    }
  };

  const dele = (id, size) => {
    var data = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
    const newD = [];
    data.forEach((e) => {
      if (e.productId != id) {
        newD.push(e);
      } else if (e.size != size) {
        newD.push(e);
      }
    });
    alert.show(`Delete cart success!`, {
      type: 'success',
    })
    localStorage.setItem("cart", JSON.stringify(newD));
    updateCart();
    fetchData();
  };

  const updateCart = () => {
    var cartItem = JSON.parse(localStorage.getItem("cart")),
      cartQty = 0;
    if (cartItem) {
      cartItem.forEach((element) => {
        cartQty += parseInt(element.qty);
      });
    }
    updateCartItem(cartQty);
  };

  const minusItem = (e, id, size) => {
    cart.forEach((item, index) => {
      if (item.productId == id && item.size == size) {
        item.qty--;
        if (item.qty === 0) {
          cart.splice(index, 1);
          const tr = e.target.closest("tr");
          if (tr) {
            const itemId = tr.dataset.itemId;
            const size = tr.dataset.itemSize;
            dele(itemId, size);
          }
        }else{
          alert.show(`Update cart success!`, {
            type: 'success',
          })
        }
      }
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCart();
    fetchData();
  };

  const plusItem = (e, id, size) => {
    cart.forEach((item, index) => {
      if (item.productId == id && item.size == size) {
        cart[index].qty++;
        alert.show(`Update cart success!`, {
          type: 'success',
        })
      }
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCart();
    fetchData();
  };

  const clearCart = (e) => {
    alert.show(`Clear cart success!`, {
      type: 'success',
    })
    localStorage.setItem("cart", JSON.stringify([]));
    fetchData();
    updateCart();
  };

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
            {cart && cart.length !== 0 ? (
              <>
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
                        <tr
                          key={i}
                          data-item-id={item.productId}
                          data-item-size={item.size}
                        >
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
                                <button
                                  className="btn btn-sm btn-primary btn-minus"
                                  onClick={(event) =>
                                    minusItem(
                                      event,
                                      item.productId,
                                      item.size
                                    )
                                  }
                                >
                                  <i className="fa fa-minus"></i>
                                </button>
                              </div>
                              <input
                                type="text"
                                className="form-control form-control-sm bg-secondary border-0 text-center"
                                value={item.qty}
                              />
                              <div className="input-group-btn">
                                <button
                                  className="btn btn-sm btn-primary btn-plus"
                                  onClick={(event) =>
                                    plusItem(event, item.productId, item.size)
                                  }
                                >
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
                            <button
                              className="btn btn-sm btn-danger"
                              onClick={(event) =>
                                dele(item.productId, item.size)
                              }
                            >
                              <i className="fa fa-times"></i>
                            </button>
                          </td>
                        </tr>
                      ))
                      : null}
                  </tbody>
                </table>
              </>
            ) : (
              <div>
                <h1>Shopping Cart</h1>
                <br />
                <br />
                <div>You have no items in your shopping cart.</div>
                <div>
                  Click{" "}
                  <button
                    className="btn btn-primary"
                    onClick={() => navigate("/")}
                  >
                    here
                  </button>{" "}
                  to continue shopping.
                </div>
              </div>
            )}
            {cart && cart.length !== 0 ? (
              <button className="btn btn-primary mt-2" onClick={clearCart}>
                Clear Shopping Cart
              </button>
            ) : (
              <></>
            )}
          </div>
          <div className="col-lg-4">
            {cart && cart.length ? (
              <>
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
                          : null}
                        {"0 "}
                        VND
                      </h6>
                    </div>
                  </div>
                  <div className="pt-2">
                    <div className="d-flex justify-content-between mt-2">
                      <h5>Total</h5>
                      <h5>
                        {total
                          ? total
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
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
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;