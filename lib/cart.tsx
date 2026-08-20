"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import type { Product } from "./products";

type CartItem = { product: Product; qty: number; repeat: boolean };
type CartCtx = {
  items: CartItem[];
  add: (product: Product, repeat: boolean) => void;
  remove: (id: string) => void;
  total: number;
  count: number;
};

const Ctx = createContext<CartCtx>({ items: [], add: () => {}, remove: () => {}, total: 0, count: 0 });

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const add = (product: Product, repeat: boolean) => {
    setItems(prev => {
      const existing = prev.find(i => i.product.id === product.id);
      if (existing) return prev.map(i => i.product.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { product, qty: 1, repeat }];
    });
  };

  const remove = (id: string) => setItems(prev => prev.filter(i => i.product.id !== id));

  const total = items.reduce((s, i) => s + (i.repeat ? i.product.repeatPrice : i.product.price) * i.qty, 0);
  const count = items.reduce((s, i) => s + i.qty, 0);

  return <Ctx.Provider value={{ items, add, remove, total, count }}>{children}</Ctx.Provider>;
}

export const useCart = () => useContext(Ctx);
