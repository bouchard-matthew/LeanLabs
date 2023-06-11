import db from "../../Config/firebaseConfig";
import { collection, onSnapshot } from "firebase/firestore";
import { useState, useEffect } from "react";
import { Product } from "../../Types/types";

const useAllProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const docRef = collection(db, "products");

  useEffect(() => {
    const unsubscribe = onSnapshot(docRef, (querySnapshot) => {
      const tasks = querySnapshot.docs.map((doc) => {
        return doc.data() as Product;
      });
      setProducts(tasks);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return products;
};

export default useAllProducts;
