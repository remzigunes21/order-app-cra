import React from "react";
import { Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
function ReviewSection() {
  return (
    <section className="review" id="review">
      <h1 className="heading">
        reviews <span>what people says</span>{" "}
      </h1>

      <Swiper
        spaceBetween={25}
        slidesPerView={3}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        className="swiper review-slider"
      >
            
        <SwiperSlide>
          <div className="swiper-slide box">
            <i className="fas fa-quote-left"></i>
            <i className="fas fa-quote-right"></i>
            <img src={process.env.PUBLIC_URL + "image/pic-1.png"} alt="" />
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aliquid eveniet qui, similique aut sit.</p>
            <h3>john deo</h3>
            <span>satisfied client</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="swiper-slide box">
            <i className="fas fa-quote-left"></i>
            <i className="fas fa-quote-right"></i>
            <img src={process.env.PUBLIC_URL + "image/pic-2.png"} alt="" />
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aliquid eveniet qui, similique aut sit.</p>
            <h3>john deo</h3>
            <span>satisfied client</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide box">
            <i className="fas fa-quote-left"></i>
            <i className="fas fa-quote-right"></i>
            <img src={process.env.PUBLIC_URL + "image/pic-3.png"} alt="" />
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aliquid eveniet qui, similique aut sit.</p>
            <h3>john deo</h3>
            <span>satisfied client</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="swiper-slide box">
            <i className="fas fa-quote-left"></i>
            <i className="fas fa-quote-right"></i>
            <img src={process.env.PUBLIC_URL + "image/pic-4.png"} alt="" />
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aliquid eveniet qui, similique aut sit.</p>
            <h3>john deo</h3>
            <span>satisfied client</span>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* <div className="swiper review-slider">
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
      </div> */}
    </section>
  );
}

export default ReviewSection;
