"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import BottomNav from "@/components/BottomNav";
import { PRODUCTS } from "@/lib/products";

const FEATURED = PRODUCTS.slice(0, 5);
const CATEGORIES = [
  { key: "Clean", label: "Clean", sub: "Laundry + home", bg: "#f1f1ed", img: "/cat-clean.png" },
  { key: "Care",  label: "Care",  sub: "Hair + body",    bg: "#fae8cc", img: "/cat-care.png"  },
  { key: "Carry", label: "Carry", sub: "Bottles + travel", bg: "#dbf2ed", img: "/cat-carry.png" },
];

export default function HomePage() {
  const router = useRouter();
  return (
    <div style={{ position: "relative", height: "100%", background: "#fafaf7", display: "flex", flexDirection: "column", overflow: "hidden" }}>
      <div style={{ flex: 1, overflowY: "auto", paddingBottom: 100, scrollbarWidth: "none" }}>

        {/* Header */}
        <div style={{ padding: "20px 20px 0" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="Pare" style={{ height: 20, width: "auto" }} />
        </div>

        {/* Greeting */}
        <div style={{ padding: "20px 20px 0" }}>
          <h1 style={{ fontFamily: "var(--font-lora)", fontWeight: 600, fontSize: 26, color: "#1f2e45", lineHeight: 1.2 }}>Good morning, Lea</h1>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: 13, color: "#5a6470", marginTop: 4 }}>Thoughtfully sown. Carefully chosen.</p>
        </div>

        {/* Campaign bundle banner */}
        <div style={{ margin: "20px 20px 0", borderRadius: 16, background: "#fae5c4", overflow: "hidden", border: "1px solid #d6d9cc", height: 180, position: "relative" }}>
          <div style={{ flex: "0 0 170px", padding: 14, display: "flex", flexDirection: "column", justifyContent: "space-between", position: "absolute", top: 0, left: 0, bottom: 0, width: 170, zIndex: 1 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
              <p style={{ fontFamily: "var(--font-inter)", fontWeight: 700, fontSize: 11, letterSpacing: "0.07em", color: "#0d7a70", textTransform: "uppercase" }}>The Home Reset</p>
              <p style={{ fontFamily: "var(--font-inter)", fontWeight: 600, fontSize: 18, lineHeight: 1.2, color: "#1f2e45" }}>3 everyday essentials.</p>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: 11, color: "#596673" }}>Laundry · home · care</p>
            </div>
            <span style={{ fontFamily: "var(--font-inter)", fontWeight: 600, fontSize: 14, color: "#0d7a70" }}>Shop bundle →</span>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/bundle-img.png" alt="" style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "55%", height: "100%", objectFit: "cover" }} />
          <div style={{
            position: "absolute", left: 138, top: 30,
            width: 64, height: 64, borderRadius: "50%",
            background: "#b8401a", border: "2px solid #fae5c4",
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
            fontFamily: "var(--font-inter)", fontWeight: 700, color: "white", textAlign: "center", zIndex: 2,
          }}>
            <span style={{ fontSize: 9, letterSpacing: "0.06em" }}>SAVE</span>
            <span style={{ fontSize: 15, lineHeight: 1.1 }}>−CHF 8</span>
          </div>
          {/* Full-card tap target */}
          <Link href="/bundle" style={{ position: "absolute", inset: 0, zIndex: 10 }} aria-label="Shop the Home Reset bundle" />
        </div>

        {/* Pare Repeat entry */}
        <div style={{ padding: "20px 20px 0" }}>
          <p style={{ fontFamily: "var(--font-lora)", fontWeight: 600, fontSize: 16, color: "#1f2e45", marginBottom: 12 }}>Your Pare Repeat</p>
          <Link href="/bag" style={{ display: "flex", alignItems: "center", gap: 12, background: "white", border: "1px solid #d6ded6", borderRadius: 16, padding: "12px 16px" }}>
            <div style={{ width: 30, height: 30, borderRadius: "50%", background: "#ddf2ef", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 4V1L8 5L12 9V6C15.31 6 18 8.69 18 12C18 13.01 17.75 13.97 17.3 14.8L18.76 16.26C19.54 15.03 20 13.57 20 12C20 7.58 16.42 4 12 4ZM12 18C8.69 18 6 15.31 6 12C6 10.99 6.25 10.03 6.7 9.2L5.24 7.74C4.46 8.97 4 10.43 4 12C4 16.42 7.58 20 12 20V23L16 19L12 15V18Z" fill="#1a7a70"/>
              </svg>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontFamily: "var(--font-inter)", fontWeight: 600, fontSize: 15, color: "#1f2e45" }}>Pare Repeat</span>
                <span style={{ background: "#1a7a70", color: "white", fontSize: 10, fontWeight: 700, borderRadius: 100, padding: "1px 6px" }}>3</span>
              </div>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: 12, color: "#596673", marginTop: 2 }}>3 active subscriptions</p>
            </div>
            <span style={{ fontFamily: "var(--font-inter)", fontWeight: 600, fontSize: 18, color: "#0d7a70" }}>→</span>
          </Link>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "#e8e8e4", margin: "24px 0" }} />

        {/* Categories */}
        <div style={{ padding: "0 20px" }}>
          <p style={{ fontFamily: "var(--font-lora)", fontWeight: 600, fontSize: 16, color: "#1f2e45", marginBottom: 12 }}>Shop by Category</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {CATEGORIES.map(cat => (
              <Link key={cat.key} href={`/products?cat=${cat.key}`} style={{ display: "flex", alignItems: "center", gap: 12, background: cat.bg, border: "1px solid #d9dbd5", borderRadius: 20, padding: 12 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={cat.img} alt={cat.label} style={{ width: 80, height: 80, objectFit: "cover", borderRadius: 12, flexShrink: 0 }} />
                <div style={{ flex: 1 }}>
                  <p style={{ fontFamily: "var(--font-inter)", fontWeight: 600, fontSize: 15, color: "#1f2e45" }}>{cat.label}</p>
                  <p style={{ fontFamily: "var(--font-inter)", fontSize: 11, color: "#5a6470", marginTop: 3 }}>{cat.sub}</p>
                </div>
                <span style={{ fontFamily: "var(--font-inter)", fontWeight: 600, fontSize: 16, color: "#1a7a70", marginRight: 4 }}>→</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "#e8e8e4", margin: "24px 0" }} />

        {/* Featured */}
        <div style={{ padding: "0 20px" }}>
          <p style={{ fontFamily: "var(--font-lora)", fontWeight: 600, fontSize: 16, color: "#1f2e45", marginBottom: 12 }}>Featured Products</p>
          <div style={{ display: "flex", gap: 8, overflowX: "auto", paddingBottom: 8, scrollbarWidth: "none" }}>
            {FEATURED.map(p => (
              <Link key={p.id} href={`/products/${p.id}`} style={{ flexShrink: 0, width: 155, border: "1px solid #d9dbd5", borderRadius: 8, overflow: "hidden", background: "white" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.image} alt={p.name} style={{ width: "100%", aspectRatio: "1/0.88", objectFit: "cover" }} />
                <div style={{ padding: "8px 8px 12px" }}>
                  <p style={{ fontFamily: "var(--font-lora)", fontWeight: 600, fontSize: 13, color: "#5a6470", lineHeight: 1.3 }}>{p.name}</p>
                  {p.repeatPrice < p.price && (
                    <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 5 }}>
                      <span style={{ fontFamily: "var(--font-inter)", fontWeight: 600, fontSize: 14, color: "#147a6e" }}>CHF {p.repeatPrice.toFixed(2)}</span>
                      <span style={{ background: "#fae5bf", borderRadius: 4, padding: "1px 5px", fontSize: 10, fontWeight: 600, color: "#147a6e" }}>-10%</span>
                    </div>
                  )}
                  <p style={{ fontFamily: "var(--font-inter)", fontSize: 11, color: "#59667a", marginTop: 3 }}>{p.subtitle}</p>
                </div>
              </Link>
            ))}
          </div>
          <Link href="/products" style={{ display: "block", textAlign: "center", padding: "12px 0", fontFamily: "var(--font-inter)", fontWeight: 600, fontSize: 14, color: "#1a7a70" }}>
            Explore all products →
          </Link>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
