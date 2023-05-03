import React from "react";
import TabAccount from "./TabAccount";
// import { handleEdit, handleChangePass, convertToDate } from "./services";
// import styles from "./style.module.css";

const TabPanels = () => {
    const customer = localStorage.getItem("customer-login")
        ? JSON.parse(localStorage.getItem("customer-login"))[0]
        : null;

    return (
        <div className="tab-content" id="profile-tab-content">
            <div
                className="tab-pane fade show active"
                id="v-pills-account"
                role="tabpanel"
                aria-labelledby="v-pills-account-tab"
            >
                <TabAccount customer={customer} />
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
            <div
                className="tab-pane fade"
                id="v-pills-edit-profile"
                role="tabpanel"
                aria-labelledby="v-pills-edit-profile-tab"
            >
                <form>
                    <div className="row">
                        <div className="col-md-6 form-group">
                            <label>First Name</label>
                            <input
                                className={`form-control`}
                                //   onChange={handleEmailChange}
                                type="text"
                            />
                            <div className="invalid-feedback">
                                Please input your first name
                            </div>

                            <label>Last Name</label>
                            <input
                                className={`form-control`}
                                //   onChange={handleEmailChange}
                                type="text"
                            />
                            <div className="invalid-feedback">
                                Please input your last name
                            </div>

                            <label>Birthday</label>
                            <input
                                className={`form-control`}
                                //   onChange={handleEmailChange}
                                type="date"
                            />
                            <div className="invalid-feedback">
                                Please input your birthday
                            </div>

                            <label>Gender</label>
                            <input
                                className={`form-control`}
                                //   onChange={handleEmailChange}
                                type="radio"
                            />
                            <div className="invalid-feedback">
                                Please input your gender
                            </div>

                            <label>Email</label>
                            <input
                                className={`form-control`}
                                //   onChange={handleEmailChange}
                                type="text"
                            />
                            <div className="invalid-feedback">
                                Please input your email
                            </div>

                            <label>Phone</label>
                            <input
                                className={`form-control`}
                                //   onChange={handleEmailChange}
                                type="text"
                            />
                            <div className="invalid-feedback">
                                Please input your phone
                            </div>

                            <label>Address</label>
                            <input
                                className={`form-control`}
                                //   onChange={handleEmailChange}
                                type="text"
                            />
                            <div className="invalid-feedback">
                                Please input your address
                            </div>

                            <label>Change Password</label>
                            <input
                                type="checkbox"
                                className={`form-control`}
                                //   onChange={handleEmailChange}
                            />
                            <div className="invalid-feedback">
                                Please input your email
                            </div>
                        </div>


                        <div className="col-md-6 form-group">
                            <label>Current Password</label>
                            <input
                                className={`form-control`}
                                //   onChange={handlePasswordChange}
                                type="password"
                            />
                            <div className="invalid-feedback">
                                Please input your password
                            </div>
                            <label>New Password</label>
                            <input
                                className={`form-control`}
                                //   onChange={handlePasswordChange}
                                type="password"
                            />
                            <div className="invalid-feedback">
                                Please input your password
                            </div>
                            <label>Confirm New Password</label>
                            <input
                                className={`form-control`}
                                //   onChange={handlePasswordChange}
                                type="password"
                            />
                            <div className="invalid-feedback">
                                Please input your password
                            </div>
                        </div>
                    </div>
                    <button
                        type="button"
                        //   onClick={handleSubmit}
                        className="btn btn-block btn-primary font-weight-bold py-3"
                    >
                        Log in
                    </button>
                </form>
            </div>
        </div>
    )
}

export default TabPanels