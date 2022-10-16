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

      <section class="review" id="review">
        <h1 class="heading">
          {" "}
          reviews <span>what people says</span>{" "}
        </h1>

        <div class="swiper review-slider">
          <div class="swiper-wrapper">
            <div class="swiper-slide box">
              <i class="fas fa-quote-left"></i>
              <i class="fas fa-quote-right"></i>
              <img src={process.env.PUBLIC_URL + "image/pic-1.png"} alt="" />
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aliquid eveniet qui, similique aut sit.</p>
              <h3>john deo</h3>
              <span>satisfied client</span>
            </div>

            <div class="swiper-slide box">
              <i class="fas fa-quote-left"></i>
              <i class="fas fa-quote-right"></i>
              <img src={process.env.PUBLIC_URL + "image/pic-2.png"} alt="" />
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aliquid eveniet qui, similique aut sit.</p>
              <h3>john deo</h3>
              <span>satisfied client</span>
            </div>

            <div class="swiper-slide box">
              <i class="fas fa-quote-left"></i>
              <i class="fas fa-quote-right"></i>
              <img src={process.env.PUBLIC_URL + "image/pic-3.png"} alt="" />
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aliquid eveniet qui, similique aut sit.</p>
              <h3>john deo</h3>
              <span>satisfied client</span>
            </div>

            <div class="swiper-slide box">
              <i class="fas fa-quote-left"></i>
              <i class="fas fa-quote-right"></i>
              <img src={process.env.PUBLIC_URL + "image/pic-4.png"} alt="" />
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aliquid eveniet qui, similique aut sit.</p>
              <h3>john deo</h3>
              <span>satisfied client</span>
            </div>
          </div>

          <div class="swiper-pagination"></div>
        </div>
      </section>

      <section class="book" id="book">
        <h1 class="heading">
          {" "}
          booking <span>reserve a table</span>{" "}
        </h1>

        <form action="">
          <input type="text" placeholder="your name" class="box" />
          <input type="email" placeholder="your email" class="box" />
          <input type="number" placeholder="your number" class="box" />

          <textarea name="" placeholder="your message" class="box" id="" cols="30" rows="10"></textarea>

          <input type="submit" value="send message" class="btn" />
        </form>
      </section>

      <section class="footer">
        <div class="box-container">
          <div class="box">
            <h3>our branches</h3>
            <a href="#">
              {" "}
              <i class="fas fa-arrow-right"></i> india{" "}
            </a>
            <a href="#">
              {" "}
              <i class="fas fa-arrow-right"></i> USA{" "}
            </a>
            <a href="#">
              {" "}
              <i class="fas fa-arrow-right"></i> france{" "}
            </a>
            <a href="#">
              {" "}
              <i class="fas fa-arrow-right"></i> africa{" "}
            </a>
            <a href="#">
              {" "}
              <i class="fas fa-arrow-right"></i> Japan{" "}
            </a>
          </div>

          <div class="box">
            <h3>quick links</h3>
            <a href="#">
              {" "}
              <i class="fas fa-arrow-right"></i> home{" "}
            </a>
            <a href="#">
              {" "}
              <i class="fas fa-arrow-right"></i> about{" "}
            </a>
            <a href="#">
              {" "}
              <i class="fas fa-arrow-right"></i> menu{" "}
            </a>
            <a href="#">
              {" "}
              <i class="fas fa-arrow-right"></i> review{" "}
            </a>
            <a href="#">
              {" "}
              <i class="fas fa-arrow-right"></i> book{" "}
            </a>
          </div>

          <div class="box">
            <h3>contact info</h3>
            <a href="#">
              {" "}
              <i class="fas fa-phone"></i> +123-456-7890{" "}
            </a>
            <a href="#">
              {" "}
              <i class="fas fa-phone"></i> +111-222-3333{" "}
            </a>
            <a href="#">
              {" "}
              <i class="fas fa-envelope"></i> shaikhanas@gmail.com{" "}
            </a>
            <a href="#">
              {" "}
              <i class="fas fa-envelope"></i> mumbai, india = 400104{" "}
            </a>
          </div>

          <div class="box">
            <h3>contact info</h3>
            <a href="#">
              {" "}
              <i class="fab fa-facebook-f"></i> facebook{" "}
            </a>
            <a href="#">
              {" "}
              <i class="fab fa-twitter"></i> twitter{" "}
            </a>
            <a href="#">
              {" "}
              <i class="fab fa-twitter"></i> twitter{" "}
            </a>
            <a href="#">
              {" "}
              <i class="fab fa-instagram"></i> instagram{" "}
            </a>
            <a href="#">
              {" "}
              <i class="fab fa-linkedin"></i> linkedin{" "}
            </a>
          </div>
        </div>

        <div class="credit">
          {" "}
          creatd by <span>mr. web designer</span> | all rights reserved{" "}
        </div>
      </section>
    </>
  );
}

export default HomePage;
