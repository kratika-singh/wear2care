import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout/Layout.js";
import axios from "axios";
import { Checkbox, Radio } from "antd";
import { Prices } from "../components/Prices.js";
import { useCart } from "../context/cart.js";
import { useAuth } from "../context/auth.js";
import toast from "react-hot-toast";
import CarouselHome from "../components/homeComponents/CarouselHome.js";
import Features from "../components/homeComponents/Features.js";
import card1 from "../components/images/card1.png";
import card2 from "../components/images/card2.jpg";
import card3 from "../components/images/card3.jpg";
import genz from "../components/images/genz.png";

import "../Styles/home.css";

const HomePage = () => {
  const navigate = useNavigate();
  const [auth] = useAuth();
  const [cart, setCart] = useCart();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  //get all cat
  const getAllcategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllcategory();
    getTotal();
  }, []);

  //get prodcuts
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts(data.products);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  //get total count
  const getTotal = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/product-count");
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);
  // load more
  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts([...products, ...data?.products]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  //filter by cat

  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };
  useEffect(() => {
    if (!checked.length || !radio.length) getAllProducts();
  }, [checked.length, radio.length]);

  useEffect(() => {
    if (checked.length || radio.length) filterProduct();
  }, [checked, radio]);

  //get filtered product
  const filterProduct = async () => {
    try {
      const { data } = await axios.post("/api/v1/product/product-filters", {
        checked,
        radio,
      });
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout title={"All Product - Best Offers"}>
      <CarouselHome />
      <section className="Feature-Container">
        <h1 className="text-center"> Our Features</h1>
        <span>
          Choose us for quality, affordable fashion that supports sustainability
          and giving
        </span>

        <div>
          <Features
            imageUrl={card1}
            title={"Donate"}
            text={"Contribute to our partnered NGOs"}
          />
          <Features
            imageUrl={card2}
            title={"Sell"}
            text={"List your gently used clothes for sale and earn money"}
          />
          <Features
            imageUrl={card3}
            title={"Buy"}
            text={
              "Purchase high-quality second-hand clothes at affordable prices"
            }
          />
        </div>
      </section>
      <section>
        <div className="container-sus">
          <div>
            <img src={genz}></img>
          </div>
          <div className="container-genz">
            <h1 className="highlight">The Consumer Gap</h1>
            <p>
              Gen Z is always on the lookout for unique finds. Makers make them
              - but don't have a single platform to sell them on.
              <span>Until now.</span>
            </p>
            {!auth.user ? (
              <>
                <button onClick={() => navigate("/login")}>Sell Now</button>
              </>
            ) : (
              <>
                <button onClick={() => navigate("/dashboard/user/sell")}>
                  Sell Now
                </button>
              </>
            )}
          </div>
        </div>
      </section>
      <div className="all-product">
        <div class="container-cat-fil">
          <div>
            <h4 className="text-center">Filter By Category</h4>
            <div className="d-flex flex-column">
              {categories?.map((c) => (
                <Checkbox
                  key={c._id}
                  onChange={(e) => handleFilter(e.target.checked, c._id)}
                >
                  {c.name}
                </Checkbox>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-center">Filter By Price</h4>
            <div className="d-flex flex-column">
              <Radio.Group onChange={(e) => setRadio(e.target.value)}>
                {Prices?.map((p) => (
                  <div key={p._id}>
                    <Radio value={p.array}>{p.name}</Radio>
                  </div>
                ))}
              </Radio.Group>
            </div>
            <div className="d-flex flex-column">
              <button onClick={() => window.location.reload()}>
                RESET FILTERS
              </button>
            </div>
          </div>
        </div>
        <div className="products">
          <h1 className="text-center">All Products</h1>
          <span className="subtitle">Choose what You Like</span>
          <div className="row">
            {products?.filter(p => p.donation == false).map((p) => (
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
          <div className="m-2 p-3">
            {products && products.length < total && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setPage(page + 1);
                }}
              >
                {loading ? "Loading..." : "Load More"}
              </button>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
