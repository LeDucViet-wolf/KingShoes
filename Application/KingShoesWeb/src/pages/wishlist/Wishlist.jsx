import React, { useState, useEffect } from "react";
import { Breadcrumb } from "@/components";
import { Link } from "react-router-dom";
import { NavLink, useNavigate } from "react-router-dom";

const Wishlist = () => {
  const navigate = useNavigate();

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

  const minusItem = (e, id, size) => {
    wishlist.forEach((item, index) => {
      if (item.productId == id && item.size == size) {
        item.qty--;
        if (item.qty === 0) {
          wishlist.splice(index, 1);
          const tr = e.target.closest('tr')
          if (tr) {
            const itemId = tr.dataset.itemId
            const size = tr.dataset.itemSize
            dele(itemId, size)
          }
        }
      }
    });
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    fetchData();
  };


  const plusItem = (e, id, size) => {
    wishlist.forEach((item, index) => {
      if (item.productId == id && item.size == size) {
      wishlist[index].qty++;
      }
    });
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    fetchData();
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

  const addToCart = (item) => {
    const qty = item.qty , size = item.size, productId = item.productId, product = item.product
    var cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
    if (cart.length > 0) {
      var existProductInCart = cart.filter(
        (x) => x.productId == productId && x.size == parseInt(size)
      );
      if (existProductInCart.length > 0) {
        var cartItem = {
          productId: parseInt(productId),
          product: product,
          size: parseInt(size),
          qty: existProductInCart[0].qty + parseInt(qty),
        };

        cart.forEach((item, index) => {
          if (
            item.productId === parseInt(productId) &&
            item.size === parseInt(size)
          ) {
            cart[index] = cartItem;
          }
        });
      } else {
        var cartItem = {
          productId: parseInt(productId),
          product: product,
          size: parseInt(size),
          qty: parseInt(qty),
        };
        cart.push(cartItem);
      }

      localStorage.setItem("cart", cart);
    } else {
      var cartItem = {
        productId: parseInt(productId),
        product: product,
        size: parseInt(size),
        qty: parseInt(qty),
      };

      cart.push(cartItem);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    var cart = JSON.parse(localStorage.getItem("cart")),
      cartQty = 0
    if (cart) {
      cart.forEach((element) => {
        cartQty += parseInt(element.qty);
      });
    }

    updateCartItem(cartQty)
  };

  const updateCartItem = (qty) => {
    const cart = document.querySelector('.dat__cart-item')
    if (cart) {
      cart.innerText = qty
    }
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

  const addAllToCart = () => {
    wishlist.forEach(item => {
      const qty = item.qty , size = item.size, productId = item.productId, product = item.product
      var cart = localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : [];
      if (cart.length > 0) {
        var existProductInCart = cart.filter(
          (x) => x.productId == productId && x.size == parseInt(size)
        );
        if (existProductInCart.length > 0) {
          var cartItem = {
            productId: parseInt(productId),
            product: product,
            size: parseInt(size),
            qty: existProductInCart[0].qty + parseInt(qty),
          };

          cart.forEach((item, index) => {
            if (
              item.productId === parseInt(productId) &&
              item.size === parseInt(size)
            ) {
              cart[index] = cartItem;
            }
          });
        } else {
          var cartItem = {
            productId: parseInt(productId),
            product: product,
            size: parseInt(size),
            qty: parseInt(qty),
          };
          cart.push(cartItem);
        }

        localStorage.setItem("cart", cart);
      } else {
        var cartItem = {
          productId: parseInt(productId),
          product: product,
          size: parseInt(size),
          qty: parseInt(qty),
        };

        cart.push(cartItem);
      }
      localStorage.setItem("cart", JSON.stringify(cart));
      
    });
    var cart = JSON.parse(localStorage.getItem("cart")),
        cartQty = 0
      if (cart) {
        cart.forEach((element) => {
          cartQty += parseInt(element.qty);
        });
      }
    updateCartItem(cartQty)
    setTimeout(() => {
      alert("Add all to cart successfully")
    }, 1000);
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
                          <div className="input-group quantity mx-auto" style={{ width: "100px" }}>
                            <div className="input-group-btn">
                              <button
                                className="btn btn-sm btn-primary btn-minus"
                                onClick={(event) =>
                                  minusItem(event, item.productId, item.size)
                                }
                              >
                                <i className="fa fa-minus"></i>
                              </button>
                            </div>
                            <span>{item.qty}</span>
                            <div className="input-group-btn">
                              <button
                                className="btn btn-sm btn-primary btn-plus"
                                onClick={(event) =>
                                  plusItem(event, item.productId, item.size)
                                }
                              >
                                <i className="fa fa-plus"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                        <button className="btn btn-primary" onClick={() => addToCart(item)}>
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
        <button className="btn btn-primary" onClick={() => navigate("/")}>Continue Shopping</button>
        {
          wishlist.length !== 0
          ?
          <button className="btn btn-primary" onClick={() => addAllToCart()}>Add All To Cart</button>
          :
          null
        }
      </div>
    </>
  );
};

export default Wishlist;
