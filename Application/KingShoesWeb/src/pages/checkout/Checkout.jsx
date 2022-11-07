import React, { useEffect, useState } from "react";
import { Breadcrumb } from "@/components";
import { get } from "@/helpers";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
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
  const [note, setNote] = useState("");
  const [shipping, setShipping] = useState(0);
  const [shippingMethod, setShippingMethod] = useState();
  const [shippingMethods, getShippingMethods] = useState([]);
  const [paymnetMethod, setPaymentMethod] = useState();
  const [paymentMethods, getPaymentMethods] = useState([]);
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

  const handleChangeShippingMethod = (price) => (e) => {
    setShippingMethod(e.currentTarget.value);
    setShipping(price);
  };

  const handleChangePaymentMethod = (e) => {
    setPaymentMethod(e.currentTarget.value);
  };

  var cart = JSON.parse(localStorage.getItem("cart")),
    subtotal = 0,
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
      isValid = false;
    }

    return valid;
  };

  const handleChangeNote = (e) => {
    setNote(e.currentTarget.value);
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

    if (!shippingMethod || !paymnetMethod) {
      isValid = false;
    }

    if (isValid) {
      var dataToOrder = prepareDataToOrder(
        shippingMethod,
        paymnetMethod,
        total,
        note
      );
      axios
        .post(
          "http://localhost:8080/KingShoesApi/api/orders/insert",
          dataToOrder
        )
        .then(function (response) {
          if ((response.status = 200 && response.data)) {
            var orderId = response.data;
            axios
              .get(
                "http://localhost:8080/KingShoesApi/api/orders/get-by-id/" +
                  orderId
              )
              .then(function (response) {
                if ((response.status = 200 && response.data)) {
                  var dataToOrderAddressBilling = prepareDataToOrderAddress(
                      orderId,
                      billingCode
                    ),
                    dataToOrderAddressShipping = prepareDataToOrderAddress(
                      orderId,
                      shippingCode
                    );

                  pushDataOrderItem(orderId);
                  axios
                    .post(
                      "http://localhost:8080/KingShoesApi/api/order-address/insert/",
                      dataToOrderAddressBilling
                    )
                    .then(function (res) {})
                    .catch((err) => {
                      console.log(err);
                    });
                  axios
                    .post(
                      "http://localhost:8080/KingShoesApi/api/order-address/insert/",
                      dataToOrderAddressShipping
                    )
                    .then(function (res) {})
                    .catch((err) => {
                      console.log(err);
                    });
                    localStorage.removeItem('cart');
                    localStorage.setItem('last-order-id', orderId);
                    localStorage.setItem('customer-data', JSON.stringify(data[billingCode]));
                    localStorage.setItem('is-loaded', false);
                    navigate('/checkout-success');
                }
              })
              .catch((err) => {
                console.log(err);
              });
          }
        })
        .catch((err) => {
          console.log(err);
        });
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
    var orderAddressType = type;
    if (!shipToDifferentAddress) {
      type = billingCode;
    }

    return {
      firstName: data[type][firstNameCode].value,
      lastName: data[type][lastNameCode].value,
      address: data[type][addressCode].value,
      city: data[type][cityCode].value,
      region: data[type][regionCode].value,
      country: data[type][countryCode].value,
      phone: data[type][phoneCode].value,
      type: orderAddressType,
      orderId: orderId,
    };
  };

  const pushDataOrderItem = (orderId) => {
    cart.forEach((e) => {
      var data = {
        orderId: orderId,
        productId: e.productId,
        quantity: e.qty,
        rowTotal: e.product.price * e.qty,
      };
      axios
        .post("http://localhost:8080/KingShoesApi/api/order-item/insert/", data)
        .then(function (res) {})
        .catch((err) => {
          console.log(err);
        });
    });
  };

  const fetchData = async () => {
    var countryList = [];
    (await get("https://restcountries.com/v3.1/all")).forEach((e) => {
      countryList.push({
        name: e.name.common,
        code: e.cca3,
      });
    });
    getShippingMethods(
      await get(
        "http://localhost:8080/KingShoesApi/api/shipping-method/get-list-enabled"
      )
    );
    getPaymentMethods(
      await get(
        "http://localhost:8080/KingShoesApi/api/payment-method/get-list-enabled"
      )
    );
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
                  <div key={i} className="d-flex justify-content-between">
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
                <span className="bg-secondary pr-3">Note for shipper</span>
              </h5>
              <div className="bg-light p-30">
                <input
                  className="form-control"
                  onChange={handleChangeNote}
                  type="text"
                />
              </div>
            </div>
            <div className="mb-5 ">
              <h5 className="section-title position-relative text-uppercase mb-3">
                <span className="bg-secondary pr-3">Shipping</span>
              </h5>
              <div className="bg-light p-30">
                {shippingMethods.map((item, key) => (
                  <div key={key} className="form-group">
                    <div className="custom-control custom-radio">
                      <input
                        type="radio"
                        className="custom-control-input"
                        name="shipping"
                        id={item.code}
                        value={item.entityId}
                        onChange={handleChangeShippingMethod(item.price)}
                      />
                      <label
                        className="custom-control-label"
                        htmlFor={item.code}
                      >
                        {item.name} -{" "}
                        {item.price
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                        VND
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-5">
              <h5 className="section-title position-relative text-uppercase mb-3">
                <span className="bg-secondary pr-3">Payment</span>
              </h5>
              <div className="bg-light p-30">
                {paymentMethods.map((item, key) => (
                  <div key={key} className="form-group">
                    <div className="custom-control custom-radio">
                      <input
                        type="radio"
                        className="custom-control-input"
                        name="payment"
                        id={item.code}
                        value={item.entityId}
                        onChange={handleChangePaymentMethod}
                      />
                      <label
                        className="custom-control-label"
                        htmlFor={item.code}
                      >
                        {item.name}
                      </label>
                    </div>
                  </div>
                ))}
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
