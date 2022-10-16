import { useEffect, useState } from "react";

function Navigation() {
  const [isClickMenu, setIsClickMenu] = useState(false);

  useEffect(() => {
    const handleScroll = (event) => {
      setIsClickMenu(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header">
      <div onClick={() => setIsClickMenu(!isClickMenu)} id={"menu-btn"} className={!isClickMenu ? "fas fa-bars" : "fas fa-times"}></div>
      <a href="#" className="logo">
        coffee <i className="fas fa-mug-hot"></i>
      </a>

      <nav className={isClickMenu ? "navbar active" : "navbar"}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#menu">Menu</a>
        <a href="#review">Review</a>
        <a href="#book">Book</a>
      </nav>

      <a href="#" className="btn">
        book a table
      </a>
    </header>
  );
}

export default Navigation;
