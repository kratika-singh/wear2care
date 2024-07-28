import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Layout from "./../components/Layout/Layout";
import kratika from "../components/images/kratika.jpg";
import ishika from "../components/images/ishika.jpg";
import dishika from "../components/images/dishika.jpg";
import sustaible from "../components/images/sustainable.png";
import SweetAlert2 from "react-sweetalert2";
import "../Styles/contact.css";

const Contact = () => {
  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm("service_79wmvx8", "template_dmv45dd", form.current, {
  //     publicKey: "BM0sgEWbDInFQo0d6",
  //   });
  //   e.target.reset();
  //};
  const form = useRef();
  const [swalProps, setSwalProps] = useState({});
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_d56bore", "template_6tnve2a", form.current, {
        publicKey: "h_nWsl9h6rgm_XIPp",
      })
      .then(
        () => {
          setSwalProps({
            show: true,
            title: "SUCCESS!",
            text: "Message sent successfully",
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
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
                I'm a web developer who is passionate about applying technology
                to advance environmental and humanitarian causes. With the
                intention of improving both society and the environment, I
                concentrate on making work that is socially and sustainably
                significant.
              </div>
              <div className="social-links">
                <a
                  href="https://www.instagram.com/_kratikaaa__"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-instagram" />
                </a>
                <a
                  href="https://www.linkedin.com/in/kratika-singh-/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-linkedin" />
                </a>
                <a
                  href="mailto:kratika3770@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-solid fa-envelope" />
                </a>
                <a
                  href="https://github.com/kratika-singh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
                I am a machine learning engineer focused on utilizing AI to
                solve environmental and humanitarian challenges. My goal is to
                create solutions that are both socially responsible and
                sustainable, contributing to a better world through innovative
                technology.
              </div>
              <div className="social-links">
<<<<<<< HEAD
                <a href="https://www.instagram.com/ishika_casley">
                  <i className="fa-brands fa-instagram" />
                </a>
                <a href="https://www.linkedin.com/in/ishika-casley/">
                  <i className="fa-brands fa-linkedin" />
                </a>
                <a href="mailto:ishikacasley764@gmail.com">
                  <i className="fa-solid fa-envelope" />
                </a>
                <a href="https://github.com/Ishikacasley14">
=======
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-instagram" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-linkedin" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fa-solid fa-envelope" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
>>>>>>> df4f73d9645d71ac4ff6c3357b31b8e282fff032
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
                I'm a tech enthusiast committed to sustainable development and
                environmental stewardship. I use technology to create innovative
                solutions that benefit people and the planet, combining my
                technical skills with a passion for nature to promote a
<<<<<<< HEAD
                healthier, more sustainable world.{" "}
=======
                healthier, more sustainable world,
>>>>>>> df4f73d9645d71ac4ff6c3357b31b8e282fff032
              </div>
              <div className="social-links">
                <a
                  href="https://www.instagram.com/_dishika.ruhela_"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-instagram" />
                </a>
                <a
                  href="https://www.linkedin.com/in/dishika-ruhela-09/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-linkedin" />
                </a>
                <a
                  href="mailto:druhela09@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-solid fa-envelope" />
                </a>
                <a
                  href="https://github.com/dishika-ruhela"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
            <p>
              Sustainable fashion promotes environmentally friendly, ethically
              produced, and socially responsible clothing and accessories. It
              emphasizes the use of organic, recycled, and renewable materials,
              and advocates for fair wages and safe working conditions for
              workers. This movement contrasts with fast fashion by encouraging
              mindful consumption and prioritizing quality over quantity.
              Sustainable fashion also includes circular practices like
              recycling and upcycling, aiming to reduce waste and resource
              consumption. As awareness grows, both consumers and brands are
              increasingly embracing sustainable practices to address
              environmental and social issues.
            </p>
          </div>
        </div>
      </section>
      <section className="contact-main">
        <div className="content-contact">
          <h1>Contact Us</h1>
          <p>Reach Out, Make a Difference </p>
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
                <a
                  href="https://www.instagram.com/wear2care2/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/wear2care2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa-brands fa-x-twitter"></i>
                </a>
              </li>
              <li>

                <a href="https://www.linkedin.com/company/wear2care">
                  <i class="fa-brands fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCPMgIoaBhYEpoqiOsRF-vLg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa-brands fa-youtube"></i>
                </a>
              </li>
            </ul>
          </div>

          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <h2>Send Message</h2>
              <div className="input-box">
                <input type="text" name="user_name" required="required" />
                <span>Full Name</span>
              </div>

              <div className="input-box">
                <input type="text" name="user_email" required="required" />
                <span>Email</span>
              </div>

              <div className="input-box">
                <textarea name="message" required="required"></textarea>
                <span>Type your message</span>
              </div>

              <div className="input-box">
                <input type="submit" value="Send" />
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
