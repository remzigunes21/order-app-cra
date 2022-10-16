import React from "react";

function MenuSection() {
  return (
    <section className="menu" id="menu">
      <h1 className="heading">
        {" "}
        our menu <span>popular menu</span>{" "}
      </h1>

      <div className="box-container">
        <a href="#" className="box">
          <img src={process.env.PUBLIC_URL + "image/menu-1.png"} alt="" />
          <div className="content">
            <h3>our special coffee</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, id.</p>
            <span>$8.99</span>
          </div>
        </a>

        <a href="#" className="box">
          <img src={process.env.PUBLIC_URL + "image/menu-2.png"} alt="" />
          <div className="content">
            <h3>our special coffee</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, id.</p>
            <span>$8.99</span>
          </div>
        </a>

        <a href="#" className="box">
          <img src={process.env.PUBLIC_URL + "image/menu-3.png"} alt="" />
          <div className="content">
            <h3>our special coffee</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, id.</p>
            <span>$8.99</span>
          </div>
        </a>

        <a href="#" className="box">
          <img src={process.env.PUBLIC_URL + "image/menu-4.png"} alt="" />
          <div className="content">
            <h3>our special coffee</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, id.</p>
            <span>$8.99</span>
          </div>
        </a>

        <a href="#" className="box">
          <img src={process.env.PUBLIC_URL + "image/menu-5.png"} alt="" />
          <div className="content">
            <h3>our special coffee</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, id.</p>
            <span>$8.99</span>
          </div>
        </a>

        <a href="#" className="box">
          <img src={process.env.PUBLIC_URL + "image/menu-6.png"} alt="" />
          <div className="content">
            <h3>our special coffee</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, id.</p>
            <span>$8.99</span>
          </div>
        </a>
      </div>
    </section>
  );
}

export default MenuSection;
