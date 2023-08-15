"use client";

import { Container, ImageSlider } from "../../Design";
import { useRandomProducts } from "../../Hooks/useRandomProducts";
import { ProductGrid } from "../../Design/ProductGrid";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const Landing = () => {
  var items = [];
  for (let i = 0; i < 6; i++) {
    items.push("https://picsum.photos/600/600");
  }

  useRandomProducts();

  return (
    <Container flexDirection={"column"}>
      <ImageSlider width={600} height={600} images={items} />

      <Typography
        sx={{
          mt: 10,
          fontWeight: "bold",
          fontSize: 30,
        }}
      >
        Best Sellers:
      </Typography>
      <Box
        sx={{
          m: 3,
        }}
      >
        <ProductGrid products={useRandomProducts()} />
      </Box>
    </Container>
  );
};

export default Landing;
