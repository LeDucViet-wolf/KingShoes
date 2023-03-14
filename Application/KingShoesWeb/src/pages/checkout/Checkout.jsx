import React, { useEffect, useState, useRef } from "react";
import { Breadcrumb } from "@/components";
import { get } from "@/helpers";
import { useAlert } from 'react-alert';
import bcrypt from "bcryptjs";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllProductSize, getAllCustomer } from "@/stores/actions";
import { useAppContext } from "@/hooks/useAppContext";

const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();

  const { data: validateCart, setData: setValidateCart } =
    useAppContext("validate-cart");

  const { productSizes, customers } = useSelector((state) => ({
    productSizes: state.productSizeReducer.productSizes,
    customers: state.customerReducer.customers,
  }));

  useEffect(() => {
    if (!validateCart) {
      dispatch(getAllProductSize());
    } else {
      if (!validateCart.isSuccess) {
        navigate("/cart");
      }
    }
  }, [validateCart]);

  useEffect(() => {
    dispatch(getAllCustomer());
  }, [dispatch]);

  useEffect(() => {
    if (productSizes.length > 0) {
      let countProductFalse = 0;
      let lstProduct = [];
      let cart = JSON.parse(localStorage.getItem("cart"));
      cart.map((item) => {
        let filterProduct = productSizes.find(
          (ps) => ps.productId === item.productId && ps.value === item.size
        );
        if (filterProduct) {
          if (item.qty > filterProduct.quantity) {
            countProductFalse++;
            lstProduct.push({
              ...item,
              repository: filterProduct.quantity,
            });
          }
        }
      });
      if (countProductFalse === 0) {
        setValidateCart({
          isSuccess: true,
          lstProduct: lstProduct,
        });
      } else {
        setValidateCart({
          isSuccess: false,
          lstProduct: lstProduct,
        });
      }
    }
  }, [productSizes]);

  const emailCode = "email";
  const passwordCode = "password";
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
  var isValid = true;
  const regexEmail =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const regexPhone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  const [countries, getCountries] = useState([]);
  const [emails, getEmails] = useState([]);
  const [note, setNote] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isUseNewBillingAddress, setIsUseNewBillingAddress] = useState();
  const [isUseNewShippingAddress, setIsUseNewShippingAddress] = useState();
  const [shipping, setShipping] = useState(0);
  const [shippingMethod, setShippingMethod] = useState();
  const [shippingMethods, getShippingMethods] = useState([]);
  const [customerBillingAddressId, setCustomerBillingAddressId] = useState();
  const [customerShippingAddressId, setCustomerShippingAddressId] = useState();
  const [customerBillingAddresses, setCustomerBillingAddresses] = useState([]);
  const [customerShippingAddresses, setCustomerShippingAddresses] = useState(
    []
  );
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

  const [customerLoggedInData, setCustomerLoggedInData] = useState(
    localStorage.getItem("customer-login")
      ? JSON.parse(localStorage.getItem("customer-login"))[0]
      : {}
  );

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
      valid = value.match(regexEmail) ? true : false;
    }

    if (code == phoneCode) {
      valid = value.match(regexPhone) ? true : false;
    }

    if (!valid) {
      isValid = false;
    }

    return valid;
  };

  const handleChangeNote = (e) => {
    setNote(e.currentTarget.value);
  };

  const handleChangeUseNewBillingAddress = (value) => (e) => {
    if (!value) {
      setCustomerBillingAddressId(e.currentTarget.value);
    }
    setIsUseNewBillingAddress(value);
  };

  const handleChangeUseNewShippingAddress = (value) => (e) => {
    if (!value) {
      setCustomerShippingAddressId(e.currentTarget.value);
    }
    setIsUseNewShippingAddress(value);
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
      password: {
        valid: true,
        value: "",
      },
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

  const [isSubmitEmail, setIsSubmitEmail] = useState(false);
  const handleChange = (type, code) => (e) => {
    var value = e.currentTarget.value.trim();
    assignData(type, code, value);

    if (type == billingCode && code == emailCode) {
      let countEmailMatches = 0;
      emails.map((email, i) => {
        if (value == email) {
          countEmailMatches++;
        }
      });
      if (countEmailMatches > 0) {
        setIsSubmitEmail(true);
      } else {
        setIsSubmitEmail(false);
      }
    }
  }

  const inputSignInEmail = useRef();
  const inputSignInPass = useRef();
  const { data: customerLogin, setData: setCustomerLogin } = useAppContext('customer-login');

  const handleSignInEmail = () => {
    let email = inputSignInEmail.current.value;
    let pass = inputSignInPass.current.value;

    let customer = customers.filter((c) => {
      if (c.email === email && bcrypt.compareSync(pass, c.password)) {
        return c;
      } else {
        return null;
      }
    });
    if (customer && customer.length > 0) {
      setIsLoggedIn(true);
      setCustomerLoggedInData(customer[0]);
      setCustomerLogin(JSON.stringify(customer));
      localStorage.setItem("customer-login", JSON.stringify(customer));
      alert.show("Login success!", {
        type: 'success',
      });
    } else {
      alert.show("Email or Password is not match!", {
        type: 'error',
      });
    }
  }

  const submitOrder = async (e) => {
    e.preventDefault();

    if (isLoggedIn) {
      if (isUseNewBillingAddress !== undefined && !isUseNewBillingAddress) {
        if (!shipToDifferentAddress) {
          isValid = true;
        } else {
          if (
            isUseNewShippingAddress !== undefined &&
            !isUseNewShippingAddress
          ) {
            isValid = true;
          } else {
            shippingData.forEach(async (code) => {
              await assignData(
                shippingCode,
                code,
                data[shippingCode][code].value
              );
            });
          }
        }
      } else {
        if (shipToDifferentAddress) {
          if (
            isUseNewShippingAddress !== undefined &&
            !isUseNewShippingAddress
          ) {
            isValid = true;
          } else {
            shippingData.forEach(async (code) => {
              await assignData(
                shippingCode,
                code,
                data[shippingCode][code].value
              );
            });
          }
        }

        billingData.forEach(async (code) => {
          await assignData(billingCode, code, data[billingCode][code].value);
        });
      }
    } else {
      billingData.forEach(async (code) => {
        await assignData(billingCode, code, data[billingCode][code].value);
      });

      if (shipToDifferentAddress) {
        shippingData.forEach(async (code) => {
          await assignData(shippingCode, code, data[shippingCode][code].value);
        });
      }
    }

    if (!shippingMethod || !paymnetMethod) {
      isValid = false;
    }

    if (isValid) {
      var customerId = null;
      if (isLoggedIn) {
        customerId = customerLoggedInData.entityId;
      }

      var dataToOrder = prepareDataToOrder(
        shippingMethod,
        paymnetMethod,
        total,
        note,
        customerId
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
                  if (isLoggedIn) {
                    if (
                      isUseNewBillingAddress !== undefined &&
                      !isUseNewBillingAddress
                    ) {
                      if (!shipToDifferentAddress) {
                        axios
                          .get(
                            "http://localhost:8080/KingShoesApi/api/customer-address/get-by-id/" +
                            customerBillingAddressId
                          )
                          .then(function (customerDataAddressResponse) {
                            dataToOrderAddressBilling = {
                              firstName:
                                customerDataAddressResponse.data.firstName,
                              lastName:
                                customerDataAddressResponse.data.lastName,
                              address: customerDataAddressResponse.data.address,
                              city: customerDataAddressResponse.data.city,
                              region: customerDataAddressResponse.data.region,
                              country: customerDataAddressResponse.data.country,
                              phone: customerDataAddressResponse.data.phone,
                              type: billingCode,
                              orderId: orderId,
                            };
                            dataToOrderAddressShipping = {
                              firstName:
                                customerDataAddressResponse.data.firstName,
                              lastName:
                                customerDataAddressResponse.data.lastName,
                              address: customerDataAddressResponse.data.address,
                              city: customerDataAddressResponse.data.city,
                              region: customerDataAddressResponse.data.region,
                              country: customerDataAddressResponse.data.country,
                              phone: customerDataAddressResponse.data.phone,
                              type: shippingCode,
                              orderId: orderId,
                            };

                            axios
                              .post(
                                "http://localhost:8080/KingShoesApi/api/order-address/insert/",
                                dataToOrderAddressBilling
                              )
                              .then(function (res) { })
                              .catch((err) => {
                                console.log(err);
                              });
                            axios
                              .post(
                                "http://localhost:8080/KingShoesApi/api/order-address/insert/",
                                dataToOrderAddressShipping
                              )
                              .then(function (res) { })
                              .catch((err) => {
                                console.log(err);
                              });
                          })
                          .catch((err) => {
                            console.log(err);
                          });
                      } else {
                        if (
                          isUseNewShippingAddress !== undefined &&
                          !isUseNewShippingAddress
                        ) {
                          axios
                            .get(
                              "http://localhost:8080/KingShoesApi/api/customer-address/get-by-id/" +
                              customerBillingAddressId
                            )
                            .then(function (customerDataAddressResponse) {
                              dataToOrderAddressBilling = {
                                firstName:
                                  customerDataAddressResponse.data.firstName,
                                lastName:
                                  customerDataAddressResponse.data.lastName,
                                address:
                                  customerDataAddressResponse.data.address,
                                city: customerDataAddressResponse.data.city,
                                region: customerDataAddressResponse.data.region,
                                country:
                                  customerDataAddressResponse.data.country,
                                phone: customerDataAddressResponse.data.phone,
                                type: billingCode,
                                orderId: orderId,
                              };

                              axios
                                .post(
                                  "http://localhost:8080/KingShoesApi/api/order-address/insert/",
                                  dataToOrderAddressBilling
                                )
                                .then(function (res) { })
                                .catch((err) => {
                                  console.log(err);
                                });
                            })
                            .catch((err) => {
                              console.log(err);
                            });
                          axios
                            .get(
                              "http://localhost:8080/KingShoesApi/api/customer-address/get-by-id/" +
                              customerShippingAddressId
                            )
                            .then(function (customerDataAddressResponse) {
                              dataToOrderAddressShipping = {
                                firstName:
                                  customerDataAddressResponse.data.firstName,
                                lastName:
                                  customerDataAddressResponse.data.lastName,
                                address:
                                  customerDataAddressResponse.data.address,
                                city: customerDataAddressResponse.data.city,
                                region: customerDataAddressResponse.data.region,
                                country:
                                  customerDataAddressResponse.data.country,
                                phone: customerDataAddressResponse.data.phone,
                                type: shippingCode,
                                orderId: orderId,
                              };

                              axios
                                .post(
                                  "http://localhost:8080/KingShoesApi/api/order-address/insert/",
                                  dataToOrderAddressShipping
                                )
                                .then(function (res) { })
                                .catch((err) => {
                                  console.log(err);
                                });
                            })
                            .catch((err) => {
                              console.log(err);
                            });
                        } else {
                          var dataToOrderAddressShipping =
                            prepareDataToOrderAddress(orderId, shippingCode),
                            dataToCustomerAddressShipping =
                              prepareDataToCustomerAddress(
                                customerId,
                                shippingCode
                              );

                          axios
                            .get(
                              "http://localhost:8080/KingShoesApi/api/customer-address/get-by-id/" +
                              customerBillingAddressId
                            )
                            .then(function (customerDataAddressResponse) {
                              dataToOrderAddressBilling = {
                                firstName:
                                  customerDataAddressResponse.data.firstName,
                                lastName:
                                  customerDataAddressResponse.data.lastName,
                                address:
                                  customerDataAddressResponse.data.address,
                                city: customerDataAddressResponse.data.city,
                                region: customerDataAddressResponse.data.region,
                                country:
                                  customerDataAddressResponse.data.country,
                                phone: customerDataAddressResponse.data.phone,
                                type: billingCode,
                                orderId: orderId,
                              };

                              axios
                                .post(
                                  "http://localhost:8080/KingShoesApi/api/order-address/insert/",
                                  dataToOrderAddressBilling
                                )
                                .then(function (res) { })
                                .catch((err) => {
                                  console.log(err);
                                });
                            })
                            .catch((err) => {
                              console.log(err);
                            });
                          axios
                            .post(
                              "http://localhost:8080/KingShoesApi/api/customer-address/insert/",
                              dataToCustomerAddressShipping
                            )
                            .then(function (res) { })
                            .catch((err) => {
                              console.log(err);
                            });
                          axios
                            .post(
                              "http://localhost:8080/KingShoesApi/api/order-address/insert/",
                              dataToOrderAddressShipping
                            )
                            .then(function (res) { })
                            .catch((err) => {
                              console.log(err);
                            });
                        }
                      }
                    } else {
                      if (shipToDifferentAddress) {
                        if (
                          isUseNewShippingAddress !== undefined &&
                          !isUseNewShippingAddress
                        ) {
                          var dataToOrderAddressBilling =
                            prepareDataToOrderAddress(orderId, billingCode),
                            dataToCustomerAddressBilling =
                              prepareDataToCustomerAddress(
                                customerId,
                                billingCode
                              );
                          axios
                            .post(
                              "http://localhost:8080/KingShoesApi/api/customer-address/insert/",
                              dataToCustomerAddressBilling
                            )
                            .then(function (res) { })
                            .catch((err) => {
                              console.log(err);
                            });
                          axios
                            .post(
                              "http://localhost:8080/KingShoesApi/api/order-address/insert/",
                              dataToOrderAddressBilling
                            )
                            .then(function (res) { })
                            .catch((err) => {
                              console.log(err);
                            });
                          axios
                            .get(
                              "http://localhost:8080/KingShoesApi/api/customer-address/get-by-id/" +
                              customerShippingAddressId
                            )
                            .then(function (customerDataAddressResponse) {
                              dataToOrderAddressShipping = {
                                firstName:
                                  customerDataAddressResponse.data.firstName,
                                lastName:
                                  customerDataAddressResponse.data.lastName,
                                address:
                                  customerDataAddressResponse.data.address,
                                city: customerDataAddressResponse.data.city,
                                region: customerDataAddressResponse.data.region,
                                country:
                                  customerDataAddressResponse.data.country,
                                phone: customerDataAddressResponse.data.phone,
                                type: shippingCode,
                                orderId: orderId,
                              };

                              axios
                                .post(
                                  "http://localhost:8080/KingShoesApi/api/order-address/insert/",
                                  dataToOrderAddressShipping
                                )
                                .then(function (res) { })
                                .catch((err) => {
                                  console.log(err);
                                });
                            })
                            .catch((err) => {
                              console.log(err);
                            });
                        } else {
                          var dataToOrderAddressBilling =
                            prepareDataToOrderAddress(orderId, billingCode),
                            dataToOrderAddressShipping =
                              prepareDataToOrderAddress(orderId, shippingCode),
                            dataToCustomerAddressBilling =
                              prepareDataToCustomerAddress(
                                customerId,
                                billingCode
                              ),
                            dataToCustomerAddressShipping =
                              prepareDataToCustomerAddress(
                                customerId,
                                shippingCode
                              );
                          axios
                            .post(
                              "http://localhost:8080/KingShoesApi/api/customer-address/insert/",
                              dataToCustomerAddressBilling
                            )
                            .then(function (res) { })
                            .catch((err) => {
                              console.log(err);
                            });
                          axios
                            .post(
                              "http://localhost:8080/KingShoesApi/api/customer-address/insert/",
                              dataToCustomerAddressShipping
                            )
                            .then(function (res) { })
                            .catch((err) => {
                              console.log(err);
                            });

                          axios
                            .post(
                              "http://localhost:8080/KingShoesApi/api/order-address/insert/",
                              dataToOrderAddressBilling
                            )
                            .then(function (res) { })
                            .catch((err) => {
                              console.log(err);
                            });
                          axios
                            .post(
                              "http://localhost:8080/KingShoesApi/api/order-address/insert/",
                              dataToOrderAddressShipping
                            )
                            .then(function (res) { })
                            .catch((err) => {
                              console.log(err);
                            });
                        }
                      } else {
                        var dataToOrderAddressBilling =
                          prepareDataToOrderAddress(orderId, billingCode),
                          dataToCustomerAddressBilling =
                            prepareDataToCustomerAddress(
                              customerId,
                              billingCode
                            );

                        var dataToCustomerAddressShipping = JSON.parse(
                          JSON.stringify(dataToCustomerAddressBilling)
                        ),
                          dataToOrderAddressShipping = JSON.parse(
                            JSON.stringify(dataToOrderAddressBilling)
                          );
                        dataToCustomerAddressShipping.type = shippingCode;
                        dataToOrderAddressShipping.type = shippingCode;

                        axios
                          .post(
                            "http://localhost:8080/KingShoesApi/api/customer-address/insert/",
                            dataToCustomerAddressBilling
                          )
                          .then(function (res) { })
                          .catch((err) => {
                            console.log(err);
                          });
                        axios
                          .post(
                            "http://localhost:8080/KingShoesApi/api/customer-address/insert/",
                            dataToCustomerAddressShipping
                          )
                          .then(function (res) { })
                          .catch((err) => {
                            console.log(err);
                          });
                        axios
                          .post(
                            "http://localhost:8080/KingShoesApi/api/order-address/insert/",
                            dataToOrderAddressBilling
                          )
                          .then(function (res) { })
                          .catch((err) => {
                            console.log(err);
                          });
                        axios
                          .post(
                            "http://localhost:8080/KingShoesApi/api/order-address/insert/",
                            dataToOrderAddressShipping
                          )
                          .then(function (res) { })
                          .catch((err) => {
                            console.log(err);
                          });
                      }
                    }
                  } else {
                    var dataToOrderAddressBilling = prepareDataToOrderAddress(
                      orderId,
                      billingCode
                    ),
                      dataToOrderAddressShipping = prepareDataToOrderAddress(
                        orderId,
                        shippingCode
                      );

                    axios
                      .post(
                        "http://localhost:8080/KingShoesApi/api/order-address/insert/",
                        dataToOrderAddressBilling
                      )
                      .then(function (res) { })
                      .catch((err) => {
                        console.log(err);
                      });
                    axios
                      .post(
                        "http://localhost:8080/KingShoesApi/api/order-address/insert/",
                        dataToOrderAddressShipping
                      )
                      .then(function (res) { })
                      .catch((err) => {
                        console.log(err);
                      });
                  }

                  pushDataOrderItem(orderId);
                  localStorage.removeItem("cart");
                  localStorage.setItem("last-order-id", orderId);
                  localStorage.setItem(
                    "customer-data",
                    JSON.stringify(data[billingCode])
                  );
                  localStorage.setItem("is-loaded-checkout-success", false);
                  localStorage.setItem("is-loaded-register", false);
                  navigate("/checkout-success");
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

  const prepareDataToOrder = (
    shippingId,
    paymentId,
    grandTotal,
    note,
    customerId = null
  ) => {
    return {
      status: 1,
      shippingId: parseInt(shippingId),
      paymentId: parseInt(paymentId),
      grandTotal: parseFloat(grandTotal),
      note: note,
      customerId: customerId,
    };
  };

  const prepareDataToCustomerAddress = (customerId, type) => {
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
      customerId: customerId,
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
        .then(function (res) { })
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

    var customerListEnable = await get(
      "http://localhost:8080/KingShoesApi/api/customers/get-list-enabled"
    ),
      emailList = [];

    customerListEnable.map((item, i) => {
      emailList.push(item.email);
    });
    getEmails(emailList);
    getCountries(countryList);
    assignData(billingCode, countryCode, countryList[0].code);
    assignData(shippingCode, countryCode, countryList[0].code);
    if (customerLoggedInData && Object.keys(customerLoggedInData).length !== 0 && Object.getPrototypeOf(customerLoggedInData) === Object.prototype) {
      setIsLoggedIn(true);
      assignData(billingCode, emailCode, customerLoggedInData.email);
      assignData(billingCode, firstNameCode, customerLoggedInData.firstName);
      assignData(billingCode, lastNameCode, customerLoggedInData.lastName);
      assignData(billingCode, addressCode, customerLoggedInData.address);
      assignData(billingCode, phoneCode, customerLoggedInData.phone);
      assignData(shippingCode, firstNameCode, customerLoggedInData.firstName);
      assignData(shippingCode, lastNameCode, customerLoggedInData.lastName);
      assignData(shippingCode, addressCode, customerLoggedInData.address);
      assignData(shippingCode, phoneCode, customerLoggedInData.phone);
      var customerShippingAddress = await get(
        "http://localhost:8080/KingShoesApi/api/customer-address/get-all-shipping/" +
        customerLoggedInData.entityId
      ),
        customerBillingAddress = await get(
          "http://localhost:8080/KingShoesApi/api/customer-address/get-all-billing/" +
          customerLoggedInData.entityId
        );
      setCustomerBillingAddresses(customerBillingAddress);
      setCustomerShippingAddresses(customerShippingAddress);
    } else {
      setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [customerLoggedInData]);

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
            {customerBillingAddresses.length ? (
              <>
                <div className="bg-light p-30">
                  <div className="row">
                    <div className="col-lg-8">
                      {customerBillingAddresses.map((item, i) => (
                        <>
                          <div key={i} className="form-group">
                            <div className="custom-control custom-radio">
                              <input
                                type="radio"
                                className="custom-control-input"
                                name="customer-billing-address"
                                id={item.entityId}
                                value={item.entityId}
                                onChange={handleChangeUseNewBillingAddress(
                                  false
                                )}
                              />
                              <label
                                className="custom-control-label"
                                htmlFor={item.entityId}
                              >
                                {item.firstName + " " + item.lastName}
                                <br />
                                {item.address}
                                <br />
                                {item.phone}
                                <br />
                                {item.city +
                                  ", " +
                                  item.region +
                                  ", " +
                                  item.country}
                              </label>
                            </div>
                          </div>
                        </>
                      ))}
                      <div className="form-group">
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input"
                            name="customer-billing-address"
                            id="customer-billing-address"
                            onChange={handleChangeUseNewBillingAddress(true)}
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customer-billing-address"
                          >
                            Use new billing address
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="mb-5"
                  style={!isUseNewBillingAddress ? { display: "none" } : {}}
                >
                  <hr />
                  <div className="bg-light p-30">
                    <div className="row">
                      <div className="col-md-6 form-group">
                        <label>First Name</label>
                        <input
                          className={`form-control ${data[billingCode][firstNameCode].valid
                            ? ""
                            : "is-invalid"
                            }`}
                          onChange={handleChange(billingCode, firstNameCode)}
                          type="text"
                          defaultValue={
                            isLoggedIn ? customerLoggedInData.firstName : ""
                          }
                        />
                        <div className="invalid-feedback">{textRequire}</div>
                      </div>
                      <div className="col-md-6 form-group">
                        <label>Last Name</label>
                        <input
                          className={`form-control ${data[billingCode][lastNameCode].valid
                            ? ""
                            : "is-invalid"
                            }`}
                          onChange={handleChange(billingCode, lastNameCode)}
                          type="text"
                          defaultValue={
                            isLoggedIn ? customerLoggedInData.lastName : ""
                          }
                        />
                        <div className="invalid-feedback">{textRequire}</div>
                      </div>
                      <div className="col-md-6 form-group">
                        <label>Address</label>
                        <input
                          className={`form-control ${data[billingCode][addressCode].valid
                            ? ""
                            : "is-invalid"
                            }`}
                          onChange={handleChange(billingCode, addressCode)}
                          type="text"
                          defaultValue={
                            isLoggedIn ? customerLoggedInData.address : ""
                          }
                        />
                        <div className="invalid-feedback">{textRequire}</div>
                      </div>
                      <div className="col-md-6 form-group">
                        <label>City</label>
                        <input
                          className={`form-control ${data[billingCode][cityCode].valid
                            ? ""
                            : "is-invalid"
                            }`}
                          onChange={handleChange(billingCode, cityCode)}
                          type="text"
                        />
                        <div className="invalid-feedback">{textRequire}</div>
                      </div>
                      <div className="col-md-6 form-group">
                        <label>State/Province</label>
                        <input
                          className={`form-control ${data[billingCode][regionCode].valid
                            ? ""
                            : "is-invalid"
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
                          className={`form-control ${data[billingCode][phoneCode].valid
                            ? ""
                            : "is-invalid"
                            }`}
                          onChange={handleChange(billingCode, phoneCode)}
                          type="text"
                          defaultValue={
                            isLoggedIn ? customerLoggedInData.phone : ""
                          }
                        />
                        <div className="invalid-feedback">{phoneValidMsg}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="bg-light p-30 mb-5">
                  <div className="row">
                    <div
                      className="col-md-7 form-group"
                      style={isLoggedIn ? { display: "none" } : {}}
                    >
                      <label>Email</label>
                      <input
                        ref={inputSignInEmail}
                        className={`form-control ${data[billingCode][emailCode].valid ? "" : "is-invalid"
                          }`}
                        onChange={handleChange(billingCode, emailCode)}
                        type="text"
                      />
                      <div className="invalid-feedback">{emailValidMsg}</div>
                      {
                        isSubmitEmail
                          ? <>
                            <input
                              ref={inputSignInPass}
                              className={`form-control mt-2 mb-2 ${data[billingCode][passwordCode].valid ? "" : "is-invalid"}`}
                              onChange={handleChange(billingCode, passwordCode)}
                              type="text"
                            />
                            <div className="invalid-feedback">{textRequire}</div>
                            <button onClick={handleSignInEmail} class="btn btn-block btn-primary">Login</button>
                          </>
                          : <></>
                      }
                      <span>You can create an account after checkout.</span>
                    </div>
                    <div className="col-md-6 form-group">
                      <label>First Name</label>
                      <input
                        className={`form-control ${data[billingCode][firstNameCode].valid
                          ? ""
                          : "is-invalid"
                          }`}
                        onChange={handleChange(billingCode, firstNameCode)}
                        type="text"
                        defaultValue={
                          isLoggedIn ? customerLoggedInData.firstName : ""
                        }
                      />
                      <div className="invalid-feedback">{textRequire}</div>
                    </div>
                    <div className="col-md-6 form-group">
                      <label>Last Name</label>
                      <input
                        className={`form-control ${data[billingCode][lastNameCode].valid
                          ? ""
                          : "is-invalid"
                          }`}
                        onChange={handleChange(billingCode, lastNameCode)}
                        type="text"
                        defaultValue={
                          isLoggedIn ? customerLoggedInData.lastName : ""
                        }
                      />
                      <div className="invalid-feedback">{textRequire}</div>
                    </div>
                    <div className="col-md-6 form-group">
                      <label>Address</label>
                      <input
                        className={`form-control ${data[billingCode][addressCode].valid
                          ? ""
                          : "is-invalid"
                          }`}
                        onChange={handleChange(billingCode, addressCode)}
                        type="text"
                        defaultValue={
                          isLoggedIn ? customerLoggedInData.address : ""
                        }
                      />
                      <div className="invalid-feedback">{textRequire}</div>
                    </div>
                    <div className="col-md-6 form-group">
                      <label>City</label>
                      <input
                        className={`form-control ${data[billingCode][cityCode].valid ? "" : "is-invalid"
                          }`}
                        onChange={handleChange(billingCode, cityCode)}
                        type="text"
                      />
                      <div className="invalid-feedback">{textRequire}</div>
                    </div>
                    <div className="col-md-6 form-group">
                      <label>State/Province</label>
                      <input
                        className={`form-control ${data[billingCode][regionCode].valid
                          ? ""
                          : "is-invalid"
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
                        className={`form-control ${data[billingCode][phoneCode].valid ? "" : "is-invalid"
                          }`}
                        onChange={handleChange(billingCode, phoneCode)}
                        type="text"
                        defaultValue={
                          isLoggedIn ? customerLoggedInData.phone : ""
                        }
                      />
                      <div className="invalid-feedback">{phoneValidMsg}</div>
                    </div>
                  </div>
                </div>
              </>
            )}
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
            <div className="collapse mb-5" id="shipping-address">
              <h5 className="section-title position-relative text-uppercase mb-3">
                <span className="bg-secondary pr-3">Shipping Address</span>
              </h5>
              {customerShippingAddresses.length ? (
                <>
                  <div className="bg-light p-30">
                    <div className="row">
                      <div className="col-lg-8">
                        {customerShippingAddresses.map((item, i) => (
                          <>
                            <div key={i} className="form-group">
                              <div className="custom-control custom-radio">
                                <input
                                  type="radio"
                                  className="custom-control-input"
                                  name="customer-shipping-address"
                                  id={item.entityId}
                                  value={item.entityId}
                                  onChange={handleChangeUseNewShippingAddress(
                                    false
                                  )}
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor={item.entityId}
                                >
                                  {item.firstName + " " + item.lastName}
                                  <br />
                                  {item.address}
                                  <br />
                                  {item.phone}
                                  <br />
                                  {item.city +
                                    ", " +
                                    item.region +
                                    ", " +
                                    item.country}
                                </label>
                              </div>
                            </div>
                          </>
                        ))}
                        <div className="form-group">
                          <div className="custom-control custom-radio">
                            <input
                              type="radio"
                              className="custom-control-input"
                              name="customer-shipping-address"
                              id="customer-shipping-address"
                              onChange={handleChangeUseNewShippingAddress(true)}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customer-shipping-address"
                            >
                              Use new shipping address
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="mb-5"
                    style={!isUseNewShippingAddress ? { display: "none" } : {}}
                  >
                    <hr />
                    <div className="bg-light p-30">
                      <div className="row">
                        <div className="col-md-6 form-group">
                          <label>First Name</label>
                          <input
                            className={`form-control ${data[shippingCode][firstNameCode].valid
                              ? ""
                              : "is-invalid"
                              }`}
                            onChange={handleChange(shippingCode, firstNameCode)}
                            type="text"
                            defaultValue={
                              isLoggedIn ? customerLoggedInData.firstName : ""
                            }
                          />
                          <div className="invalid-feedback">{textRequire}</div>
                        </div>
                        <div className="col-md-6 form-group">
                          <label>Last Name</label>
                          <input
                            className={`form-control ${data[shippingCode][lastNameCode].valid
                              ? ""
                              : "is-invalid"
                              }`}
                            onChange={handleChange(shippingCode, lastNameCode)}
                            type="text"
                            defaultValue={
                              isLoggedIn ? customerLoggedInData.lastName : ""
                            }
                          />
                          <div className="invalid-feedback">{textRequire}</div>
                        </div>
                        <div className="col-md-6 form-group">
                          <label>Address</label>
                          <input
                            className={`form-control ${data[shippingCode][addressCode].valid
                              ? ""
                              : "is-invalid"
                              }`}
                            onChange={handleChange(shippingCode, addressCode)}
                            type="text"
                            defaultValue={
                              isLoggedIn ? customerLoggedInData.address : ""
                            }
                          />
                          <div className="invalid-feedback">{textRequire}</div>
                        </div>
                        <div className="col-md-6 form-group">
                          <label>City</label>
                          <input
                            className={`form-control ${data[shippingCode][cityCode].valid
                              ? ""
                              : "is-invalid"
                              }`}
                            onChange={handleChange(shippingCode, cityCode)}
                            type="text"
                          />
                          <div className="invalid-feedback">{textRequire}</div>
                        </div>
                        <div className="col-md-6 form-group">
                          <label>State/Province</label>
                          <input
                            className={`form-control ${data[shippingCode][regionCode].valid
                              ? ""
                              : "is-invalid"
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
                            className={`form-control ${data[shippingCode][phoneCode].valid
                              ? ""
                              : "is-invalid"
                              }`}
                            onChange={handleChange(shippingCode, phoneCode)}
                            type="text"
                            defaultValue={
                              isLoggedIn ? customerLoggedInData.phone : ""
                            }
                          />
                          <div className="invalid-feedback">
                            {phoneValidMsg}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="bg-light p-30">
                    <div className="row">
                      <div className="col-md-6 form-group">
                        <label>First Name</label>
                        <input
                          className={`form-control ${data[shippingCode][firstNameCode].valid
                            ? ""
                            : "is-invalid"
                            }`}
                          onChange={handleChange(shippingCode, firstNameCode)}
                          type="text"
                          defaultValue={
                            isLoggedIn ? customerLoggedInData.firstName : ""
                          }
                        />
                        <div className="invalid-feedback">{textRequire}</div>
                      </div>
                      <div className="col-md-6 form-group">
                        <label>Last Name</label>
                        <input
                          className={`form-control ${data[shippingCode][lastNameCode].valid
                            ? ""
                            : "is-invalid"
                            }`}
                          onChange={handleChange(shippingCode, lastNameCode)}
                          type="text"
                          defaultValue={
                            isLoggedIn ? customerLoggedInData.lastName : ""
                          }
                        />
                        <div className="invalid-feedback">{textRequire}</div>
                      </div>
                      <div className="col-md-6 form-group">
                        <label>Address</label>
                        <input
                          className={`form-control ${data[shippingCode][addressCode].valid
                            ? ""
                            : "is-invalid"
                            }`}
                          onChange={handleChange(shippingCode, addressCode)}
                          type="text"
                          defaultValue={
                            isLoggedIn ? customerLoggedInData.address : ""
                          }
                        />
                        <div className="invalid-feedback">{textRequire}</div>
                      </div>
                      <div className="col-md-6 form-group">
                        <label>City</label>
                        <input
                          className={`form-control ${data[shippingCode][cityCode].valid
                            ? ""
                            : "is-invalid"
                            }`}
                          onChange={handleChange(shippingCode, cityCode)}
                          type="text"
                        />
                        <div className="invalid-feedback">{textRequire}</div>
                      </div>
                      <div className="col-md-6 form-group">
                        <label>State/Province</label>
                        <input
                          className={`form-control ${data[shippingCode][regionCode].valid
                            ? ""
                            : "is-invalid"
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
                          className={`form-control ${data[shippingCode][phoneCode].valid
                            ? ""
                            : "is-invalid"
                            }`}
                          onChange={handleChange(shippingCode, phoneCode)}
                          type="text"
                          defaultValue={
                            isLoggedIn ? customerLoggedInData.phone : ""
                          }
                        />
                        <div className="invalid-feedback">{phoneValidMsg}</div>
                      </div>
                    </div>
                  </div>
                </>
              )}
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
            <div className="mb-5">
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
