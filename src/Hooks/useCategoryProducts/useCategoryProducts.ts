import db from "../../Config/firebaseConfig";
import { collection, onSnapshot, where, query } from "firebase/firestore";
import { useState, useEffect } from "react";
import { Product } from "../../Types/types";

const useCategoryProducts = (path: string) => {
  const [products, setProducts] = useState<Product[]>([]);
  const docRef = query(collection(db, "products"), where("category", "==", path));

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

export default useCategoryProducts;
