"use client";

import { Container } from "../../Design";
import { useParams } from "next/navigation";
import { useProduct } from "../../Hooks/useProduct";
import { ProductCard } from "../ProductCard";

const ProductPage = () => {

    const params = useParams();
    const product = useProduct(decodeURI(params.product));
    console.log(product);

    return (
        <Container sx={{ p: 10 }}>
            Product
        </Container>
    );
};

export default ProductPage;