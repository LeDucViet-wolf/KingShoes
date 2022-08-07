import React, { useEffect } from "react";
import Sidebar from "./components/Sidebar";
import { Breadcrumb } from "../../components";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllProduct } from "../../store/product/action";

const ProductList = () => {
  const dispatch = useDispatch();

  const { products, product, error } = useSelector((state) => ({
    products: state.productReducer.products,
    product: state.productReducer.product,
    error: state.productReducer.error,
  }));

  const onPaging = {
    itemsPerPage: 0,
    numberPage: 0,
    currentPage: 0,
    startIndexItem: 0,
    endIndexItem: 0,
  };

  // const rowsPerPage = products.slice(startIndex, endIndex + 1)

  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);

  return (
    <>
      <Breadcrumb
        pageUrl="/product-list"
        pageName="Shop"
        pageNameChild="Shop List"
      />
      <div className="container-fluid">
        <div className="row px-xl-5">
          <Sidebar />

          {/* Shop Product */}
          <div className="col-lg-9 col-md-8">
            <div className="row pb-3">
              <div className="col-12 pb-1">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <div>
                    <button className="btn btn-sm btn-light">
                      <i className="fa fa-th-large"></i>
                    </button>
                    <button className="btn btn-sm btn-light ml-2">
                      <i className="fa fa-bars"></i>
                    </button>
                  </div>
                  <div className="ml-2">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-light dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        Sorting
                      </button>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#">
                          Latest
                        </a>
                        <a className="dropdown-item" href="#">
                          Popularity
                        </a>
                        <a className="dropdown-item" href="#">
                          Best Rating
                        </a>
                      </div>
                    </div>
                    <div className="btn-group ml-2">
                      <button
                        type="button"
                        className="btn btn-sm btn-light dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        Showing
                      </button>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#">
                          10
                        </a>
                        <a className="dropdown-item" href="#">
                          20
                        </a>
                        <a className="dropdown-item" href="#">
                          30
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
                <div className="product-item bg-light mb-4">
                  <div className="product-img position-relative overflow-hidden">
                    <img
                      className="img-fluid w-100"
                      src="img/product-1.jpg"
                      alt=""
                    />
                    <div className="product-action">
                      <a className="btn btn-outline-dark btn-square" href="">
                        <i className="fa fa-shopping-cart"></i>
                      </a>
                      <a className="btn btn-outline-dark btn-square" href="">
                        <i className="far fa-heart"></i>
                      </a>
                      <a className="btn btn-outline-dark btn-square" href="">
                        <i className="fa fa-sync-alt"></i>
                      </a>
                      <NavLink
                        to="/product-detail/1"
                        className="btn btn-outline-dark btn-square"
                        href=""
                      >
                        <i className="fa fa-search"></i>
                      </NavLink>
                    </div>
                  </div>
                  <div className="text-center py-4">
                    <a
                      className="h6 text-decoration-none text-truncate"
                      href=""
                    >
                      Product Name Goes Here
                    </a>
                    <div className="d-flex align-items-center justify-content-center mt-2">
                      <h5>$123.00</h5>
                      <h6 className="text-muted ml-2">
                        <del>$123.00</del>
                      </h6>
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

              <div className="col-12">
                <nav>
                  <ul className="pagination justify-content-center">
                    <li className="page-item disabled">
                      <a className="page-link" href="#">
                        Previous
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
