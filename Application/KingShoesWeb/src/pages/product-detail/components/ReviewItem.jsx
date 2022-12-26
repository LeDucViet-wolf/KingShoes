import React, { useEffect, useRef, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getAllCustomer, updateProductReview } from '@/stores/actions'
import { useAlert } from 'react-alert'
import { del } from '@/helpers'
import { useAppContext } from "@/hooks/useAppContext"
import ModalAction from './ModalAction'
import "@/assets/css/review-item.css"

const ReviewItem = ({ ...props }) => {
    const dispatch = useDispatch()
    const alert = useAlert()
    const { data: editReview, setData: setEditReview } = useAppContext('edit-review')

    const { customers, productReview, resultProductReview } = useSelector((state) => ({
        customers: state.customerReducer.customers,
        productReview: state.productReviewReducer.productReview,
    }))

    const { review, customer, fetchData } = props
    const customerLogin = JSON.parse(customer)

    const [productReviewAction, setProductReviewAction] = useState("")

    // #region REVIEW
    const handleEditReview = (e) => {
        e.preventDefault()
        setEditReview({
            replies: replies,
            review: review,
            submit: 'edit'
        })
    }

    const handleDeleteReview = async (e, id) => {
        e.preventDefault()
        let result = await del(`product-reviews/delete/${id}`)
        if (result == 1) {
            fetchData()
            alert.show("Delete Review Success!", {
                type: 'success',
            })
        } else {
            alert.show("Delete Review Fail!", {
                type: 'error',
            })
        }
    }
    // #endregion

    // #region REPLY
    const boxReply = useRef()
    const inputReply = useRef()
    const [replies, setReplies] = useState(review.reply ? JSON.parse(review.reply) : [])
    const [isInputReplyValid, setIsInputReplyValid] = useState(true)
    const [waitProductReply, setWaitProductReply] = useState()

    const handleAddReply = (e) => {
        e.preventDefault()
        boxReply.current.classList.toggle('d-none')
        setProductReviewAction('add-reply')
    }

    const handleEditReply = (e) => {
    }

    const handleDeleteReply = (e, index) => {
        e.preventDefault()
        replies.splice(index, 1)
        let reviewOrigin = {
            entityId: review.entityId,
            productId: review.productId,
            customerId: review.customerId,
            comment: review.comment,
            point: review.point,
            reply: JSON.stringify([...replies.map(item => (
                {
                    text: item.text,
                    customerId: item.customerId,
                    status: item.status
                }
            ))])
        }
        dispatch(updateProductReview(reviewOrigin))
        setProductReviewAction('delete-reply')
    }

    const inputReplyChange = (e) => {
        if (e.target.value) {
            setIsInputReplyValid(true)
        } else {
            setIsInputReplyValid(false)
        }
    }

    const handleSubmitReply = (e) => {
        e.preventDefault()
        if (!inputReply.current.value) {
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
                        text: inputReply.current.value,
                        customerId: customerLogin[0].entityId,
                        status: true
                    }
                ])
            }
            inputReply.current.value = null
            dispatch(updateProductReview(reviewOrigin))
            setProductReviewAction('add-reply')
        }
    }

    const reloadReply = () => {
        let newReplies = []
        JSON.parse(waitProductReply.reply).forEach((r) => {
            newReplies.push({
                ...r,
                customer: customers.filter((c) => c.entityId == r.customerId)[0]
            })
        })
        setReplies(newReplies)
    }
    // #endregion

    useEffect(() => {
        setWaitProductReply(productReview)
    }, [productReview])

    useEffect(() => {
        switch (productReviewAction) {
            case 'add-reply':
                if (waitProductReply) {
                    reloadReply()
                    alert.show("Add Reply Success!", { type: 'success' })
                } else {
                    alert.show("Add Reply Fail!", { type: 'error' })
                }
                setProductReviewAction("")
                break
            case 'edit-reply':
                resultProductReview !== 0
                    ? alert.show("Edit Reply Success!", {
                        type: 'success',
                    })
                    : alert.show("Edit Reply Fail!", {
                        type: 'error',
                    })
                setProductReviewAction("")
                break
            case 'delete-reply':
                if (waitProductReply) {
                    reloadReply()
                    alert.show("Delete Reply Success!", { type: 'success' })
                } else {
                    alert.show("Delete Reply Fail!", { type: 'error' })
                }
                setProductReviewAction("")
                break
        }
    }, [waitProductReply])

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
        <>
            <div key={review.id} className="media mb-4">
                <img src="img/user.jpg" className="img-fluid mr-3 mt-1" style={{ width: "45px" }} />
                <div className="media-body">
                    <div className="row">
                        <div className="media-body--review col-12">
                            <h6 className="title">
                                <span className="name">{`${review.customer.firstName} ${review.customer.lastName}`}</span>
                                <div className="tools">
                                    <a onClick={handleAddReply} href="#"><i className="fa fa-reply"></i></a>
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
                                                    <a className="dropdown-item" onClick={(e) => handleEditReview(e)} href="#">Edit</a>
                                                    <a
                                                        data-toggle="modal"
                                                        data-target={`#modal-review-${review.entityId}`}
                                                        className="dropdown-item"
                                                        href="#"
                                                    >Delete</a>
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
                                        <>
                                            <div key={`reply-${customerLogin[0].entityId}`} className="reply--child reply--child__done p-0">
                                                <img src="img/user.jpg" className="img-fluid mr-3 mt-1" style={{ width: "45px" }} />
                                                <div className="information">
                                                    {
                                                        item.customer
                                                            ? <h6 className="title" key={`customer-${customerLogin[0].entityId}`}>
                                                                <span className="name">{`${item.customer.firstName} ${item.customer.lastName}`}</span>
                                                                {
                                                                    customerLogin && customerLogin[0].entityId === item.customerId
                                                                        ? <div className="tools" key={`tool-${customerLogin[0].entityId}`}>
                                                                            <div className="dropdown tool-comment">
                                                                                <button className="dropdown-toggle"
                                                                                    type="button" id="dropdownMenuButton"
                                                                                    data-toggle="dropdown"
                                                                                    aria-haspopup="true"
                                                                                    aria-expanded="false">
                                                                                    <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                                                                                </button>
                                                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                    <a className="dropdown-item" href="#" onClick={handleEditReply}>Edit</a>
                                                                                    <a
                                                                                        data-toggle="modal"
                                                                                        className="dropdown-item"
                                                                                        href="#"
                                                                                        data-target={`#modal-reply-${index}`}
                                                                                    >
                                                                                        Delete
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        : ''
                                                                }
                                                            </h6>
                                                            : ''
                                                    }
                                                    <p>{item.text}</p>
                                                </div>
                                            </div>
                                            <ModalAction
                                                key={`modal-${index}`}
                                                idName={`modal-reply-${index}`}
                                                title={`Are you sure to delete?`}
                                                body={`${index}`}
                                                action={`delete`}
                                                handleEvent={(e) => handleDeleteReply(e, index)}
                                            />
                                        </>
                                    ))
                                    : <></>
                            }

                            <div ref={boxReply} className="reply--child d-none">
                                <img src="img/user.jpg" className="img-fluid mr-3 mt-1" style={{ width: "45px" }} />
                                <form>
                                    <div className="form-group">
                                        <textarea
                                            ref={inputReply}
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
            <ModalAction
                key={`modal-${review.entityId}`}
                idName={`modal-review-${review.entityId}`}
                title={`Are you sure to delete?`}
                body={`${review.entityId}`}
                action={`delete`}
                handleEvent={(e) => handleDeleteReview(e, review.entityId)}
            />
        </>
    )
}

export default ReviewItem