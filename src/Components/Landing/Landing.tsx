"use client";

import { Container, ImageSlider } from "../../Design";

const Landing = () => {
  var items = [];
  for (let i = 0; i < 6; i++) {
    items.push("https://picsum.photos/200/200");
  }
  return (
    <Container>
      <ImageSlider images={items} />
    </Container>
  );
};

export default Landing;
