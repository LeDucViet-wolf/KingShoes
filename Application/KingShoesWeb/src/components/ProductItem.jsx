import React from 'react'
import { Link } from "react-router-dom"

const ProductItem = ({ ...props }) => {
    const { product, grid } = props

    return (
        <div className={`col-lg-${grid.lg} col-md-${grid.md} col-sm-${grid.sm} pb-1`}>
            <div className="product-item bg-light mb-4">
                <div className="product-img position-relative overflow-hidden">
                    <img
                        className="img-fluid w-100"
                        src="img/product-1.jpg"
                        alt=""
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
                        <h5>{product.price} VND</h5>
                    </div>
                    <div className="d-flex align-items-center justify-content-center mb-1">
                        <small className="fa fa-star text-primary mr-1"></small>
                        <small className="fa fa-star text-primary mr-1"></small>
                        <small className="fa fa-star text-primary mr-1"></small>
                        <small className="fa fa-star text-primary mr-1"></small>
                        <small className="fa fa-star text-primary mr-1"></small>
                        <small>(99)</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductItem