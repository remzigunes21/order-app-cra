import React from "react";
import { Footer } from "../../components";
import { HomeSection, AboutSection, ReviewSection, BookSection, MenuSection } from "../../containers";

function HomePage() {
  return (
    <>
      <HomeSection />
      <AboutSection />
      <MenuSection />
      <ReviewSection />
      <BookSection />
      <Footer />
    </>
  );
}

export default HomePage;
