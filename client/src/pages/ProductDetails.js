import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Radio } from "antd";

const ProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);

  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
      getSimilarProduct(data?.product._id, data?.product.category?._id);
    } catch (error) {
      console.log(error);
    }
  };

  const getSimilarProduct = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/related-product/${pid}/${cid}`
      );
      setRelatedProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="container mt-2">
        <div className="row">
          <div className="col-md-6">
            <img
              src={`/api/v1/product/product-photo/${product._id}`}
              className="card-img-top"
              alt={product.name}
              height="300"
              width="350"
            />
          </div>
          <div className="col-md-6">
            <h1 className="text-center">Product Details</h1>
            <h6>Name: {product.name}</h6>
            <h6>Description: {product.description}</h6>
            <h6>Price: {product.price}</h6>
            <h6>Category: {product?.category?.name}</h6>
            <button className="btn btn-secondary ms-1">ADD TO CART</button>
          </div>
        </div>
      </div>

      <div className="container mt-3">
        <h1 className="text-center">Similar Products</h1>
        <div className="d-flex flex-column">
          <Radio.Group onChange={(e) => console.log(e.target.value)}>
            {relatedProducts?.map((p) => (
              <Radio key={p._id} value={p._id}>
                {p.name}
              </Radio>
            ))}
          </Radio.Group>
        </div>
        <div className="d-flex flex-column">
          <button
            className="btn btn-danger mt-3"
            onClick={() => window.location.reload()}
          >
            RESET FILTERS
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
