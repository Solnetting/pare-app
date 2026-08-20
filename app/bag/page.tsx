"use client";
import { useState } from "react";
import BottomNav from "@/components/BottomNav";
import { useCart } from "@/lib/cart";

export default function BagPage() {
  const { items, remove, total, count } = useCart();
  const [checking, setChecking] = useState(false);
  const [done, setDone] = useState(false);

  const handleCheckout = () => {
    setChecking(true);
    setTimeout(() => { setChecking(false); setDone(true); }, 1500);
  };

  return (
    <div style={{ position: "relative", height: "100%", background: "#fbfbf7", display: "flex", flexDirection: "column", overflow: "hidden" }}>
      <div style={{ flex: 1, overflowY: "auto", paddingBottom: 100, scrollbarWidth: "none" }}>

        {/* Header */}
        <div style={{ padding: "20px 20px 0" }}>
          <h1 style={{ fontFamily: "var(--font-lora)", fontWeight: 600, fontSize: 24, color: "#1f2e45" }}>
            Your bag {count > 0 && <span style={{ fontSize: 16, color: "#5a6470", fontWeight: 400 }}>· {count} item{count > 1 ? "s" : ""}</span>}
          </h1>
        </div>

        {done ? (
          <div style={{ padding: "60px 20px", textAlign: "center" }}>
            <div style={{ fontSize: 56, marginBottom: 20 }}>✓</div>
            <h2 style={{ fontFamily: "var(--font-lora)", fontWeight: 600, fontSize: 22, color: "#1a7a70", marginBottom: 12 }}>Order placed!</h2>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: 14, color: "#5a6470" }}>Your essentials are on their way. Thoughtfully packed.</p>
          </div>
        ) : items.length === 0 ? (
          <div style={{ padding: "60px 20px", textAlign: "center" }}>
            <div style={{ fontSize: 48, marginBottom: 20 }}>🛍</div>
            <p style={{ fontFamily: "var(--font-lora)", fontWeight: 600, fontSize: 18, color: "#1f2e45", marginBottom: 8 }}>Your bag is empty</p>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: 14, color: "#5a6470" }}>Browse our curated essentials to get started.</p>
          </div>
        ) : (
          <>
            {/* Items */}
            <div style={{ padding: "20px 20px 0", display: "flex", flexDirection: "column", gap: 12 }}>
              {items.map(({ product, qty, repeat }) => (
                <div key={product.id} style={{ display: "flex", gap: 12, background: "white", border: "1px solid #d9dbd5", borderRadius: 16, padding: 12 }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={product.image} alt={product.name} style={{ width: 72, height: 72, objectFit: "contain", borderRadius: 8, background: "#f5f5ed", flexShrink: 0 }} />
                  <div style={{ flex: 1 }}>
                    <p style={{ fontFamily: "var(--font-lora)", fontWeight: 600, fontSize: 14, color: "#1f2e45" }}>{product.name}</p>
                    {repeat && product.repeatPrice < product.price && (
                      <span style={{ background: "#ddf2ef", borderRadius: 100, padding: "2px 8px", fontSize: 10, fontWeight: 600, color: "#0d7a70", display: "inline-block", marginTop: 3 }}>
                        Pare Repeat · {product.repeatInterval}
                      </span>
                    )}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 8 }}>
                      <p style={{ fontFamily: "var(--font-inter)", fontWeight: 600, fontSize: 15, color: "#147a6e" }}>
                        CHF {((repeat && product.repeatPrice < product.price ? product.repeatPrice : product.price) * qty).toFixed(2)}
                        {qty > 1 && <span style={{ fontSize: 11, color: "#5a6470", fontWeight: 400 }}> × {qty}</span>}
                      </p>
                      <button onClick={() => remove(product.id)} style={{ fontFamily: "var(--font-inter)", fontSize: 12, color: "#b8401a", fontWeight: 500 }}>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div style={{ margin: "24px 20px 0", background: "white", border: "1px solid #d9dbd5", borderRadius: 16, padding: "16px 16px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                <span style={{ fontFamily: "var(--font-inter)", fontSize: 13, color: "#5a6470" }}>Subtotal</span>
                <span style={{ fontFamily: "var(--font-inter)", fontWeight: 600, fontSize: 13, color: "#1f2e45" }}>CHF {total.toFixed(2)}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                <span style={{ fontFamily: "var(--font-inter)", fontSize: 13, color: "#5a6470" }}>Delivery</span>
                <span style={{ fontFamily: "var(--font-inter)", fontWeight: 600, fontSize: 13, color: "#1a7a70" }}>Free</span>
              </div>
              <div style={{ height: 1, background: "#e8e8e4", margin: "12px 0" }} />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontFamily: "var(--font-lora)", fontWeight: 600, fontSize: 16, color: "#1f2e45" }}>Total</span>
                <span style={{ fontFamily: "var(--font-lora)", fontWeight: 600, fontSize: 18, color: "#1f2e45" }}>CHF {total.toFixed(2)}</span>
              </div>
            </div>

            {/* Checkout button */}
            <div style={{ padding: "16px 20px 0" }}>
              <button onClick={handleCheckout} style={{
                width: "100%", height: 44, background: checking ? "#0d7a6e" : "#1a7a70",
                color: "white", borderRadius: 8, fontFamily: "var(--font-inter)", fontWeight: 600, fontSize: 14,
              }}>
                {checking ? "Processing…" : "Proceed to checkout"}
              </button>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: 11, color: "#5a6470", textAlign: "center", marginTop: 10 }}>
                Free delivery · Secure payment · Easy returns
              </p>
            </div>
          </>
        )}
      </div>
      <BottomNav />
    </div>
  );
}
