import React from "react";

function Footer() {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3>our branches</h3>
          <a href="#">
            {" "}
            <i className="fas fa-arrow-right"></i> türkiye{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fas fa-arrow-right"></i> USA{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fas fa-arrow-right"></i> france{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fas fa-arrow-right"></i> spain{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fas fa-arrow-right"></i> Japan{" "}
          </a>
        </div>

        <div className="box">
          <h3>quick links</h3>
          <a href="#">
            {" "}
            <i className="fas fa-arrow-right"></i> home{" "}
          </a>
          <a href="#about">
            {" "}
            <i className="fas fa-arrow-right"></i> about{" "}
          </a>
          <a href="#menu">
            {" "}
            <i className="fas fa-arrow-right"></i> menu{" "}
          </a>
          <a href="#review">
            {" "}
            <i className="fas fa-arrow-right"></i> review
          </a>
          <a href="#book">
            {" "}
            <i className="fas fa-arrow-right"></i> book
          </a>
        </div>

        <div className="box">
          <h3>contact info</h3>
          <a href="#">
            {" "}
            <i className="fas fa-phone"></i>555 444 333 12 55{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fas fa-phone"></i> 555 444 333 12 23{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fas fa-envelope"></i> remzigunes80@gmail.com{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fas fa-envelope"></i> istanbul, Türkiye = 3400{" "}
          </a>
        </div>

        <div className="box">
          <h3>social media accounts</h3>
          <a href="#">
            {" "}
            <i className="fab fa-facebook-f"></i> facebook{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fab fa-twitter"></i> twitter{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fab fa-twitter"></i> twitter{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fab fa-instagram"></i> instagram{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fab fa-linkedin"></i> linkedin{" "}
          </a>
        </div>
      </div>

      <div className="credit">
        {" "}
        creatd by <span style={{fontWeight:"bold"}}>Gunes Design</span> | all rights reserved{" "}
      </div>
    </section>
  );
}

export default Footer;
