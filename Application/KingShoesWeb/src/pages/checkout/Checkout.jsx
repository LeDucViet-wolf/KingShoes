import React, { useEffect, useState } from "react";
import { Breadcrumb } from "@/components";
import axios from "axios";
import { get } from "@/helpers";

const Checkout = () => {
  const billingCode = "billing";
  const shippingCode = "shipping";
  const textRequire = "This is a required field.";
  const emailValidMsg =
    "Please enter a valid email address (Ex: johndoe@domain.com).";
  const phoneValidMsg = "Your phone number is not valid.";
  const [countries, getCountries] = useState([]);
  const [email, setEmail] = useState();
  const [firstNameBilling, setFirstNameBilling] = useState();
  const [firstNameShipping, setFirstNameShipping] = useState();
  const [lastName, setLastName] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [region, setRegion] = useState();
  const [phone, setPhone] = useState();
  const [emailMsg, setEmailMsg] = useState(textRequire);
  const [phoneMsg, setPhoneMsg] = useState(textRequire);

  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isFirstNameBillingValid, setIsFirstNameBillingValid] = useState(true);
  const [isFirstNameShippingValid, setIsFirstNameShippingValid] = useState(true);
  const [isLastNameValid, setIsLastNameValid] = useState(true);
  const [isAddressValid, setIsAddressValid] = useState(true);
  const [isCityValid, setIsCityValid] = useState(true);
  const [isRegionValid, setIsRegionValid] = useState(true);
  const [isPhoneValid, setIsPhoneValid] = useState(true);

  var cart = JSON.parse(localStorage.getItem("cart")),
    subtotal = 0,
    shipping = 0,
    total = 0;

  cart.forEach((e) => {
    subtotal += e.qty * e.product.price;
  });

  total = shipping + subtotal;

  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const validatePhone = (phone) => {
    var regrex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (phone.match(regrex)) {
      return true;
    } else {
      return false;
    }
  };

  const handleEmailChange = (e) => {
    var email = e.currentTarget.value.trim();
    setEmail(email);
    if (!email) {
      setEmailMsg(textRequire);
      setIsEmailValid(false);
    } else {
      if (!validateEmail(email)) {
        setEmailMsg(emailValidMsg);
        setIsEmailValid(false);
      } else {
        setIsEmailValid(true);
      }
    }
  };

  const handleFirstNameChange = (code) => (e) => {
    var firstName = e.currentTarget.value.trim();
    if (code == shippingCode) {
      setFirstNameShipping(firstName);
      if (!firstName) {
        setIsFirstNameShippingValid(false);
      } else {
        setIsFirstNameShippingValid(true);
      }
    } else {
      setFirstNameBilling(firstName);
      if (!firstName) {
        setIsFirstNameBillingValid(false);
      } else {
        setIsFirstNameBillingValid(true);
      }
    }
  };

  const handleLastNameChange = (e) => {
    var lastName = e.currentTarget.value.trim();
    setLastName(lastName);
    if (!lastName) {
      setIsLastNameValid(false);
    } else {
      setIsLastNameValid(true);
    }
  };

  const handleAddressChange = (e) => {
    var address = e.currentTarget.value.trim();
    setAddress(address);
    if (!address) {
      setIsAddressValid(false);
    } else {
      setIsAddressValid(true);
    }
  };

  const handleCityChange = (e) => {
    var city = e.currentTarget.value.trim();
    setCity(city);
    if (!city) {
      setIsCityValid(false);
    } else {
      setIsCityValid(true);
    }
  };

  const handleRegionChange = (e) => {
    var region = e.currentTarget.value.trim();
    setRegion(region);
    if (!region) {
      setIsRegionValid(false);
    } else {
      setIsRegionValid(true);
    }
  };

  const handlePhoneChange = (e) => {
    var phone = e.currentTarget.value.trim();
    setPhone(phone);
    if (!phone) {
      setPhoneMsg(textRequire);
      setIsPhoneValid(false);
    } else {
      if (!validatePhone(phone)) {
        setPhoneMsg(phoneValidMsg);
        setIsPhoneValid(false);
      } else {
        setIsPhoneValid(true);
      }
    }
  };

  const submitOrder = (e) => {
    e.preventDefault();
    var valid = true;

    if (!email) {
      setIsEmailValid(false);
      valid = false;
    } else {
      if (!validateEmail(email)) {
        setEmailMsg(emailValidMsg);
        setIsEmailValid(false);
        valid = false;
      } else {
        setIsEmailValid(true);
      }
    }

    if (!firstNameBilling) {
      setIsFirstNameBillingValid(false);
    } else {
      setIsFirstNameBillingValid(true);
    }

    if (!firstNameShipping) {
      setIsFirstNameShippingValid(false);
    } else {
      setIsFirstNameShippingValid(true);
    }

    if (!lastName) {
      setIsLastNameValid(false);
    } else {
      setIsLastNameValid(true);
    }

    if (!address) {
      setIsAddressValid(false);
    } else {
      setIsAddressValid(true);
    }

    if (!city) {
      setIsCityValid(false);
    } else {
      setIsCityValid(true);
    }

    if (!region) {
      setIsRegionValid(false);
    } else {
      setIsRegionValid(true);
    }

    if (!phone) {
      setIsPhoneValid(false);
    } else {
      setIsPhoneValid(true);
    }
  };

  const fetchData = async () => {
    var res = await get("https://restcountries.com/v3.1/all");
    var data = [];
    res.forEach((e) => {
      data.push({
        name: e.name.common,
        code: e.cca3,
      });
    });
    getCountries(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Breadcrumb
        pageUrl="/product-list"
        pageName="Shop"
        pageNameChild="Checkout"
      />
      <div className="container-fluid">
        <div className="row px-xl-5">
          <div className="col-lg-8">
            <h5 className="section-title position-relative text-uppercase mb-3">
              <span className="bg-secondary pr-3">Billing Address</span>
            </h5>
            <div className="bg-light p-30 mb-5">
              <div className="row">
                <div className="col-md-7 form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    className={`form-control ${
                      isEmailValid ? "" : "is-invalid"
                    }`}
                    onChange={handleEmailChange}
                  />
                  <div className="invalid-feedback">{emailMsg}</div>
                  <span>You can create an account after checkout.</span>
                </div>
                <div className="col-md-6 form-group">
                  <label>First Name</label>
                  <input
                    className={`form-control ${
                      isFirstNameBillingValid ? "" : "is-invalid"
                    }`}
                    onChange={handleFirstNameChange(billingCode)}
                    type="text"
                  />
                  <div className="invalid-feedback">{textRequire}</div>
                </div>
                <div className="col-md-6 form-group">
                  <label>Last Name</label>
                  <input
                    className={`form-control ${
                      isLastNameValid ? "" : "is-invalid"
                    }`}
                    onChange={handleLastNameChange}
                    type="text"
                  />
                  <div className="invalid-feedback">{textRequire}</div>
                </div>
                <div className="col-md-6 form-group">
                  <label>Address</label>
                  <input
                    className={`form-control ${
                      isAddressValid ? "" : "is-invalid"
                    }`}
                    onChange={handleAddressChange}
                    type="text"
                  />
                  <div className="invalid-feedback">{textRequire}</div>
                </div>
                <div className="col-md-6 form-group">
                  <label>City</label>
                  <input
                    className={`form-control ${
                      isCityValid ? "" : "is-invalid"
                    }`}
                    onChange={handleCityChange}
                    type="text"
                  />
                  <div className="invalid-feedback">{textRequire}</div>
                </div>
                <div className="col-md-6 form-group">
                  <label>State/Province</label>
                  <input
                    className={`form-control ${
                      isRegionValid ? "" : "is-invalid"
                    }`}
                    onChange={handleRegionChange}
                    type="text"
                  />
                  <div className="invalid-feedback">{textRequire}</div>
                </div>
                <div className="col-md-6 form-group">
                  <label>Country</label>
                  <select defaultValue={57} className="custom-select">
                    {countries.map((item, i) => (
                      <option key={i} value={item.code}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-md-6 form-group">
                  <label>Phone</label>
                  <input
                    className={`form-control ${
                      isPhoneValid ? "" : "is-invalid"
                    }`}
                    onChange={handlePhoneChange}
                    type="text"
                  />
                  <div className="invalid-feedback">{phoneMsg}</div>
                </div>
                <div className="col-md-12">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="shipto"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="shipto"
                      data-toggle="collapse"
                      data-target="#shipping-address"
                    >
                      Ship to different address
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="collapse mb-5" id="shipping-address">
              <h5 className="section-title position-relative text-uppercase mb-3">
                <span className="bg-secondary pr-3">Shipping Address</span>
              </h5>
              <div className="bg-light p-30">
                <div className="row">
                  <div className="col-md-6 form-group">
                    <label>First Name</label>
                    <input
                      className={`form-control ${
                        isFirstNameShippingValid ? "" : "is-invalid"
                      }`}
                      onChange={handleFirstNameChange(shippingCode)}
                      type="text"
                    />
                    <div className="invalid-feedback">{textRequire}</div>
                  </div>
                  <div className="col-md-6 form-group">
                    <label>Last Name</label>
                    <input
                      className={`form-control ${
                        isLastNameValid ? "" : "is-invalid"
                      }`}
                      onChange={handleLastNameChange}
                      type="text"
                    />
                    <div className="invalid-feedback">{textRequire}</div>
                  </div>
                  <div className="col-md-6 form-group">
                    <label>Address</label>
                    <input
                      className={`form-control ${
                        isAddressValid ? "" : "is-invalid"
                      }`}
                      onChange={handleAddressChange}
                      type="text"
                    />
                    <div className="invalid-feedback">{textRequire}</div>
                  </div>
                  <div className="col-md-6 form-group">
                    <label>City</label>
                    <input
                      className={`form-control ${
                        isCityValid ? "" : "is-invalid"
                      }`}
                      onChange={handleCityChange}
                      type="text"
                    />
                    <div className="invalid-feedback">{textRequire}</div>
                  </div>
                  <div className="col-md-6 form-group">
                    <label>State/Province</label>
                    <input
                      className={`form-control ${
                        isRegionValid ? "" : "is-invalid"
                      }`}
                      onChange={handleRegionChange}
                      type="text"
                    />
                    <div className="invalid-feedback">{textRequire}</div>
                  </div>
                  <div className="col-md-6 form-group">
                    <label>Country</label>
                    <select defaultValue={57} className="custom-select">
                      {countries.map((item, i) => (
                        <option key={i} value={item.code}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-6 form-group">
                    <label>Phone</label>
                    <input
                      className={`form-control ${
                        isPhoneValid ? "" : "is-invalid"
                      }`}
                      onChange={handlePhoneChange}
                      type="text"
                    />
                    <div className="invalid-feedback">{phoneMsg}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <h5 className="section-title position-relative text-uppercase mb-3">
              <span className="bg-secondary pr-3">Order Total</span>
            </h5>
            <div className="bg-light p-30 mb-5">
              <div className="border-bottom">
                <h6 className="mb-3">Products</h6>
                {cart.map((item, i) => (
                  <div className="d-flex justify-content-between">
                    <p>
                      {item.product.name + " - " + item.size}{" "}
                      <strong>({item.qty})</strong>
                    </p>
                    <p>
                      {(item.qty * item.product.price)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                      VND
                    </p>
                  </div>
                ))}
              </div>
              <div className="border-bottom pt-3 pb-2">
                <div className="d-flex justify-content-between mb-3">
                  <h6>Subtotal</h6>
                  <h6>
                    {subtotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                    VND
                  </h6>
                </div>
                <div className="d-flex justify-content-between">
                  <h6 className="font-weight-medium">Shipping</h6>
                  <h6 className="font-weight-medium">
                    {shipping.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                    VND
                  </h6>
                </div>
              </div>
              <div className="pt-2">
                <div className="d-flex justify-content-between mt-2">
                  <h5>Total</h5>
                  <h5>
                    {total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} VND
                  </h5>
                </div>
              </div>
            </div>
            <div className="mb-5 ">
              <h5 className="section-title position-relative text-uppercase mb-3">
                <span className="bg-secondary pr-3">Shipping</span>
              </h5>
              <div className="bg-light p-30">
                <div className="form-group">
                  <div className="custom-control custom-radio">
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="shipping"
                      id="free-shipping"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="free-shipping"
                    >
                      Free Shipping
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <div className="custom-control custom-radio">
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="shipping"
                      id="flat-rate"
                    />
                    <label className="custom-control-label" htmlFor="flat-rate">
                      Flat Rate
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-5">
              <h5 className="section-title position-relative text-uppercase mb-3">
                <span className="bg-secondary pr-3">Payment</span>
              </h5>
              <div className="bg-light p-30">
                <div className="form-group">
                  <div className="custom-control custom-radio">
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="payment"
                      id="paypal"
                    />
                    <label className="custom-control-label" htmlFor="paypal">
                      Paypal
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <div className="custom-control custom-radio">
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="payment"
                      id="directcheck"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="directcheck"
                    >
                      Direct Check
                    </label>
                  </div>
                </div>
                <div className="form-group mb-4">
                  <div className="custom-control custom-radio">
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="payment"
                      id="banktransfer"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="banktransfer"
                    >
                      Bank Transfer
                    </label>
                  </div>
                </div>
                <button
                  className="btn btn-block btn-primary font-weight-bold py-3"
                  onClick={submitOrder}
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
