import React, { useEffect, useState } from "react";
import axios from "axios";
import { ProductItem } from "@/components";

const Products = () => {
  const [products, getProducts] = useState([]);
  const fetchData = () => {
    var config = {
      method: "get",
      url: "http://localhost:8080/KingShoesApi/api/products/get-list-product-enable",
    };
    axios(config)
      .then(function (response) {
        var data = [];
        var configGetSize = {
          method: "get",
          url: "http://localhost:8080/KingShoesApi/api/product-sizes/get-all",
        };
        axios(configGetSize)
          .then((res) => {
            response.data.forEach((e) => {
              var sizeData = [];
              res.data.forEach((size) => {
                if (e.entityId == size.productId) {
                  sizeData.push(size);
                }
              });
              data.push({
                ...e,
                size: sizeData,
              });
            });
            getProducts(data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {});
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container-fluid pt-5 pb-3">
      <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
        <span className="bg-secondary pr-3">Featured Products</span>
      </h2>
      <div className="row px-xl-5">
        {products
          ? products
              .filter((x) => x.entityId <= 8)
              .map((item, i) => (
                <ProductItem
                  key={i}
                  product={item}
                  grid={{ lg: 3, md: 4, sm: 6 }}
                />
              ))
          : ""}
      </div>
    </div>
  );
};

export default Products;
