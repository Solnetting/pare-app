"use client";
import { useRouter } from "next/navigation";
import { useCart } from "@/lib/cart";
import { getProduct } from "@/lib/products";

const BUNDLE_ITEMS = [
  { img: "/bundle-p1.png", name: "Laundry sheets",   sub: "60 loads · plastic-light",      price: "CHF 18.90", id: "laundry-sheets" },
  { img: "/bundle-p2.png", name: "Dish concentrate", sub: "Refill pouch · verified",        price: "CHF 11.90", id: "dish-soap-concentrate" },
  { img: "/bundle-p3.png", name: "Dish brush",       sub: "Beechwood · replaceable head",  price: "CHF 12.00", id: null },
];

export default function BundlePage() {
  const router = useRouter();
  const { add } = useCart();

  const handleShop = () => {
    BUNDLE_ITEMS.forEach(item => {
      if (item.id) {
        const p = getProduct(item.id);
        if (p) add(p, false);
      }
    });
    router.push("/bag");
  };

  return (
    <div style={{ position: "relative", height: "100%", background: "#fbfbf7", display: "flex", flexDirection: "column", overflow: "hidden" }}>
      {/* Scrollable content */}
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

        {/* Lifestyle hero */}
        <div style={{ margin: "16px 20px 0", borderRadius: 16, overflow: "hidden", height: 210 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/bundle-hero.png" alt="The Home Reset" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        </div>

        {/* Bundle card */}
        <div style={{ margin: "16px 20px 0", display: "flex", flexDirection: "column", gap: 12 }}>
          {/* Title + sub */}
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <p style={{ fontFamily: "var(--font-lora)", fontWeight: 600, fontSize: 16, color: "#1f2e45" }}>The Home Reset bundle</p>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: 14, color: "#5a6470" }}>Three essentials. One lower price.</p>
          </div>

          {/* Price row */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontFamily: "var(--font-inter)", fontWeight: 700, fontSize: 24, color: "#1a7a70" }}>CHF 34.80</span>
            <div style={{ background: "#fce8c9", borderRadius: 999, padding: "8px 12px" }}>
              <span style={{ fontFamily: "var(--font-inter)", fontWeight: 600, fontSize: 14, color: "#1a7a70" }}>Save CHF 8 · 18.7%</span>
            </div>
          </div>

          {/* Divider */}
          <div style={{ height: 1, background: "#d9dbd5" }} />

          {/* Items */}
          {BUNDLE_ITEMS.map(item => (
            <div key={item.name} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
              {/* Checkmark */}
              <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#1a7a70", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                <span style={{ color: "white", fontSize: 11, fontWeight: 700 }}>✓</span>
              </div>
              {/* Product image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.img} alt={item.name} style={{ width: 52, height: 52, objectFit: "contain", borderRadius: 6, background: "#f1f1ec", flexShrink: 0 }} />
              {/* Copy */}
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 3 }}>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: 16, color: "#1f2e45" }}>{item.name}</p>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: 12, color: "#5a6470" }}>{item.sub}</p>
              </div>
              {/* Price */}
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
          onClick={handleShop}
          style={{ width: "100%", height: 48, background: "#1a7a70", color: "white", borderRadius: 8, fontFamily: "var(--font-inter)", fontWeight: 600, fontSize: 14 }}
        >
          Shop the bundle
        </button>
        <button
          onClick={() => router.push("/")}
          style={{ width: "100%", height: 44, background: "white", color: "#1f2e45", borderRadius: 8, border: "1px solid #699b95", fontFamily: "var(--font-inter)", fontWeight: 600, fontSize: 14 }}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
