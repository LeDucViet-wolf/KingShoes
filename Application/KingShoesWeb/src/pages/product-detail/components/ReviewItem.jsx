import React from "react"
import "@/assets/css/review-item.css"

const ReviewItem = ({ ...props }) => {
    const { review } = props

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
                        <div className="reply--child">
                            <img src="img/user.jpg" className="img-fluid mr-3 mt-1" style={{ width: "45px" }} />
                            <form><textarea id="message" cols="30" rows="5" className={`form-control`}></textarea></form>
                        </div>
                    </div>
                    <div className="media-body--right col-3">
                        <a href="#"><i className="fa fa-reply"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewItem