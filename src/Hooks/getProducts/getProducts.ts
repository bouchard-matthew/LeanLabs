const getProducts = async () => {
  const getProducts = await fetch(
    "https://firestore.googleapis.com/v1/projects/leanlabs-fcd3f/databases/(default)/documents/products?pageSize=100"
  );
  const response = await getProducts.json();

  return response.documents;
};

export default getProducts;
