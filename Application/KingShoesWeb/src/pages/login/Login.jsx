import React from 'react'
import { Breadcrumb } from '../../components'

const Login = () => {
    return (
        <>
            <Breadcrumb pageNameChild='Login' />
            <div className="container-fluid">
                <div className="row px-xl-5">
                    <div className="col-lg-12">
                        <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Sign in</span></h5>
                        <div className="bg-light p-30 mb-5">
                            <div className="row">
                                <div className="col-md-6 form-group">
                                    <label>First Name</label>
                                    <input className="form-control" type="text" />
                                    <div className="invalid-feedback">
                                        Please provide a valid zip.
                                    </div>
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>Last Name</label>
                                    <input className="form-control" type="text" />
                                </div>
                               
                               
                                <div className="col-md-6 form-group">
                                    <label>Email</label>
                                    <input className="form-control" type="text" />
                                </div>
                              
                                <div className="col-md-6 form-group">
                                    <label>Password</label>
                                    <input className="form-control" type="text" />
                                </div>
                             
                            </div>
                            <button type='submit' className="btn btn-block btn-primary font-weight-bold py-3">Log in</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login