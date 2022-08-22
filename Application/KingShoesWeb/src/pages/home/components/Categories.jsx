import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, getCategories] = useState([]);
  const fetchData = () => {
    var config = {
      method: "get",
      url: "http://localhost:8080/KingShoesApi/api/categories/get-all",
    };
    axios(config)
      .then((response) => {
        var config2 = {
          method: "get",
          url: "http://localhost:8080/KingShoesApi/api/products/get-all",
        };
        axios(config2)
          .then((res) => {
            var cateData = [];
            response.data.forEach((e) => {
              cateData.push({
                entityId: e.entityId,
                name: e.name,
                status: e.status,
                count: res.data.filter((x) => x.categoryId == e.entityId)
                  .length,
              });
            });
            getCategories(cateData);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container-fluid pt-5">
      <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
        <span className="bg-secondary pr-3">Categories</span>
      </h2>
      <div className="row px-xl-5 pb-3">
        {categories
          ? categories
            .filter((x) => x.entityId <= 8)
            .map((item, i) => (
              <div key={i} className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <Link to={`product-list?category=${item.entityId}`} className="text-decoration-none">
                  <div className="cat-item d-flex align-items-center mb-4">
                    <div
                      className="overflow-hidden"
                      style={{ width: "150px", height: "auto" }}
                    >
                      <img className="img-fluid" src="/img/test/adidas.jpg" />
                    </div>
                    <div className="flex-fill pl-3">
                      <h6>{item.name}</h6>
                      <small className="text-body">{item.count} Products</small>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
};

export default Categories;
