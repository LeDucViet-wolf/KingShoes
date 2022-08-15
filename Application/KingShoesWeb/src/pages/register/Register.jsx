import React, { useEffect, useState } from "react";
import { Breadcrumb } from "@/components";
import bcrypt from "bcryptjs";
import axios from "axios";

const Register = () => {
  const textRequire = "This is a required field.";
  const [confirmPasswordMessage, setConfirmPasswordMessage] =
    useState(textRequire);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [birthday, setBirthday] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();
  const [gender, setGender] = useState("1");

  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(true);
  const [isFirstNameValid, setIsFirstNameValid] = useState(true);
  const [isLastNameValid, setIsLastNameValid] = useState(true);
  const [isBirthdayValid, setIsBirthdayValid] = useState(true);
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const [isAddressValid, setIsAddressValid] = useState(true);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleBirthdayChange = (e) => {
    setBirthday(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleSubmit = () => {
    var valid = true;
    if (!email) {
      setIsEmailValid(false);
      valid = false;
    } else {
      setIsEmailValid(true);
    }

    if (!password) {
      setIsPasswordValid(false);
      valid = false;
    } else {
      setIsPasswordValid(true);
    }

    if (!confirmPassword) {
      setConfirmPasswordMessage(textRequire);
      setIsConfirmPasswordValid(false);
      valid = false;
    } else {
      if (confirmPassword == password) {
        setIsConfirmPasswordValid(true);
      } else {
        setConfirmPasswordMessage("Please enter the same value again.");
        setIsConfirmPasswordValid(false);
        valid = false;
      }
    }

    if (!firstName) {
      setIsFirstNameValid(false);
      valid = false;
    } else {
      setIsFirstNameValid(true);
    }

    if (!lastName) {
      setIsLastNameValid(false);
      valid = false;
    } else {
      setIsLastNameValid(true);
    }

    if (!address) {
      setIsAddressValid(false);
      valid = false;
    } else {
      setIsAddressValid(true);
    }

    if (!phone) {
      setIsPhoneValid(false);
      valid = false;
    } else {
      setIsPhoneValid(true);
    }

    if (!birthday) {
      setIsBirthdayValid(false);
      valid = false;
    } else {
      setIsBirthdayValid(true);
    }

    if (valid) {
      const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync());

      const customer = {
        firstName: firstName,
        lastName: lastName,
        birthday: birthday,
        gender: gender,
        email: email,
        phone: phone,
        address: address,
        password: hashedPassword,
        status: 1,
      };

      axios
        .post(
          "http://localhost:8080/KingShoesApi/api/customers/insert",
          customer
        )
        .then(function (response) {
          if ((response.status = 200 && response.data)) {
            axios
              .get(
                "http://localhost:8080/KingShoesApi/api/customers/get-by-id/" +
                  response.data
              )
              .then(function (res) {
                if (res.data) {
                  localStorage.setItem(
                    "customer-login",
                    JSON.stringify([res.data])
                  );
                }
              })
              .catch((e) => {});
          }
        })
        .catch((err) => {});
    }
  };

  return (
    <>
      <Breadcrumb pageNameChild="Sign up" />
      <div className="container-fluid">
        <div className="row px-xl-5">
          <div className="col-lg-12">
            <h5 className="section-title position-relative text-uppercase mb-3">
              <span className="bg-secondary pr-3">Sign up</span>
            </h5>
            <div className="bg-light p-30 mb-5">
              <div className="row">
                <div className="col-md-6 form-group">
                  <label>First Name</label>
                  <input
                    className={`form-control ${
                      isFirstNameValid ? "" : "is-invalid"
                    }`}
                    onChange={handleFirstNameChange}
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
                  <label>Birthday</label>
                  <input
                    className={`form-control ${
                      isBirthdayValid ? "" : "is-invalid"
                    }`}
                    onChange={handleBirthdayChange}
                    type="date"
                  />
                  <div className="invalid-feedback">{textRequire}</div>
                </div>
                <div className="col-md-6 form-group">
                  <label>Gender</label>
                  <div>
                    <input
                      name="gender"
                      defaultValue={1}
                      defaultChecked
                      type="radio"
                      onChange={handleGenderChange}
                    />{" "}
                    Male
                    <input
                      className="ml-2"
                      name="gender"
                      defaultValue={0}
                      type="radio"
                      onChange={handleGenderChange}
                    />{" "}
                    Female
                  </div>
                </div>
                <div className="col-md-6 form-group">
                  <label>Email</label>
                  <input
                    className={`form-control ${
                      isEmailValid ? "" : "is-invalid"
                    }`}
                    onChange={handleEmailChange}
                    type="email"
                  />
                  <div className="invalid-feedback">{textRequire}</div>
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
                  <div className="invalid-feedback">{textRequire}</div>
                </div>
                <div className="col-md-12 form-group">
                  <label>Address</label>
                  <textarea
                    className={`form-control ${
                      isAddressValid ? "" : "is-invalid"
                    }`}
                    onChange={handleAddressChange}
                  />
                  <div className="invalid-feedback">{textRequire}</div>
                </div>
                <div className="col-md-6 form-group">
                  <label>Password</label>
                  <input
                    className={`form-control ${
                      isPasswordValid ? "" : "is-invalid"
                    }`}
                    onChange={handlePasswordChange}
                    type="password"
                  />
                  <div className="invalid-feedback">{textRequire}</div>
                </div>
                <div className="col-md-6 form-group">
                  <label>Confirm Password</label>
                  <input
                    className={`form-control ${
                      isConfirmPasswordValid ? "" : "is-invalid"
                    }`}
                    onChange={handleConfirmPasswordChange}
                    type="password"
                  />
                  <div className="invalid-feedback">
                    {confirmPasswordMessage}
                  </div>
                </div>
              </div>
              <button
                onClick={handleSubmit}
                className="btn btn-block btn-primary font-weight-bold py-3"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
