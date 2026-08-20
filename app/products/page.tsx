"use client";
import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import BottomNav from "@/components/BottomNav";
import { PRODUCTS, CATEGORIES, type Category } from "@/lib/products";

function ProductsContent() {
  const params = useSearchParams();
  const initial = (params.get("cat") as Category) || null;
  const [active, setActive] = useState<Category | null>(initial);
  const [search, setSearch] = useState("");

  const filtered = PRODUCTS.filter(p => {
    const matchCat = !active || p.category === active;
    const matchSearch = !search || p.name.toLowerCase().includes(search.toLowerCase()) || p.subtitle.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div style={{ position: "relative", height: "100%", background: "#fbfbf7", display: "flex", flexDirection: "column", overflow: "hidden" }}>
      <div style={{ flex: 1, overflowY: "auto", paddingBottom: 100, scrollbarWidth: "none" }}>

        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 20px 0" }}>
          <h1 style={{ fontFamily: "var(--font-lora)", fontWeight: 600, fontSize: 24, color: "#1f304a" }}>All products</h1>
          <div style={{ display: "flex", alignItems: "center", gap: 8, background: "white", border: "1px solid #d9dbd5", borderRadius: 100, padding: "8px 14px" }}>
            <span style={{ fontSize: 16, color: "#5a6470" }}>⌕</span>
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Find products"
              style={{ border: "none", outline: "none", fontFamily: "var(--font-inter)", fontSize: 13, color: "#1f2e45", background: "transparent", width: 110 }}
            />
          </div>
        </div>

        {/* Category tabs */}
        <div style={{ display: "flex", gap: 8, padding: "16px 20px 0" }}>
          <button
            onClick={() => setActive(null)}
            style={{
              fontFamily: "var(--font-inter)", fontSize: 13, padding: "8px 16px",
              borderRadius: 8, border: "1px solid #d9dbd5",
              background: !active ? "#1a7a70" : "white", color: !active ? "white" : "#1f2e45",
              fontWeight: !active ? 600 : 400,
            }}
          >
            All
          </button>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(active === cat ? null : cat)}
              style={{
                fontFamily: "var(--font-inter)", fontSize: 13, padding: "8px 16px",
                borderRadius: 8, border: "1px solid #d9dbd5",
                background: active === cat ? "#1a7a70" : "white",
                color: active === cat ? "white" : "#1f2e45",
                fontWeight: active === cat ? 600 : 400,
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Filter bar */}
        <div style={{ display: "flex", margin: "12px 20px 0", border: "1px solid #d9dbd5", borderRadius: 8, overflow: "hidden" }}>
          {["Filters", "Sort", "Made nearby"].map((f, i) => (
            <button key={f} style={{
              flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 4,
              padding: "8px 4px", fontFamily: "var(--font-inter)", fontSize: 12, color: "#1f2e45",
              borderLeft: i > 0 ? "1px solid #d9dbd5" : "none", background: "white",
            }}>
              {i === 0 && <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M3 6H21M6 12H18M10 18H14" stroke="#1f2e45" strokeWidth="1.5" strokeLinecap="round"/></svg>}
              {i === 1 && <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M3 9L7 5L11 9M7 5V19M13 15L17 19L21 15M17 19V5" stroke="#1f2e45" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
              {i === 2 && <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="10" r="4" stroke="#1f2e45" strokeWidth="1.5"/><path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z" stroke="#1f2e45" strokeWidth="1.5"/></svg>}
              {f}
            </button>
          ))}
        </div>

        {/* Count */}
        <p style={{ fontFamily: "var(--font-inter)", fontSize: 12, color: "#5c697a", opacity: 0.8, padding: "16px 20px 0" }}>
          {active ? `${active} · ` : "All products · "}{filtered.length} products
        </p>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, padding: "12px 20px 0" }}>
          {filtered.map(p => (
            <Link key={p.id} href={`/products/${p.id}`} style={{ border: "1px solid #d9dbd5", borderRadius: 8, overflow: "hidden", background: "white" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.image} alt={p.name} style={{ width: "100%", aspectRatio: "1/0.88", objectFit: "cover" }} />
              <div style={{ padding: "8px 8px 12px" }}>
                <p style={{ fontFamily: "var(--font-lora)", fontWeight: 600, fontSize: 13, color: "#5a6470", lineHeight: 1.3 }}>{p.name}</p>
                <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 5 }}>
                  <span style={{ fontFamily: "var(--font-inter)", fontWeight: 600, fontSize: 14, color: "#147a6e" }}>
                    CHF {(p.repeatPrice < p.price ? p.repeatPrice : p.price).toFixed(2)}
                  </span>
                  {p.repeatPrice < p.price && (
                    <span style={{ background: "#fae5bf", borderRadius: 4, padding: "1px 5px", fontSize: 10, fontWeight: 600, color: "#147a6e" }}>-10%</span>
                  )}
                </div>
                {p.repeatPrice < p.price && (
                  <p style={{ fontFamily: "var(--font-inter)", fontSize: 11, color: "#147a6e", marginTop: 2 }}>Pare Repeat · {p.repeatInterval}</p>
                )}
                <p style={{ fontFamily: "var(--font-inter)", fontSize: 11, color: "#59667a", marginTop: 3 }}>{p.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <BottomNav />
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div style={{ padding: 20, fontFamily: "var(--font-inter)" }}>Loading…</div>}>
      <ProductsContent />
    </Suspense>
  );
}
