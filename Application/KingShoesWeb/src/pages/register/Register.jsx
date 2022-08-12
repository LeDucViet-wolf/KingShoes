import React from 'react'
import { Breadcrumb } from '@/components'

const Register = () => {
    return (
        <>
            <Breadcrumb pageNameChild='Sign up' />
            <div className="container-fluid">
                <div className="row px-xl-5">
                    <div className="col-lg-12">
                        <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Sign up</span></h5>
                        <div className="bg-light p-30 mb-5">
                            <div className="row">
                                <div className="col-md-6 form-group">
                                    <label>First Name</label>
                                    <input className="form-control" type="text" />
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>Last Name</label>
                                    <input className="form-control" type="text" />
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>Birthday</label>
                                    <input className="form-control" type="date" />
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>Gender</label>
                                    <div>
                                        <input name='gender' defaultValue={1} defaultChecked type="radio" /> Male
                                        <input className='ml-2' name='gender' defaultValue={0} type="radio" /> Female
                                    </div>
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>Email</label>
                                    <input className="form-control" type="text" />
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>Phone</label>
                                    <input className="form-control" type="text" />
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>Password</label>
                                    <input className="form-control" type="text" />
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>Address</label>
                                    <input className="form-control" type="text" />
                                </div>
                            </div>
                            <button className="btn btn-block btn-primary font-weight-bold py-3">Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register