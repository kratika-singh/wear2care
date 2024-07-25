import React from "react";
import Layout from "../components/Layout/Layout";
import Typewriter from "typewriter-effect";
import "../Styles/about.css";
import illustration from "../components/images/about-illustration.png";
import storyImg from "../components/images/story.jpg";
const About = () => {
  return (
    <Layout title={"About us"}>
      <section className="img-container">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Clean Your Closet")
              .pauseFor(500)
              .deleteAll()
              .typeString("Freshen Up Your Style")
              .pauseFor(500)
              .deleteAll()
              .typeString("Donate to Needies")
              .start();
          }}
        />
      </section>

      <section className="mission">
        <h1>Our Mission</h1>
        <h2>
          ❝ We are building a sustainable future of fashion that is affordable
          as well as trendy.❞
        </h2>
        <div>
          <img src={illustration} />
        </div>
        <div className="quote">
          Adoption of a circular economy in india will result in yearly{" "}
          <strong> benefits of ₹40 lakh crore billion by 2050</strong> and a{" "}
          <strong> 44% reduction in greenhouse gas emissions.</strong>
        </div>
      </section>

      <section className="impact">
        <h1>Our Impact</h1>
        <div className="container1">
          <div>
            <i className="fa-solid fa-piggy-bank icon" />
            <span>Cost Effective</span>
            
          </div>

          <div>
            <i class="fa-solid fa-earth-americas icon"></i>
            <span>Community Aid</span>
          </div>

          <div>
            <i class="fa-solid fa-recycle icon"></i>
            <span>Resource Reuse</span>
          </div>
          <div>
            <i class="fa-solid fa-leaf icon"></i>
            <span>Sustainable Fashion</span>
          </div>

          <div>
            <i class="fa-solid fa-money-bill-trend-up icon"></i>
            <span>Circular Economy</span>
          </div>
        </div>
        <p></p>
      </section>

      <section className="story">
        <h1>Our Story</h1>
        <div className="container-story">
          <div>
            <img src={storyImg}/>
          </div>
          <div>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, consequuntur odio aspernatur vitae laborum perferendis fuga quod quas aliquid perspiciatis accusantium rem sunt neque iste, autem ducimus provident atque? Ratione.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, consequuntur odio aspernatur vitae laborum perferendis fuga quod quas aliquid perspiciatis accusantium rem sunt neque iste, autem ducimus provident atque? Ratione
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, consequuntur odio aspernatur vitae laborum perferendis fuga quod quas aliquid perspiciatis accusantium rem sunt neque iste, autem ducimus provident atque? Ratione
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, consequuntur odio aspernatur vitae laborum perferendis fuga quod quas aliquid perspiciatis accusantium rem sunt neque iste, autem ducimus provident atque? Ratione
            </p>
            <h5>-Team Wear2Care</h5>
          </div>
        </div>
      </section>
      <section className="banner">
      <div className="quote">
          We give second life to used clothes. We help you to reduce Carbon footprints,clean out your closet and save money.
      </div>
      </section>
    </Layout>
  );
};

export default About;