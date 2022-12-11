import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

const CheckoutSuccess = () => {
  const navigate = useNavigate();
  const [orderId, setOrderId] = useState();
  const [email, setEmail] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigateHome = () => {
    navigate("/");
  };

  const navigateRegisterAccount = () => {
    localStorage.setItem("is-loaded", false);
    navigate("/register");
  };

  var customerLoggedInData = localStorage.getItem("customer-login");
  if (customerLoggedInData) {
    customerLoggedInData = JSON.parse(customerLoggedInData)[0];
  }

  useEffect(() => {
    if (customerLoggedInData) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
    var isLoaded = localStorage.getItem("is-loaded-checkout-success");
    if (isLoaded == "true" || isLoaded == null) {
      localStorage.removeItem("customer-data");
      localStorage.removeItem("last-order-id");
      navigate("/cart");
    } else {
      localStorage.setItem("is-loaded-checkout-success", true);
      setOrderId(localStorage.getItem("last-order-id"));
      setEmail(JSON.parse(localStorage.getItem("customer-data")).email.value);
    }
  }, []);

  return (
    <>
      <main className="container-fluid col-10">
        <div className="page-title">
          <h1>
            <span>Thank you for your purchase!</span>
          </h1>
        </div>
        <div className="column-main">
          <div className="checkout-success">
            <p>Your order # is: {orderId ? orderId : ""}.</p>
            <p>
              We'll email you an order confirmation with details and tracking
              info.
            </p>
          </div>
          <div className="action-toolbar">
            <div className="primary">
              <a onClick={navigateHome} className="btn btn-primary">
                <span>Continue Shopping</span>
              </a>
            </div>
          </div>
          <br />
          <div
            className="checkout-success"
            style={isLoggedIn ? { display: "none" } : {}}
          >
            <p>You can track your order status by creating an account.</p>
            <p>Email Address: {email ? email : ""}</p>
          </div>
          <div
            className="action-toolbar"
            style={isLoggedIn ? { display: "none" } : {}}
          >
            <div className="primary">
              <a onClick={navigateRegisterAccount} className="btn btn-primary">
                <span>Create Account</span>
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CheckoutSuccess;
