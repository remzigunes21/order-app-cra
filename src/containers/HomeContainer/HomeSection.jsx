import React, { useState } from "react";

function HomeSection() {
  const [selectedImage, setSelectedImage] = useState("1");
  return (
    <section class="home" id="home">
      <div class="row">
        <div class="content">
          <h3>fresh coffee in the morning</h3>
          <a href="#" class="btn">
            buy one now
          </a>
        </div>

        <div class="image">
          {selectedImage === "1" ? (
            <img src={process.env.PUBLIC_URL + "/image/home-img-1.png"} alt="" />
          ) : selectedImage === "2" ? (
            <img onClick={() => setSelectedImage("2")} src={process.env.PUBLIC_URL + "/image/home-img-2.png"} alt="" />
          ) : (
            <img onClick={() => setSelectedImage("3")} src={process.env.PUBLIC_URL + "/image/home-img-3.png"} alt="" />
          )}
        </div>
      </div>

      <div class="image-slider">
        <img onClick={() => setSelectedImage("1")} src={process.env.PUBLIC_URL + "/image/home-img-1.png"} alt="" />
        <img onClick={() => setSelectedImage("2")} src={process.env.PUBLIC_URL + "/image/home-img-2.png"} alt="" />
        <img onClick={() => setSelectedImage("3")} src={process.env.PUBLIC_URL + "/image/home-img-3.png"} alt="" />
      </div>
    </section>
  );
}

export default HomeSection;
