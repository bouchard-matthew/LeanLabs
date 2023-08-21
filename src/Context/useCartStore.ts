import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Product } from "../Types/types";

export interface CartProduct extends Omit<Product, "quantity" | "flavors" | "stock"> {
  quantity: number;
  flavor: string;
}

export type StoreState = {
  cart: CartProduct[];
  addToCart: (product: CartProduct) => void;
};

export const useCartStore = create<StoreState>()(
  persist(
    (set) => ({
      // initial state
      cart: [],

      // methods for manipulating state
      addToCart: (product: CartProduct) => {
        set((state) => ({
          cart: [...state.cart, product],
        }));
      },
    }),
    {
      name: "CartProps",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
