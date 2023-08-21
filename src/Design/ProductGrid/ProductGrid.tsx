import { Grid } from "@mui/material";
import { Product } from "../../Types/types";
import { ProductCard } from "../../Components/ProductCard";

interface Props {
  products: Product[];
}

const ProductGrid = ({ products }: Props) => {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 2, sm: 8, md: 12 }}
    >
      {Array.from(products).map((product: Product) => (
        <Grid item xs={2} sm={4} md={4} key={product.title}>
          <ProductCard {...product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductGrid;
