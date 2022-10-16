import React from "react";

function HomePage() {
  return (
    <>
      <section class="home" id="home">
        <div class="row">
          <div class="content">
            <h3>fresh coffee in the morning</h3>
            <a href="#" class="btn">
              buy one now
            </a>
          </div>

          <div class="image">
            <img src={process.env.PUBLIC_URL + "/image/home-img-1.png"} alt="" />
          </div>
        </div>

        <div class="image-slider">
          <img src={process.env.PUBLIC_URL + "/image/home-img-1.png"} alt="" />
          <img src={process.env.PUBLIC_URL + "/image/home-img-2.png"} alt="" />
          <img src={process.env.PUBLIC_URL + "/image/home-img-3.png"} alt="" />
        </div>
      </section>

      <section class="about" id="about">
        <h1 class="heading">
          {" "}
          about us <span>why choose us</span>{" "}
        </h1>

        <div class="row">
          <div class="image">
            <img src={process.env.PUBLIC_URL + "image/about-img.png"} alt="" />
          </div>

          <div class="content">
            <h3 class="title">what's make our coffee special!</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse et commodi, ad, doloremque obcaecati maxime quam minima dolore
              mollitia saepe quos, debitis incidunt. Itaque possimus adipisci ipsam harum at autem.
            </p>
            <a href="#" class="btn">
              read more
            </a>
            <div class="icons-container">
              <div class="icons">
                <img src={process.env.PUBLIC_URL + "image/about-icon-1.png"} alt="" />
                <h3>quality coffee</h3>
              </div>
              <div class="icons">
                <img src={process.env.PUBLIC_URL + "image/about-icon-2.png"} alt="" />
                <h3>our branches</h3>
              </div>
              <div class="icons">
                <img src={process.env.PUBLIC_URL + "image/about-icon-3.png"} alt="" />
                <h3>free delivery</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
