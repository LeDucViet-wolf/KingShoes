import React, { useState } from 'react'
import { Breadcrumb } from '@/components'
import { useAlert } from 'react-alert'
import { post } from '@/helpers'

const Contact = () => {
    const alert = useAlert()

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [subject, setSubject] = useState()
    const [message, setMessage] = useState()

    const [isNameValid, setIsNameValid] = useState(true)
    const [isEmailValid, setIsEmailValid] = useState(true)
    const [isSubjectValid, setIsSubjectValid] = useState(true)
    const [isMessageValid, setIsMessageValid] = useState(true)

    const handleNameChange = (e) => {
        if (e.target.value) {
            setName(e.target.value)
            setIsNameValid(true)
        } else {
            setIsNameValid(false)
        }
    }

    const handleEmailChange = (e) => {
        if (e.target.value) {
            setEmail(e.target.value)
            setIsEmailValid(true)
        } else {
            setIsEmailValid(false)
        }
    }

    const handleSubjectChange = (e) => {
        if (e.target.value) {
            setSubject(e.target.value)
            setIsSubjectValid(true)
        } else {
            setIsSubjectValid(false)
        }
    }
    const handleMessageChange = (e) => {
        if (e.target.value) {
            setMessage(e.target.value)
            setIsMessageValid(true)
        } else {
            setIsMessageValid(false)
        }
    }

    const handleSubmit = async () => {
        if (!name) {
            setIsNameValid(false)
        }
        if (!email) {
            setIsEmailValid(false)
        }
        if (!subject) {
            setIsSubjectValid(false)
        }
        if (!message) {
            setIsMessageValid(false)
        }
        if (name && email && subject && message) {
            let data = { name, email, subject, message }
            let result = await post(`contacts/insert/`, data)
            if (result) {
                alert.show("Send Message Success!", {
                    type: 'success',
                })
            } else {
                alert.show("Send Message Fail!", {
                    type: 'error',
                })
            }
        }
    }

    return (
        <>
            <Breadcrumb pageUrl='/contact' pageNameChild='Contact' />
            <div className="container-fluid">
                <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Contact Us</span></h2>
                <div className="row px-xl-5">
                    <div className="col-lg-7 mb-5">
                        <div className="contact-form bg-light p-30">
                            <div id="success"></div>
                            <form name="sentMessage" id="contactForm">
                                <div className="form-group">
                                    <input
                                        defaultValue={name}
                                        onChange={handleNameChange}
                                        type="text"
                                        className={`form-control ${isNameValid ? "" : "is-invalid"}`}
                                        id="name"
                                        placeholder="Your Name" />
                                </div>
                                <div className="form-group">
                                    <input
                                        defaultValue={email}
                                        onChange={handleEmailChange}
                                        type="email"
                                        className={`form-control ${isEmailValid ? "" : "is-invalid"}`}
                                        id="email"
                                        placeholder="Your Email" />
                                </div>
                                <div className="form-group">
                                    <input
                                        defaultValue={subject}
                                        onChange={handleSubjectChange}
                                        type="text"
                                        className={`form-control ${isSubjectValid ? "" : "is-invalid"}`}
                                        id="subject"
                                        placeholder="Subject" />
                                </div>
                                <div className="form-group">
                                    <textarea
                                        defaultValue={message}
                                        onChange={handleMessageChange}
                                        className={`form-control ${isMessageValid ? "" : "is-invalid"}`}
                                        rows="8"
                                        id="message"
                                        placeholder="Message"></textarea>
                                </div>
                                <div>
                                    <button
                                        onClick={handleSubmit}
                                        className="btn btn-primary py-2 px-4"
                                        type="button"
                                        id="sendMessageButton">
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-5 mb-5">
                        <div className="bg-light p-30 mb-30">
                            <iframe style={{ width: '100%', height: '250px', border: '0' }}
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                                frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                        </div>
                        <div className="bg-light p-30 mb-3">
                            <p className="mb-2"><i className="fa fa-map-marker-alt text-primary mr-3"></i>123 Street, New York, USA</p>
                            <p className="mb-2"><i className="fa fa-envelope text-primary mr-3"></i>info@example.com</p>
                            <p className="mb-2"><i className="fa fa-phone-alt text-primary mr-3"></i>+012 345 67890</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact