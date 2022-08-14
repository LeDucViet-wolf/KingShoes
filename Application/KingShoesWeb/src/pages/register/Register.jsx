import React, { useEffect, useState } from "react";
import { Breadcrumb } from "@/components";
import bcrypt from "bcryptjs";

const Register = () => {
  // Input
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [birthday, setBirthday] = useState();
  const [gender, setGender] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();

  // Validate
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isFirstNameValid, setIsFirstNameValid] = useState(true);
  const [isLastNameValid, setIsLastNameValid] = useState(true);
  const [isBirthdayValid, setIsBirthdayValid] = useState(true);
  const [isGenderValid, setIsGenderValid] = useState(true);
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const [isAddressValid, setIsAddressValid] = useState(true);

  const handleEmailChange = (e) => {
    if (e.target.value) {
      setEmail(e.target.value);
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
  };

  const handlePasswordChange = (e) => {
    if (e.target.value) {
      setPassword(e.target.value);
      setIsPasswordValid(true);
    } else {
      setIsPasswordValid(false);
    }
  };

  const handleFirstNameChange = (e) => {
    if (e.target.value) {
      setFirstName(e.target.value);
      setIsFirstNameValid(true);
    } else {
      setIsFirstNameValid(false);
    }
  };

  const handleLastNameChange = (e) => {
    if (e.target.value) {
      setLastName(e.target.value);
      setIsLastNameValid(true);
    } else {
      setIsLastNameValid(false);
    }
  };

  const handleBirthdayChange = (e) => {
    if (e.target.value) {
      setBirthday(e.target.value);
      setIsBirthdayValid(true);
    } else {
      setIsBirthdayValid(false);
    }
  };

  const handleGenderChange = (e) => {
    if (e.target.value) {
      setGender(e.target.value);
      setIsGenderValid(true);
    } else {
      setIsGenderValid(false);
    }
  };

  const handlePhoneChange = (e) => {
    if (e.target.value) {
      setPhone(e.target.value);
      setIsPhoneValid(true);
    } else {
      setIsPhoneValid(false);
    }
  };

  const handleAddressChange = (e) => {
    if (e.target.value) {
      setAddress(e.target.value);
      setIsAddressValid(true);
    } else {
      setIsAddressValid(false);
    }
  };

  const handleSubmit = () => {
    if (!email) {
      setIsEmailValid(false);
    }
    if (!password) {
      setIsPasswordValid(false);
    }
    if (!firstName) {
      setIsFirstNameValid(false);
    }
    if (!lastName) {
      setIsLastNameValid(false);
    }
    if (!address) {
      setIsAddressValid(false);
    }
    if (!phone) {
      setIsPhoneValid(false);
    }
    if (!birthday) {
      setIsBirthdayValid(false);
    }

    // hash password
    const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync());
    console.log(hashedPassword);
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
                  <div className="invalid-feedback">
                    Please input your first name
                  </div>
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
                  <div className="invalid-feedback">
                    Please input your last name
                  </div>
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
                  <div className="invalid-feedback">
                    Please input your birthday
                  </div>
                </div>
                <div className="col-md-6 form-group">
                  <label>Gender</label>
                  <div>
                    <input
                      name="gender"
                      defaultValue={1}
                      defaultChecked
                      type="radio"
                    />{" "}
                    Male
                    <input
                      className="ml-2"
                      name="gender"
                      defaultValue={0}
                      type="radio"
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
                    type="text"
                  />
                  <div className="invalid-feedback">
                    Please input your email
                  </div>
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
                  <div className="invalid-feedback">
                    Please input your phone
                  </div>
                </div>
                <div className="col-md-6 form-group">
                  <label>Address</label>
                  <textarea
                    className={`form-control ${
                      isAddressValid ? "" : "is-invalid"
                    }`}
                    onChange={handleAddressChange}
                  />
                  <div className="invalid-feedback">
                    Please input your address
                  </div>
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
                  <div className="invalid-feedback">
                    Please input your password
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
