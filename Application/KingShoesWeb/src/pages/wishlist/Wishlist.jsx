import React, { useState } from "react";
import { Breadcrumb } from "@/components";
import { Link } from "react-router-dom";

const Wishlist = () => {
  var wishlist = JSON.parse(localStorage.getItem("wishlist"));

  const [qty, setQty] = useState(1);

  const handleQty = (e) => {
    var qty = e.target.value;
    if (Math.floor(qty) == qty && $.isNumeric(qty) && Math.floor(qty) > 0) {
      setQty(parseInt(e.target.value));
    }
  };

  return (
    <>
      <Breadcrumb
        pageUrl="/product-list"
        pageName="Shop"
        pageNameChild="My Wishlist"
      />
      <div className="container-fluid">
        <div className="row px-xl-5">
          <div className="col-lg-9 col-md-8">
            <div className="row pb-3">
              {wishlist.map((item, index) => {
                return (
                  <div key={index} className="col-lg-4 col-md-6 col-sm-6 pb-1">
                    <div className="product-item bg-light mb-4">
                      <div className="product-img position-relative overflow-hidden">
                        {/* <img
                          className="img-fluid w-100"
                          src={`${
                            isProductImageEmpty
                              ? `/img/product/${productImage[0].value}`
                              : ""
                          }`}
                        /> */}
                      </div>
                      <div className="text-center py-4">
                        <Link
                          to={`/product-detail?productId=${item.product.entityId}`}
                          className="h6 text-decoration-none text-truncate"
                        >
                          {item.product.name}
                        </Link>
                        <p>
                          <strong>SKU: </strong>
                          {item.product.sku}
                        </p>
                        <p>
                          <strong>Size: </strong>
                          {item.size}
                        </p>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                          <h5>
                            {item.product.price
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                            VND
                          </h5>
                        </div>
                        <div>
                          <strong>Qty:</strong>
                          <div
                            className="input-group"
                            style={{ width: "50px", margin: "0 auto" }}
                          >
                            <input
                              type="text"
                              className="form-control bg-secondary text-center"
                              defaultValue={item.qty}
                              onChange={handleQty}
                            />
                          </div>
                        </div>
                        <button className="btn btn-primary">
                          <i className="fa fa-shopping-cart mr-1"></i> Add To
                          Cart
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
