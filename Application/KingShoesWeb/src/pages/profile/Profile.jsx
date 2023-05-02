import React, { useEffect } from "react";
import { Breadcrumb } from "@/components";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const customer = localStorage.getItem("customer-login")
    ? JSON.parse(localStorage.getItem("customer-login"))[0]
    : null;

  useEffect(() => {
    if (!localStorage.getItem("customer-login")) {
      navigate("/");
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Breadcrumb pageNameChild="Profile" />
      <div className="container-fluid">
        <div className="row px-xl-5">
          <div className="col-lg-12">
            <h5 className="section-title position-relative text-uppercase mb-3">
              <span className="bg-secondary pr-3"></span>
            </h5>
            <div className="bg-light p-30 mb-5">
              <div className="row">
                <div className="col-3">
                  <div
                    className="nav flex-column nav-pills"
                    id="v-pills-tab"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    <a
                      className="nav-link active"
                      id="v-pills-account-tab"
                      data-toggle="pill"
                      href="#v-pills-account"
                      role="tab"
                      aria-controls="v-pills-account"
                      aria-selected="true"
                    >
                      My Account
                    </a>
                    <a
                      className="nav-link"
                      id="v-pills-profile-tab"
                      data-toggle="pill"
                      href="#v-pills-profile"
                      role="tab"
                      aria-controls="v-pills-profile"
                      aria-selected="false"
                    >
                      My Orders
                    </a>
                    <a
                      className="nav-link"
                      id="v-pills-messages-tab"
                      data-toggle="pill"
                      href="#v-pills-messages"
                      role="tab"
                      aria-controls="v-pills-messages"
                      aria-selected="false"
                    >
                      My Wish List
                    </a>
                  </div>
                </div>
                <div className="col-9">
                  <div className="tab-content">
                    <div
                      className="tab-pane fade show active"
                      id="v-pills-account"
                      role="tabpanel"
                      aria-labelledby="v-pills-account-tab"
                    >
                      <div className="page-title-wrapper">
                        <h1 className="page-title">My Account</h1>
                        <div className="block-info">
                          <p>Account Information</p>
                          <div className="block-content">
                            <strong className="box-title">
                              <span>Contact Information</span>
                            </strong>
                            <div className="box-content">
                              <p>
                                <span>
                                  {!customer
                                    ? ""
                                    : `${
                                        customer.firstName +
                                        " " +
                                        customer.lastName
                                      }`}
                                </span>
                                <br />
                                <span>
                                  {!customer ? "" : `${customer.email}`}
                                </span>
                              </p>
                            </div>
                            <div className="box-actions">
                              <a href="" className="action edit">
                                <span>Edit</span>
                              </a>
                              <a href="" className="action change-password">
                                <span>Change Password</span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="block-addresses"></div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="v-pills-profile"
                      role="tabpanel"
                      aria-labelledby="v-pills-profile-tab"
                    >
                      bbb
                    </div>
                    <div
                      className="tab-pane fade"
                      id="v-pills-messages"
                      role="tabpanel"
                      aria-labelledby="v-pills-messages-tab"
                    >
                      ccc
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
