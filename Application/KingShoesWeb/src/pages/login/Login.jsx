import React, { useEffect, useState } from 'react'
import { Breadcrumb } from '../../components'
import { useSelector, useDispatch } from 'react-redux'
import { getAllCustomer } from '../../stores/actions'

const Login = () => {
    const dispatch = useDispatch()

    const { customers } = useSelector((state) => ({
        customers: state.customerReducer.customers,
    }))

    // Input
    const [email, setEmail] = useState('nguyenngocthuy@gmail.com')
    const [password, setPassword] = useState('123')

    // Validate
    const [isEmailValid, setIsEmailValid] = useState(true)
    const [isPasswordValid, setIsPasswordValid] = useState(true)

    useEffect(() => {
        dispatch(getAllCustomer())
    }, [dispatch])

    const handleEmailChange = (e) => {
        if (e.target.value) {
            setEmail(e.target.value)
            setIsEmailValid(true)
        } else {
            setIsEmailValid(false)
        }
    }

    const handlePasswordChange = (e) => {
        if (e.target.value) {
            setPassword(e.target.value)
            setIsPasswordValid(true)
        } else {
            setIsPasswordValid(false)
        }
    }

    const handleSubmit = () => {
        if (!email) {
            setIsEmailValid(false)
        }
        if (!password) {
            setIsPasswordValid(false)
        }
        if (email && password) {
            let customer = customers.filter((c) => {
                // const checkPassword = bcrypt.compareSync(password, u.password)
                if (c.email === email && c.password === password) {
                    return c
                } else {
                    return null
                }
            })
            if (customer && customer.length > 0) {
                localStorage.setItem('customer-login', JSON.stringify(customer))
            } else {
                alert('Email or Password is not match!')
            }
        }
    }

    return (
        <>
            <Breadcrumb pageNameChild='Login' />
            <div className="container-fluid">
                <div className="row px-xl-5">
                    <div className="col-lg-12">
                        <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Sign in</span></h5>
                        <div className="bg-light p-30 mb-5">
                            <form>
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <label>Email</label>
                                        <input value={'nguyenngocthuy@gmail.com'} className={`form-control ${isEmailValid ? '' : 'is-invalid'}`} onChange={handleEmailChange} type="text" />
                                        <div className="invalid-feedback">Please input your email</div>
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label>Password</label>
                                        <input value={'123'} className={`form-control ${isPasswordValid ? '' : 'is-invalid'}`} onChange={handlePasswordChange} type="password" />
                                        <div className="invalid-feedback">Please input your password</div>
                                    </div>
                                </div>
                                <button type="button" onClick={handleSubmit} className="btn btn-block btn-primary font-weight-bold py-3">Log in</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login