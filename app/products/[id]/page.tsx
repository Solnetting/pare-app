"use client";
import { use, useState } from "react";
import { useRouter } from "next/navigation";
import BottomNav from "@/components/BottomNav";
import { getProduct } from "@/lib/products";
import { useCart } from "@/lib/cart";

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = getProduct(id);
  const router = useRouter();
  const { add } = useCart();
  const [repeat, setRepeat] = useState(true);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return <div style={{ padding: 40, fontFamily: "var(--font-inter)", textAlign: "center", color: "#5a6470" }}>Product not found</div>;
  }

  const price = repeat && product.repeatPrice < product.price ? product.repeatPrice : product.price;

  const handleAdd = () => {
    for (let i = 0; i < qty; i++) add(product, repeat);
    setAdded(true);
    setTimeout(() => { setAdded(false); router.push("/bag"); }, 800);
  };

  return (
    <div style={{ position: "relative", height: "100%", background: "#fbfbf7", display: "flex", flexDirection: "column", overflow: "hidden" }}>
      <div style={{ flex: 1, overflowY: "auto", paddingBottom: 100, scrollbarWidth: "none" }}>

        {/* Header */}
        <div style={{ padding: "20px 20px 0" }}>
          <button onClick={() => router.back()} style={{ display: "flex", alignItems: "center", gap: 6, fontFamily: "var(--font-inter)", fontSize: 14, fontWeight: 600, color: "#1a7a70" }}>
            <span style={{ fontSize: 18 }}>←</span> Back
          </button>
        </div>

        {/* Product hero */}
        <div style={{ margin: "16px 20px 0", background: "white", borderRadius: 16, overflow: "hidden", position: "relative" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={product.image} alt={product.name} style={{ width: "100%", height: 200, objectFit: "contain", padding: 16 }} />
          {/* Gallery dots */}
          <div style={{ display: "flex", justifyContent: "center", gap: 6, paddingBottom: 12 }}>
            {[0, 1, 2].map(i => (
              <div key={i} style={{ width: 8, height: 8, borderRadius: "50%", background: i === 0 ? "#1a7a70" : "#d9dbd5" }} />
            ))}
          </div>
        </div>

        {/* Title + category */}
        <div style={{ padding: "16px 20px 0" }}>
          <h1 style={{ fontFamily: "var(--font-lora)", fontWeight: 600, fontSize: 26, color: "#1a2b47", lineHeight: 1.2 }}>{product.name}</h1>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: 12, color: "#637387", marginTop: 4 }}>
            {product.category} / {product.subtitle}
          </p>
        </div>

        {/* Credentials */}
        <div style={{ display: "flex", gap: 6, padding: "12px 20px 0", flexWrap: "wrap" }}>
          {product.credentials.map(c => (
            <span key={c} style={{ background: "#dbf2ed", borderRadius: 14, padding: "6px 10px", fontFamily: "var(--font-inter)", fontWeight: 600, fontSize: 12, color: "#0d7a6e" }}>
              {c}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "#d9dbd5", margin: "16px 20px" }} />

        {/* Choose how to buy */}
        <div style={{ padding: "0 20px" }}>
          <h2 style={{ fontFamily: "var(--font-lora)", fontWeight: 600, fontSize: 16, color: "#1a2b47", marginBottom: 12 }}>Choose how to buy</h2>
          {/* One-time */}
          <button onClick={() => setRepeat(false)} style={{ width: "100%", display: "flex", alignItems: "center", gap: 12, padding: "10px 0", background: "none", border: "none" }}>
            <div style={{ width: 20, height: 20, borderRadius: "50%", border: `2px solid ${!repeat ? "#1a7a70" : "#d9dbd5"}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              {!repeat && <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#1a7a70" }} />}
            </div>
            <div style={{ flex: 1, textAlign: "left" }}>
              <p style={{ fontFamily: "var(--font-inter)", fontWeight: 600, fontSize: 14, color: "#1a2b47" }}>One-time</p>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: 12, color: "#5c697d" }}>Single purchase</p>
            </div>
            <span style={{ fontFamily: "var(--font-inter)", fontSize: 16, color: "#1f2e45" }}>CHF {product.price.toFixed(2)}</span>
          </button>
          {/* Pare Repeat */}
          {product.repeatPrice < product.price && (
            <button onClick={() => setRepeat(true)} style={{ width: "100%", display: "flex", alignItems: "center", gap: 12, padding: "10px 0", background: "none", border: "none" }}>
              <div style={{ width: 20, height: 20, borderRadius: "50%", border: `2px solid ${repeat ? "#1a7a70" : "#d9dbd5"}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                {repeat && <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#1a7a70" }} />}
              </div>
              <div style={{ flex: 1, textAlign: "left" }}>
                <p style={{ fontFamily: "var(--font-inter)", fontWeight: 600, fontSize: 14, color: "#1a2b47" }}>Pare Repeat</p>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: 12, color: "#5c697d" }}>{product.repeatInterval} · save 10%</p>
              </div>
              <span style={{ fontFamily: "var(--font-inter)", fontWeight: 600, fontSize: 16, color: "#0d7a6e" }}>CHF {product.repeatPrice.toFixed(2)}</span>
            </button>
          )}
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "#d9dbd5", margin: "8px 20px 16px" }} />

        {/* Quantity */}
        <div style={{ padding: "0 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontFamily: "var(--font-lora)", fontWeight: 600, fontSize: 14, color: "#1a2b47" }}>Quantity</span>
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            {[
              { label: "−", action: () => setQty(q => Math.max(1, q - 1)) },
              { label: String(qty), action: () => {} },
              { label: "+", action: () => setQty(q => q + 1) },
            ].map(({ label, action }) => (
              <button key={label} onClick={action} style={{
                width: 34, height: 40, display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "var(--font-inter)", fontWeight: 600, fontSize: 18, color: "#1a2b47",
              }}>
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Add to cart */}
        <div style={{ padding: "16px 20px 0" }}>
          <button onClick={handleAdd} style={{
            width: "100%", height: 44, background: added ? "#0d7a6e" : "#1a7a70",
            color: "white", borderRadius: 8, fontFamily: "var(--font-inter)", fontWeight: 600, fontSize: 14,
            transition: "background 0.2s",
          }}>
            {added ? "Added! ✓" : `Add to cart — CHF ${(price * qty).toFixed(2)}`}
          </button>
        </div>

        {/* Why Pare Chose It */}
        <div style={{ margin: "16px 20px 0", background: "#f5f5ed", borderRadius: 12, padding: "12px 14px" }}>
          <p style={{ fontFamily: "var(--font-lora)", fontWeight: 600, fontSize: 14, color: "#1a2b47", marginBottom: 8 }}>Why Pare Chose It</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {product.proof.map(p => (
              <p key={p} style={{ fontFamily: "var(--font-inter)", fontSize: 12, color: "#5c697d", lineHeight: 1.5 }}>• {p}</p>
            ))}
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
