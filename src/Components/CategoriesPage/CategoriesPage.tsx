import { usePathname } from "next/navigation";
import { ProductGrid } from "../../Design/ProductGrid";
import { useCategoryProducts } from "../../Hooks/useCategoryProducts";

const CategoriesPage = () => {
  const path = usePathname().split("/shop/category/")[1];

  return <ProductGrid products={useCategoryProducts(path)} />;
};

export default CategoriesPage;
