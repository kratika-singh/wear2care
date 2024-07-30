import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/cart.js";
import axios from "axios";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../context/auth.js";

const ProductDetails = () => {
  const [auth] = useAuth();
  const navigate = useNavigate();
  const [cart, setCart] = useCart();
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
      <div className="product-details-container">
        <div className="main-container">
          <div className="img-container1">
            <img
              src={`/api/v1/product/product-photo/${product._id}`}
              alt={product.name}
            />
          </div>
          <div className="text-container">
            <h1 className="text-center">Product Details</h1>
            <h6>Name: {product.name}</h6>
            <h6>Description: {product.description}</h6>
            <h6>Price: Rs. {product.price}</h6>
            <h6>Category: {product?.category?.name}</h6>
            <h6>Condition: {product.condition}</h6>
            <h6>Brand: {product.brand}</h6>
            <h6>Size: {product.size}</h6>
            {auth.user && (
                  <>
            <button
              className=""
              onClick={() => {
                setCart([...cart, product]);
                localStorage.setItem(
                  "cart",
                  JSON.stringify([...cart, product])
                );
                toast.success("Item added");
              }}
            >
              Add to cart
            </button>
            </>
            )}
          </div>
        </div>
      </div>

      <div className="similar-product">
        {relatedProducts?.length > 0 && (
          <>
            <h1>Similar Products</h1>
            <p>You may also like</p>
          </>
        )}
        <div className="p-container">
          {relatedProducts?.filter(p => p.donation == false).map((p) => (
            <div key={p._id} className="col-md-4 col-sm-6 mb-4">
            <div className="card h-100">
              <img
                src={`/api/v1/product/product-photo/${p._id}`}
                className="card-img-top card_img"
                alt={p.name}
              />
              <div className="card-body">
                <h5 className="card-title">{p.name}</h5>
                <p className="card-text">
                  {p.description.substring(0, 30)}
                </p>
                <p className="card-text">Rs. {p.price}</p>
                <button
                  href="#"
                  class="btn  btn-secondary ms-1"
                  onClick={() => navigate(`/product/${p.slug}`)}
                >
                  More Details
                </button>
                {auth.user && (
                  <>
                    <button
                      href="#"
                      class="btn btn-secondary ms-1"
                      onClick={() => {
                        setCart([...cart, p]);
                        localStorage.setItem(
                          cart,
                          JSON.stringify([...cart, p])
                        );
                        toast.success("Item added");
                      }}
                    >
                      ADD TO CART
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
        </div>
        </div>
    </Layout>
  );
};

export default ProductDetails;
