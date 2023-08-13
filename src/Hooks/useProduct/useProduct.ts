import db from "../../Config/firebaseConfig";
import { collection, onSnapshot, where, query } from "firebase/firestore";
import { useState, useEffect } from "react";
import { Product } from "../../Types/types";

const useProduct = (title: String) => {
  const [products, setProducts] = useState<Product[]>([]);
  const docRef = collection(db, "products");
  const productQuery = query(docRef, where("title", '==', title));

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

export default useProduct;
