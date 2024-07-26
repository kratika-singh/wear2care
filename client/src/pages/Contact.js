import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Layout from "./../components/Layout/Layout";
import kratika from "../components/images/kratika.jpg";
import ishika from "../components/images/ishika.jpg";
import dishika from "../components/images/dishika.jpg";
import sustaible from "../components/images/sustainable.png";
import "../Styles/contact.css";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_79wmvx8", "template_dmv45dd", form.current, {
      publicKey: "BM0sgEWbDInFQo0d6",
    });
    e.target.reset();
  };
  return (
    <Layout title={"Contact us"}>
      <section className="img-container"></section>
      <section className="container-team">
        <h1>Meet Our team</h1>
        <div className="sub-container">
          <div className="teams">
            <img src={kratika} />
            <div>
              <div className="name">Kratika</div>
              <div className="design">MCA Student</div>
              <div className="about">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Impedit cumque placeat vero. Ducimus odit eum quam similique
                veritatis nostrum, illo blanditiis qui quaerat deserunt at animi
                ipsum ab corrupti quos!
              </div>
              <div className="social-links">
                <a href="#">
                  <i className="fa-brands fa-instagram" />
                </a>
                <a href="#">
                  <i className="fa-brands fa-linkedin" />
                </a>
                <a href="#">
                  <i className="fa-solid fa-envelope" />
                </a>
                <a href="#">
                  <i className="fa-brands fa-github" />
                </a>
              </div>
            </div>
          </div>

          <div className="teams">
            <img src={ishika} />
            <div>
              <div className="name">Ishika</div>
              <div className="design">MCA Student</div>
              <div className="about">
                {" "}
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Impedit cumque placeat vero. Ducimus odit eum quam similique
                veritatis nostrum, illo blanditiis qui quaerat deserunt at animi
                ipsum ab corrupti quos!
              </div>
              <div className="social-links">
                <a href="#">
                  <i className="fa-brands fa-instagram" />
                </a>
                <a href="#">
                  <i className="fa-brands fa-linkedin" />
                </a>
                <a href="#">
                  <i className="fa-solid fa-envelope" />
                </a>
                <a href="#">
                  <i className="fa-brands fa-github" />
                </a>
              </div>
            </div>
          </div>

          <div className="teams">
            <img src={dishika} />
            <div>
              <div className="name">Dishika</div>
              <div className="design">MCA Student</div>
              <div className="about">
                {" "}
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Impedit cumque placeat vero. Ducimus odit eum quam similique
                veritatis nostrum, illo blanditiis qui quaerat deserunt at animi
                ipsum ab corrupti quos!
              </div>
              <div className="social-links">
                <a href="#">
                  <i className="fa-brands fa-instagram" />
                </a>
                <a href="#">
                  <i className="fa-brands fa-linkedin" />
                </a>
                <a href="#">
                  <i className="fa-solid fa-envelope" />
                </a>
                <a href="#">
                  <i className="fa-brands fa-github" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-sus">
          <div>
            <img src={sustaible}></img>
          </div>
          <div>
            <h2>What is Sustaible Fashion?</h2>
            <p>Sustainable fashion promotes environmentally friendly, ethically produced, and socially responsible clothing and accessories. It emphasizes the use of organic, recycled, and renewable materials, and advocates for fair wages and safe working conditions for workers. This movement contrasts with fast fashion by encouraging mindful consumption and prioritizing quality over quantity. Sustainable fashion also includes circular practices like recycling and upcycling, aiming to reduce waste and resource consumption. As awareness grows, both consumers and brands are increasingly embracing sustainable practices to address environmental and social issues.
</p>
          </div>
        </div>
      </section>
      <section className="contact-main">
        <div className="content-contact">
          <h1>Contact Us</h1>
          <p>
            lorem klorecc asjdhasida jsdadwehwbs jfhsdfuhg xjsahdauisdha
            dhiofefedwd sjsdsdsd{" "}
          </p>
        </div>

        <div className="container-contact">
          <div className="contact-info">
            <div className="box">
              <div className="icons">
                <b></b>
                <i class="fa-solid fa-location-dot"></i>
              </div>
              <div className="text">
                <h3>Address</h3>
                <p>
                  Kashmere Gate,
                  <br /> Delhi <br /> 110009
                </p>
              </div>
            </div>

            <div className="box">
              <div className="icons">
                <b></b>
                <i class="fa-solid fa-phone"></i>
              </div>
              <div className="text">
                <h3>Phone</h3>
                <p>94523456</p>
              </div>
            </div>

            <div className="box">
              <div className="icons">
                <b></b>
                <i class="fa-solid fa-envelope"></i>
              </div>
              <div className="text">
                <h3>Email</h3>
                <p>wearcare625@gmail.com</p>
              </div>
            </div>
            <h2 className="txt">Connect</h2>
            <ul className="sci">
              <li>
                <a href="">
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i class="fa-brands fa-x-twitter"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i class="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i class="fa-brands fa-youtube"></i>
                </a>
              </li>
            </ul>
          </div>

          <div className="contact-form">
            <form>
              <h2>Send Message</h2>
              <div className="input-box">
               <input type="text" name="" required="required" />
               <span>Full Name</span>
              </div>

              <div className="input-box">
               <input type="text" name="" required="required" />
               <span>Email</span>
              </div>

              <div className="input-box">
               <textarea required="required"></textarea>
               <span>Type your message</span>
              </div>

              <div className="input-box">
              <input type="submit" value="Send"/>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
