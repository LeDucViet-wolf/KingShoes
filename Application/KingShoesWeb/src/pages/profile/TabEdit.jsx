import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAppContext } from "@/hooks/useAppContext";
import { useEffect } from "react";
import { handleShowChangePass } from "./services";

const TabEdit = () => {
    const { data: getPass, setData: setPass } = useAppContext('change-pass-customer');
    const [showChangePass, setShowChangePass] = useState(false);
    const [classNameMainForm, setClassNameMainForm] = useState('col-md-12');
    const [isChecked, setIsChecked] = useState(false);

    const formik = useFormik({
        initialValues: {
            full_name: "",
            email: "",
            password: "",
            confirm_password: ""
        },
        validationSchema: Yup.object({
            full_name: Yup.string()
                .min(2, "Mininum 2 characters")
                .max(15, "Maximum 15 characters")
                .required("Required!"),
            email: Yup.string()
                .email("Invalid email format")
                .required("Required!"),
            password: Yup.string()
                .min(8, "Minimum 8 characters")
                .required("Required!"),
            confirm_password: Yup.string()
                .oneOf([Yup.ref("password")], "Password's not match")
                .required("Required!")
        }),
        onSubmit: value => {
            console.log(value);
        }
    });

    useEffect(() => {
        if (getPass) {
            setShowChangePass(true);
            setClassNameMainForm('col-md-6');
            setIsChecked(true);
        }else{
            setShowChangePass(false);
            setClassNameMainForm('col-md-12');
            setIsChecked(false);
        }
    }, [getPass]);

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="row">
                <div className={`${classNameMainForm} form-group`}>
                    <label>First Name</label>
                    <input className={`form-control`} type="text" />
                    <div className="invalid-feedback">Please input your first name</div>

                    <label className="mt-2">Last Name</label>
                    <input className={`form-control`} type="text" />
                    <div className="invalid-feedback">Please input your last name</div>

                    <label className="mt-2">Birthday</label>
                    <input className={`form-control`} type="date" />
                    <div className="invalid-feedback">Please input your birthday</div>

                    <label className="mt-2">Gender</label>
                    <div>
                        <input type="radio" name="gender" /> Male
                        <input type="radio" name="gender" className="ml-2" /> Female
                    </div>
                    <div className="invalid-feedback">Please input your gender</div>

                    <label className="mt-2">Email</label>
                    <input className={`form-control`} type="text" />
                    <div className="invalid-feedback">Please input your email</div>

                    <label className="mt-2">Phone</label>
                    <input className={`form-control`} type="text" />
                    <div className="invalid-feedback">Please input your phone</div>

                    <label className="mt-2">Address</label>
                    <input className={`form-control`} type="text" />
                    <div className="invalid-feedback">Please input your address</div>

                    <input type="checkbox" checked={isChecked} className="mr-2" onChange={(e) => {handleShowChangePass(e, setPass)}}/>
                    <label className="mt-2">Change Password</label>
                </div>
                {
                    showChangePass
                        ? <div className="col-md-6 form-group">
                            <label>Current Password</label>
                            <input className={`form-control`} type="password" />
                            <div className="invalid-feedback">Please input your password</div>

                            <label className="mt-2">New Password</label>
                            <input className={`form-control`} type="password" />
                            <div className="invalid-feedback">Please input your password</div>

                            <label className="mt-2">Confirm New Password</label>
                            <input className={`form-control`} type="password" />
                            <div className="invalid-feedback">Please input your password</div>
                        </div>
                        : <></>
                }
            </div>
            <button type="button" className="btn btn-block btn-primary font-weight-bold py-3">Log in</button>
        </form>
    );
}

export default TabEdit;