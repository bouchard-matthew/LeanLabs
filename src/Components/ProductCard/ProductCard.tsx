import React from "react";
import type { Product } from "../../Types/types";
import { Box, Typography } from "@mui/material";
import { ImageSlider } from "../../Design";
import { useRouter } from "next/navigation";

const ProductCard = (product: Product) => {
  const location = useRouter();

  return (
    <Box onClick={() => location.push(`/shop/${product.category}/${product.title}`)}>
      <ImageSlider images={["https://picsum.photos/200/200"]} />
      <Typography variant="h5">{product.title}</Typography>
      <Typography>{product.description}</Typography>
      <Typography>{product.price} / Tub</Typography>
    </Box>
  );
};

export default ProductCard;
