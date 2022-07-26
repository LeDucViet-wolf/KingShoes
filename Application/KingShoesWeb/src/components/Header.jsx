import React, { useRef, useState, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import "@/assets/css/header.css";
import { useAlert } from 'react-alert'

const Header = () => {
  const navigate = useNavigate();
  const alert = useAlert()

  const customer = localStorage.getItem("customer-login");
  const [isLogout, setIsLogOut] = useState(false)

  const redirectProfile = (e) => {
    e.preventDefault()
    navigate('/profile')
  };

  const logOut = (e) => {
    e.preventDefault()
    localStorage.removeItem("customer-login");
    setIsLogOut(true)
  }

  useEffect(() => {
    if (isLogout) {
      alert.show(`Log out success!`, {
        type: 'success',
      })
      navigate('/')
      setIsLogOut(false)
    }
  }, [isLogout])

  // Search
  const inputSearch = useRef();
  const handleSearchProduct = () => {
    let searchString = inputSearch.current.value;
    navigate(`product-list?search=${searchString}`);
  };

  var cart = JSON.parse(localStorage.getItem("cart")),
    wishlist = JSON.parse(localStorage.getItem("wishlist")),
    cartQty = 0, 
    wishlistQty = 0;

  if (cart) {
    cart.forEach((element) => {
      cartQty += parseInt(element.qty);
    });
  }

  if (wishlist) {
    wishlist.forEach((element) => {
      wishlistQty += parseInt(element.qty);
    });
  }

  return (
    <>
      {/* Top bar */}
      <div className="container-fluid">
        <div className="row bg-secondary py-1 px-xl-5">
          <div className="col-lg-6 d-none d-lg-block">
            <div className="d-inline-flex align-items-center h-100">
              <a className="text-body mr-3" href="">
                About
              </a>
              <a className="text-body mr-3" href="">
                Contact
              </a>
              <a className="text-body mr-3" href="">
                Help
              </a>
              <a className="text-body mr-3" href="">
                FAQs
              </a>
            </div>
          </div>
          <div className="col-lg-6 text-center text-lg-right">
            <div className="d-inline-flex align-items-center">
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-sm btn-light dropdown-toggle"
                  data-toggle="dropdown"
                >
                  {!customer ? "My Account" : `${JSON.parse(customer)[0].lastName}`}
                </button>
                <div className="dropdown-menu dropdown-menu-right">
                  {
                    !customer
                      ?
                      <>
                        <Link to="/login" className="dropdown-item" type="button">
                          Sign in
                        </Link>
                        <Link
                          to="/register"
                          className="dropdown-item"
                          type="button"
                        >
                          Sign up
                        </Link>
                      </>
                      :
                      <>
                        <a
                          href=""
                          className="dropdown-item"
                          type="button"
                          onClick={redirectProfile}
                        >Profile</a>
                        <a
                          href=""
                          className="dropdown-item"
                          type="button"
                          onClick={logOut}
                        >Logout</a>
                      </>
                  }
                </div>
              </div>
              <div className="btn-group mx-2">
                <button
                  type="button"
                  className="btn btn-sm btn-light dropdown-toggle"
                  data-toggle="dropdown"
                >
                  USD
                </button>
                <div className="dropdown-menu dropdown-menu-right">
                  <button className="dropdown-item" type="button">
                    EUR
                  </button>
                  <button className="dropdown-item" type="button">
                    GBP
                  </button>
                  <button className="dropdown-item" type="button">
                    CAD
                  </button>
                </div>
              </div>
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-sm btn-light dropdown-toggle"
                  data-toggle="dropdown"
                >
                  EN
                </button>
                <div className="dropdown-menu dropdown-menu-right">
                  <button className="dropdown-item" type="button">
                    FR
                  </button>
                  <button className="dropdown-item" type="button">
                    AR
                  </button>
                  <button className="dropdown-item" type="button">
                    RU
                  </button>
                </div>
              </div>
            </div>
            <div className="d-inline-flex align-items-center d-block d-lg-none">
              <a href="" className="btn px-0 ml-2">
                <i className="fas fa-heart text-dark"></i>
                <span
                  className="badge text-dark border border-dark rounded-circle"
                  style={{ paddingBottom: "2px" }}
                >
                  0
                </span>
              </a>
              <a href="" className="btn px-0 ml-2">
                <i className="fas fa-shopping-cart text-dark"></i>
                <span
                  className="badge text-dark border border-dark rounded-circle"
                  style={{ paddingBottom: "2px" }}
                >
                  0
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="row align-items-center bg-light py-3 px-xl-5 d-none d-lg-flex">
          <div className="col-lg-4">
            <NavLink to="/" className="text-decoration-none">
              <span className="h1 text-uppercase text-primary bg-dark px-2">
                Multi
              </span>
              <span className="h1 text-uppercase text-dark bg-primary px-2 ml-n1">
                Shop
              </span>
            </NavLink>
          </div>
          <div className="col-lg-4 col-6 text-left">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search for products"
                ref={inputSearch}
              />
              <div
                onClick={handleSearchProduct}
                className="input-group-append button--search"
              >
                <span className="input-group-text bg-transparent text-primary">
                  <i className="fa fa-search"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-6 text-right">
            <p className="m-0">Customer Service</p>
            <h5 className="m-0">+012 345 6789</h5>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="container-fluid bg-dark mb-30">
        <div className="row px-xl-5">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
              <a href="" className="text-decoration-none d-block d-lg-none">
                <span className="h1 text-uppercase text-dark bg-light px-2">
                  Multi
                </span>
                <span className="h1 text-uppercase text-light bg-primary px-2 ml-n1">
                  Shop
                </span>
              </a>
              <button
                type="button"
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarCollapse"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse justify-content-between"
                id="navbarCollapse"
              >
                <div className="navbar-nav mr-auto py-0">
                  <NavLink
                    activeclassname="active"
                    to="/"
                    className="nav-item nav-link"
                  >
                    Home
                  </NavLink>
                  <NavLink
                    activeclassname="active"
                    to="/product-list"
                    className="nav-item nav-link"
                  >
                    Shop
                  </NavLink>
                  <NavLink
                    activeclassname="active"
                    to="/contact"
                    className="nav-item nav-link"
                  >
                    Contact
                  </NavLink>
                </div>
                <div className="navbar-nav ml-auto py-0 d-none d-lg-block">
                  <NavLink
                    activeclassname="active"
                    to="/wishlist"
                    className="btn px-0"
                  >
                    <i className="fas fa-heart text-primary"></i>
                    <span
                      className="dat__wishlist badge text-secondary border border-secondary rounded-circle"
                      style={{ paddingBottom: "2px" }}
                    >
                      {wishlistQty}
                    </span>
                  </NavLink>
                  <NavLink
                    activeclassname="active"
                    to="/cart"
                    className="btn px-0 ml-3"
                  >
                    <i className="fas fa-shopping-cart text-primary"></i>
                    <span
                      className="dat__cart-item badge text-secondary border border-secondary rounded-circle"
                      style={{ paddingBottom: "2px" }}
                    >
                      {cartQty}
                    </span>
                  </NavLink>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
