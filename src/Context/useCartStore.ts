import { create } from "zustand";
import { Product } from "../Types/types";

export interface CartProduct extends Omit<Product, "quantity" | "flavors" | "stock"> {
  quantity: number;
  flavor: string;
}

export type StoreState = {
  cart: CartProduct[];
  addToCart: (product: CartProduct) => void;
};

export const useCartStore = create<StoreState>((set) => ({
  // initial state
  cart: [],

  // methods for manipulating state
  addToCart: (product: CartProduct) => {
    set((state) => ({
      cart: [...state.cart, product],
    }));
  },
}));
