import React from "react";
import Container from "../../../components/defaults/Container";
import BestSellers from "../../../components/footwear/BestSellers";
import Categories from "../../../components/footwear/Categories";
import Hero from "../../../components/footwear/Hero";
import MiniGallery from "../../../components/footwear/MiniGallery";
import Reviews from "../../../components/footwear/Reviews";

const FootwearHome = () => {
  return (
    <Container active="footwear">
      <Hero />
      <MiniGallery />
      <Categories />
      <BestSellers />
      <Reviews />
    </Container>
  );
};

export default FootwearHome;
