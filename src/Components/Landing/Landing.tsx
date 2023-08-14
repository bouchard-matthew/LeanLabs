"use client";

import { Container, ImageSlider } from "../../Design";

const Landing = () => {
  var items = [];
  for (let i = 0; i < 6; i++) {
    items.push("https://picsum.photos/600/600");
  }
  return (
    <Container>
      <ImageSlider width={600} height={600} images={items} />
    </Container>
  );
};

export default Landing;
