import React, { useEffect } from 'react'
import { Breadcrumb } from '@/components'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    const navigate = useNavigate()

    useEffect(() => {
        if (!localStorage.getItem("customer-login")) {
            navigate("/")
        }
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Breadcrumb pageNameChild="Profile" />
            <div className="container-fluid">
                <div className="row px-xl-5">
                    <div className="col-lg-12">
                        <h5 className="section-title position-relative text-uppercase mb-3">
                            <span className="bg-secondary pr-3">Sign in</span>
                        </h5>
                        <div className="bg-light p-30 mb-5">
                            <form>
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <label>Email</label>
                                        {/* <input
                                            className={`form-control ${isEmailValid ? "" : "is-invalid"
                                                }`}
                                            onChange={handleEmailChange}
                                            type="text"
                                        />
                                        <div className="invalid-feedback">
                                            Please input your email
                                        </div> */}
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label>Password</label>
                                        {/* <input
                                            className={`form-control ${isPasswordValid ? "" : "is-invalid"
                                                }`}
                                            onChange={handlePasswordChange}
                                            type="password"
                                        />
                                        <div className="invalid-feedback">
                                            Please input your password
                                        </div> */}
                                    </div>
                                </div>
                                <button
                                    type="button"
                                    // onClick={handleSubmit}
                                    className="btn btn-block btn-primary font-weight-bold py-3"
                                >
                                    Edit Profile
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile