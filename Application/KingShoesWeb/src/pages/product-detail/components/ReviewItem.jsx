import React, { useEffect, useRef, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getAllCustomer, updateProductReview } from '@/stores/actions'
import { useAlert } from 'react-alert';
import "@/assets/css/review-item.css"

const ReviewItem = ({ ...props }) => {
    const dispatch = useDispatch()
    const alert = useAlert()

    const { customers } = useSelector((state) => ({
        customers: state.customerReducer.customers
    }))

    const { review, customer } = props
    const customerLogin = JSON.parse(customer)
    const boxReply = useRef()
    const [replies, setReplies] = useState(review.reply ? JSON.parse(review.reply) : [])
    const [inputReply, setInputReply] = useState()
    const [isInputReplyValid, setIsInputReplyValid] = useState(true)

    const [productReviewAction, SetProductReviewAction] = useState("")

    const toggleReply = (e) => {
        e.preventDefault()
        boxReply.current.classList.toggle('d-none')
    }

    const inputReplyChange = (e) => {
        if (e.target.value) {
            setInputReply(e.target.value)
            setIsInputReplyValid(true)
        } else {
            setIsInputReplyValid(false)
        }
    }

    const handleEditReview = (e) => {

    }

    const handleDeleteReview = (e) => {

    }

    const handleSubmitReply = (e) => {
        e.preventDefault()
        if (!inputReply) {
            setIsInputReplyValid(false)
        } else {
            let reviewOrigin = {
                entityId: review.entityId,
                productId: review.productId,
                customerId: review.customerId,
                comment: review.comment,
                point: review.point,
                reply: JSON.stringify([
                    ...replies.map(item => (
                        {
                            text: item.text,
                            customerId: item.customerId,
                            status: item.status
                        }
                    )),
                    {
                        text: inputReply,
                        customerId: customerLogin[0].entityId,
                        status: true
                    }
                ])
            }
            dispatch(updateProductReview(reviewOrigin))
            SetProductReviewAction('add-reply')
        }
    }

    const handleEditReply = (e) => {

    }

    const handleDeleteReply = (e) => {

    }

    const { productReview, resultProductReview, error } = useSelector((state) => ({
        productReview: state.productReviewReducer.productReview,
        resultProductReview: state.productReviewReducer.resultProductReview,
        error: state.productReviewReducer.error
    }))

    console.log(productReview)

    useEffect(() => {
        switch (productReviewAction) {
            case 'add-reply':
                if (productReview) {
                    alert.show("Add Reply Success!", { type: 'success' })
                    let currentReplies = productReview.reply ? JSON.parse(productReview.reply) : []
                    let newReplies = []
                    currentReplies.forEach(item =>
                        newReplies.push({
                            ...item,
                            customer: customers.filter((c) => c.entityId == item.customerId)[0]
                        })
                    )
                    setReplies(newReplies)
                } else {
                    alert.show("Add Reply Fail!", {
                        type: 'error',
                    })
                }
                SetProductReviewAction("")
                break
            case 'edit-reply':
                resultProductReview !== 0
                    ? alert.show("Edit Reply Success!", {
                        type: 'success',
                    })
                    : alert.show("Edit Reply Fail!", {
                        type: 'error',
                    })
                SetProductReviewAction("")
                break
            case 'delete-reply':
                resultProductReview !== 0
                    ? alert.show("Delete Reply Success!", {
                        type: 'success',
                    })
                    : alert.show("Delete Reply Fail!", {
                        type: 'error',
                    })
                SetProductReviewAction("")
                break
        }
    }, [productReviewAction])

    useEffect(() => {
        let newReplies = []
        replies.forEach((r) => {
            newReplies.push({
                ...r,
                customer: customers.filter((c) => c.entityId == r.customerId)[0]
            })
        })
        setReplies(newReplies)
    }, [customers])

    useEffect(() => {
        dispatch(getAllCustomer())
    }, [dispatch])

    return (
        <div className="media mb-4">
            <img src="img/user.jpg" className="img-fluid mr-3 mt-1" style={{ width: "45px" }} />
            <div className="media-body">
                <div className="row">
                    <div className="media-body--review col-12">
                        <h6 className="title">
                            <span className="name">{`${review.customer.firstName} ${review.customer.lastName}`}</span>
                            <div className="tools">
                                <a onClick={toggleReply} href="#"><i className="fa fa-reply"></i></a>
                                {
                                    customerLogin && customerLogin[0].entityId === review.customer.entityId
                                        ? <div className="dropdown tool-comment">
                                            <button className="dropdown-toggle"
                                                type="button" id="dropdownMenuButton"
                                                data-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false">
                                                <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                                            </button>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <a className="dropdown-item" href="#">Edit</a>
                                                <a className="dropdown-item" href="#">Delete</a>
                                            </div>
                                        </div>
                                        : ""
                                }
                            </div>
                        </h6>
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

                        {
                            replies
                                ? replies.map((item, index) => (
                                    <div key={index} className="reply--child reply--child__done p-0">
                                        <img src="img/user.jpg" className="img-fluid mr-3 mt-1" style={{ width: "45px" }} />
                                        <div className="information">
                                            {
                                                item.customer
                                                    ? <h6 className="title">
                                                        <span className="name">{`${item.customer.firstName} ${item.customer.lastName}`}</span>
                                                        {
                                                            customerLogin && customerLogin[0].entityId === item.customerId
                                                                ? <div className="tools">
                                                                    <div className="dropdown tool-comment">
                                                                        <button className="dropdown-toggle"
                                                                            type="button" id="dropdownMenuButton"
                                                                            data-toggle="dropdown"
                                                                            aria-haspopup="true"
                                                                            aria-expanded="false">
                                                                            <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                                                                        </button>
                                                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                            <a className="dropdown-item" href="#">Edit</a>
                                                                            <a className="dropdown-item" href="#">Delete</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                : ""
                                                        }
                                                    </h6>
                                                    : ""
                                            }
                                            <p>{item.text}</p>
                                        </div>
                                    </div>
                                ))
                                : ""
                        }

                        <div ref={boxReply} className="reply--child d-none">
                            <img src="img/user.jpg" className="img-fluid mr-3 mt-1" style={{ width: "45px" }} />
                            <form>
                                <div className="form-group">
                                    <textarea
                                        onChange={inputReplyChange}
                                        id="message"
                                        cols="30"
                                        rows="5"
                                        className={`form-control ${isInputReplyValid ? '' : 'is-invalid'}`}>
                                    </textarea>
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
                </div>
            </div>
        </div>
    )
}

export default ReviewItem