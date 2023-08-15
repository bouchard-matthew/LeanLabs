import React from "react";
import type { Product } from "../../Types/types";
import { Box, Typography } from "@mui/material";
import { ImageSlider } from "../../Design";
import { useRouter } from "next/navigation";
import Photo from "../../../Photos/proteinContainer.png";

const ProductCard = (product: Product) => {
  const location = useRouter();

  return (
    <Box
      mx={8}
      onClick={() =>
        location.push(`/shop/category/${product.category}/${product.title}`)
      }
    >
      <ImageSlider images={[Photo, Photo, Photo]} />
      <Typography fontSize={18} fontWeight={600} variant="h5">
        {product.title}
      </Typography>
      <Typography fontSize={14}>{product.description}</Typography>
      <Typography fontSize={14}>{product.price} / Tub</Typography>
    </Box>
  );
};

export default ProductCard;
