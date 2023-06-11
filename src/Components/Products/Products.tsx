import React from "react";
import { useAllProducts } from "../../Hooks/useAllProducts";
import { ProductGrid } from "../../Design/ProductGrid";

const Products = () => {
  return <ProductGrid products={useAllProducts()} />;
};

export default Products;
