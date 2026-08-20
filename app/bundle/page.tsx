"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/lib/cart";
import { getProduct } from "@/lib/products";

const VARIANTS = [
  {
    key: "starter",
    label: "Starter",
    sub: "2 items",
    price: "CHF 24.80",
    save: "Save CHF 4",
    items: [
      { img: "/bundle-p1.png", name: "Laundry sheets",   sub: "60 loads · plastic-light",     price: "CHF 18.90", id: "laundry-sheets" },
      { img: "/bundle-p2.png", name: "Dish concentrate", sub: "Refill pouch · verified",       price: "CHF 11.90", id: "dish-soap-concentrate" },
    ],
  },
  {
    key: "home-reset",
    label: "Home Reset",
    sub: "3 items",
    price: "CHF 34.80",
    save: "Save CHF 8 · 18.7%",
    items: [
      { img: "/bundle-p1.png", name: "Laundry sheets",   sub: "60 loads · plastic-light",      price: "CHF 18.90", id: "laundry-sheets" },
      { img: "/bundle-p2.png", name: "Dish concentrate", sub: "Refill pouch · verified",        price: "CHF 11.90", id: "dish-soap-concentrate" },
      { img: "/bundle-p3.png", name: "Dish brush",       sub: "Beechwood · replaceable head",  price: "CHF 12.00", id: null },
    ],
  },
  {
    key: "full-kit",
    label: "Full kit",
    sub: "5 items",
    price: "CHF 52.00",
    save: "Save CHF 14 · 21%",
    items: [
      { img: "/bundle-p1.png", name: "Laundry sheets",   sub: "60 loads · plastic-light",      price: "CHF 18.90", id: "laundry-sheets" },
      { img: "/bundle-p2.png", name: "Dish concentrate", sub: "Refill pouch · verified",        price: "CHF 11.90", id: "dish-soap-concentrate" },
      { img: "/bundle-p3.png", name: "Dish brush",       sub: "Beechwood · replaceable head",  price: "CHF 12.00", id: null },
      { img: "/bundle-p1.png", name: "Hand soap refill", sub: "500ml · biodegradable",          price: "CHF 9.50",  id: "hand-soap-refill" },
      { img: "/bundle-p2.png", name: "All-purpose spray", sub: "Concentrate · refillable",     price: "CHF 11.90", id: "all-purpose-cleaner" },
    ],
  },
];

export default function BundlePage() {
  const router = useRouter();
  const { add } = useCart();
  const [activeKey, setActiveKey] = useState("home-reset");

  const variant = VARIANTS.find(v => v.key === activeKey)!;

  const handleShop = () => {
    variant.items.forEach(item => {
      if (item.id) {
        const p = getProduct(item.id);
        if (p) add(p, false);
      }
    });
    router.push("/bag");
  };

  return (
    <div style={{ position: "relative", height: "100%", background: "#fbfbf7", display: "flex", flexDirection: "column", overflow: "hidden" }}>
      <div style={{ flex: 1, overflowY: "auto", paddingBottom: 148, scrollbarWidth: "none" }}>

        {/* Logo */}
        <div style={{ padding: "20px 20px 0" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="Pare" style={{ height: 20, width: "auto" }} />
        </div>

        {/* Heading */}
        <div style={{ padding: "16px 20px 0", display: "flex", flexDirection: "column", gap: 8 }}>
          <h1 style={{ fontFamily: "var(--font-lora)", fontWeight: 600, fontSize: 28, color: "#1f2e45", lineHeight: 1.2 }}>
            The Home Reset
          </h1>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: 14, color: "#5a6470", lineHeight: 1.5 }}>
            A considered bundle of three everyday essentials.
          </p>
        </div>

        {/* Variant chips */}
        <div style={{ display: "flex", gap: 8, padding: "14px 20px 0", overflowX: "auto", scrollbarWidth: "none" }}>
          {VARIANTS.map(v => {
            const active = v.key === activeKey;
            return (
              <button
                key={v.key}
                type="button"
                onClick={() => setActiveKey(v.key)}
                style={{
                  flexShrink: 0,
                  display: "flex", flexDirection: "column", alignItems: "flex-start",
                  padding: "10px 14px",
                  borderRadius: 12,
                  border: active ? "1.5px solid #1a7a70" : "1.5px solid #d9dbd5",
                  background: active ? "#eef7f6" : "white",
                  cursor: "pointer",
                  gap: 2,
                }}
              >
                <span style={{ fontFamily: "var(--font-inter)", fontWeight: 600, fontSize: 13, color: active ? "#1a7a70" : "#1f2e45" }}>{v.label}</span>
                <span style={{ fontFamily: "var(--font-inter)", fontSize: 11, color: "#5a6470" }}>{v.sub}</span>
              </button>
            );
          })}
        </div>

        {/* Lifestyle hero */}
        <div style={{ margin: "16px 20px 0", borderRadius: 16, overflow: "hidden", height: 210 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/bundle-hero.png" alt="The Home Reset" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        </div>

        {/* Bundle card */}
        <div style={{ margin: "16px 20px 0", display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <p style={{ fontFamily: "var(--font-lora)", fontWeight: 600, fontSize: 16, color: "#1f2e45" }}>The {variant.label} bundle</p>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: 14, color: "#5a6470" }}>
              {variant.items.length} essentials. One lower price.
            </p>
          </div>

          {/* Price row */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontFamily: "var(--font-inter)", fontWeight: 700, fontSize: 24, color: "#1a7a70" }}>{variant.price}</span>
            <div style={{ background: "#fce8c9", borderRadius: 999, padding: "8px 12px" }}>
              <span style={{ fontFamily: "var(--font-inter)", fontWeight: 600, fontSize: 13, color: "#1a7a70" }}>{variant.save}</span>
            </div>
          </div>

          <div style={{ height: 1, background: "#d9dbd5" }} />

          {/* Items */}
          {variant.items.map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
              <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#1a7a70", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                <span style={{ color: "white", fontSize: 11, fontWeight: 700 }}>✓</span>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.img} alt={item.name} style={{ width: 52, height: 52, objectFit: "contain", borderRadius: 6, background: "#f1f1ec", flexShrink: 0 }} />
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 3 }}>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: 16, color: "#1f2e45" }}>{item.name}</p>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: 12, color: "#5a6470" }}>{item.sub}</p>
              </div>
              <p style={{ fontFamily: "var(--font-inter)", fontWeight: 600, fontSize: 14, color: "#1a7a70", flexShrink: 0 }}>{item.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Sticky bottom CTAs */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        background: "rgba(255,255,255,0.92)",
        backdropFilter: "blur(12px)",
        padding: "20px 20px 44px",
        display: "flex", flexDirection: "column", gap: 12,
        borderTop: "1px solid rgba(217,219,213,0.5)",
      }}>
        <button
          type="button"
          onClick={handleShop}
          style={{ width: "100%", height: 48, background: "#1a7a70", color: "white", borderRadius: 8, fontFamily: "var(--font-inter)", fontWeight: 600, fontSize: 14, cursor: "pointer" }}
        >
          Shop the {variant.label} — {variant.price}
        </button>
        <button
          type="button"
          onClick={() => router.push("/")}
          style={{ width: "100%", height: 44, background: "white", color: "#1f2e45", borderRadius: 8, border: "1px solid #699b95", fontFamily: "var(--font-inter)", fontWeight: 600, fontSize: 14, cursor: "pointer" }}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
