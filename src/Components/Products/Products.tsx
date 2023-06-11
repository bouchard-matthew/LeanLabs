import React from "react";
import { useProducts } from "../../Hooks/useProducts";
import { ProductCard } from "../ProductCard";

import { Grid } from "@mui/material";

import type { Product } from "../../Types/types";

const Products = () => {
  return (
    <>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
        {Array.from(useProducts()).map((product: Product) => (
          <Grid item xs={2} sm={4} md={4} key={product.title}>
            <ProductCard {...product} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Products;
