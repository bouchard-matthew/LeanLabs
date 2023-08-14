"use client";

import { Container } from "../../Design";
import { useParams } from "next/navigation";
import { useProduct } from "../../Hooks/useProduct";
import { ImageSlider } from "../../Design";

const ProductPage = () => {

    const params = useParams();
    const product = useProduct(decodeURI(params.product));
    console.log(product);

    return (
        <Container sx={{ p: 10 }}>
            <ImageSlider height={600} width={600} images={["https://picsum.photos/600/600", "https://picsum.photos/600/600", "https://picsum.photos/600/600"]} />
        </Container>
    );
};

export default ProductPage;