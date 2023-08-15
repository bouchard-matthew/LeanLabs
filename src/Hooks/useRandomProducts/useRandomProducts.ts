import db from "../../Config/firebaseConfig";
import {
  collection,
  onSnapshot,
  where,
  query,
  limit,
} from "firebase/firestore";
import { useState, useEffect } from "react";
import { Product } from "../../Types/types";

const useRandomProducts = (category?: String) => {
  const [products, setProducts] = useState<Product[]>([]);
  const random = Math.floor(Math.random() * 18);
  const docRef = collection(db, "products");
  const productQuery = category
    ? query(docRef, where("category", "==", category), limit(3))
    : query(docRef, where("stock", "<=", random), limit(3));

  useEffect(() => {
    const unsubscribe = onSnapshot(productQuery, (querySnapshot) => {
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

export default useRandomProducts;
