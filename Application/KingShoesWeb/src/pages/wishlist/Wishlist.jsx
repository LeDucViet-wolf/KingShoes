import React, { useState, useEffect } from "react";
import { Breadcrumb } from "@/components";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([])

  const fetchData = () => {
    setWishlist(JSON.parse(localStorage.getItem("wishlist")));

  }

  useEffect(() => {
    fetchData();
  }, []);

  const [qty, setQty] = useState(1);

  const handleQty = (e) => {
    var qty = e.target.value;
    if (Math.floor(qty) == qty && $.isNumeric(qty) && Math.floor(qty) > 0) {
      setQty(parseInt(e.target.value));
    }
  };

  const updateWishlistItem = (qty) => {
    const wishlistCur = document.querySelector('.dat__wishlist')
    if (wishlistCur) {
      wishlistCur.innerText = qty
    }
  }

  const updateWishlist = () => {
    var wishlistItem = JSON.parse(localStorage.getItem("wishlist")),
    wishlistQty = 0
    if (wishlistItem) {
      wishlistItem.forEach((element) => {
        wishlistQty += parseInt(element.qty);
      });
    }
    updateWishlistItem(wishlistQty)
  }

  const removeItem = (e) => {
    const item = e.target.closest('.dat__wishlist-item')
    if (item) {
      const prodId = item.dataset.itemId;
      const size = item.dataset.itemSize;
      remove(prodId, size)
      fetchData()
    }
  }

  const remove = (id, size) => {
    var data = localStorage.getItem('wishlist')
    ? JSON.parse(localStorage.getItem('wishlist'))
    : [];
    const newD = []
    data.forEach(e=>{
      if(e.productId != id){
        newD.push(e)
      }else if (e.size != size) {
        newD.push(e)
      }

    })
    localStorage.setItem('wishlist', JSON.stringify(newD));
    updateWishlist()
    fetchData();

  }

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
                  <div key={index} className="col-lg-4 col-md-6 col-sm-6 pb-1 dat__wishlist-item" data-item-id={item.productId} data-item-size={item.size}>
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
                        <button className="btn btn-primary" onClick={removeItem}>
                          <i className="fa fa-eraser mr-1"></i> Remove item
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <button className="btn btn-primary">Continue Shopping</button>
        {
          wishlist.length !== 0
          ?
          <button className="btn btn-primary">Add All To Cart</button>
          :
          null
        }
      </div>
    </>
  );
};

export default Wishlist;
