import React, { useState, useEffect } from "react";
import { Breadcrumb } from "@/components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAlert } from 'react-alert';
import "@/assets/css/wishlist.css";

const Wishlist = () => {
  const navigate = useNavigate();
  const alert = useAlert();

  const [wishlist, setWishlist] = useState([])

  const fetchData = () => {
    setWishlist(JSON.parse(localStorage.getItem("wishlist")));
  }

  useEffect(() => {
    fetchData();
  }, []);

  const minusItem = (e, id, size) => {
    wishlist.forEach((item, index) => {
      if (item.productId == id && item.size == size) {
        item.qty--;
        if (item.qty === 0) {
          wishlist.splice(index, 1);
          alert.show(`Remove from wishlist successfully!`, {
            type: 'success',
          });
        } else {
          alert.show(`Update wishlist successfully!`, {
            type: 'success',
          });
        }
      }
    });
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    fetchData();
    updateWishlist()
  };

  const plusItem = (e, id, size) => {
    wishlist.forEach((item, index) => {
      if (item.productId == id && item.size == size) {
        wishlist[index].qty++;
      }
    });
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    fetchData();
    alert.show(`Update wishlist successfully!`, {
      type: 'success',
    });
    updateWishlist()
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
        wishlistQty = wishlist.length;
      });
    }
    updateWishlistItem(wishlistQty)
  }

  const addToCart = (item) => {
    const qty = item.qty, size = item.size, productId = item.productId, product = item.product;
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
    alert.show(`Add to cart successfully!`, {
      type: 'success',
    });
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
      alert.show(`Remove from wishlist successfully!`, {
        type: 'success',
      });
    }
  }

  const remove = (id, size) => {
    var data = localStorage.getItem('wishlist')
      ? JSON.parse(localStorage.getItem('wishlist'))
      : [];
    const newD = []
    data.forEach(e => {
      if (e.productId != id) {
        newD.push(e)
      } else if (e.size != size) {
        newD.push(e)
      }
    })
    localStorage.setItem('wishlist', JSON.stringify(newD));
    updateWishlist()
    fetchData();

  }

  const addAllToCart = () => {
    wishlist.forEach(item => {
      const qty = item.qty, size = item.size, productId = item.productId, product = item.product
      let currentSize = productSizes.filter((ps) => ps.value === Number(size) && ps.productId === productId)
      var cart = localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : [];
      let oldCart = [...cart];

      if (currentSize[0].quantity >= size) {
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
      } else {
        localStorage.setItem("cart", JSON.stringify(oldCart));
        alert.show(`Error!`, {
          type: 'error',
        });
      }
    });

    var cart = JSON.parse(localStorage.getItem("cart")),
      cartQty = 0
    if (cart) {
      cart.forEach((element) => {
        cartQty += parseInt(element.qty);
      });
    }
    updateCartItem(cartQty);
    alert.show(`Add all to cart successfully!`, {
      type: 'success',
    });
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
          {
            wishlist && wishlist.length
              ? wishlist.map((item, index) => {
                return (
                  <div key={index}
                    className="col-lg-3 col-md-6 col-sm-6 pb-1 dat__wishlist-item"
                    data-item-id={item.productId}
                    data-item-size={item.size}>
                    <div className="product-item bg-light">
                      <div className="product-img position-relative overflow-hidden">
                        <img className="img-fluid w-100" src={item.productImage ? `/img/product/${item.productImage[0]?.value}` : ``} />
                      </div>
                      <div className="text-center py-4">
                        <Link
                          to={`/product-detail?productId=${item.product.entityId}`}
                          className="h6 text-decoration-none text-truncate"
                        >
                          {item.product.name}
                        </Link>
                        <p className={`wishlist-sku`}>
                          <strong>SKU: </strong>
                          {item.product.sku}
                        </p>
                        <p className={`wishlist-size`}>
                          <strong>Size: </strong>
                          {item.size}
                        </p>
                        <div className="d-flex align-items-center justify-content-center">
                          <h5>
                            {item.product.price
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                            VND
                          </h5>
                        </div>
                        <div className="wishlist-box__qty">
                          <div className="input-group wishlist-input-group__qty quantity" style={{ width: "100px" }}>
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
                        <button className="btn btn-primary mt-2 my-wishlist-btn" onClick={() => addToCart(item)}>
                          <i className="fa fa-shopping-cart mr-1"></i> Add To Cart
                        </button>
                        <button className="btn btn-primary mt-2 my-wishlist-btn" onClick={removeItem}>
                          <i className="fa fa-eraser mr-1"></i> Remove item
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
              : <div className="container-fluid">
                These is no item in wishlist
              </div>
          }

        </div>
        <div className="px-xl-5">
          <button className="btn btn-primary mt-2 mr-2" onClick={() => navigate("/")}>Continue Shopping</button>
          {
            wishlist && wishlist.length
              ?
              <button className="btn btn-primary mt-2" onClick={() => addAllToCart()}>Add All To Cart</button>
              :
              <></>
          }
        </div>
      </div>
    </>
  );
};

export default Wishlist;