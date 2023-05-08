import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAppContext } from "@/hooks/useAppContext";
import { useEffect } from "react";
import { handleShowChangePass, convertToDateToSubmit } from "./services";
import axios from "axios";
import { useAlert } from 'react-alert';
import bcrypt from "bcryptjs";
import styles from "./style.module.css";

const TabEdit = ({ ...props }) => {
    const { customer } = props;
    const alert = useAlert();
    const { data: getPass, setData: setPass } = useAppContext('change-pass-customer');
    const [showChangePass, setShowChangePass] = useState(false);
    const [classNameMainForm, setClassNameMainForm] = useState('col-md-12');
    const [isChecked, setIsChecked] = useState(false);

    const yupObjectOrigin = {
        firstName: Yup.string().required("Required!"),
        lastName: Yup.string().required("Required!"),
        birthday: Yup.date().required("Required!"),
        gender: Yup.string().required("Required!"),
        email: Yup.string().email("Invalid email format").required("Required!"),
        phone: Yup.string().required("Required!"),
        address: Yup.string().required("Required!"),
    }

    Yup.addMethod(Yup.string, "afterHash", function (string, errorMessage) {
        return this.test(`test-after-hash`, errorMessage, function (value) {
            const { path, createError } = this;

            return (
                bcrypt.compareSync(value, string) ||
                createError({ path, message: errorMessage })
            );
        });
    });

    const yupObjectWithPass = {
        oldPass: Yup.string().afterHash(customer.password, "Old Password's not match").required("Required!"),
        newPass: Yup.string().required("Required!"),
        confirmPass: Yup.string().oneOf([Yup.ref("newPass")], "Confirm Password's not match").required("Required!")
    }

    const [yupObject, setYupObject] = useState({});

    const formik = useFormik({
        initialValues: {
            entityId: customer.entityId,
            firstName: customer.firstName,
            lastName: customer.lastName,
            birthday: convertToDateToSubmit(customer.birthday),
            gender: customer.gender,
            email: customer.email,
            phone: customer.phone,
            password: customer.password,
            address: customer.address,
            status: customer.status,
            oldPass: "",
            newPass: "",
            confirmPass: ""
        },
        validationSchema: Yup.object(yupObject),
        onSubmit: values => {
            if (getPass) {
                let newCus = {
                    ...values,
                    password: bcrypt.hashSync(values.newPass, bcrypt.genSaltSync())
                }
                handleSubmit(newCus);
            } else {
                handleSubmit(values);
            }
        }
    });

    const handleSubmit = async (values) => {
        let res = await axios.put(`http://localhost:8080/KingShoesApi/api/customers/update`, values);
        if (res) {
            alert.show("Update Profile Success!", {
                type: 'success',
            });
        }
    }

    useEffect(() => {
        if (getPass) {
            setYupObject({
                ...yupObjectOrigin,
                ...yupObjectWithPass
            })
            setShowChangePass(true);
            setClassNameMainForm('col-md-6');
            setIsChecked(true);
        } else {
            setYupObject(yupObjectOrigin)
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
                    <input
                        className={`form-control`}
                        name="firstName"
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        type="text" />
                    {formik.errors.firstName && (<div className={styles['error']}>{formik.errors.firstName}</div>)}

                    <label className="mt-2">Last Name</label>
                    <input
                        className={`form-control`}
                        name="lastName"
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        type="text" />
                    {formik.errors.lastName && (<div className={styles['error']}>{formik.errors.lastName}</div>)}

                    <label className="mt-2">Birthday</label>
                    <input
                        className={`form-control`}
                        name="birthday"
                        value={formik.values.birthday}
                        onChange={formik.handleChange}
                        type="date" />
                    {formik.errors.birthday && (<div className={styles['error']}>{formik.errors.birthday}</div>)}

                    <label className="mt-2">Gender</label>
                    <div>
                        <input
                            type="radio" name="gender" value="1"
                            defaultChecked={formik.values.gender == 1}
                            onClick={formik.handleChange} /> Male
                        <input
                            type="radio" name="gender" className="ml-2" value="0"
                            defaultChecked={formik.values.gender == 0}
                            onClick={formik.handleChange} /> Female
                    </div>

                    <label className="mt-2">Email</label>
                    <input
                        className={`form-control`}
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        type="text" />
                    {formik.errors.email && (<div className={styles['error']}>{formik.errors.email}</div>)}

                    <label className="mt-2">Phone</label>
                    <input
                        className={`form-control`}
                        name="phone"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        type="text" />
                    {formik.errors.phone && (<div className={styles['error']}>{formik.errors.phone}</div>)}

                    <label className="mt-2">Address</label>
                    <input
                        className={`form-control`}
                        name="address"
                        value={formik.values.address}
                        onChange={formik.handleChange}
                        type="text" />
                    {formik.errors.address && (<div className={styles['error']}>{formik.errors.address}</div>)}

                    <input type="checkbox" checked={isChecked} className="mr-2" onChange={(e) => { handleShowChangePass(e, setPass) }} />
                    <label className="mt-2">Change Password</label>
                </div>
                {
                    showChangePass
                        ? <div className="col-md-6 form-group">
                            <label>Current Password</label>
                            <input
                                className={`form-control`} type="password"
                                name="oldPass"
                                value={formik.values.oldPass}
                                onChange={formik.handleChange} />
                            {formik.errors.oldPass && (<div className={styles['error']}>{formik.errors.oldPass}</div>)}

                            <label className="mt-2">New Password</label>
                            <input className={`form-control`} type="password"
                                name="newPass"
                                value={formik.values.newPass}
                                onChange={formik.handleChange} />
                            {formik.errors.newPass && (<div className={styles['error']}>{formik.errors.newPass}</div>)}

                            <label className="mt-2">Confirm New Password</label>
                            <input className={`form-control`} type="password"
                                name="confirmPass"
                                value={formik.values.confirmPass}
                                onChange={formik.handleChange} />
                            {formik.errors.confirmPass && (<div className={styles['error']}>{formik.errors.confirmPass}</div>)}
                        </div>
                        : <></>
                }
            </div>
            <button type="submit" className="btn btn-block btn-primary font-weight-bold py-3">Update</button>
        </form>
    );
}

export default TabEdit;