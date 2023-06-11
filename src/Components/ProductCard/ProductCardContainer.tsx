import React from "react";
import ProductCard from "./ProductCard";
import { Product } from "../../Types/types";

const ProductCardContainer = (product: Product) => {
  return <ProductCard {...product} />;
};

export default ProductCardContainer;
