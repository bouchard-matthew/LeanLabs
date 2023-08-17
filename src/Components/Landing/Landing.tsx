"use client";

import { Container, ImageSlider } from "../../Design";
import { useRandomProducts } from "../../Hooks/useRandomProducts";
import { ProductGrid } from "../../Design/ProductGrid";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import SupplementPhoto from "../../../Photos/whey.webp";
import SupplementPhoto2 from "../../../Photos/Supplement Photo.webp";

const Landing = () => {
  var items = [];
  items.push(SupplementPhoto);
  items.push(SupplementPhoto2);

  useRandomProducts();

  return (
    <Container flexDirection={"column"}>
      <Box
        sx={{
          width: "100%",
        }}
      >
        <ImageSlider width={800} height={600} images={items} />
      </Box>

      <Box
        sx={{
          height: { xs: "50%", md: "600px" },
          m: 3,
        }}
      >
        <Typography
          sx={{
            mt: 10,
            mb: 5,
            fontWeight: "bold",
            fontSize: 30,
          }}
        >
          Best Sellers:
        </Typography>
        <ProductGrid products={useRandomProducts()} />
      </Box>
    </Container>
  );
};

export default Landing;
