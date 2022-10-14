import React, { useEffect, useState } from "react";
import { Breadcrumb } from "@/components";
import { get } from "@/helpers";
import axios from "axios";

const Checkout = () => {
  const emailCode = "email";
  const firstNameCode = "firstName";
  const lastNameCode = "lastName";
  const addressCode = "address";
  const cityCode = "city";
  const regionCode = "region";
  const phoneCode = "phone";
  const countryCode = "country";
  const billingCode = "billing";
  const shippingCode = "shipping";
  const textRequire = "This is a required field.";
  const emailValidMsg = "Your email is not valid.";
  const phoneValidMsg = "Your phone number is not valid.";
  // const [isValid, setIsValid] = useState(true);
  var isValid = true;
  const regrexEmail =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const regrexPhone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  const [countries, getCountries] = useState([]);
  const [shipToDifferentAddress, useShipToDifferentAddress] = useState(false);
  const billingData = [
    emailCode,
    firstNameCode,
    lastNameCode,
    addressCode,
    cityCode,
    regionCode,
    phoneCode,
    countryCode,
  ];
  const shippingData = [
    firstNameCode,
    lastNameCode,
    addressCode,
    cityCode,
    regionCode,
    phoneCode,
    countryCode,
  ];

  const checkUseShipToDifferentAddress = (e) => {
    useShipToDifferentAddress(e.currentTarget.checked);
  };

  var cart = JSON.parse(localStorage.getItem("cart")),
    subtotal = 0,
    shipping = 0,
    total = 0;

  cart.forEach((e) => {
    subtotal += e.qty * e.product.price;
  });

  total = shipping + subtotal;

  const validator = (code, value) => {
    var valid = !value ? false : true;
    if (code == emailCode) {
      valid = value.match(regrexEmail) ? true : false;
    }

    if (code == phoneCode) {
      valid = value.match(regrexPhone) ? true : false;
    }

    if (!valid) {
      isValid = false
    }

    return valid;
  };

  const [data, setData] = useState({
    shipping: {
      firstName: {
        valid: true,
        value: "",
      },
      lastName: {
        valid: true,
        value: "",
      },
      address: {
        valid: true,
        value: "",
      },
      city: {
        valid: true,
        value: "",
      },
      region: {
        valid: true,
        value: "",
      },
      country: {
        valid: true,
        value: "",
      },
      phone: {
        valid: true,
        value: "",
      },
    },
    billing: {
      email: {
        valid: true,
        value: "",
      },
      firstName: {
        valid: true,
        value: "",
      },
      lastName: {
        valid: true,
        value: "",
      },
      address: {
        valid: true,
        value: "",
      },
      city: {
        valid: true,
        value: "",
      },
      region: {
        valid: true,
        value: "",
      },
      country: {
        valid: true,
        value: "",
      },
      phone: {
        valid: true,
        value: "",
      },
    },
  });

  const assignData = async (type, code, value) => {
    var valid = validator(code, value);

    setData((pre) => ({
      ...pre,
      [type]: {
        ...pre[type],
        [code]: {
          ...pre[type][code],
          valid: valid,
          value: value,
        },
      },
    }));
  };

  const handleChange = (type, code) => (e) => {
    assignData(type, code, e.currentTarget.value.trim());
  };

  const submitOrder = async (e) => {
    e.preventDefault();

    billingData.forEach(async (code) => {
      await assignData(billingCode, code, data[billingCode][code].value);
    });

    if (shipToDifferentAddress) {
      shippingData.forEach(async (code) => {
        await assignData(shippingCode, code, data[shippingCode][code].value);
      });
    }
    if (isValid) {
      // var dataToOrder = prepareDataToOrder(1, 1, 1000, "");
      // axios
      //   .post(
      //     "http://localhost:8080/KingShoesApi/api/orders/insert",
      //     dataToOrder
      //   )
      //   .then(function (response) {
      //     if ((response.status = 200 && response.data)) {
      //       var orderId = response.data;
      //       axios
      //         .get(
      //           "http://localhost:8080/KingShoesApi/api/orders/get-by-id/" +
      //             orderId
      //         )
      //         .then(function (response) {
      //           if ((response.status = 200 && response.data)) {
      //             var dataToOrderAddressBilling = prepareDataToOrderAddress(
      //                 orderId,
      //                 billingCode
      //               ),
      //               dataToOrderAddressShipping = prepareDataToOrderAddress(
      //                 orderId,
      //                 shippingCode
      //               );

      //             axios
      //               .post(
      //                 "http://localhost:8080/KingShoesApi/api/order-address/insert/",
      //                 dataToOrderAddressBilling
      //               )
      //               .then(function (res) {
      //                 console.log(
      //                   "insert to order address type = billing success"
      //                 );
      //               })
      //               .catch((err) => {
      //                 console.log(err);
      //               });
      //             axios
      //               .post(
      //                 "http://localhost:8080/KingShoesApi/api/order-address/insert/",
      //                 dataToOrderAddressShipping
      //               )
      //               .then(function (res) {
      //                 console.log(
      //                   "insert to order address type = shipping success"
      //                 );
      //               })
      //               .catch((err) => {
      //                 console.log(err);
      //               });
      //           }
      //         })
      //         .catch((err) => {
      //           console.log(err);
      //         });
      //     }
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    }  
  };

  const prepareDataToOrder = (shippingId, paymentId, grandTotal, note) => {
    return {
      status: 1,
      shippingId: parseInt(shippingId),
      paymentId: parseInt(paymentId),
      grandTotal: parseFloat(grandTotal),
      note: note,
    };
  };

  const prepareDataToOrderAddress = (orderId, type) => {
    return {
      firstName: data[type][firstNameCode].value,
      lastNameCode: data[type][lastNameCode].value,
      address: data[type][addressCode].value,
      city: data[type][cityCode].value,
      region: data[type][regionCode].value,
      country: data[type][countryCode].value,
      phone: data[type][phoneCode].value,
      type: type,
      orderId: orderId,
    };
  };

  const fetchData = async () => {
    var res = await get("https://restcountries.com/v3.1/all");
    var countryList = [];
    res.forEach((e) => {
      countryList.push({
        name: e.name.common,
        code: e.cca3,
      });
    });
    getCountries(countryList);
    assignData(billingCode, countryCode, countryList[0].code);
    assignData(shippingCode, countryCode, countryList[0].code);
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
                    className={`form-control ${
                      data[billingCode][emailCode].valid ? "" : "is-invalid"
                    }`}
                    onChange={handleChange(billingCode, emailCode)}
                    type="text"
                  />
                  <div className="invalid-feedback">{emailValidMsg}</div>
                  <span>You can create an account after checkout.</span>
                </div>
                <div className="col-md-6 form-group">
                  <label>First Name</label>
                  <input
                    className={`form-control ${
                      data[billingCode][firstNameCode].valid ? "" : "is-invalid"
                    }`}
                    onChange={handleChange(billingCode, firstNameCode)}
                    type="text"
                  />
                  <div className="invalid-feedback">{textRequire}</div>
                </div>
                <div className="col-md-6 form-group">
                  <label>Last Name</label>
                  <input
                    className={`form-control ${
                      data[billingCode][lastNameCode].valid ? "" : "is-invalid"
                    }`}
                    onChange={handleChange(billingCode, lastNameCode)}
                    type="text"
                  />
                  <div className="invalid-feedback">{textRequire}</div>
                </div>
                <div className="col-md-6 form-group">
                  <label>Address</label>
                  <input
                    className={`form-control ${
                      data[billingCode][addressCode].valid ? "" : "is-invalid"
                    }`}
                    onChange={handleChange(billingCode, addressCode)}
                    type="text"
                  />
                  <div className="invalid-feedback">{textRequire}</div>
                </div>
                <div className="col-md-6 form-group">
                  <label>City</label>
                  <input
                    className={`form-control ${
                      data[billingCode][cityCode].valid ? "" : "is-invalid"
                    }`}
                    onChange={handleChange(billingCode, cityCode)}
                    type="text"
                  />
                  <div className="invalid-feedback">{textRequire}</div>
                </div>
                <div className="col-md-6 form-group">
                  <label>State/Province</label>
                  <input
                    className={`form-control ${
                      data[billingCode][regionCode].valid ? "" : "is-invalid"
                    }`}
                    onChange={handleChange(billingCode, regionCode)}
                    type="text"
                  />
                  <div className="invalid-feedback">{textRequire}</div>
                </div>
                <div className="col-md-6 form-group">
                  <label>Country</label>
                  <select
                    defaultValue={57}
                    className="custom-select"
                    onChange={handleChange(billingCode, countryCode)}
                  >
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
                      data[billingCode][phoneCode].valid ? "" : "is-invalid"
                    }`}
                    onChange={handleChange(billingCode, phoneCode)}
                    type="text"
                  />
                  <div className="invalid-feedback">{phoneValidMsg}</div>
                </div>
                <div className="col-md-12">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="shipto"
                      onChange={checkUseShipToDifferentAddress}
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
                        data[shippingCode][firstNameCode].valid
                          ? ""
                          : "is-invalid"
                      }`}
                      onChange={handleChange(shippingCode, firstNameCode)}
                      type="text"
                    />
                    <div className="invalid-feedback">{textRequire}</div>
                  </div>
                  <div className="col-md-6 form-group">
                    <label>Last Name</label>
                    <input
                      className={`form-control ${
                        data[shippingCode][lastNameCode].valid
                          ? ""
                          : "is-invalid"
                      }`}
                      onChange={handleChange(shippingCode, lastNameCode)}
                      type="text"
                    />
                    <div className="invalid-feedback">{textRequire}</div>
                  </div>
                  <div className="col-md-6 form-group">
                    <label>Address</label>
                    <input
                      className={`form-control ${
                        data[shippingCode][addressCode].valid
                          ? ""
                          : "is-invalid"
                      }`}
                      onChange={handleChange(shippingCode, addressCode)}
                      type="text"
                    />
                    <div className="invalid-feedback">{textRequire}</div>
                  </div>
                  <div className="col-md-6 form-group">
                    <label>City</label>
                    <input
                      className={`form-control ${
                        data[shippingCode][cityCode].valid ? "" : "is-invalid"
                      }`}
                      onChange={handleChange(shippingCode, cityCode)}
                      type="text"
                    />
                    <div className="invalid-feedback">{textRequire}</div>
                  </div>
                  <div className="col-md-6 form-group">
                    <label>State/Province</label>
                    <input
                      className={`form-control ${
                        data[shippingCode][regionCode].valid ? "" : "is-invalid"
                      }`}
                      onChange={handleChange(shippingCode, regionCode)}
                      type="text"
                    />
                    <div className="invalid-feedback">{textRequire}</div>
                  </div>
                  <div className="col-md-6 form-group">
                    <label>Country</label>
                    <select
                      defaultValue={57}
                      className="custom-select"
                      onChange={handleChange(shippingCode, countryCode)}
                    >
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
                        data[shippingCode][phoneCode].valid ? "" : "is-invalid"
                      }`}
                      onChange={handleChange(shippingCode, phoneCode)}
                      type="text"
                    />
                    <div className="invalid-feedback">{phoneValidMsg}</div>
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
