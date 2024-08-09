import React from "react";
import Layout from "./../components/Layout/Layout";
import { useSearch } from "../context/search";
import { useCart } from "../context/cart.js";
import { useAuth } from "../context/auth.js";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const Search = () => {
  const [values] = useSearch();
  const navigate = useNavigate();
  const [auth] = useAuth();
  const [cart, setCart] = useCart();
  return (
    <Layout title={"Search results"}>
      <div className="container">
        <div className="text-center">
          <h1>Search Resuts</h1>
          <h6>
            {values?.results.length < 1
              ? "No Products Found"
              : `Found ${values?.results.length}`}
          </h6>
          <div className="d-flex flex-wrap mt-4">
            {values
              ?.filter((p) => p.donation == false)
              .results.map((p) => (
                <div key={p._id} className="col-md-4 col-sm-6 mb-4">
                  <div className="card h-100">
                    <img
                      src={`https://wear2care.onrender.com/api/v1/product/product-photo/${p._id}`}
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
      </div>
    </Layout>
  );
};

export default Search;
