import React, { useEffect, useState } from "react";
import axios from "axios";
import useScript from "@/hooks/useScript";
import { ProductItem } from "@/components";

const RelatedProduct = ({ ...props }) => {
  useScript("public/js/related-carousel");

  const { productId } = props;
  const [products, getRelatedProducts] = useState([]);

  const fetchData = () => {
    var config = {
      method: "get",
      url: "http://localhost:8080/KingShoesApi/api/products/get-list-product-enable",
    };
    axios(config)
      .then((response) => {
        var config2 = {
          method: "get",
          url:
            `http://localhost:8080/KingShoesApi/api/related-products/get-by-product-id/${productId}`,
        };
        axios(config2)
          .then((res) => {
            var data = [];
            response.data.forEach((e) => {
              res.data.forEach((x) => {
                if (e.entityId == x.relatedProductId) {
                  data.push(e);
                }
              });
            });
            getRelatedProducts(data);
          })
          .catch((err) => { });
      })
      .catch((err) => { });
  };

  useEffect(() => {
    fetchData();
  }, [productId]);

  return (
    <>
      <div className="container-fluid py-5">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
          <span className="bg-secondary pr-3">You May Also Like</span>
        </h2>
        <div className="row px-xl-5">
          {products
            ? products
              .filter((x, index) => index < 4)
              .map((item, i) => (
                <ProductItem product={item} grid={{ lg: 3, md: 4, sm: 6 }} />
              ))
            : ""}
        </div>
      </div>
    </>
  );
};

export default RelatedProduct;