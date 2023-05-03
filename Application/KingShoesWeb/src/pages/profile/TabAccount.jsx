import React from "react";
import { handleEdit, handleChangePass, convertToDate } from "./services";
import styles from "./style.module.css";

const TabAccount = ({...props}) => {
    const { customer } = props;

    return (
        <>
            {
                customer
                    ? <div className="page-title-wrapper">
                        <h1 className="page-title">My Account</h1>
                        <div className="block-info">
                            <p>Account Information</p>
                            <div className="block-content">
                                <div className="box-content">
                                    <p>

                                        <span><b>Name</b>: {customer.firstName} {customer.lastName}</span>
                                        <br />
                                        <span><b>Email</b>: {customer.email}</span>
                                        <br />
                                        <span><b>Phone</b>: {customer.phone}</span>
                                        <br />
                                        <span><b>Gender</b>: {customer.gender != 0 ? "Male" : "Female"}</span>
                                        <br />
                                        <span><b>Birthday</b>: {convertToDate(customer.birthday)}</span>
                                    </p>
                                </div>
                                <div className="box-actions">
                                    <a href="" onClick={handleEdit} className={`action edit ${styles['btn-edit']}`}>Edit</a>
                                    <a href="" onClick={''} className={`action change-password`}>Change Password</a>
                                </div>
                            </div>
                        </div>
                        <div className="block-addresses"></div>
                    </div>
                    : <></>
            }
        </>
    );
}

export default TabAccount;