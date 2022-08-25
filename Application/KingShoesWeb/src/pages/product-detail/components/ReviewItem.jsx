import React, { useRef, useState } from "react"
import "@/assets/css/review-item.css"

const ReviewItem = ({ ...props }) => {
    const { review, customer } = props
    const customerObj = JSON.parse(customer)
    const boxReply = useRef()

    const [inputReply, setInputReply] = useState()
    const [isInputReplyValid, setIsInputReplyValid] = useState(true)

    const toggleReply = (e) => {
        e.preventDefault()
        boxReply.current.classList.toggle('d-none')
    }

    const inputReplyChange = (e) => {
        if (e.target.value) {
            // if(e.target.value < 200)
            setInputReply(e.target.value)
            setIsInputReplyValid(true)
        } else {
            setIsInputReplyValid(false)
        }
    }

    const handleSubmitReply = (e) => {
        e.preventDefault()
        if (!inputReply) {
            setIsInputReplyValid(false)
        }
    }

    return (
        <div className="media mb-4">
            <img src="img/user.jpg" className="img-fluid mr-3 mt-1" style={{ width: "45px" }} />
            <div className="media-body">
                <div className="row">
                    <div className="media-body--left col-9">
                        <h6>{`${review.customer.firstName} ${review.customer.lastName}`}</h6>
                        <div className="text-primary mb-2">
                            {
                                [...Array(parseInt(review.point))].map(
                                    (item, i) => (
                                        <i key={i} className="fas fa-star"></i>
                                    ))
                            }
                            {
                                parseInt(review.point) < 5
                                    ? [...Array(5 - parseInt(review.point))].map(
                                        (item, i) => (
                                            <i key={i} className="far fa-star"></i>
                                        )
                                    )
                                    : ""
                            }
                        </div>
                        <p>{review.comment}</p>

                        <div className="reply--child reply--child__done p-0">
                            <img src="img/user.jpg" className="img-fluid mr-3 mt-1" style={{ width: "45px" }} />
                            <div>
                                <h6>{`${review.customer.firstName} ${review.customer.lastName}`}</h6>
                                <p>{review.comment}</p>
                            </div>
                        </div>

                        <div ref={boxReply} className="reply--child d-none">
                            <img src="img/user.jpg" className="img-fluid mr-3 mt-1" style={{ width: "45px" }} />
                            <form>
                                <div className="form-group">
                                    <textarea onChange={inputReplyChange} id="message" cols="30" rows="5" className={`form-control ${isInputReplyValid ? '' : 'is-invalid'}`}></textarea>
                                    <div className="invalid-feedback">
                                        Please enter your reply.
                                    </div>
                                </div>
                                <div className="form-group mb-0">
                                    <input
                                        onClick={handleSubmitReply}
                                        type="submit"
                                        defaultValue="Leave Your Review"
                                        className="btn btn-primary px-3"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="media-body--right col-3">
                        <a onClick={toggleReply} href="#"><i className="fa fa-reply"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewItem