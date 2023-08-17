import React from "react";
import { Container } from "../../Design";
import { useRouter } from "next/navigation";

const CategoryLanding = () => {
  const location = useRouter();

  return (
    <Container>
      <h3>Categories</h3>
      <button onClick={() => location.push("/shop/category/protein")}>
        Protein
      </button>
      <button onClick={() => location.push("/shop/category/preworkout")}>
        Preworkout
      </button>
    </Container>
  );
};

export default CategoryLanding;
