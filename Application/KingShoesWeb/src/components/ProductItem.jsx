import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { getAllProductImage, getAllProductReview } from '@/stores/actions'

const ProductItem = ({ ...props }) => {
    const { product, grid } = props
    const dispatch = useDispatch()

    const { productImages, productReviews } = useSelector((state) => ({
        productImages: state.productImageReducer.productImages,
        productReviews: state.productReviewReducer.productReviews
    }))

    const productImage = productImages.filter(pi => pi.productId == product.entityId)
    const productReview = productReviews.filter(pr => pr.productId == product.entityId)

    const isProductImageEmpty = !(productImage.length === 0)
    const isProductReviewEmpty = !(productReview.length === 0)

    const productRatingAverage = isProductReviewEmpty
        ? Math.floor(parseFloat(productReview.reduce((item1, item2) => (item1 + item2.point), 0)) / productReview.length)
        : 0

    useEffect(() => {
        dispatch(getAllProductImage())
        dispatch(getAllProductReview())
    }, [dispatch])

    return (
        <div className={`col-lg-${grid.lg} col-md-${grid.md} col-sm-${grid.sm} pb-1`}>
            <div className="product-item bg-light mb-4">
                <div className="product-img position-relative overflow-hidden">
                    <img
                        className="img-fluid w-100"
                        src={`${isProductImageEmpty ? `/img/product/${productImage[0].value}` : ''}`}
                    />
                    <div className="product-action">
                        <a className="btn btn-outline-dark btn-square" href="#">
                            <i className="fa fa-shopping-cart"></i>
                        </a>
                        <a className="btn btn-outline-dark btn-square" href="#">
                            <i className="far fa-heart"></i>
                        </a>
                    </div>
                </div>
                <div className="text-center py-4">
                    <Link to={`/product-detail?productId=${product.entityId}`} className="h6 text-decoration-none text-truncate">{product.name}</Link>
                    <p><strong>SKU: </strong>{product.sku}</p>
                    <div className="d-flex align-items-center justify-content-center mt-2">
                        <h5>{product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} VND</h5>
                    </div>
                    <div className="d-flex align-items-center justify-content-center mb-1">
                        {
                            [...Array(productRatingAverage)].map((item, i) => (
                                <small key={i} className="fas fa-star text-primary mr-1"></small>
                            ))
                        }
                        {
                            productRatingAverage < 5
                                ? [...Array(5 - productRatingAverage)].map((item, i) => (
                                    <small key={i} className="far fa-star text-primary mr-1"></small>
                                ))
                                : ""
                        }
                        <small>{`(${productReview.length})`}</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductItem