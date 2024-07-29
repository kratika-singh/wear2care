import React from "react";
import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";

const Footer = () => {
  const categories = useCategory();

  // Limit to top 5 categories
  const topCategories = categories?.slice(0, 5);

  return (
    <div className="footer">
      <div className="footer-section">
        <div className="sci1">
          <Link to="/about">
            <h2>About us</h2>
          </Link>

          <p> We are building a sustainable future of fashion that is affordable
          as well as trendy.</p>
          <img src="../../../images/logo.png" alt="Logo" className="logo" />
        </div>
        <div className="sci2">
          <h2>Follow Us</h2>
          <ul className="social-links">
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-facebook"></i>
                <span className="social-text">Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-x-twitter"></i>
                <span className="social-text">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-youtube"></i>
                <span className="social-text">YouTube</span>
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-instagram"></i>
                <span className="social-text">Instagram</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="sci4">
          <h2>Shop Us</h2>
          <ul className="category-links">
            <li>
              <Link to="/categories">All Categories</Link>
            </li>
            {topCategories?.map((c) => (
              <li key={c.id}>
                <Link to={`/category/${c.slug}`}>{c.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="sci5">
          <Link to="/contact">
            <h2>Contact Us</h2>
          </Link>

          <ul>
            <li>
              <span>
                <i className="fa-solid fa-phone"></i>
              </span>
              <p>
                <a href="#">+91-42424242</a>
              </p>
            </li>
            <li>
              <span>
                <i className="fa-solid fa-envelope"></i>
              </span>
              <p>
                <a href="mailto:wear2care91430@gmail.com">
                  wear2care91430@gmail.com
                </a>
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyrightText">
        <p> © Copyright 2024 Wear2care. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
